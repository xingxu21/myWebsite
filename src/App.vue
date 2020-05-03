<template>

  <div id="app">

    <head>
        <link href="https://fonts.googleapis.com/css2?family=Sintony:wght@400;700&display=swap" rel="stylesheet">
    </head>
    <nav class='NavBar'>

      <router-link to='/' class='routerLink'>Main Page</router-link>

      <router-link to='/second' class='routerLink'>Second</router-link>

      <router-link to='/about' class='routerLink'>About</router-link>
      <router-link to='/resume' class='routerLink'>Resume</router-link>
    </nav>
    <router-view  />
  </div>
</template>



<style>
body {
  background-image: url('assets/IMG_1725.jpg');
  background-size: cover;
  background-color: #EDEFF2;
}
.routerLink {
  color: black;
  text-decoration: none;
  font-family: 'Sintony', sans-serif;
  margin-left: 100px;

}
.NavBar {

  line-height: 50px;
  height:50px;
  text-align: center;


  padding: 10px;

}
</style>
