/* eslint-disable no-unused-vars */

export default {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Expenses', [
    {
      id: '561bd933-3838-4104-b5cd-6374819ee963',
      userId: '401bd933-3838-4104-b5cd-6374819ee961',
      amount: '200',
      vat: '40',
      date: '2020-09-09T00:09:31.812Z',
      reason: 'Purchase a TV set',
    },
    {
      id: '389bd933-3838-4104-b5cd-6374819ee563',
      userId: '401bd933-3838-4104-b5cd-6374819ee961',
      amount: '350',
      vat: '70',
      date: '2019-12-09T00:09:31.812Z',
      reason: 'Trip to grandma\'s',
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Expenses', null, {})
};
