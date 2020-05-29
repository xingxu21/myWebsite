<template>
  <div>
    <p id='text-box'>
      <span id='json0'>{ <br/>  </span>
    <span id='info-section'>
          <span id='json1'>
            <span id='json1_1'>  "Linkedin"</span>
            <span id='json1_2'>:</span>
            <span id='json1_3'>
              <a href="https://www.linkedin.com/in/xingxu21/">
              <i class="fab fa-linkedin"></i></a>
            </span>
            <span id='json1_4'>  ;</span>
          </span>


          <span id='json2'>
            <span id='json2_1'>  "Devpost"</span>
            <span id='json2_2'>:</span>
            <span id='json2_3'>
              <a href="https://www.devpost.com/xingxu21/">
                <i class="fab fa-dev"></i>
              </a>
            </span>
            <span id='json2_4'>  ;</span>
          </span>


          <span id='json3'>
            <span id='json3_1'>  "Email"</span>
            <span id='json3_2'>: </span>
            <span id='json3_3'>
              <a href="mailto:david.x.feng@ucla.edu">
              <i class="fas fa-envelope 4x"></i></a></span>
            <span id='json3_4'> ; </span>
          </span>

          <span id='json3'>
            <span id='json3_1'>  "Resume"</span>
            <span id='json3_2'>: </span>
            <span id='json3_3'>
              <router-link to="/resume">
                <i class="fas fa-address-card"></i>
              </router-link></span>
            <span id='json3_4'> ; </span>
          </span>

  </span>
    <span id='json00'>}<br/>  </span>
  </p>
  </div>
</template>

<script>
export default {
  name: 'JsonContact',
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://kit.fontawesome.com/7178d801fb.js') //missing cross-origin anonymous tho
    document.head.appendChild(externalScript)
  }
}

</script>

<style>
a {
  color: inherit;
  text-decoration: none;
}
#text-box {
  display:block;
  border-radius: 10px;
  text-align: left;
  margin-top: 60px;
  width: 20rem;
  background: #191721;
  /* text-indent: 2em; */
  padding: 25px;


}
#json2, #json1, #json3 {
  display:block;
  text-indent: 1em;
}
#json0, #json00 {
  color: white;
}
#json2_1, #json1_1 ,#json3_1, #json4_1 {
  color: #B2E64C;

}

#json1_2, #json2_2, #json3_2, #json4_2,
 #json1_4, #json2_4, #json3_4, #json4_4 {
  color: #FF5794; /*red */
}

#json1_3, #json2_3, #json3_3 {
  color: #E6DB7A;
}
</style>
