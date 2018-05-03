<template>
  <section class="login-page">
            <h1>Login:</h1>
            <form @submit.prevent="checkLogin">
                <input ref="txtUserName" type="text" placeholder="User name" v-model="user.name" />
                <input type="password" placeholder="Enter your Password" v-model="user.password"/>
                <button type="submit" :disabled="!this.user.name || !this.user.password">Login</button>
            </form>
        </section>
</template>

<script>
export default {
  name: 'login-page',
    data() {
        return {
            user: {name: '', password: ''}
        }
    },
    created() {
        
    },
    methods: {
        checkLogin() {
            this.$store.dispatch({type: 'login', userCredentials:this.user})
            .then(res => {
                console.log('You have been logged-in!')
                this.$router.push('/chat');
            })
            .catch(err => {
                console.log('Login Failed!');
                this.$refs.txtUserName.focus();
            })
        }
    },
    computed: {
    }
    
}
</script>