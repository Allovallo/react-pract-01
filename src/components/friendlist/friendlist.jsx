// import css from './friendlist.module.css'
import {Li, Status, AvatarEl, Name, Ul} from './friendlist.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const alt = `Аватар ${name}`;
    
    return (
        <Li>
            <Status isOnline={isOnline} />
            <AvatarEl src={avatar} alt={alt} width='48' />
            <Name>{ name }</Name>
        </Li>
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
        <Ul>
            {listItems}
        </Ul>
    )    
}