## VIEW APP ON PRODUCTION HERE

[https://blog-challenge-alkemy.netlify.app/](https://blog-challenge-alkemy.netlify.app/)

## First step

Installing dependencies, into client and server folder, run this script:

### `npm install`

## Start the project on development mode

For this, into server folder u need create a file .env with your config to connections of mysql, like:

DB_NAME=your_name
DB_USER=your_user
DB_PASS=your_pass
DB_HOST=your_host
DB_PORT=your_port

After this, u can run:

### `npm run dev`

Runs the server in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

Into client/src folder change the link on file `config.js` [https://blog-challenge-alkemy.herokuapp.com](https://blog-challenge-alkemy.herokuapp.com) for the localhost [http://localhost:4000](http://localhost:4000).

Now, u can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
