import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import Pagination from '../components/Pagination';
import Loader from '../components/Loader'

const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentUsers = users?.slice(firstPostIndex, lastPostIndex);

  console.log(currentUsers);
  useEffect(() => {
    setLoading(true);
  axios
      .get(`https://randomuser.me/api/?results=${500}&seed=abc`)
      .then(function (response) {
        // handle success
        setUsers(response.data.results);
        console.log(response.data.results);
        setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
      });
  }, [])
  
  return (
    <div className="w-full flex justify-center">
      {
        loading ? (
          <Loader/>
        ) : (
          <div className="flex flex-wrap gap-10 justify-center w-full max-w-[1000px] px-5 py-10">
        {
          currentUsers?.map((user, idx)=>{
            return (
             <UserCard user={user}/>
            )
          })
        }  
        <Pagination totalPosts={users?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
        )
      }
    </div>
  );
}

export default UsersList;