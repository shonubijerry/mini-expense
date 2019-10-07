<template>
<mdb-container>
  <section class="demo-section">
    <h4 class="text-center">Sign Up</h4>
      <div class="row">
        <div class="form-container col-md-6">
          <!-- Material form login -->
          <div>
            <div class="grey-text">
              <mdb-input icon="user" label="Your name" type="text" v-model="name"/>
              <mdb-input label="Your email" icon="envelope" type="email" v-model="email" />
              <mdb-input label="Your password" icon="lock" type="password" v-model="password"/>
            </div>
            <div id="msg" class="alert alert-danger">
              {{error}}
              <a href="#" class="fa-pull-right" @click="closeAlert()" aria-label="close">&times;</a>
            </div>
            <div class="text-center">
              <button class="btn btn-primary" @click="postData">Sign Up</button>
            </div>
          </div>
          <!-- Material form login -->
        </div>
      </div>
  </section>
  </mdb-container>
</template>

<script>
import { mdbInput, mdbBtn, mdbContainer, mdbRow, mdbIcon, mdbCol } from 'mdbvue';
import AuthServices from '../services/AuthServices';
import { switchResponse } from '../helper/responseHelper';

export default {
  name: 'SignUp',
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
      name: '',
      email: '',
      password: '',
      payload: {},
      error: ''
    };
  },
  methods: {
    async postData() {
      const result = await AuthServices.signUp({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status === 201) {
        this.payload = result.data;
        this.$router.push({ name: 'Expenses' });
        this.$cookies.set('user', result.data.payload);
      } else {
        const error = switchResponse(result);
        this.error = error;
        document.querySelector('#msg').style.display = 'block';
      }
    },
    closeAlert() {
      document.querySelector('#msg').style.display = 'none';
    }
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
