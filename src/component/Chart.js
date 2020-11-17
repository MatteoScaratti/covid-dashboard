import React, {useEffect, useState} from "react";
import LineChart from 'react-linechart';
import CovidService from "../service/covid.service";

function createDataChart(data) {
    let dataXY = [];

    if (data) {
        data.forEach((e) => {
            dataXY.push({x: new Date(e.reportDate).getDate(), y: e.totalConfirmed / 1000})
        });
    }

    dataXY = dataXY.length > 7 ? dataXY.slice(dataXY.length - 7, dataXY.length) : dataXY;

    return dataXY;
}

function Chart(props) {
    const[data, setData] = useState(null);

    useEffect(() => {
        CovidService.getDataChart().then(res => setData(res.data));
    });

    const dataChart = [
        {
            color: '#ff70ee',
            points: createDataChart(data),
        }
    ];

    return (
        <div className="Chart">
            <LineChart
                width={800}
                height={400}
                yLabel={'Confirmed *1000'}
                xLabel={'Last week'}
                hidePoints={true}
                data={dataChart}
            />
        </div>
    )
}

export default Chart;
