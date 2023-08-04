import React, { useState } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  // const postsPerPage = 6;
  // const [currentPage, setCurrentPage] = useState(1);

  // // Sample data for posts
  // const posts = [
  //   {
  //     img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  //   {
  //     img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   },
  // ];

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <>
      <div className="blogs">
        <h1>Blogs</h1>

        <div className="posts">
          {/* {currentPosts.map((post, index) => (
            <Post key={index} img={post.img} />
          ))} */}
          {posts.map((p) => (
            <Post post={p} key={p._id} />
          ))}
        </div>

        {/* <div className="pagination">
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => handlePageChange(number)}>
              {number}
            </button>
          ))}
        </div> */}
      </div>
    </>
  );
}
