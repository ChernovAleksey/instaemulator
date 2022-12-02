import "./Modal.scss";
import { useSelector, useDispatch } from "react-redux";
import { isModalOpenAC } from "../../store/actionCreators";
import Heart from "../Heart/Heart";
import Comments from "../Comments/Comments";

const Modal = ({ id }) => {
const posts = useSelector((store) => store.reducer.postsarray);
const users = useSelector((store) => store.reducer.usersarray);
const _id = posts[id]?._id;
const url = posts[id]?.url;
const comments = posts[id]?.comments;
const likes = posts[id]?.likes;
const hasBackground = posts[id]?.hasBackground;
const dispatch = useDispatch();
  return (
    <div
      className="main_modal"
      onClick={(e) => {
        if (e.target.className.includes("main")) {
          dispatch(isModalOpenAC(false));
        }
      }}
    >
      <div className="modal_view_window">
        <div className="modal_view_window_heart">
          <Heart
            likes={likes}
            hasBackground={hasBackground}
            _id={_id}
            url={url}
          />
        </div>
        <div className="modal_view_window_comments">
          <Comments comments={comments} _id={_id} users={users} show={true} />
        </div>
      </div>
    </div>
  );
};
export default Modal;
