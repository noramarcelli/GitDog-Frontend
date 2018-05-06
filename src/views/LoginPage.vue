<template>
  <section class="login-page">
            <h1>Please Login:</h1>
            <form @submit.prevent="checkLogin">
                <input class="input is-danger is-small is-rounded" ref="txtUserName" type="text" placeholder="User name" v-model="user.name" autofocus/>
                 <br>
                <input class="input is-danger is-small is-rounded" type="password" placeholder="Password" v-model="user.password"/>
                 <br>
                <button class="button is-danger is-rounded" type="submit" :disabled="!this.user.name || !this.user.password">Login</button>
            </form>
        </section>
</template>

<script>
import {LOGIN} from '../store/userStore.js'

export default {
  name: 'login-page',
    data() {
        return {
            user: {name: 'Ilana', password: '12345'}
        }
    },
    created() {
        
    },
    methods: {
        checkLogin() {
            // this.$router.push('/');
            this.$store.dispatch({type: LOGIN, userCredentials:this.user})
            .then(res => {
                console.log('You have been logged-in!')
                this.$router.push('/swipe');
            })
            .catch(err => {
                console.log('Login Failed!');
                this.$refs.txtUserName.focus();
                this.$router.push('/');
            })
        }
    },
    computed: {
    }
    
}
</script>