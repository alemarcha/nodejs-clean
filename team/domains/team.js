'use strict';

class Team {
    constructor(id, name, email, logo) {
        this.id = id
        this.name = name
        this.logo = logo
        this.email = email
    }

    get Id() {
      return this.id;
    }
    set Id(id) {
      this.id = id;
    }
  
    get Email() {
      return this.email;
    }
    set Email(email) {
      this.email = email;
    }
  
    get Logo() {
      return this.logo;
    }
    set Logo(logo) {
      this.logo = logo;
    }
  
    // toString() print out user information in easy to read format
    toString() {
      const output = {
        Id: this.id,
        Email: this.email,
        Logo: this.logo,
        Name: this.name,
      };
  
      return JSON.stringify(output, null, 2);
    }
  }
  
  module.exports = Team;