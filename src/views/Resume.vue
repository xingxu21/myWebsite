<template lang="html">

  <div class="resumePage">
      <!-- google drive has nice pdf viewer -->
        <iframe class="iframe-box" src="https://drive.google.com/file/d/1cN76i5hSWjuLVRC4LkgJIRFcXv4UN4PV/preview" width="100%" height="1080px"/>

  </div>

</template>

<script>

export default {
  name: 'Resume',
}
</script>

<style lang="css" scoped>

.iframe-box {
  margin-top:120px;
}
</style>
