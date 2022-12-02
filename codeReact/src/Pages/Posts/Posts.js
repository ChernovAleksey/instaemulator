import PostCard from "../../Components/PostCard/PostCard";
import Following from "../../Components/Following/Following";
import { useSelector } from "react-redux";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Posts.scss";

function Posts() {
  const [numb, setNumb] = useState(2);
  const posts = useSelector((store) => store.reducer.postsarray);
  const demo = posts.slice(0, numb);
  const generator = () => {
    setNumb((prev) => prev + 2);
  };

  return (
    <div className="post_maincontainer">
      <InfiniteScroll dataLength={demo.length} next={generator} hasMore={true}>
        {demo.map(
          ({ id, likes, url, userIndex, hasBackground, _id, comments }) => (
            <PostCard
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
      </InfiniteScroll>

      <Following />
    </div>
  );
}
export default Posts;
