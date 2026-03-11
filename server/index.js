//////////////////////////
// Imports
//////////////////////////

const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

//////////////////////////
// Constants
//////////////////////////
const port = process.env.PORT || 8080;
// const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToFrontend);

// Add logRoutes Middleware
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
}



const getGifs = async(req,res,next) => {
    try{
    const gifs = await fetch(`https://api.giphy.com/v1/gifs/trending?limit=50&rating=g&api_key=${process.env.API_KEY}`)
   //const gifs = await fetch (process.env.URL)

    if (!gifs.ok){
        throw Error(`Fetch failed. ${gifs.status} ${gifs.statusText}`)
    }
    const data = await gifs.json();

    res.send(data)
 } 
 catch (error){
    console.log("Error caught! " + error.message)
    res.status(503).send({ data: null, error: error.message})
 }
}

app.use(logRoutes)
app.use(serveStatic);

app.get('/api/gifs', getGifs)

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 