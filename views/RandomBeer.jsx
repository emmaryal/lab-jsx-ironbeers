const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard.jsx');

function RandomBeer(props) {
  return <Layout>{<BeerCard beer={props.oneBeer[0]} />}</Layout>;
}

module.exports = RandomBeer;
