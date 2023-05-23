import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendLists.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendslist}>
      {friends &&
        friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
