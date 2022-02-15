import PostForm from "../../components/PostForm/PostForm";

import "./home.css";

export default function Home() {
    return (
        <>
        <div className="home-container">
        <div className="column-1 col-3" style={{backgroundColor: "lightblue"}}>
      <PostForm />
      </div>
        </div>
        </>
    )
}