import { useState } from "react";
import { Link } from "react-router-dom";
import { isUserFollowingAC, isUserUnFollowingAC } from "../../store/actionCreators";
import { useDispatch,} from "react-redux";

const RecomFollow = ({nickName, url, isFollower, userId, _id}) => {
    const dispatch = useDispatch();
    const [isDescr, setIsDecsr] = useState(false)
  return (
    <div>
      
        <div className="following_subscribe_line">
          <Link className="following_post_card_user" to={`user/${userId}`}>
            <img
              className="following_post_card_User_Photo"
              src={`${url}`}
              alt=""
            />
            {`${nickName}`}
          </Link>
          {!isDescr ? (
            <div
              onClick={() => {
                dispatch(isUserFollowingAC({ _id }));
                setIsDecsr(true);
              }}
            >
              subscribe
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch(isUserUnFollowingAC({ _id }));
                setIsDecsr(false);
              }}
            >
              unsubscribe
            </div>
          )}
        </div>
      
    </div>
  );
};
export default RecomFollow;
