/* Start: Firebase Messaging Service Worker */
// Import scripts necessary for Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyBdSki5UiqCPGqoOrzKlj4uxF_jpU96Brw",
  authDomain: "readshayariviews.firebaseapp.com",
  projectId: "readshayariviews",
  storageBucket: "readshayariviews.appspot.com",
  messagingSenderId: "431486917839",
  appId: "1:431486917839:web:a92431abf957e1956eabba",
  measurementId: "G-1N7KPRGJZB"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
/* End: Firebase Messaging Service Worker */
