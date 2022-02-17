import PostForm from "../../components/PostForm/PostForm";
import PostCard from "../../components/PostCard/PostCard";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";

import "./home.css";

export default function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  return (
    <>
      <div className="home-container">
        <div
          className="column-1 col-3"
          style={{ backgroundColor: "lightblue" }}
        >
          <PostForm />
        </div>
        <div className="column-2 col-5" style={{ backgroundColor: "red" }}>
          <div className="posts">
          <PostCard
            posts={posts}
            header="Check out the coding questions below!"
          />
          </div>
        </div>
        <div className="column-2 col-5" style={{ backgroundColor: "yellow" }}>
          right for new api
        </div>
      </div>
    </>
  );
}
