<template>
  <mdb-container class="">
    <mdb-row class="mt-1 align-items-center justify-content-start">
      <mdb-row class="align-items-left">
        <h4 class="demo-title"><strong>Expenses</strong></h4>
       </mdb-row>
      <mdb-row class="align-items-right justify-content-end">
        <a href="/signup" class="nav-link border m-2 indigo-text font-weight-bold rounded float-right">Add</a>
       </mdb-row>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <section>
        <mdb-datatable
          :data="expenses"
          striped
          bordered
          arrows
          :display="3"
          :v-bind="expenses"
          :key="expensesChanged"
        />
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbDatatable, mdbContainer, mdbRow, mdbIcon } from 'mdbvue';
import ExpensesService from '../services/ExpensesServices';
import { store } from '../store';

export default {
  /* eslint-disable */
  name: 'expenses',
  components: {
    mdbDatatable,
    mdbContainer,
    mdbRow,
    mdbIcon,
  },
  data() {
    return {
      user: $cookies.get('user'),
      expenses: store.state.expenses,
      expensesChanged: false,
    };
  },
  mounted() {
    this.checkAuth();
    this.getExpenses();
  },
  methods: {
    checkAuth() {
      if(!$cookies.get('user'))
        this.$router.push({ name: 'SignIn' });
    },
    async getExpenses() {
      const { data } = await ExpensesService.fetchExpenses(this.user.token);
      store.addExpensesRows(data.payload);
      this.expensesChanged = true;
    },
  },
};
</script>
