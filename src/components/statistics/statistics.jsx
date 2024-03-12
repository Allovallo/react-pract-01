import css from './statistics.module.css'
// import PropTypes from 'prop-types';

export const StatisticalItem = ({label, percentage, countElements}) => {
    return (
        <li countElements={ countElements } className={ css.listItem } >
            <span className={css.label}>{ label }</span>
            <span className={css.percentage}>{ percentage }</span>
        </li>
    )
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
        <section className={css.section}>
            {
                // title !== undefined &&
                <h2 className={css.title}>{title}</h2>
            }

            <ul className={css.statList}>
                {statItems}
            </ul>
        </section>
    )
}