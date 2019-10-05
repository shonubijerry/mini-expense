<template>
    <div style="margin-top: -15px">
      <mdb-edge-header color="indigo darken-2">
        <div style="margin-top: -60px" class="home-page-background"></div>
      </mdb-edge-header>
      <mdb-container class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <h2 class="pb-4"><strong>Mini Expense Manager</strong></h2>
              <mdb-row>
                <mdb-col md="12">
                  <p class="pb-4">Helps you arrange your expenses<br>
                  Features include adding and listing expenses</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="d-flex flex-row justify-content-center">
                <a href="/signup" class="nav-link border m-2 indigo-text font-weight-bold rounded">Signup</a>
                <a href="/login" class="nav-link border indigo-text m-2 font-weight-bold rounded">Login</a>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
</template>

<script>
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCard, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardBody, animateOnScroll } from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbEdgeHeader,
    mdbCard,
    mdbCardImage,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
  },
  directives: {
    animateOnScroll,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.home-feature-box {
  padding: 40px 0;
}
.home-feature-box i {
  font-size: 6rem;
}
.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.home-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url('https://mdbootstrap.com/wp-content/uploads/2016/11/mdb-pro-min-1.jpg') center;
  background-size: cover;
}
</style>
