import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        //const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        const response = await axios.get(url);

        const modifiedResponse = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate,
        };
        return modifiedResponse;
    } catch (e) {
        return e;
    }
};

export const fetchDailyData = async () => {
    try {
        //destructuring the data object from the url response.data
        const {data} = await axios.get(`${url}/daily`);

        const modifiedResponse = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));


        return modifiedResponse;

    } catch (e) {
        return e;
    }
};

export const countries = async () => {
    try {
        const response = await axios.get(`$(url)/countries`);
    } catch (e) {
        return e;
    }
};