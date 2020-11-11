const React = require('react');

function BeerCard(props) {
  return (
    <div>
      <img src={beerObj.image_url} width="200" alt="" />
      <h3>{beerObj.name}</h3>
      <h5>{beerObj.tagline}</h5>
      <p>{beerObj.description}</p>
      <p>{beerObj.brewers_tips}</p>
      <p>{beerObj.food_pairing}</p>
    </div>
  );
}

module.exports = BeerCard;
