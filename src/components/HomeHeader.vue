<template>
  <header class="header">
    <div class="logo">
      <h1>Mon Site</h1>
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Accueil</router-link></li> |
        <li><router-link to="/about">A propos</router-link></li>
      </ul>
    </nav>
    <div class="auth">
      <template v-if="user">
        <span>Bienvenue, {{ getUsername() }} !</span>
        <button @click="logout" class="boutonConnexion">Se déconnecter</button>
      </template>
      <template v-else>
        <router-link to="/connexion">
          <button>Se connecter</button>
        </router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { auth } from '../firebase.config.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  name: 'HomeHeader',
  data() {
    return {
      user: null,
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  methods: {
    getUsername() {
      if (this.user && this.user.email) {
        return this.user.email.split('@')[0];
      }
      return '';
    },
    logout() {
      signOut(auth)
        .then(() => {
          this.user = null;
          alert('Déconnexion réussie');
        })
        .catch(error => {
          console.error('Erreur de déconnexion :', error.message);
        });
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo h1 {
  margin: 0;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav li {
  margin: 0 10px;
}

.nav a {
  color: white;
  text-decoration: none;
}

.auth button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.auth button:hover {
  background-color: #45a049;
}

.boutonConnexion {
  margin-left: 15px;
}
</style>
