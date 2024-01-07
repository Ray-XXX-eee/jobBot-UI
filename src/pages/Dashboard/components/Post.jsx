import Tags from "./Tags";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="postContainer custPostContainer">
      <div className="card">
        <div className="card-body">
          <h5 className="custJobTitle card-title">
            {post.title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.applications} applied
              <span class="visually-hidden">Apllications</span>
            </span>
          </h5>
          {post.tags.map((tag) => (
            <Tags key={tag} tag={tag}></Tags>
          ))}
          <p className="card-text ">{post.body}</p>
          <Link to="#" className="custBtnApply btn btn-primary ">
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
