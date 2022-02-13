import PostForm from "../../components/PostForm/PostForm";
import PostCard from "../../components/PostCard/PostCard";

import "./home.css";

export default function Home() {
  return (
 <>
 <div className="home-container">
        <div className="column-1 col-3" style={{backgroundColor: "lightblue"}}>
      <PostForm />
      </div>
        <div className="column-2 col-5" style={{backgroundColor: "red"}}>
      middle row for feed
      </div>
        <div className="column-3 col-4"style={{backgroundColor: "green"}}>
      right row for news api
      </div>
      </div>
 </>

  );
}
