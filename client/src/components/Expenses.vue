<template>
  <mdb-container class="">
    <mdb-row class="mt-1 top-row">
      <mdb-col class="col-md-11 col-sm-10 col-xs-10">
        <h4 class="demo-title"><strong>Expenses</strong></h4>
       </mdb-col>
      <mdb-col class="col-md-1 col-sm-2 col-xs-2">
        <a href="/expenses/add" class="nav-link border m-2 indigo-text font-weight-bold rounded float-right">Add</a>
       </mdb-col>
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
import { mdbDatatable, mdbContainer, mdbRow, mdbIcon, mdbCol } from 'mdbvue';
import ExpensesService from '../services/ExpensesServices';
import { store } from '../store';

export default {
  name: 'expenses',
  components: {
    mdbDatatable,
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCol,
  },
  data() {
    return {
      user: this.$cookies.get('user'),
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
      if (!this.$cookies.get('user')) {
        this.$router.push({ name: 'SignIn' });
      }
    },
    async getExpenses() {
      const { data } = await ExpensesService.fetchExpenses(this.user.token);
      store.addExpensesRows(data.payload);
      this.expensesChanged = true;
    },
  },
};
</script>

<style scoped>
.top-row {
  align-items: center;
}
</style>
