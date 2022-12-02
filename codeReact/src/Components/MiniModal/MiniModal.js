import "./MiniModal.scss";
import { useDispatch } from "react-redux";
import { chosenToOperateAC, isModalOpenAC } from "../../store/actionCreators";
const MiniModal = ({ likes, comments, id }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="mini_modal"
      onClick={() => {
        dispatch(isModalOpenAC(true));
        dispatch(chosenToOperateAC(id));
      }}
    >
      <p>
        &hearts;{`${likes}`} &#128388;{`${comments.length}`}
      </p>
    </div>
  );
};
export default MiniModal;
