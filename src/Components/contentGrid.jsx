import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import arrowRightWhite from '../Assets/whiteArrowRight.png';
import arrowRightBlack from '../Assets/arrowRight.png';
import { SPACING } from "../Enums/Enums";
import './contentGrid.css';

class ContentGrid extends Component {
  render() {
    return(
      <div  className="contentGrid" style={{padding: SPACING.PAGE_SPACE}}>
        {this.props.squareObject.map(square => (
          <div className="gridContainer">
            {square.externalLink ? 
              <a href={square.externalLink} style={{textDecoration: "none", color: "black"}}>
              <img src={square.image} alt={"option"} className="thumbnail" style={{border: square.blackText ? "1px solid black" : null}}/>
              <p id="title" style={{color: square.blackText ? "black" : "white"}}>{square.title} 
              {square.title == "" ? null : <img src={square.blackText ? arrowRightBlack : arrowRightWhite} style={{width: 10, paddingLeft: 5}}/>}
              </p>
              </a>
            :
              <Link to={square.link} style={{textDecoration: "none", color: "black"}}>
              <img src={square.image} alt={"option"} className="thumbnail" style={{border: square.blackText ? "1px solid black" : null}}/>
              <p id="title" style={{color: square.blackText ? "black" : "white"}}>{square.title} 
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
