// import environment variables store in the .env file
require('dotenv').config();

const fetch = require('node-fetch');

const {grab} = require('./apiAuth');

const app = express();


// handle the middleware stuffs
app.use('/', express.static('public'));


// go to http://localhost:portnumber/wolverine
app.get('/character-lookup', (req, res, next) =>
{
    const {query} = req;
    grab('characters', query)
    .then((data) =>
    {
       console.log('data: ', data);
        res.json(data);
    })
    .catch((err) =>
    {
        console.log('Err: ', err);
    })


});

app.listen(process.env.PORT, (err) =>
{
    if (err)
    {
        console.log('Error starting server: ', err);
    }
    console.log(`Server is listening on port ${process.env.PORT}...`);
})