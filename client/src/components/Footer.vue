<template>
  <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="page-footer font-small">
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright: <a href="https://github.com/shonubijerry"> Korede Shonubi </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'Footer',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>

<style>
footer {
  margin: 0;
  padding: 0;
}
</style>
