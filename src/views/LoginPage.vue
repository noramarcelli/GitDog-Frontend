<template>
  <section class="login-page">
            
            <form class="field" @submit.prevent="checkLogin">
                <h1>Please Login:</h1>
                <span class="control has-icons-left">
                    <input class="input is-danger is-small is-rounded" ref="txtUserName" type="text" placeholder="User name" v-model="user.name" autofocus/>
                    <!-- <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                    </span> -->
                    <br>
                    <input class="input is-danger is-small is-rounded" type="password" placeholder="Password" v-model="user.password"/>
                    <br>
                    <button class="button is-danger is-rounded" type="submit" :disabled="!this.user.name || !this.user.password">Login</button>
                </span>
                <!-- <p>Hello, {{this.user.namer}}</p> -->
            </form>
        </section>
</template>

<script>
import {LOGIN} from '../store/userStore.js'

export default {
  name: 'login-page',
    data() {
        return {
            user: {name: 'Nora', password: '1234'}
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
                let user = this.$store.getters.loggedInUserForDisplay;
                console.log({user})
                this.$socket.emit('userLoggedIn', user)
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

