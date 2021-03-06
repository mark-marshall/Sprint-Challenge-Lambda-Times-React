import React from 'react';
import PT from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => (
        <Card key={Math.random() * 10} card={card} />
      ))}
    </div>
  );
};

Cards.propTypes = { 
  filterCards: PT.array,
}

// Make sure you include prop types for all of your incoming props

export default Cards;
