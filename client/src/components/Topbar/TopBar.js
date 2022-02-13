import "./topBar.css";

export default function TopBar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
          <span className="cc-header">Code Cave</span>
      </div>
      <div className="topbar-center">
          <div className="cc-slogan">
              The cave for all your coding solutions!
          </div>
      </div>
      <div className="topbar-right">
          <div className="cc-end">
              hello
          </div>
      </div>
    </div>
  );
}
