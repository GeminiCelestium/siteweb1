import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//import firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';
//import firebaseConfig from './firebase.config';
import './firebase.config.js';

createApp(App).use(router).mount('#app');

//firebase.initializeApp(firebaseConfig);

//const auth = firebase.auth();
//const db = firebase.firestore();
