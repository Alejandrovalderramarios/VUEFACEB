<template>
  <div>
    <h2>Facebook</h2>
    <p>All accounts from secure api end point</p>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>FB ID</th>
          <th>Full name</th>
          <th>Extra info</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.id">
          <td>{{ account.id }}</td>
          <td>{{ account.facebookId }}</td>
          <td>{{ account.name }}</td>
          <td>{{ account.extraInfo }}</td>
          <td>
            <router-link :to="`/edit/${account.id}`">Edit</router-link>
            <button @click="deleteAccount(account.id)">Delete</button>
          </td>
        </tr>
        <tr v-if="!accounts">
          <td colspan="5">Empty database</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { accountService } from '@/_services';

export default {
  data() {
    return {
      accounts: null
    };
  },
  created() {
    accountService.getAll().then((x) => (this.accounts = x));
  },
  methods: {
    deleteAccount(id) {
      accountService
        .delete(id)
        .then(() => (this.accounts = this.accounts.filter((x) => x.id !== id)));
    }
  },
}
</script>
