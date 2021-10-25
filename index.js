const axios = require('axios');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const https = require('https');
require('dotenv').config();

/* Initializes the Express server */
const app = express();

/* Helps protect against standard website attacks */
app.use(helmet());

/* Serves HTML files located in public/ */
app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

/* Generates a one time use Discord invite link, and redirects the request there. */
/* https://harmoniacraft.net/discord */
app.get('/discord', async (req, res, next) => {

  /* Discord API URL to send POST request for a new invite link. */
  const discordAPIURL = `${process.env.DISCORD_API_URL}`;

  const discordInviteOptions = {
    max_age: 60,
    max_uses: 1,
    unique: true
  }

  /* HarmoniaCraft Bot credentials */
  const authHeader = {
    headers: {
      "Authorization": `Bot ${process.env.DISCORD_TOKEN}`
    }
  }

  const inviteCode = await axios.post(discordAPIURL, discordInviteOptions, authHeader)
    .then(res => {
      return res.data.code;
    }).catch(e => {
      return next(e);
    });

  res.redirect(`https://discord.gg/${inviteCode}`);

});

/* Handles when a requested page is not found */
app.use((req, res, next) => {
  res.status(404).redirect("/404");
});

/* Fallback when an error occurs. */
app.use((error, req, res, next) => {
  res.status(500).send('Internal Server Error');
  console.error(error);
});

/* If we are running in a production environment, create an HTTPS server. */
if(process.env.NODE_ENV == 'production') {

  /* Load the HTTPS certificate */
  const privateKey = fs.readFileSync(`${process.env.CERT_PATH}/privkey.pem`, 'utf8');
  const certificate = fs.readFileSync(`${process.env.CERT_PATH}/cert.pem`, 'utf8');
  const ca = fs.readFileSync(`${process.env.CERT_PATH}/chain.pem`, 'utf8');

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  }

  /* Creates the HTTPS server */
  https.createServer(credentials, app).listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });

}

/* If we are running in a development environment, create an HTTP server. */
if(process.env.NODE_ENV == 'dev') {

  app.listen(8080, () => {
    console.log('HTTP Server running at http://localhost:8080');
  });

}
