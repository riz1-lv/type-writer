import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true
}).pause(1000)
.type('<span>👋</span>', {
  html: true
})
.type("&nbspHi there! ")
.pause(750)
.delete()
.pause(100)
.type("I'm riz1-lv")
.type('<span>👋</span>', {
  html: true
})
.pause(750)
.move(-1)
.delete(7, { deleteSpeed: 120})
.pause(500)
.type("&nbspRizwan Sheikh")
.pause(1000)
.move("END")
.delete(14)
.pause(500)
.type("a developer ")
.type('<span>&nbsp🚀</span>', {
  html: true
})
.pause(1000)
.go()