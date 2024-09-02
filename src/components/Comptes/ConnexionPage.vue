<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>
        Vous n'avez pas encore de compte ? <router-link to="/inscription">S'inscrire</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import { auth } from '../../firebase.config.js';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async login() {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          console.log('Utilisateur connecté avec succès:', userCredential.user);
          this.$router.push({ name: 'Home' });
        } catch (error) {
            switch (error.code) {
              case 'auth/invalid-email':
                this.errorMessage = 'Adresse email invalide.';
                break;
              case 'auth/user-disabled':
                this.errorMessage = 'Ce compte a été désactivé.';
                break;
              case 'auth/user-not-found':
                this.errorMessage = 'Aucun compte trouvé avec cet email.';
                break;
              case 'auth/wrong-password':
                this.errorMessage = 'Mot de passe incorrect.';
                break;
              default:
                this.errorMessage = 'Erreur de connexion : ' + error.message;
                break;
            }
            console.error('Erreur lors de la connexion:', error.message);
        }
      },
    },
  };
  </script>
  
<style scoped>
.error {
    color: red;
}
</style>
  