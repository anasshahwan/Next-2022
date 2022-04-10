import { Alert, Navbar } from "react-bootstrap";
import NavBar from "../components/Nav";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>About Page</h1>
        <hr />
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
        </Alert>
      </main>
    </div>
  );
};

export default About;
