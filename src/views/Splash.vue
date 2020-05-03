<template>
<div>
  <div class='body'>
    <head>
        <!-- <link rel="stylesheet" href="animate.min.css"> -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    </head>
    <div id='name'>
  <!-- kinda dumb...remove at some point -->
        <h1 class="animated fadeInDown"> David Feng </h1>
    </div>
    <div class='splash-container'>
      Splash container
      <h1>Hello.</h1>

      <h2> My name is David Feng. </h2>
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
body {

}

.splash-container {
  background-image: url("IMG_7601.jpg");
  height: 100%;
  width: 100%;
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  outline-style: dotted;
}
#name {
  text-align: center
}

</style>
