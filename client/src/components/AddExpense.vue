<template>
 <div class=""></div>
</template>

<script>
import { mdbTabs } from 'mdbvue';
import ExpensesService from '../services/ExpensesServices';

export default {
  name: 'expenses',
  components: {
    mdbTabs,
  },
  data() {
    return {
      expenses: {},
    };
  },
  mounted() {
    this.getExpenses();
  },
  methods: {
    async getExpenses() {
      const {
        data,
      } = await ExpensesService.fetchExpenses();
      this.expenses = data;
    },
  },
};
</script>
