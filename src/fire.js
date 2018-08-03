import firebase from 'firebase/app';
import 'firebase/messaging';
// import {notificationServices} from './services/notification.services';

const config = {
    apiKey: "AIzaSyBX58NPgmudlb7Aa1K4Y1qGtBir-4eorBk",
    authDomain: "hajj-hackathon-212022.firebaseapp.com",
    databaseURL: "https://hajj-hackathon-212022.firebaseio.com",
    projectId: "hajj-hackathon-212022",
    storageBucket: "hajj-hackathon-212022.appspot.com",
    messagingSenderId: "642994167336"
};
firebase.initializeApp(config);

async function postToken(token) {

    const requestOptions = {
        method: 'POST',
        // url: 'https://localhost:3000/notifications/register',
        url: 'https://desolate-caverns-43961.herokuapp.com/notifications/register',
        headers: {'Content-Type': 'application/json'},
        body: {
            "fcm_token": token,
            "id": "4565465"
        }
    };

    try {
        const result = await fetch(requestOptions.url, {
            method: requestOptions.method,
            headers: requestOptions.headers,
            body: JSON.stringify(requestOptions.body)
        });
        // if (!result)
        // throw "No Response";

    } catch (error) {
        throw error
    }

}

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BCdr-njawTNFjVAG7M-4JQDSzpVvJwHfFRUQlrfJjCzDqdWsk1Hl-6aOISyD38xVF7-qhDq8Ipp5FA9aM9-hux0");

messaging.requestPermission().then(function () {
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
}).catch(function (err) {
    console.log('Unable to get permission to notify.', err);
});


// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then(function (currentToken) {
    if (currentToken) {
        postToken(currentToken);
        // sendTokenToServer(currentToken);
        // updateUIForPushEnabled(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        // setTokenSentToServer(false);
    }
}).catch(function (err) {
    console.log('An error occurred while retrieving token. ', err);

    // postToken(err.toString());

    // showToken('Error retrieving Instance ID token. ', err);
    // setTokenSentToServer(false);
});

messaging.onMessage(function (payload) {
    console.log('Message received. ', payload);
    // ...
});


export default firebase;
