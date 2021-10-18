import { Form, FormGroup, Row, Col, Button, Label, Input } from "reactstrap";
import "../assets/css/Homepage.css";
import { useDispatch } from "react-redux";
import apiKEY from "../apis/apiKey";
import { AddCityToMyList } from "../redux/actions/WeatherActions";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const AddCity = () => {
    dispatch(AddCityToMyList(search, apiKEY));
    setSearch("");
  };

  return (
    <Form id="searchForm" onSubmit={AddCity}>
      <FormGroup>
        <Row>
          <Label id="searchLabel">Add New City</Label>
        </Row>
        <Row>
          <Col md="11">
            <Input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="search"
              name="search"
              id="searchInput"
              required
            />
          </Col>
          <Col md="1">
            <Button onClick={AddCity} className="addCity">
              + Add
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}
export default SearchBar;
