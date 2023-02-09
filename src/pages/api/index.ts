/* // Import Firestore
//import { initializeApp } from 'firebase-admin/app';
//import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
// Import Firebase Admin
import * as admin from "firebase-admin";
// Import the service account key JSON file
import * as serviceAccount from "../../../serviceAccountKey.json";

const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: "https://emailmework-com-9a4c1-default-rtdb.firebaseio.com"
});

console.log(firebaseAdmin.firestore()) */