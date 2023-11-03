'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   // Récupérer tous les profils de la table Profiles
   const profiles = await queryInterface.sequelize.query('SELECT id FROM Profiles', {
    type: Sequelize.QueryTypes.SELECT
  });

  // Générer une liste d'utilisateurs pour chaque profil
  const users = [];

  for (let profile of profiles) {
    for (let i = 1; i <= 5; i++) {
      const hashedPassword = await bcrypt.hash(`password`, 10);

      users.push({
        firstname: `Firstname${i}`,
        lastname: `Lastname${i}`,
        phone: `123-456-78${i}`,
        profilePicture: 'images/profile/default.jpg',
        address: `Address${i}`,
        location: `Location${i}`,
        email: `user${i}@profile${profile.id}.com`,
        password: hashedPassword,
        salt: null,
        resetToken: null,
        resetTokenExpiration: null,
        profileId: profile.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  // Insérer tous les utilisateurs générés dans la table Users
  return queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface, Sequelize) {
    // Supprimer tous les utilisateurs insérés
    return queryInterface.bulkDelete('Users', null, {});
  }
};
