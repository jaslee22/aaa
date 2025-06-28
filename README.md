# aaa

ecology_app is a simple demo web application that allows an ecological surveyor to record observations in the field. The app shows the user's current location on a map and lets the user attach a photo and description. Data are saved on the server in real time.

## Running the demo

1. Install dependencies with `npm install` inside the `ecology_app` directory.
2. Start the server:
   ```bash
   npm start --prefix ecology_app
   ```
3. Open a browser and navigate to `http://localhost:3000`.

Uploaded photos are stored in `ecology_app/uploads/` and observation data are kept in `ecology_app/data/observations.json`.
