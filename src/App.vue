<template>
  <div id="app">
    <nav class='NavBar'>

      <router-link to='/' class='routerLink'>Main Page</router-link>

      <router-link to='/second' class='routerLink'>Second </router-link>

      <router-link to='/about' class='routerLink'>About</router-link>
      <router-link to='/resume' class='routerLink'>My Resume</router-link>
    </nav>
    <router-view  />
  </div>
</template>



<style>

.routerLink {
  color: black;
  text-decoration: none;

  margin-left: 100px;

}
.NavBar {

  line-height: 50px;
  height:50px;
  text-align: center;


  padding: 10px;

}
</style>
