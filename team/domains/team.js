'use strict';

const { attributes } = require('structure');
const Team = attributes({
    id: {
        type: Number,
        required: true, 
        empty: false
    },
    name: {
        type: String,
        required: true, 
    },
    logo: {
      type: String
    },
    email: {
      type: String
    }
  })(class Team {
    // toString() print out user information in easy to read format
    toString() {
        const output = {
          id: this.id,
          email: this.email,
          logo: this.logo,
          name: this.name,
        };
        return JSON.stringify(output, null, 2);
      }
  });
  
  module.exports = Team;