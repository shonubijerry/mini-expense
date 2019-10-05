<template>
<mdb-container>
  <section class="demo-section">
    <h4>Sign In</h4>
      <mdb-row>
        <mdb-col md="6">
          <!-- Material form login -->
          <div>
            <div class="grey-text">
              <mdb-input label="Your email" icon="envelope" type="email" v-model="email" />
              <mdb-input label="Your password" icon="lock" type="password" v-model="password"/>
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
    };
  },
  mounted() {
    this.checkAuth();
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
        EventBus.$emit('auth', true);
        this.$router.push({ name: 'Expenses' });
      } else {
        const error = switchResponse(result);
      }
    },
  },
};
</script>
