import css from './statistics.module.css'
import {ListItem, Label, Percentage, Section, Title, StatList} from './statistics.css'
import PropTypes from 'prop-types';

export const StatisticalItem = ({label, percentage, countElements}) => {
    return (
        <ListItem countElements={ countElements } className={ css.listItem } >
            <Label className={css.label}>{ label }</Label>
            <Percentage className={css.percentage}>{ percentage }%</Percentage>
        </ListItem>
    )
}

StatisticalItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export const Statistics = ({title, stats }) => {
    const statItems = stats.map(({ id, label, percentage }) => 
        <StatisticalItem
            key={id}
            label={label}
            percentage={percentage}
            countElements={stats.length}
        />
    )

    return (
        <Section className={css.section}>
            {
                title !== undefined &&
                <Title className={css.title}>{title}</Title>
            }

            <StatList className={css.statList}>
                {statItems}
            </StatList>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
}