import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import arrowRightWhite from '../Assets/whiteArrowRight.png';
import arrowRightBlack from '../Assets/arrowRight.png';
import { SPACING } from "../Enums/Enums";
import './contentGrid.css';

class ContentGrid extends Component {
  // Sorry Jaden! This doesn't show up correctly on my screen either :/ it's like missing css or smth? I think there's something wrong w my bootstrap install? unsure
  // it's in the package.json so I'm confused but I just wrote one up quickly again bc sam + others want it this weekend!
  //
  // state = {
  //   numCols: 3,
  //   content: [
  //     {
  //       key: 0,
  //       title: "Title 1",
  //       link: "hearherejournal.com",
  //       img: "./Assets/test.jpg",
  //     },

  //     {
  //       key: 1,
  //       title: "Title 2",
  //       link: "hearherejournal.com",
  //       img: "./Assets/test.jpg",
  //     },

  //     {
  //       key: 2,
  //       title: "Title 3",
  //       link: "hearherejournal.com",
  //       img: "./Assets/test.jpg",
  //     },

  //     {
  //       key: 3,
  //       title: "Title 4",
  //       link: "hearherejournal.com",
  //       img: "./Assets/test.jpg",
  //     },

  //     {
  //       key: 4,
  //       title: "Title 5",
  //       link: "hearherejournal.com",
  //       img: "./Assets/test.jpg",
  //     },

  //     {
  //       key: 5,
  //       title: "Title 6",
  //       link: "hearherejournal.com",
  //       img: "./Assets/test.jpg",
  //     },
  //   ],
  // };

  // GridLayout = () => (
  //   <div
  //     id="mainContent"
  //     className="container"
  //     style={{
  //       display: "grid",
  //       gridTemplateColumns: "repeat(4, 1fr)",
  //       gridGap: "10px",
  //       gridAutoRows: "minMax(100px, auto)",
  //     }}
  //   >
  //     {this.state.content.map((item) => (
  //       <a href={item.link}>
  //         <img src={item.img}></img>
  //         <p>{item.title}</p>
  //       </a>
  //     ))}
  //   </div>
  // );

  // render() {
  //   return this.GridLayout();
  // }
  render() {
    return(
      <div  className="contentGrid" style={{padding: SPACING.PAGE_SPACE}}>
        {this.props.squareObject.map(square => (
          // This is horrible, please fix later

          <div className="gridContainer">
            {square.externalLink ? 
              <a href={square.externalLink} style={{textDecoration: "none", color: "black"}}>
              <img src={square.image} alt={"option"} className="thumbnail" style={{border: square.blackText ? "1px solid black" : null}}/>
              <p id="title" style={{color: square.blackText ? "black" : "white"}}>{square.title} 
              {/* only have the arrow thingy if there's title text */}
              {square.title == "" ? null : <img src={square.blackText ? arrowRightBlack : arrowRightWhite} style={{width: 10, paddingLeft: 5}}/>}
              </p>
              </a>
            :
              <Link to={square.link} style={{textDecoration: "none", color: "black"}}>
              <img src={square.image} alt={"option"} className="thumbnail" style={{border: square.blackText ? "1px solid black" : null}}/>
              <p id="title" style={{color: square.blackText ? "black" : "white"}}>{square.title} 
              {/* only have the arrow thingy if there's title text */}
              {square.title == "" ? null : <img src={square.blackText ? arrowRightBlack : arrowRightWhite} style={{width: 10, paddingLeft: 5}}/>}
              </p>
              </Link>
            }
          </div>
        ))}
      </div>
    )
  }
}

ContentGrid.propTypes = {
  squareObject: PropTypes.array.isRequired,
}

export default ContentGrid;
