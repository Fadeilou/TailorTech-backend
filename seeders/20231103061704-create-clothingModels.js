'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Clothing characteristics arrays
    const types = ['Dress', 'T-shirt', 'Pants', 'Skirt', 'Jacket', 'Blazer', 'Sweater'];
    const occasions = ['Everyday', 'Work', 'Party', 'Sport', 'Relax', 'Wedding', 'Vacation'];
    const styles = ['Casual', 'Formal', 'Business', 'Vintage', 'Bohemian', 'Punk', 'Urban'];
    const lengths = ['Short', 'Medium', 'Long'];
    const fits = ['Slim', 'Regular', 'Loose', 'Oversized', 'Bootcut', 'Flare'];
    const necklines = ['Round', 'V', 'Turtleneck', 'Boat', 'Heart', 'Shirt'];
    const sleeveTypes = ['Short sleeve', 'Long sleeve', 'Sleeveless', 'Three quarter', 'Butterfly', 'Bell'];
    const patterns = ['Plain', 'Striped', 'Dotted', 'Floral', 'Geometric', 'Camouflage', 'Animal print'];
    const decorations = ['None', 'Embroidery', 'Sequins', 'Studs', 'Lace', 'Pearls', 'Decorative buttons'];
    const closures = ['Buttons', 'Zip', 'Velcro', 'Tie', 'Hooks', 'Elastic'];
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

    // Helper function to get a random element from an array
    const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Generating 40 clothing models
    const clothingModels = [];

    for (let i = 1; i <= 10; i++) {
      clothingModels.push({
        name: `ClothingModel${i}`,
        type: getRandomElement(types),
        price: parseFloat((Math.random() * 100 + 10).toFixed(2)), // example price generation
        occasion: getRandomElement(occasions),
        style: getRandomElement(styles),
        length: getRandomElement(lengths),
        fit: getRandomElement(fits),
        neckline: getRandomElement(necklines),
        sleeveType: getRandomElement(sleeveTypes),
        pattern: getRandomElement(patterns),
        decoration: getRandomElement(decorations),
        closure: getRandomElement(closures),
        pockets: Math.random() > 0.5, // Randomly decide true/false for pockets
        season: getRandomElement(seasons),
        picture: `images/models/picture${i}.jpg`, // This is a default path. Change accordingly.
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Inserting the clothing models into the ClothingModels table
    return queryInterface.bulkInsert('ClothingModels', clothingModels);
  },

  async down (queryInterface, Sequelize) {
    // Deleting the inserted clothing models
    return queryInterface.bulkDelete('ClothingModels', null, {});
  }
};
