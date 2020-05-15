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
        <div class='animated fadeInUp'>ucla // currently @WalmartLabs</div>

      </div>
    </div>

    <!-- SECTION 2: THE INFO -->


    <div class='info-container'>
      <div class='col1'>
        <div class='col1-title'>
          <h1>Hi there.</h1>
        </div>
        <div class='fake-terminal'>
            <FakeTerminal />
        </div>

      </div>
      <div id='col2'>
        <article>
        <h1>    May 2020</h1>

        <p>

 <br/>
There’s a plethora of information from Software Engineers
out there on the latest tools, technology, and practices.
My niche is best suited for dissemenating non-career
like information from the perspective of a CS Engineer.
This website serves as the MVP of who I am and what I do.
 Expect major changes.
 <br/>
<br/>
David Feng

</p>

        </article>
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
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);

}
.info-container {
  height: 80vh;
  width: 100%;
  background-color: #2364AA;
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);
}

.info-container > .col1 {
  background-color: #FEC601;
  width: 50%;
  height: 35%;
  border-radius: 25px;

  float: left;
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);

}
.col1-title {
  font-family: 'Sintony', sans-serif;
  font-size: 20px;
  vertical-align: text-bottom;
  text-align: center;
}

 .info-container > #col2 {
   position: absolute;
   width: 40vw;
   margin-left: 55vw;
   margin-top: 10vh;
   padding: 25px 50px 75px 100px;
   /* font-color: white; */
   /* outline: dotted; */
   background: rgba(255, 255, 255, 0.8);

   box-shadow: 0 0 3px 1px rgba(0,0,0,0.3);



}


#col2 article   {
  font-family: 'Sintony', sans-serif;
  /* box-shadow: 1px 3px 1px 1px rgba(0,0,0,0.3); */
  /* margin: 90px; */
  border-radius: 10px;
  text-align: justify;
  line-height: 25px;
  /* letter-spacing: 3px; */



}



</style>
