import css from './profile.module.css'

export const UserDescription = ({name, tag, location, avatar}) => {
    return (
        <div className={css.description}>
            <img
                src={avatar}
                alt='Аватар користувача'
                className={css.avatar}
            />
            <p className={css.name}></p>
            <p className={css.tag}></p>
            <p className={css.location}></p>
        </div>
    )
}

export const Profile = () => {
    return (
        <div>
            <UserDescription></UserDescription>
            <ul>
                <li>
                    <span></span>
                    <span></span>
                </li>
                                <li>
                    <span></span>
                    <span></span>
                </li>
                <li>
                    <span></span>
                    <span></span>
                </li>
            </ul>
        </div>
    )
}