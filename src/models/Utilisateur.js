export default class Utilisateur {
    constructor(email, motDePasse, pseudo, age) {
      this.email = email;
      this.motDePasse = motDePasse;
      this.pseudo = pseudo;
      this.age = age;
    }

    getEmail() {
      return `${this.email}`;
    }
    getMotDePasse() {
      return `${this.motDePasse}`;
    }
    getPseudo() {
      return `${this.pseudo}`;
    }
    getAge() {
      return `${this.age}`;
    }
  
  }