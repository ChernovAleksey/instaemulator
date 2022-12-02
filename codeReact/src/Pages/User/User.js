import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./User.scss";
import {
  isUserFollowingAC,
  isUserUnFollowingAC,
} from "../../store/actionCreators";
import UserPostCard from "../../Components/UserPostCard/UserPostCard";
import Modal from "../../Components/Modal/Modal";

const User = () => {
  const users = useSelector((store) => store.reducer.usersarray);
  const posts = useSelector((store) => store.reducer.postsarray);
  const isModal = useSelector((store) => store.reducer.isModalOpen);
  const chosenPost = useSelector(
    (store) => store.reducer.chosenToOperate,
    shallowEqual
  );
  const { uI } = useParams();
  const dispatch = useDispatch();
  const pageId = +uI;
  const pageurl = users[uI]?.url;
  const pagename = users[uI]?.name;
  const pagenickName = users[uI]?.nickName;
  const _id = users[uI]?._id;
  const pageisFollower = users[uI]?.isFollower;
  const [follow, setFollow] = useState(pageisFollower);
  const newArray = posts.filter(({ userIndex }) => userIndex === pageId);

  return (
    <div>
      <div className="user_page_title">
        <div className="user_page_image">
          <img src={pageurl} alt="" />
        </div>
        <div className="user_titles_info">
          <div className="user_page_nickname">{pagenickName}</div>
          <div>{pagename}</div>
        </div>
        <div>
          {!follow ? (
            <div
              className="user_page_subscribe"
              onClick={() => {
                dispatch(isUserFollowingAC({ _id }));
                setFollow(true);
              }}
            >
              subscribe
            </div>
          ) : (
            <div
              className="user_page_subscribe"
              onClick={() => {
                dispatch(isUserUnFollowingAC({ _id }));
                setFollow(false);
              }}
            >
              unsubscribe
            </div>
          )}
        </div>
      </div>
      <div className="user_page_main_container">
        {newArray.map(
          ({ id, likes, url, userIndex, hasBackground, _id, comments }) => (
            <UserPostCard
              key={id}
              id={id}
              comments={comments}
              hasBackground={hasBackground}
              likes={likes}
              url={url}
              userIndex={userIndex}
              _id={_id}
            />
          )
        )}
      </div>
      {isModal && <Modal id={chosenPost} />}
    </div>
  );
};
export default User;
