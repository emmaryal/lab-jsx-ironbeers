const express = require('express');
const erv = require('express-react-views');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// VIEW ENGINE SETUP
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/Beers', (req, res) => {
  punkAPI.getBeers().then(beersFromApi => {
    // Prepare the object to be passed/injected to `Beers` view
    const data = { beersFromApi: beersFromApi };

    // Render the `Beers` view and pass/inject to it the object containing the `beersFromApi`
    res.render('Beers', data);
  });
});

app.get('/RandomBeer', (req, res) => {
  punkAPI.getRandom().then(oneBeer => {
    // Prepare the object to be passed/injected to `Beers` view
    const data = { oneBeer: oneBeer };
    console.log(data);

    // Render the `Beers` view and pass/inject to it the object containing the `beersFromApi`
    res.render('RandomBeer', data);
  });
});
/*.catch(error => console.log(error));*/

app.listen(3000, () => {
  console.log('🏃‍ on port 3000');
});
