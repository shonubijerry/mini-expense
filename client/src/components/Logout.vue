<script>
// import { store } from '../store';
import { EventBus } from '../helper/eventBus';

export default {
  /* eslint-disable */
  name: 'Logout',
  mounted() {
    this.logout();
  },
  
  methods: {
    logout() {
      EventBus.$emit('auth', false);
      if($cookies.get('user')) {
        $cookies.remove('user');
      }
      this.$router.push({ name: 'SignIn' });
    },
  },
};
</script>
