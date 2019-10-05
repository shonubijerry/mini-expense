import tableColumn from '../helper/tableHelper';

export const store = {
  state: {
    isAuth: false,
    user: {},
    expenses: {
      columns: [...tableColumn],
      rows: [],
    },
  },

  addUser(data) {
    this.state.user = data;
  },

  addExpensesRows(data) {
    this.state.expenses.rows = [...data];
  },

  setAuth(data) {
    this.state.isAuth = data;
    console.log('auth', this.state.isAuth);
  },
};
