<template>
  <div class="hello">
    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div> 
    <div v-if="signedIn">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <img  alt="Vue logo" src="../assets/logo.png">
        <amplify-sign-out></amplify-sign-out>
    </div>
    {{ signedIn }} 
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'HelloWorld',
  data() {
    return {
      signedIn: false
    }
  },

  props: {
    msg: String,
    signedIn: false
  },

  created(){
    this.findUser();

    AmplifyEventBus.$on('authState', info => {
      if(info === 'signedIn') {
        this.findUser();
      } else {
        this.signedIn = false
      }
    })
  },

  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        this.signedIn = true;
        console.log(user)

      } catch(error) {
        this.signedIn = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
