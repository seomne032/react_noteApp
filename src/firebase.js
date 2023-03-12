import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAKzEVED-LCCiO49i60Eou5gJ2ASawTXKk',
    authDomain: 'seomne-note.firebaseapp.com',
    projectId: 'seomne-note',
    storageBucket: 'seomne-note.appspot.com',
    messagingSenderId: '804647840494',
    appId: '1:804647840494:web:39cab738d8975f0a63a1ff',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
