/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js')

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
  var config = {
    apiKey: "AIzaSyB7I_jBQRt4vLi8fsfGTVzmd8v65MPV-JE",
    authDomain: "firpush.firebaseapp.com",
    databaseURL: "https://firpush.firebaseio.com",
    projectId: "firpush",
    storageBucket: "firpush.appspot.com",
    messagingSenderId: "565031178841"
  };
  firebase.initializeApp(config);

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging()
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});