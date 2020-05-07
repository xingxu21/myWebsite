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
    <div class='splash-main-container'>
      <div class='david-name'>
          > David Feng <span style="background-color: black;">&nbsp;</span>
      </div>
    </div>
    <div class='info-container'>

    </div>
  </div>

</div>
</template>
<script>

export default {
  name: 'Splash'
}
</script>
<style scoped type="text/css">

.david-name {
  color: green;
  position: absolute;
  left: 220px;
  top: 190px;
  font-size: 100px;
}

.splash-main-container {
  background-image: url("../assets/SwissMountainSplash.jpg");
  height: 100vh;

  width: 100vw;
  padding: 0;
  margin: 0px;
  z-index: 4;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  /* outline-style: dashed; */
}
.info-container {
  height: 50vh;
  width: 100%;
}
#name {
  text-align: center
}

</style>
