import React from "react";
import Comments from "../Comments/Comments";
import "./PostCard.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Heart from "../Heart/Heart";
const PostCard = ({ likes, url, userIndex, hasBackground, _id, comments,id }) => {
  const users = useSelector((store) => store.reducer.usersarray);
const posts = useSelector((store) => store.reducer.postsarray);
  return (
    <div className="post_card">
      <Link className="post_card_user" to={`user/${userIndex}`}>
        <div className="post_card_User_Photo">
          <img src={`${users[userIndex]?.url}`} alt="" />
        </div>
        {`${users[userIndex]?.nickName}`}
      </Link>

      
      <Heart likes={likes} hasBackground={hasBackground} id={id} _id={_id} url={url} />
      
        <Comments comments={comments} users={users} posts={posts} _id={_id} show={false} />
      
    </div>
  );
};

export default PostCard;
