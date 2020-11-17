import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import Card from "./Card";
import {formatDate} from "../utils/utils";
import CovidService from "../service/covid.service";

const StatSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;
`;

const StatHeading = styled.div`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StatTitle = styled.h2`
  color: inherit;
  margin-bottom: 0.2rem;
`;

const StatSubtitle = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Stats(props) {
    const[data, setData] = useState(null);
    useEffect(() => {
        if(!props.countryName){
            CovidService.getData().then(res => setData(res.data));
        } else {
            CovidService.getDataCountry(props.countryName).then(res => setData(res.data));
        }
    });

    let statistiche;

    if (data) {
        statistiche = <Row>
            <Card number={data.confirmed.value} info={'Confirmed'}/>
            <Card number={data.recovered.value} info={'Recovered'}/>
            <Card number={data.deaths.value} info={'Death'}/>
        </Row>
    } else {
        statistiche = <div/>
    }
    return (
        <StatSection className="center-text">
            <StatHeading>
                <StatTitle>{props.title}</StatTitle>
                <StatSubtitle>
                    {data ? formatDate(data.lastUpdate) : ''}
                </StatSubtitle>
            </StatHeading>
            {statistiche}
        </StatSection>
    )
}

export default Stats;
