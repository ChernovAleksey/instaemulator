import { givingLikeAC, takingLikeAC } from "../../store/actionCreators";
import { useDispatch} from "react-redux";
import { useState } from "react";


const Heart = ({ likes, hasBackground, _id, url }) => {
    const dispatch = useDispatch() 
    const [def, setDef] = useState(likes);
    const [background, setBackground] = useState(hasBackground)
    return (
      <div>
        <div className="post_card_image_container">
          <img
            onDoubleClick={() => {
              if (!background) {
                dispatch(givingLikeAC({ _id, likes }));
                setBackground((prev) => !prev);
                setDef((def) => def + 1);
              }
            }}
            className="post_card_image"
            src={`${url}`}
            alt=""
          />
        </div>
        {background ? (
          <div
            className="post_card_heart_marked"
            onClick={() => {
              dispatch(takingLikeAC({ _id, likes }));
              setBackground((prev) => !prev);
              setDef((def) => def - 1);
            }}
          >
            &hearts;
          </div>
        ) : (
          <div
            className="post_card_heart"
            onClick={() => {
              dispatch(givingLikeAC({ _id, likes }));
              setBackground((prev) => !prev);
              setDef((def) => def + 1);
            }}
          >
            &#9825;
          </div>
        )}
        <p className="post_card_likes">{`${def}`} Likes </p>
      </div>
    );
}
export default Heart