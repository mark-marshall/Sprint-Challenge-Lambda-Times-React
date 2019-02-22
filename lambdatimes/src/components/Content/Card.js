import React from 'react';
import PT from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="doggos" />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = { 
  card: PT.object.isRequired,
}

// Make sure to include PropTypes.

export default Card;
