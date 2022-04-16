import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyByErwzeD9iT_E4QKsBC9pdz-kSDmSbXNk",
    authDomain: "fir-cloud-messaging-90ae3.firebaseapp.com",
    projectId: "fir-cloud-messaging-90ae3",
    storageBucket: "fir-cloud-messaging-90ae3.appspot.com",
    messagingSenderId: "301936871090",
    appId: "1:301936871090:web:8b6dd5f6c79990ec272bab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;