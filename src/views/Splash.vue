<template>
<div>
  <div class='splash-main'>
    <head>
        <!-- <link rel="stylesheet" href="animate.min.css"> -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Sintony&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Pridi|Sintony&display=swap" rel="stylesheet">

    </head>
    <!-- <div id='name'>
        <h1 class="animated fadeInDown"> David Feng </h1>
    </div> -->
    <div class='splash-main-container'>
      <div class='david-name'>
          > David Feng
      </div>
      <div class='main-blurb'>
        <div class='animated fadeInUp'>Fourth year Computer Science | UCLA</div>

      </div>
    </div>
    <div class='info-container'>
        Here is more info about me
        <div class='center-content'>
          blah
          <FakeTerminal />
        </div>
    </div>
  </div>

</div>
</template>


<script>
import FakeTerminal from '../components/FakeTerminal.vue'

export default {
  name: 'Splash',
  components:  {FakeTerminal}
}
</script>







<style scoped type="text/css">
.main-blurb {
  position: absolute;
  left: 230px;
  top: 290px;
  font-family: 'Sintony', sans-serif;
}
.david-name {
  color: black;
  position: absolute;
  /* border-right: .15em solid orange; --blinker effect */
  left: 220px;
  top: 190px;
  font-size: 4.5em;
  font-family: 'Sintony', sans-serif;

  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .2em solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* schrolling effect */
  letter-spacing: .04em; /* Adjust as needed */
  animation:
   typing 1s steps(30, end),
   blink-caret 1s step-end infinite;

}


@keyframes blink {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 449px } /*hardcoded*/
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black }
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
