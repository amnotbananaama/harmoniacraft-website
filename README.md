# Harmoniacraft Website
Welcome to the repository for the HarmoniaCraft server website!

The website may be found at: <https://harmoniacraft.net>.

⚠️ **Warning:** ⚠️ This repository is currently under construction, much like HarmoniaCraft itself! Expect drastic changes in short order.

## Editing the Website
All website files can be found in the [`public/`](https://github.com/amnotbananaama/harmoniacraft-website/tree/main/public) directory.  
Currently, the sole StyleSheet may be found at [`public/style/style.css`](https://github.com/amnotbananaama/harmoniacraft-website/blob/main/public/style/style.css).

## Running the Server (Development Mode)

1. Install the [Node.js runtime](https://nodejs.org).
2. `npm i` to install dependencies.
3. Run `start.bat` (Windows) or `start.sh` (MacOS/Linux).
4. Navigate to `localhost:8080` in a web browser.

## Running the Server (Production Mode)

1. Install the [Node.js runtime](https://nodejs.org).
2. `npm i` to install dependencies.
3. Place the following HTTPS certificate files at `${process.env.CERT_PATH}`:
    - `privkey.pem`
    - `cert.pem`
    - `chain.pem`
4. Make sure TCP port 443 is open and usable by the Node.js process.
5. Run `start.bat production` (Windows) or `start.sh production` (MacOS/Linux).
6. (Hopefully) navigate to the website via `https://harmoniacraft.cf`!
