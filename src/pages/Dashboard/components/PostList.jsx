import { useContext } from "react";
import Post from "./Post";
import { Context } from "../../../store/AppContext";
const PostList = () => {
  const { initPostList } = useContext(Context);
  return (
    <>
      {initPostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;

// {initPostList.map((item) => {
//   console.log(item.id);
//   <Post key={item.id}></Post>;
// })}
