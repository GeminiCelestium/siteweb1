import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import MonComptePage from './components/MonComptePage.vue';
import InscriptionPage from './components/Comptes/InscriptionPage.vue';
import ConnexionPage from './components/Comptes/ConnexionPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/account',
    name: 'Compte',
    component: MonComptePage
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: InscriptionPage
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: ConnexionPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
