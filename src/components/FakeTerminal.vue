<template>
  <div>
    <div class="terminal">
  <!-- terminal window -->
  <div class="terminal__window">
    <div class="terminal__window-header">
      Friend of David's Terminal
      <div class="terminal__controls"></div>
    </div>
     <div class="terminal__window-body">
        <!-- terminal screen -->
        <div class="terminal__screen">

          <!-- row -->

          <!-- row -->

          <!-- row -->


          <div class="screen__row">
            <span class="screen__success">
              <b>visitor@davidfeng.io</b>
            </span>
            <span class="screen__primary">
              ~
            </span>
            <span class="screen__primary">
              $
            </span>
            <span class="screen__default">
              df.hometown
            </span>
          </div><!--./ row -->
          <!-- row -->
          <div class="screen__row">
            <span class="screen__warning">
              Nashville, TN
            </span>
          </div><!--./ row -->

          <div class="screen__row"></div><!--./ row -->

 <div class="screen__row">
            <span class="screen__success">
              <b>visitor@davidfeng.io</b>
            </span>
            <span class="screen__primary">
              ~
            </span>
            <span class="screen__primary">
              $
            </span>
            <span class="screen__default">
df.education
   </span>
          </div><!--./ row -->

          <!-- row -->
          <div class="screen__row">
            <span class="screen__warning">
              University of California Los Angeles (UCLA): B.S. Computer Science
            </span>
          </div><!--./ row -->

          <div class="screen__row"></div><!--./ row -->




          <div class="screen__row">
            <span class="screen__success">
              <b>visitor@davidfeng.io</b>
            </span>
            <span class="screen__primary">
              ~
            </span>
            <span class="screen__primary">
              $
            </span>
            <span class="screen__default">
df.residence            </span>
          </div><!--./ row -->
          <!-- row -->
          <div class="screen__row">
            <span class="screen__warning">
              New York, NY
            </span>
          </div><!--./ row -->

          <div class="screen__row"></div><!--./ row -->

           <div class="screen__row">
            <span class="screen__success">
              <b>visitor@davidfeng.io</b>
            </span>
            <span class="screen__primary">
              ~
            </span>
            <span class="screen__primary">
              $
            </span>
            <span class="screen__default">
df.interests
   </span>
          </div><!--./ row -->
          <!-- row -->
          <div class="screen__row">
            <span class="screen__warning">
              ['flying on airplanes', 'eating', 'questioning everything']
            </span>
          </div><!--./ row -->

          <!-- row -->
          <div class="screen__row"></div><!--./ row -->
          <!-- row -->
          <div class="screen__row">
            <span class="screen__success">
              <b>visitor@davidfeng.io</b>
            </span>
            <span class="screen__primary">
              ~
            </span>
            <span class="screen__primary">
              $
            </span>
          </div><!--./ row -->
        </div><!--./ terminal screen -->
      </div>
  </div><!--./ terminal window -->
</div>
  </div>
</template>


<script>
export default {
  name: 'FakeTerminal'
}
</script>

<style lang='scss'>
* {
box-sizing: border-box;
}
body {
background: #eee;
padding: 0;
margin: 0;
}
// terminal wrapper - used only for align terminal window
.terminal {
width: 100%;
min-height: 10vh;
padding: 30px;
display: flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
// terminal out*window
&__window {
  width: 100%;
  max-width: 800px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.34);

}
&__window-header {
  text-align: center;
  background: #3c3f40;
  border-radius: 5px 5px 0 0;
  color: #e4e4e4;
  padding: 8px 50px;
  position: relative;
  border-bottom: 2px solid #676d6f;
}
&__controls {
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0 10px;
  transform: translateY(-50%);
  &:before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #8c7c2b;
    vertical-align: middle;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #a24646;
    vertical-align: middle;
    margin: 0 0 0 5px;
  }
}
&__window-body {
  border: 2px solid #3c3f40;
  border-radius: 0 0 5px 5px;
  max-height: 354px;
  overflow-y: auto;
}
// terminal screen
&__screen {
  width: 100%;
  min-height: 350px;
  padding: 15px;
  background: #101010;
  border-radius: 0 0 3px 3px;
  overflow-y: auto;
  > span {
    marign: 0 0 5px 0;
  }
}
}

// terminal screen styles

.screen__row {
display: block;
line-height: 1.5;
color: #d4d3d3;
font-size: 14px;
font-family: Monospace, Arial, sans-serif;
min-height: 15px;
&.tab {
  padding-left: 30px;
}
&:last-of-type:after {
  content: '|';
  font-weight: bold;
  animation: cursor 1.5s linear infinite;
}
}
.screen {
&__success {
  color: #47cf73;
}
&__primary {
  color: #0ebeff;
}
&__default {
  color: #d4d3d3;
}
&__warning {
  color: yellow;
}
&__danger {
  color: #e85757;
}
&__dark {
  color: #888;
}
}

@keyframes cursor {
0% {
  opacity: 1;
}
25% {
  opacity: 0;
}
75% {
  opacity: 0;
}
100% {
  opacity: 1;
}
}

</style>
