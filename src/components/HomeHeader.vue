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
        <button @click="login">Se connecter</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HomeHeader',
    methods: {
      login() {
        // Ajouter logique connexion
        alert('Connexion');
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
  </style>
  