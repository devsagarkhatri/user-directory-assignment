import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserDetails from "../components/UserDetails";

const UserProfile = (props) => {
  const location = useLocation();
  const { userId } = useParams();
  const user = location.state.user;
  const posts = location.state.posts;

  return (
    <div className="container">
      <UserDetails user={user} posts={posts} />
    </div>
  );
};

export default UserProfile;
