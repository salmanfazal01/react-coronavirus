import React from 'react';

import Cards from "./components/Cards/Cards.component";
import Chart from "./components/Chart/Chart.component";
import CountryPicker from "./components/CountryPicker/CountryPicker.component";

import styles from './App.css'
import {fetchData} from "./api/index";

class App extends React.Component {

    state = {
        apiData: {}
    };

    async componentDidMount() {
        const data = await fetchData();
        this.setState({apiData: data});
    }

    render() {
    return (
        <div className="container">
            <Cards data={this.state.apiData}/>
            <CountryPicker />
            <Chart />
        </div>
    )
  }
}

export default App;
