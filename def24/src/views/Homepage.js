import { Row, Col, Card, CardBody, Button, Input } from "reactstrap";
import "../assets/css/Homepage.css";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Trash from "../assets/img/trash.png";
import { useSelector, useDispatch } from "react-redux";
import {
  DeleteCitiesById,
  FetchCityData,
} from "../redux/actions/WeatherActions";
import apiKEY from "../apis/apiKey";
import { useState, useEffect } from "react";

function Homepage() {
  const dispatch = useDispatch();
  const myCities = useSelector((state) => state.allWeathers.myCities);

  const [filtered, setFiltered] = useState(myCities);
  const [input, setInput] = useState("");
  const [isButtonDisabled, setDisabled] = useState(false);

  const HandleRefresh = () => {
    setDisabled(true);

    setTimeout(() => setDisabled(false), 60000);
    dispatch(FetchCityData(myCities));
  };

  useEffect(() => {
    setFiltered(myCities);
  }, [myCities]);

  useEffect(() => {
    if (input.length > 0) {
      setFiltered(
        myCities.filter((item) =>
          String(item.name).toLowerCase().includes(String(input).toLowerCase())
        )
      );
    } else {
      setFiltered(myCities);
    }
  }, [input, myCities]);

  const HandleDelete = (cityId) => {
    dispatch(DeleteCitiesById(cityId, apiKEY));
  };

  return (
    <div>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <Row className="rowForSearchbarForm">
            <SearchBar />
          </Row>

          <Row className="rowForRefreshButton">
            <Col md="2">
              <Button
                disabled={isButtonDisabled}
                onClick={HandleRefresh}
                className="refreshButton"
              >
                Refresh
              </Button>
            </Col>
            <Col md="6"></Col>
            <Col md="4">
              <Input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="searchByName"
                placeholder="fulltext search by name"
              />
            </Col>
          </Row>

          <Row className="rowForCities">
            {filtered.length > 0 ? (
              filtered.map((item) => {
                return (
                  <Card key={item.id} className="cityCard">
                    <CardBody>
                      <Row className="rowForTitleandImage">
                        <Col md="8" className="cardCity">
                          <p>
                            {item.name}, {item.sys.country}
                          </p>
                        </Col>
                        <Col md="4">
                          <img
                            src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                            alt="icon"
                          />
                        </Col>
                      </Row>
                      <Row className="rowForDegree">
                        <p style={{ fontSize: "25px" }}>
                          {item.weather[0].main}
                        </p>
                        <h1 className="degree">
                          {parseInt(item.main.temp) - 273} °C
                        </h1>
                      </Row>
                      <Row className="rowForDelete">
                        <Col md="10"></Col>
                        <Col md="2">
                          <img
                            onClick={() => HandleDelete(item.id)}
                            className="trash"
                            src={Trash}
                            alt="trash"
                          />{" "}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                );
              })
            ) : (
              <h3>City Not Found!</h3>
            )}
          </Row>
          <Footer />
        </Col>
        <Col md="2"></Col>
      </Row>
    </div>
  );
}
export default Homepage;
