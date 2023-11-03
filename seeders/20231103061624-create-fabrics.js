'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     // Fabric characteristics arrays
     const types = ['Cotton', 'Silk', 'Wool', 'Polyester', 'Linen', 'Denim', 'Rayon'];
     const textures = ['Smooth', 'Rough', 'Wrinkled', 'Silky', 'Thick', 'Soft', 'Stiff'];
     const thicknesses = ['Thin', 'Medium', 'Thick'];
     const stretchabilities = ['High', 'Medium', 'Low', 'None'];
     const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Brown', 'Purple', 'Orange', 'Grey'];
     const patterns = ['Plain', 'Striped', 'Dotted', 'Floral', 'Geometric', 'Camouflage', 'Animal print'];
     const washingMethods = ['Machine wash', 'Hand wash', 'Dry clean', 'Do not wash'];
     const resistances = ['High', 'Medium', 'Low', 'Water-resistant', 'Tear-resistant', 'Wrinkle-resistant'];
     const transparencies = ['Opaque', 'Translucent', 'Transparent'];
     const finishes = ['Matte', 'Glossy', 'Natural', 'Rough', 'Textured'];
     const origins = ['Asia', 'Europe', 'Africa', 'America', 'Australia'];
 
     // Helper function to get a random element from an array
     const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
 
     // Generating 20 fabrics
     const fabrics = [];
 
     for (let i = 1; i <= 10; i++) {
       fabrics.push({
         name: `Fabric${i}`,
         type: getRandomElement(types),
         texture: getRandomElement(textures),
         thickness: getRandomElement(thicknesses),
         price: parseFloat((Math.random() * 100 + 10).toFixed(2)), // example price generation
         stretchability: getRandomElement(stretchabilities),
         color: getRandomElement(colors),
         pattern: getRandomElement(patterns),
         washingMethod: getRandomElement(washingMethods),
         resistance: getRandomElement(resistances),
         transparency: getRandomElement(transparencies),
         finish: getRandomElement(finishes),
         origin: getRandomElement(origins),
         picture: `images/models/picture${i}.jpg`, // This is a default path. Change accordingly.
         createdAt: new Date(),
         updatedAt: new Date()
       });
     }
 
     // Inserting the fabrics into the Fabrics table
     return queryInterface.bulkInsert('Fabrics', fabrics);
  },

  async down (queryInterface, Sequelize) {
    // Deleting the inserted fabrics
    return queryInterface.bulkDelete('Fabrics', null, {});
  }
};
