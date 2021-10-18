import { Row } from "reactstrap";
import Footer from "../components/Footer";
import "../assets/css/Homepage.css";

function About() {
  return (
    <div>
      <Row className="rowForInfo">
        <h1 className="info">DEF24 WEATHER APP WITH REACT AND REDUX TECH</h1>
        <h3 className="info">Version 1.0</h3>
      </Row>
      <Row className="footerRowAbout">
        <Footer />
      </Row>
    </div>
  );
}
export default About;
