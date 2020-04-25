<template>
  <div id='counter'>
    <h2> Ayyye yo Counter component got itself inserted!!! </h2>
    <h3> My counter be {{ count}}!! </h3>
  </div>

</template>
<script>

export default {
  name: 'Counter',
  data() { //data is a function that must return an object written as a map
    return {
      count: 0
    }
  }
}


</script>
<style></style>
