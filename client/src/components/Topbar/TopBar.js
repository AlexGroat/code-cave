import "./topBar.css";
import CodeIcon from "@material-ui/icons/Code";
import { Search } from "@material-ui/icons";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function TopBar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="cc-header">
          <CodeIcon />
          Code Cave
        </span>
      </div>
      <div className="topbar-center">
        <div className="cc-slogan">
          <ArrowBackIosIcon />The cave for all your coding solutions!  
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="topbar-right">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for a user or post"
            className="searchInput"
          />
        </div>
      </div>
    </div>
  );
}
