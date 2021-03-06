# JoltTV Streaming App!

This app is a streaming app similar to Twitch. It utlizes google's Oauth for sign-in. Once signed in, you are granted access to features such as creating a stream, deleting a stream, editing a stream, and streaming. 

<img src="https://i.imgur.com/CrKdz1b.png" />

## Technologies

* React
* React-redux
* Redux-thunk
* React-final-form
* Node-media-server
* Google Oauth
* Axios
* Flv
* Semantic-ui

## Instructions on how to use:

* Navigate to https://streaming-app-teal.vercel.app/ to see the base app. 
* To view where the data is stored navigate to https://streaming-api-api.herokuapp.com/streams.
* From here you can see a list of already created streams.
* Click the sign-in button to unlock streamer features.
* Once signed in you can create a stream. The edit and delete features are only available to the person who created the stream.

* To start streaming you will need to download OBS. 
* Once you complete the installation and basic setup of OBS navigate to settings -> stream. In the dropdown menu select 'custom'
* From there, input the last digit(the number id) of your stream's url into the textbox that says 'stream key'.
* For the textbox that says 'server' input rtmp://localhost/live/

* Before starting your stream you will need to clone the rtmp server from here: https://github.com/brian4548/rtmp-server
* Once you clone the server run 'npm start' in the terminal.
* Now you can start your stream! Happy Streaming!

## Coming soon:

* Rails backend to replace json-server
* UI changes
* Hooks refactor
