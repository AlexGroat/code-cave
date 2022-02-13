import PostForm from "../../components/PostForm/PostForm";
import PostCard from "../../components/PostCard/PostCard";

import "./home.css";

export default function Home() {
  return (
 <>
 <div className="home-container">
        <div className="col1 col-3" style={{backgroundColor: "lightblue"}}>
      <PostForm />
      </div>
        <div className="col2 col-5" style={{backgroundColor: "red"}}>
      middle row for feed
      </div>
        <div className="col3 col-4"style={{backgroundColor: "green"}}>
      right row for news api
      </div>
      </div>
 </>

  );
}
