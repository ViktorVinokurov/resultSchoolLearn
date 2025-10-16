// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA4rNI1jnll91SRTIMSdUezy-GM_g0QYzE',
	authDomain: 'todo-list-c500c.firebaseapp.com',
	databaseURL: 'https://todo-list-c500c-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'todo-list-c500c',
	storageBucket: 'todo-list-c500c.firebasestorage.app',
	messagingSenderId: '854180758562',
	appId: '1:854180758562:web:09a6bc566005c3cf59f67b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
