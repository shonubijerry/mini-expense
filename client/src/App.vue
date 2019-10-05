<template>
  <div id="app">
    <Header />
     <main :style="{marginTop: '30px'}">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header, Footer
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
