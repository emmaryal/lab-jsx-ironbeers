const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard.jsx');

function Beers(props) {
  return (
    <Layout>
      {
        <div>
          {props.beersFromApi.map((beerObj, i) => {
            return (
              <BeerCard beer = {beerObj} />
            );
          })}
        </div>
      }
    </Layout>
  );
}

module.exports = Beers;
