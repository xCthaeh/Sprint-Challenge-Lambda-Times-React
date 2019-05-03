import React, { Component } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import { tabData, cardData } from "../../data";
import Carousel from "../Carousel/Carousel";
import styled from "styled-components";


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReturnMsg = styled.h2`
  font-family: Didot, serif;
  margin-bottom: 0;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    });
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <div className="content-container">
        <ContentContainer>
          <Tabs
            tabs={this.state.tabs}
            selectedTab={this.state.selected}
            selectTabHandler={this.changeSelected}
          />
          <ReturnMsg>Alas, {window.localStorage.getItem("user")} has returned!</ReturnMsg>
          <Carousel />
          <Cards cards={this.filterCards()} />
        </ContentContainer>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
