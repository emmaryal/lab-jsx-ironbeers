const React = require('react');
const Layout = require('./Layout');

function Beers(props) {
  return (
    <Layout>
      {
        <div>
          {props.beersFromApi.map((beerObj, i) => {
            return (
              <div>
                <img key={i} src={beerObj.image_url} width="200" alt="" />
                <h3>{beerObj.name}</h3>
                <h5>{beerObj.tagline}</h5>
                <p>{beerObj.description}</p>
              </div>
            );
          })}
        </div>
      }
    </Layout>
  );
}

module.exports = Beers;
