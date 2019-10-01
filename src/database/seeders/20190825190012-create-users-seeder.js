/* eslint-disable no-unused-vars */
import uuid from 'uuid/v4';
import { passwordHash } from '../../helpers/hash';

export default {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      id: uuid(),
      name: 'Lionel Messi',
      email: 'lionelmessi@mail.com',
      password: await passwordHash('123456'),
    },
    {
      id: uuid(),
      name: 'Alex Iwobi',
      email: 'alexiwobi@mail.com',
      password: await passwordHash('123456'),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
