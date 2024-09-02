<template>
  <div>
    <h2>Inscription</h2>
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Mot de passe" required />
      <button type="submit">S'inscrire</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { auth } from '../../firebase.config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log('Utilisateur créé avec succès:', userCredential.user);
        this.$router.push({ name: 'Home' });
      } catch (error) {
          switch (error.code) {
            case 'auth/invalid-email':
              this.errorMessage = 'Adresse email invalide.';
              break;
            case 'auth/email-already-in-use':
              this.errorMessage = 'Cet email est déjà utilisé.';
              break;
            case 'auth/weak-password':
              this.errorMessage = 'Le mot de passe est trop faible. Il doit contenir au moins 6 caractères.';
              break;
            default:
              this.errorMessage = 'Erreur lors de l\'inscription : ' + error.message;
              break;
          }
          console.error('Erreur lors de la création du compte:', error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Styles ici */
</style>
