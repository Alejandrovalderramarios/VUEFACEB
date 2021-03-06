import Vue from "vue";

// global stylesheet
import "./style.css";

// setup fake backend
import { fakeBackend } from "./_helpers";
fakeBackend();

import {
  initFacebookSdk,
  jwtInterceptor,
  errorInterceptor,
  router,
} from "./_helpers";
import App from "./App.vue";

// enable interceptors for http requests
jwtInterceptor();
errorInterceptor();

// wait for facebook sdk to start app
initFacebookSdk().then(startApp);  //With this function works Facebool Sdk

function startApp() {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}