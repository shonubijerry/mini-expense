<template>
<mdb-container>
  <section class="demo-section">
    <h4>Sign Up</h4>
      <mdb-row>
        <mdb-col md="6">
          <!-- Material form login -->
          <div>
            <div class="grey-text">
              <mdb-input label="Your name" icon="user" type="text"  v-model="name"/>
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

export default {
  /* eslint-disable */
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
    };
  },
  methods: {
    async postData() {
      const result = await AuthServices.signIn({
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status === 201) {
        this.payload = result.data;
        this.$router.push({ name: 'Expenses' });
        $cookies.set('user', result.data.payload);
      } else {
        const error = switchResponse(result);
      }
    },
  },
};
</script>
