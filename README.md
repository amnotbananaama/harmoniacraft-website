# harmoniacraft-website

## Editing the Website

## Running the Server (Development Mode)

1. Install the [Node.js runtime](https://nodejs.org).
2. `npm i` to install dependencies.
3. Run `start.bat` (Windows) or `start.sh` (MacOS/Linux).

## Running the Server (Production Mode)

1. Install the [Node.js runtime](https://nodejs.org).
2. `npm i` to install dependencies.
3. Place the following HTTPS certificate files at `${process.env.CERT_PATH}`:
    - `privkey.pem`
    - `cert.pem`
    - `chain.pem`
4. Make sure port 443 is available, and usable by Node.js.
5. Run `start.bat` (Windows) or `start.sh` (MacOS/Linux).
