import React, {useState} from "react";
import "./UserPostCard.scss";
import MiniModal from "../MiniModal/MiniModal"; 
 
const UserPostCard = ({
    likes,
    url,
    comments,
    id,
}) => {
    const [mouse, setMouse] = useState(false)
    return (
        <div
            onMouseEnter={() => setMouse(true)}
            onMouseLeave={() => setMouse(false)}
            className="user_card_container">
        <div className="user_card_img">
          <img src={url} alt="" />
            </div>
            {mouse && <MiniModal likes={likes} comments={comments} id = {id} />}
      </div>
    );
};

export default UserPostCard;
