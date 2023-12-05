// pages/PeopleDirectory.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

const PeopleDirectory = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (isMounted) {
        try {
          const usersResponse = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          const postsResponse = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          setUsers(usersResponse.data);
          setPosts(postsResponse.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    if (users.length === 0 || posts.length === 0) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [users, posts]);

  const handleCardClick = (userId) => {
    console.log(`Card clicked for user ID: ${userId}`);
  };

  const handleCount = (id) => {
    let res = posts.filter((post, i, arr) => {
      return post.userId === id;
    });
    // console.log(res.length);
    return res.length;
  };

  const handleFilter = (id) => {
    let res = posts.filter((post, i, arr) => {
      return post.userId === id;
    });
    // console.log(res);
    return res;
  };

  return (
    <div className="people-directory container">
      <div className="heading display-2 text-center my-5">Directory</div>
      {users.map((user) => (
        <Link
          key={user.id}
          to={`/user/${user.id}`}
          state={{
            user: user,
            posts: handleFilter(user.id),
          }}
        >
          <UserCard
            user={user}
            onCardClick={handleCardClick}
            count={handleCount(user.id)}
          />
        </Link>
      ))}
    </div>
  );
};

export default PeopleDirectory;
