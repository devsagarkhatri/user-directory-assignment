import React from "react";
import Clock from "./Clock";
import Post from "./Post";
import { Link } from "react-router-dom";

const UserDetails = ({ user, posts }) => {
  // Implement clock logic here

  return (
    <div className="user-details">
      <div className="row my-4 justify-content-between align-self-center">
        <div className="col align-self-center">
          <Link to="/" className="btn bg-info col align-self-center">
            Back
          </Link>
        </div>
        <div className="display-6 col">Directory Details</div>
        {/* Clock Section */}
        <div className="col-6 align-self-center">
          <Clock />
        </div>
      </div>
      {console.log(user)}
      {/* User Information Section */}
      <div className="user-info-section row justify-content-between my-3 rounded border border-primary">
        <div className="upper-section col-5 ">
          <div className="user-name col h3">{user?.name}</div>
          <div className="row  align-items-start">
            <div className="col">@{user?.username}</div>|
            <div className="catch col">{user?.company?.catchPhrase}</div>
          </div>
        </div>
        <div className="lower-section col-4">
          <div className="address  h3 text-end">{`${user?.address?.street}, ${user.address?.city}`}</div>
          <div className="row  justify-content-start text-end">
            <div className="email col">{user?.email}</div> |
            <div className="phone col">{user?.phone}</div>
          </div>
        </div>
      </div>

      <div className=" row row-cols-3 gx-2 mb-5">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
