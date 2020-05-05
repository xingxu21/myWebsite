<template>
<div>
  <div class='splash-main'>
    <head>
        <!-- <link rel="stylesheet" href="animate.min.css"> -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    </head>
    <!-- <div id='name'>
        <h1 class="animated fadeInDown"> David Feng </h1>
    </div> -->
    <div class='splash-container'>
      Splash container
      <h1>Hello.</h1>

      <h2> My name is David Feng. </h2>
    </div>
  </div>
  <div class='splash-info'>
    Splash info section
  </div>
</div>
</template>
<script>

export default {
  name: 'Splash'
}
</script>
<style scoped type="text/css">
.splash-main {
  /* override parent! */

  background-image: url("../assets/IMG_1725.jpg");
  height: 100%;
  background-size: cover;

}

.splash-container {
  /* background-image: url("IMG_1725.jpg"); */
  height: 100%;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  outline-style: dashed;
}
.splash-info {
  position:relative;
  height: 100%;
  width: 100%;
}
#name {
  text-align: center
}

</style>
