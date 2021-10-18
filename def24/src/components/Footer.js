import { useHistory } from "react-router";
import { Row, Col, Label } from "reactstrap";
import "../assets/css/Homepage.css";

function Footer() {
  const history = useHistory();
  const goAbout = () => {
    history.push("/about");
  };
  const GoHome = () => {
    history.push("/homepage");
  };
  return (
    <Row className="footerRow">
      <Col className="footerCol" md="6">
        <Label className="footerFloat" onClick={GoHome}>
          Home
        </Label>
      </Col>
      <Col md="6" className="footerColRight">
        <Label className="aboutLink" onClick={goAbout}>
          About
        </Label>
      </Col>
    </Row>
  );
}
export default Footer;
