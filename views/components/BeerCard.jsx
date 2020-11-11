const React = require('react');

function BeerCard(props) {
  return (
    <div>
      <img src={props.beer.image_url} width="200" alt="" />
      <h3>{props.beer.name}</h3>
      <h5>{props.beer.tagline}</h5>
      <p>{props.beer.description}</p>
      <p>{props.beer.brewers_tips}</p>
      <p>{props.beer.food_pairing}</p>
    </div>
  );
}

module.exports = BeerCard;
