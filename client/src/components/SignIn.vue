<template>
<mdb-container>
  <section class="demo-section">
    <h4 class="text-center">Sign In</h4>
      <mdb-row>
        <mdb-col class="form-container" md="6">
          <!-- Material form login -->
          <div>
            <div class="grey-text">
              <mdb-input label="Your email" icon="envelope" type="email" v-model="email" />
              <mdb-input label="Your password" icon="lock" type="password" v-model="password" required/>
            </div>
            <div id="msg" class="alert alert-danger">
              {{error}}
              <a href="#" class="fa-pull-right" @click="closeAlert()" aria-label="close">&times;</a>
            </div>
            <div class="text-center">
              <button class="btn btn-primary" @click="postData">Login</button>
            </div>
          </div>
          <!-- Material form login -->
        </mdb-col>
      </mdb-row>
  </section>
  </mdb-container>
</template>

<script>
import { mdbInput, mdbBtn, mdbContainer, mdbRow, mdbIcon, mdbCol } from 'mdbvue';
import AuthServices from '../services/AuthServices';
import { switchResponse } from '../helper/responseHelper';
import { EventBus } from '../helper/eventBus';

export default {
  /* eslint-disable */
  name: 'SignIn',
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
      email: '',
      password: '',
      error: '',
    };
  },
  mounted() {
    this.checkAuth();
    // EventBus.$emit('is-auth');
        // store.setAuth(true);
  },
  methods: {
    checkAuth() {
      if($cookies.get('user'))
        this.$router.push({ name: 'Expenses' });
    },
    async postData() {
      const result = await AuthServices.signIn({
        email: this.email,
        password: this.password,
      });
      if (result.status === 200) {
        $cookies.set('user', result.data.payload);
        EventBus.$emit('is-auth', true);
        this.$router.push({ name: 'Expenses' });
      } else {
        const error = switchResponse(result);
        this.error = error;
        document.querySelector('#msg').style.display = 'block';
      }
    },
    closeAlert(alert){
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