import { useState } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import PageNotFound from './PageNotFound';
import { fetchUserByUsername } from '../utils/utils';

const Profile = () => {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(true)
  const [_username, set_Username] = useState(null);
  const [posts, setPosts] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);

  const fetchUser = async () => {
    const user = await fetchUserByUsername(username);
    if (user === null) {
      setUserExists(false);
      console.log(user)
    }
    else {
      set_Username(user.username);
      setPosts(user.posts);
      setFollowers(user.followers.length);
      setFollowing(user.following.length);
    }
  }

  fetchUser();

  return (
    <>
      {userExists ? <UserProfile username={_username} blogs={posts} followers={followers} following={following} /> : <PageNotFound />}
    </>
  );
};

export default Profile;