'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const items = generateFakeItems(1000)
    return queryInterface.bulkInsert('Users', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

function generateFakeItems(count) {
  const items = [];

  for (let i = 0; i < count; i++) {
    const newItem = {
      userName: faker.internet.userName(),
      password: faker.internet.password(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.country(),
      img: faker.image.abstract(),
      createdAt: faker.date.recent(90),
      updatedAt: new Date()
    };

    items.push(newItem);
  }
  return items;
}