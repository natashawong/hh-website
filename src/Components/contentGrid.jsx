import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import arrowRightWhite from '../Assets/whiteArrowRight.png';
import arrowRightBlack from '../Assets/arrowRight.png';
import { SPACING } from "../Enums/Enums";
import './contentGrid.css';

export class ContentGrid extends Component {
  render() {
    return(
      <div  className="contentGrid" style={{padding: SPACING.PAGE_SPACE, paddingTop: 0}}>
        {this.props.squareObject.map(square => (
          <div className="gridContainer">
            {square.externalLink ? 
              <a href={square.externalLink} style={{textDecoration: "none", color: "black"}}>
              <img src={square.image} alt={"option"} className="thumbnail" style={{border: square.blackBorder ? "1px solid black" : null}}/>
              <p id="title">{square.title} 
              {square.title == "" ? null : <img src={arrowRightBlack} style={{width: 10, paddingLeft: 5}}/>}
              </p>
              </a>
            :
              <Link to={square.link} style={{textDecoration: "none", color: "black"}}>
              <img src={square.image} alt={"option"} className="thumbnail" style={{border: square.blackBorder ? "1px solid black" : null}}/>
              <p id="title">{square.title} 
              {square.title == "" ? null : <img src={arrowRightBlack} style={{width: 10, paddingLeft: 5}}/>}
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

export class MemberGrid extends Component {
  render() {
    return(
      <div  className="contentGrid" style={{padding: SPACING.PAGE_SPACE, paddingTop: 0}}>
        {this.props.squareObject.map((square, i) => (
          <div key={i} className="imageContainer"> {/* NOTE: funky square.image[0].url because of airtable api response*/}
              <img src={square.image[0].url} alt={"option"} className="thumbnail" style={{border: square.blackBorder ? "1px solid black" : null}}/>
              <p id="text">{square.bio}</p>
          </div>
        ))}
      </div>
    )
  }
}

MemberGrid.propTypes = {
  squareObject: PropTypes.array.isRequired,
}

