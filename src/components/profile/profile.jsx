import css from './profile.module.css'

export const UserDescription = ({name, tag, location, avatar}) => {
    return (
        <div className={css.description}>
            <img
                src={avatar}
                alt='Аватар користувача'
                className={css.avatar}
            />
            <p className={css.name}>{ name }</p>
            <p className={css.tag}>@{ tag }</p>
            <p className={css.location}>{ location }</p>
        </div>
    )
}

UserDescription.defaultProps = {
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
}

export const Profile = ({name, tag, location, avatar, stats}) => {
    return (
        <div className={css.profile}>
            <UserDescription
                name={name}
                tag={tag}
                location={location}
                avatar={avatar}
                stats={stats}
            />
            <ul className={css.statList}>
                <li className={css.statElem}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{ stats.followers }</span>
                </li>
                <li className={css.statElem}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{ stats.views }</span>
                </li>
                <li className={css.statElem}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{ stats.likes }</span>
                </li>
            </ul>
        </div>
    )
}

Profile.defaultProps = {
    stats: {
        followers: 0,
        views: 0,
        likes: 0,
    }
}