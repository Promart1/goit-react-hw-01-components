import { Profile } from './Profile';
import user from '../Profile/user.json';

export function ProfileList() {
  return (
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  );
}
