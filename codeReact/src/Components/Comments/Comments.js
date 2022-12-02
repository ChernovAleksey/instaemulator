import React, { useState, useRef } from "react";
import "./Comments.scss";
import { useDispatch } from "react-redux";
import { addingCommentAC } from "../../store/actionCreators";

const Comments = ({ comments, _id, id, users, show }) => {
  const [showComments, setShowComments] = useState(show);
  // const [newComment, setNewComment] = useState('');

  const [commentsArray, setCommentsArray] = useState(comments);
  const dispatch = useDispatch();
  const ref = useRef();
  let presserve = "";
  const addCommentToArray = (newComment) => {
    setCommentsArray((current) => {
      const array = [...current];

       array.push({
              isVisible: false,
              text: newComment,
              userIndex: 0});
dispatch(addingCommentAC({ _id, array }));
      return array;
    });
  };

  
  return (
    <>
      {commentsArray.length === 0 ? (
        <p className="post_card_no_comment_mark">no comment at the moment</p>
      ) : !showComments ? (
        <div className="post_card_comments_container">
          <p className="post_card_comment">
            {`${
              users[commentsArray[commentsArray.length - 1]?.userIndex]
                ?.nickName
            }`}
            : {`${commentsArray[commentsArray.length - 1]?.text}`}
          </p>
          <div
            className="showMoreComments"
            onClick={() => {
              setShowComments(true);
            }}
          >
            {commentsArray.length > 1 && <p>show more...</p>}
          </div>
        </div>
      ) : (
        <div className="post_card_comments_container">
          {commentsArray.map(({ userIndex, text }) => (
            <p key={Math.random()} className="post_card_comment">
              {`${users[userIndex]?.nickName}`}: {`${text}`}
            </p>
          ))}
          <div
            className="showMoreComments"
            onClick={() => {
              setShowComments(false);
            }}
          >
            {commentsArray.length > 1 && <p>show less...</p>}
          </div>
        </div>
      )}
      <form className="form" type="submit">
        <input
          className="input"
          type="text"
          ref={ref}
          placeholder=" &#9787; add a new comment..."
          onChange={(e) => (presserve = e.target.value)}
        />
        <button
          className="button"
          onClick={(event) => {
            event.preventDefault(); addCommentToArray(presserve);
            presserve = "";
            ref.current.value = "";
          }}
        >
          add
        </button>
      </form>
      
    </>
  );
};

export default Comments;
