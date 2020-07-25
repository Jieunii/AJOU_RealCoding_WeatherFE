import React from "react";
import { Switch, Route, withRouter } from "react-router";
import CityList from "./CityList";
import Weather from "./Weather/index";
import { render } from "@testing-library/react";

const API_CITIES = "http://localhost:8888/weather-service/available-cities";

class Cities extends React.Component {
  state = {
    cities: [],
  };
  componentDidMount() {
    const citiesData = fetch(API_CITIES)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cities: data,
        });
      });
  }
  render() {
    const { match } = this.props;
    const { cities } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <CityList cities={cities} />}
          />
          <Route path={`${match.path}/:cityName`} component={Weather} />
        </Switch>
      </div>
    );
  }
}
render() 
export default withRouter(Cities);