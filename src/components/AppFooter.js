import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/AppFooter.css";

const AppFooter = () => {
  return (
    <footer className="App-footer">
      <p>©2022 Headdawn Light. All rights reserved.</p>
      <a href="https://github.com/headdawnLight">
        <GitHubIcon />
        <span>GitHub</span>
      </a>
    </footer>
  );
};

export default AppFooter;
