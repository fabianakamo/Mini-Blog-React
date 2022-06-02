// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        About Mini <span>Blog</span>
      </h2>
      <p>A blog with React and Firebase :D</p>
      <Link to="/posts/create" className="btn">
        Create Post
      </Link>
    </div>
  );
};

export default About;
