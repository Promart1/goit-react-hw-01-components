import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css';

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
