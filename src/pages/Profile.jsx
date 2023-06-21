import { useState } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import { fetchUserByUsername } from '../utils/utils';

const Profile = () => {
  const { username } = useParams();
  const [_username, set_Username] = useState(null);
  const [posts, setPosts] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);

  const fetchUser = async () => {
    const user = await fetchUserByUsername(username);
    if (user) {
      set_Username(user.username);
      setPosts(user.posts);
      setFollowers(user.followers.length);
      setFollowing(user.following.length);
    }
  }

  fetchUser();

  return (
    <UserProfile username={_username} blogs={posts} followers={followers} following={following} />
  );
};

export default Profile;