const React = require('react');

function BeerCard(props) {
  return (
    <div className="beerContainer">
      <img src={props.beer.image_url} width="100" height="auto" alt="" />
      <h3>{props.beer.name}</h3>
      <h5>{props.beer.tagline}</h5>
      <p width="300px">{props.beer.description}</p>
      <br />
      <h5>Brewer's Tips</h5>
      <p>{props.beer.brewers_tips}</p>
      <h5>Food Pairings</h5>
      <ul>
        <li>{props.beer.food_pairing[0]}</li>
        <li>{props.beer.food_pairing[1]}</li>
        <li>{props.beer.food_pairing[2]}</li>
      </ul>
    </div>
  );
}

module.exports = BeerCard;
