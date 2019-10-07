<template>
<mdb-container>
  <section class="demo-section">
    <h4 class="text-center">Add Expense</h4>
      <div class="row">
        <div class="form-container col-md-6">
          <!-- Material form login -->
          <div>
            <div class="grey-text">
              <mdb-input label="Amount" icon="money-bill-alt" @change="getVAT()" type="text" v-model="grossAmount"/>
              <mdb-input label="VAT" icon="money-bill" type="text" v-model="vat" disabled/>
              <mdb-input label="Date of expense" icon="calendar-alt" type="date" v-model="date" />
              <mdb-input label="Reason for expense" icon="info" type="textarea" v-model="reason"/>
            </div>
            <div id="msg" class="alert alert-danger">
              {{error}}
              <a href="#" class="fa-pull-right" @click="closeAlert()" aria-label="close">&times;</a>
            </div>
          </div>
          <!-- Material form login -->
        </div>
        <div class="text-center col-md-12">
          <button class="btn btn-primary" @click="postExpense(false)">Save</button>
          <button class="btn btn-primary" @click="postExpense(true)">Save & New</button>
          <button class="btn btn-danger" @click="clearForm()">Clear</button>
        </div>
      </div>
  </section>
  </mdb-container>
</template>

<script>
import { mdbInput, mdbBtn, mdbContainer, mdbRow, mdbIcon, mdbCol } from 'mdbvue';
import { switchResponse } from '../helper/responseHelper';
import { calculateVAT } from '../helper/expenseHelper';
import ExpensesService from '../services/ExpensesServices';

export default {
  /* eslint no-multi-assign: 0 */
  name: 'AddExpense',
  components: {
    mdbInput,
    mdbIcon,
    mdbBtn,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  data() {
    return {
      user: this.$cookies.get('user'),
      grossAmount: '',
      netAmount: '',
      date: '',
      reason: '',
      vat: 0,
      error: '',
    };
  },
  methods: {
    getVAT() {
      this.closeAlert();
      const { vat, amount } = calculateVAT(this.grossAmount);
      this.netAmount = amount;
      this.vat = vat;
    },
    async postExpense(addMore) {
      this.closeAlert();
      const result = await ExpensesService.postExpense(this.user.token, {
        amount: this.grossAmount,
        date: this.date,
        reason: this.reason,
        vat: this.vat,
      });
      if (result.status === 201) {
        this.payload = result.data;
        if (addMore) {
          this.clearForm();
        } else {
          this.$router.push({ name: 'Expenses' });
        }
      } else {
        const error = switchResponse(result);
        this.error = error;
        document.querySelector('#msg').style.display = 'block';
      }
    },
    clearForm() {
      this.grossAmount = this.date = this.reason = this.vat = '';
    },
    closeAlert() {
      document.querySelector('#msg').style.display = 'none';
    },
  },
};
</script>

<style scoped>
#msg {
  display: none;
}
.form-container {
  margin: 0 auto;
}
</style>
