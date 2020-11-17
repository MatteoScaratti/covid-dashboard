import axios from "axios";


const CovidService = {
    getData: function() {
        return axios.get(`https://covid19.mathdro.id/api`);
    },

    getDataChart: function() {
        return axios.get(`https://covid19.mathdro.id/api/daily`)
    },

    getMyCountry: function () {
        return axios.get(`https://ipapi.co/json/`)
    },

    getDataCountry: function(countryName) {
        return axios.get(`https://covid19.mathdro.id/api/countries/${countryName}`)
    }
};

export default  CovidService;
