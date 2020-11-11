const React = require('react');
const Layout = require('./Layout');

function RandomBeer(props) {
  return (
    <Layout>
      {
        <div>
          {props.beersFromApi.map(beerObj => {
            return (
              <div>
                <img src={beerObj.image_url} width="200" alt="" />
                <h3>{beerObj.name}</h3>
                <h5>{beerObj.tagline}</h5>
                <p>{beerObj.description}</p>
                <p>{beerObj.brewers_tips}</p>
                <p>{beerObj.food_pairings}</p>
              </div>
            );
          })}
        </div>
      }
    </Layout>
  );
}

module.exports = RandomBeer;
