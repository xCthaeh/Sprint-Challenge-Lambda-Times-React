import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = props => {
  return (
    <StyledCardContainer>
      {props.cards.map((card, i) => (
        <Card key={`card-${i}`} card={card} />
      ))}
    </StyledCardContainer>
  );
};

Cards.propTypes = {
  cards: PropTypes.array
};

export default Cards;
