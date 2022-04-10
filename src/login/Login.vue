<template>
  <div>
    <div>
      <h4>Login user</h4>
      <div>
        <button @click="login">Login with Facebook</button>
      </div>
    </div>
  </div>
</template>
<script>
import { router } from "@/_helpers";
import { accountService } from "@/_services";

export default {
  created() {
    //Redirect to home if already logged in
    if (accountService.accountValue) {
      router.push("/");
    }
  },
  methods: {
    login: accountService.login,
  },
};
</script>