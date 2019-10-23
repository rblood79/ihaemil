<template>
  <div id="contentwrapper">
    <h2>better then simple, easy the best</h2>
    <h3>
      누구나 쉽고 더 편리하게 사용할수 있는 프로그램<br/>
      그런 프로그램을 만드는 것이 해밀소프트의 목표입니다.
    </h3>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  letter-spacing: -0.05em;
  font-family: "Raleway", "Work Sans", "Roboto", sans-serif;
}
h2 {
  font-size: 2.143em;
  font-weight: 100;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  line-height: 1em;
  letter-spacing: -0.05em;
  margin-bottom: 0.5em;
  font-family: "Raleway", "Work Sans", "Roboto", sans-serif;
  cursor: default;
}
h3 {
  font-size: 0.857em;
  letter-spacing: -0.05em;
  line-height: 1.4em;
  font-family: "Raleway", "Work Sans", "Roboto", sans-serif;
}
b {
  font-weight: 800;
  white-space: nowrap;
}
a {
  color: #006bb6;
  font-weight: 800;
  text-decoration: none;
  position: relative;
  transition: 0.2s color ease-out;
  -moz-transition: 0.2s color ease-out;
  -webkit-transition: 0.2s color ease-out;
}
a:before {
  content: " ";
  background-color: #ffffff;
  width: 100%;
  height: 2px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  z-index: -1;
  transition: 0.2s height ease-out;
  -moz-transition: 0.2s height ease-out;
  -webkit-transition: 0.2s height ease-out;
}
a:hover {
  color: #006bb6;
}
a:hover:before {
  height: 100%;
}
p,
div.paragraph {
  margin: 0.6em 0;
  color: #006bb6 !important;
}

#contentwrapper {
  max-width: 100%;
  width: 750px;
  height: calc(100vh - 112px);
  margin: auto;
  padding: 24px;
  //text-transform: uppercase;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul#things {
  display: inline-block;
  overflow: hidden;
  height: 1.4em;
  vertical-align: top;
  width: 120px;
  margin: 0;
  padding: 0;
  position: relative;
}
ul#things li {
  white-space: nowrap;
  display: block;
  font-weight: 800;
  position: absolute;
  top: 100%;
  transition: 0.5s all;
  -moz-transition: 0.5s all;
  -webkit-transition: 0.5s all;
}
ul#things li:after {
  font-weight: 100;
  content: ".";
}
@keyframes show-thing {
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
}
ul#things li.active {
  top: 0px;
  animation-name: show-thing;
  -moz-animation-name: show-thing;
  -webkit-animation-name: show-thing;
  animation-duration: 0.5s;
  -moz-animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
}
ul#things li.default.active {
  animation-duration: 0s;
}

#social svg {
  margin-right: 5px;
}
#social a:before {
  display: none;
}
#social svg circle,
#social svg path,
#social svg {
  transition: 0.3s all;
  -moz-transition: 0.3s all;
  -webkit-transition: 0.3s all;
}
#social svg circle {
  opacity: 0;
}
#social a:hover svg circle {
  opacity: 1;
}

#social a:hover svg#svg-email path.icon {
  fill: #00980b;
}
#social a:hover svg#svg-twitter path.icon {
  fill: #55acee;
}
#social a:hover svg#svg-facebook path.icon {
  fill: #3b5998;
}
#social a:hover svg#svg-gplus path.icon {
  fill: #dc4e41;
}
#social a:hover svg#svg-skype path.icon {
  fill: #009ee5;
}
#social a:hover svg#svg-github path.icon {
  fill: #333333;
}
#social a:hover svg#svg-linkedin path.icon {
  fill: #4875b4;
}
#social a:hover svg#svg-xing path.icon {
  fill: #026466;
}
@media (max-width: 750px) {
  #contentwrapper {
    padding: 16px;
    color: #009ee5;
  }
}
</style>
