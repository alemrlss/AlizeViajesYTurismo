import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCt8AnyNePULEbzKCgzF7-L8AVDR5Ahx94",
    authDomain: "alize-project.firebaseapp.com",
    projectId: "alize-project",
    storageBucket: "alize-project.appspot.com",
    messagingSenderId: "93891076338",
    appId: "1:93891076338:web:2991a9e19b3a700b64b06b"
};

export const app = initializeApp(firebaseConfig);