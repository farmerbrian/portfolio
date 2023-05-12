import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAUa8pI5a5zK6EPvK18wVHFeQCQKMY8n1E',
	authDomain: 'portfolio-126ae.firebaseapp.com',
	projectId: 'portfolio-126ae',
	storageBucket: 'portfolio-126ae.appspot.com',
	messagingSenderId: '463437451351',
	appId: '1:463437451351:web:3953391cf952cabafa9312',
};

const db = initializeApp(firebaseConfig);

export default getFirestore();
