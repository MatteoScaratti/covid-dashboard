import React, {Component} from 'react';
import Header from "./component/Header";
import {GlobalStyles} from "./theme/theme";
import Stats from "./component/Stats";
import Chart from "./component/Chart";
import CovidService from "./service/covid.service";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countryName: null,
        };

        this.getMyCountryName();
    }

    getMyCountryName() {
        CovidService.getMyCountry()
            .then((res) => {
                const countryName = res.data.country_name;
                this.setState({countryName});
            });
    }

    render() {
        return (
            <div className="App">
                <GlobalStyles/>
                <Header/>
                <Stats title={'Global stats'}/>
                <Chart style={{paddingBottom: '80px'}}/>
                <Stats title={`Your country stats (${this.state.countryName})`} countryName={this.state.countryName}/>
            </div>
        );
    }
}

export default App;
