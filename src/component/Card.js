import React from "react";
import styled from 'styled-components';
import {formatNumber} from "../utils/utils";
import {shareColor} from "../theme/theme";

const CardWrapper = styled.div`
  margin: 10px 0;
  height: 150px;
  width: 250px;
  border-radius: 10px;
  padding: 20px; 
  background-color: #535a67;
  h2 {
    margin-bottom: 8px;
    font-size: 2em;
    color: ${props => {
    switch (props.info) {
        case 'Confirmed':
            return shareColor.warning;
        case 'Recovered':
            return shareColor.success;
        case 'Death':
            return shareColor.danger;
        default:
            return '';
    }
    }};
  }
`;

const Card = (props) => (
    <CardWrapper info={props.info}>
        <h2>{formatNumber(props.number)}</h2>
        <h4>{formatNumber(props.info)}</h4>
    </CardWrapper>
);

export default Card;
