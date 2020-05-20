<template>
  <div>
    <p id='text-box'>
      <span id='json0'>{<br/>  </span>
    <span id='json1'>
      <span id='json1_1'>  "linkedin"</span>
      <span id='json1_2'>  :</span>
      <span id='json1_3'>xingxu21</span>
      <span id='json1_4'>  ,</span>
    </span>

  <br/>

    <span id='json2'>
      <span id='json2_1'>  "devpost" </span>
      <span id='json2_2'> :  </span>
      <span id='json2_3'>xingxu21 </span>
      <span id='json2_4'>  ,</span>
    </span>

  <br/>

    <span id='json3'>
      <span id='json3_1'>  "email" </span>
      <span id='json3_2'>  :</span>
      <span id='json3_3'> "david.x.feng@ucla.edu"</span>
      <span id='json3_4'>  ,</span>
    </span>

  <br/>

    <span id='json0'>}<br/>  </span>
  </p>
  </div>
</template>

<script>
export default {
  name: 'JsonContact'
}

</script>

<style>
#text-box {
  outline-color: black;
  outline-style: dotted;
  margin-top: 60px;
  width: 18rem;
  background: #191721;
}

#json2_1, #json1_1 ,#json3_1, #json4_1 {
  color: #B2E64C;
}

#json1_2, #json2_2, #json3_2, #json4_2,
 #json1_4, #json2_4, #json3_4, #json4_4 {
  color: #FF5794; /*red */
}
</style>
