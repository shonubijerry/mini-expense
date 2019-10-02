/* eslint-disable no-unused-vars */
import { passwordHash } from '../../helpers/hash';

export default {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      id: '841a11f5-2756-47a2-84d6-ec9feac384e2',
      name: 'Lionel Messi',
      email: 'messi@mail.com',
      password: await passwordHash('123456'),
    },
    {
      id: '401bd933-3838-4104-b5cd-6374819ee961',
      name: 'Alex Iwobi',
      email: 'iwobi@mail.com',
      password: await passwordHash('123456'),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
