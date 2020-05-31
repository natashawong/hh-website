import React, { Component } from "react";
import { render } from "react-dom";
import { Grid, Row, Col } from "react-bootstrap";

class ContentGrid extends Component {
  state = {
    numCols: 3,
    content: [
      {
        key: 0,
        title: "Title 1",
        link: "hearherejournal.com",
        img: "./Assets/test.jpg",
      },

      {
        key: 1,
        title: "Title 2",
        link: "hearherejournal.com",
        img: "./Assets/test.jpg",
      },

      {
        key: 2,
        title: "Title 3",
        link: "hearherejournal.com",
        img: "./Assets/test.jpg",
      },

      {
        key: 3,
        title: "Title 4",
        link: "hearherejournal.com",
        img: "./Assets/test.jpg",
      },

      {
        key: 4,
        title: "Title 5",
        link: "hearherejournal.com",
        img: "./Assets/test.jpg",
      },

      {
        key: 5,
        title: "Title 6",
        link: "hearherejournal.com",
        img: "./Assets/test.jpg",
      },
    ],
  };

  GridLayout = () => (
    <div
      id="mainContent"
      className="container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px",
        gridAutoRows: "minMax(100px, auto)",
      }}
    >
      {this.state.content.map((item) => (
        <a href={item.link}>
          <img src={item.img}></img>
          <p>{item.title}</p>
        </a>
      ))}
    </div>
  );

  render() {
    return this.GridLayout();
  }
}

export default ContentGrid;
