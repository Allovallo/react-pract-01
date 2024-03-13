import css from './friendlist.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const alt = `Аватар ${name}`;
    
    return (
        <li className={css.li}>
            <span className={css.status} isOnline={isOnline}></span>
            <img className={css.avatarEl} src={avatar} alt={alt} width='48'></img>
            <p className={css.name}>{ name }</p>
        </li>
    )
}

export const FriendList = ({ friends}) => {
    const listItems = friends.map(({id, avatar, name, isOnline}) => 
        <FriendListItem
            key={id.toString()}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />
    )
    return (
        <li className={css.li}>
            {listItems}
        </li>
    )    
}