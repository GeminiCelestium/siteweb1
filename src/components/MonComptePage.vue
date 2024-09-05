<template>
    <div class="account-settings">
      <h2>Gestion du compte</h2>
  
      <div v-if="user">
        <form class="form-row" @submit.prevent="updateEmail">
          <label for="new-email">Nouvel email :</label>
          <input type="email" v-model="newEmail" id="new-email" placeholder="Entrez le nouvel email" />
          <button type="submit">Mettre à Jour</button>
        </form>
  
        <form class="form-row" @submit.prevent="updatePassword">
          <label for="new-password">Nouveau mot de passe :</label>
          <input type="password" v-model="newPassword" id="new-password" placeholder="Entrez le nouveau mot de passe" />
          <button type="submit">Mettre à Jour</button>
        </form>

        <form class="form-row" @submit.prevent="addPseudo">
          <label for="pseudo">Pseudo :</label>
          <input v-model="name" id="pseudo" placeholder="Entrez le pseudo" />
          <button type="submit">Mettre à Jour</button>
        </form>
  
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </div>
      <div v-else>
        <p>Vous devez être connecté pour gérer votre compte.</p>
      </div>
    </div>
</template>
  
<script>
  import { auth } from '../firebase.config.js';
  import { onAuthStateChanged, updateEmail, updatePassword } from 'firebase/auth';
  import { Utilisateur } from '../models/Utilisateur.js';
  
  export default {
    data() {
      return {
        user: null,
        newEmail: '',
        newPassword: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    created() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
    methods: {
      async updateEmail() {
        if (!this.newEmail) return;
        try {
          await updateEmail(this.user, this.newEmail);
          this.successMessage = 'Email mis à jour avec succès';
          this.errorMessage = '';
        } catch (error) {
          this.errorMessage = error.message;
          this.successMessage = '';
        }
      },
      async updatePassword() {
        if (!this.newPassword) return;
        try {
          await updatePassword(this.user, this.newPassword);
          this.successMessage = 'Mot de passe mis à jour avec succès';
          this.errorMessage = '';
        } catch (error) {
          this.errorMessage = error.message;
          this.successMessage = '';
        }
      },
      async addPseudo() {
        try {
          await addPseudo(this.user, this.newPassword);
          this.successMessage = 'Mot de passe mis à jour avec succès';
          this.errorMessage = '';
        } catch (error) {
          this.errorMessage = error.message;
          this.successMessage = '';
        }
      },
    },
  };
</script>
  
<style scoped>
.account-settings {
  max-width: 1000px;
  margin: 0 auto;
}

form {

}

.form-row {
  display: flex;
  align-items: center;
}

label {
  width: 300px;
}

input {
  display: block;
  margin: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

button {
  width: 200px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>
  