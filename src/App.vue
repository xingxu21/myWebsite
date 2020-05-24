<template>

  <div id="app">

    <head>
        <link href="https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&display=swap" rel="stylesheet">
    </head>
    <!-- <nav class='NavBar'>
      <router-link to='/' class='routerLink'>Home</router-link>

      <router-link to='/second' class='routerLink'>Second</router-link>

      <router-link to='/about' class='routerLink'>About</router-link>
      <router-link to='/resume' class='routerLink'>Resume</router-link>
    </nav> -->
    <router-view  />
  </div>
</template>



<style>
body {
  /* background-image: url('assets/IMG_1725.jpg'); */
  background-size: cover;
  background-color: #EDEFF2;
  margin: 0;
  padding: 0;
}

.routerLink {
  color: black;
  text-decoration: none;
  font-family: 'Sintony', sans-serif;
  margin-left: 100px;
  font-size: 18px;


}
.NavBar {

  height:100px;
  width: 100vw;
  opacity: 1;

  text-align: center;

  background-color: rgba(0, 0, 0, .05);

  /* opacity: .3; */
  padding: 10px;
  z-index: 10;
  display: flex;
  align-items: center;
  position: absolute;
  /* outline-style: dashed; */


}
</style>
