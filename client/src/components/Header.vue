<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand to="/" waves class="font-weight-bold">
      <mdb-icon icon="chart-pie" />
      Mini-Expense
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right id="nav-items" :key="auth" :v-bind="auth" :v-model="auth" v-if="auth">
        <li class="nav-item"><a class="nav-link" href="/expenses">Expenses</a></li>
        <li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>
      </mdb-navbar-nav>
      <mdb-navbar-nav right id="nav-items" :key="auth" :v-bind="auth" :v-model="auth" v-else-if="!auth">
        <li class="nav-item"><a class="nav-link" href="/signup">Register</a></li>
        <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbIcon, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
import { store } from '../store';
import { EventBus } from '../helper/eventBus';

export default {
  name: 'Header',
  components: {
    mdbIcon,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbContainer,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
  },

  data() {
    return {
      auth: store.state.isAuth,
    };
  },

  mounted() {
    EventBus.$on('is-auth', () => {
      store.setAuth(true);
      this.auth = store.state.isAuth;
    });
  },

};
</script>
