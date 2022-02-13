import TopBar from "../../components/Topbar/TopBar";
import SideBar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/Rightbar/Rightbar";
import './home.css'

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="home-container">
        <div className="home-sidebar">
        <SideBar />
        </div>
        <div className="home-feed">
        <Feed />
        </div>
        <div className="home-rightbar">
        <RightBar />
        </div>
      </div>
    </>
  );
}
