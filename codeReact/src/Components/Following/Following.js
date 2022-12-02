import "./Following.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecomFollow from "../RecomFollow/RecomFollow";

const Following = () => {
  const users = useSelector((store) => store.reducer.usersarray);
  const array = users.filter((el) => el.isFollower === false);

  return (
    <div className="following_maincontainer">
      <div className="following-stories">
        <p>stories for you</p>
        {users.map(({ nickName, url, isFollower, userId }) =>
          isFollower ? (
            <Link
              className="following_post_card_user"
              to={`user/${userId}`}
              key={Math.random()}
            >
              <img
                className="following_post_card_User_Photo"
                src={`${url}`}
                alt=""
              />
              {`${nickName}`}
            </Link>
          ) : null
        )}
      </div>
      <div className="following-recomend">
        <p>recomended for you</p>
        {array.map(({ nickName, url, isFollower, userId, _id }) => (
          <RecomFollow
            key={Math.random()}
            nickName={nickName}
            url={url}
            isFollower={isFollower}
            userId={userId}
            _id={_id}
          />
        ))}
      </div>
    </div>
  );
};
export default Following;
