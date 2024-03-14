import { Li, Status, AvatarEl, Name, Ul } from './friendlist.css'
import PropTypes from 'prop-types'

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

FriendListItem.propTypes = {
    avata: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
    }))
}