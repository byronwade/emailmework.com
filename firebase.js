import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA1Z_AlDGABZqqXiQm9qYiCJ24im1DUNFQ",
	authDomain: "emailmework-com-9a4c1.firebaseapp.com",
	databaseURL: "https://emailmework-com-9a4c1-default-rtdb.firebaseio.com",
	projectId: "emailmework-com-9a4c1",
	storageBucket: "emailmework-com-9a4c1.appspot.com",
	messagingSenderId: "102288994711",
	appId: "1:102288994711:web:238a978abbeb276c0814d2",
	measurementId: "G-DYV9TTV85L",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
