<template lang="html">
  <div class="Main">
    <h1>PDF View goes here</h1>
    <pdf src='file.txt'/> 
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'PdfViewer',
  components: { pdf }
}
</script>

<style lang="css" scoped>
</style>
