# Meme Generator, powered by React
## Part of a Scrimba course project
## Link: https://another-meme-gen.web.app/
## Demo:
![](https://github.com/EmilAvramov/react-meme-generator/blob/master/demo.gif)

### Overview:
This is mostly a starter react project which I used to practice some of the basics of React and Firebase. The app uses only 2 simple components, some instances of useState and useEffect and is overall fairly simple. The endgoal is to have a functional live-hosted meme generator.

### Internals:
The app maintains an internal state of the text and calls the meme API (https://imgflip.com/api) to retrieve a new image every time the button is clicked. The app uses React's useEffect to call the API and maintains the text via useState. The app is built inside React and deployed with Firebase.

### Dependencies to build and deploy the app:
- [Build the app] npm run build
- [Install firebase tools] npm i firebase-tools
- [Link the app to firebase] firebase init hosting
- [Deploy to firebase] firebase deploy

### Dependencies if running locally for testing purpose:
- [Run locally] npm start