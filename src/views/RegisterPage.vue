<template>
     <section class="register-page">
        <h1>Please Register:</h1>
        <form @submit.prevent="register">
            <input class="input is-danger is-small is-rounded" type="text" placeholder="username" v-model="user.name" />
            <br>
            <input class="input is-danger is-small is-rounded" type="password" placeholder="password" v-model="user.password" />
             <br>
            <button class="button is-danger is-rounded" type="submit">Register</button>
        </form>
    </section>
</template>

<script>
import UserService from '../../services/UserService.js'

export default {
    name: 'register-page',
    created() {
        
    },
    data() {
        return {
            user: {name: '', password: ''}
        }
    },
    methods: {
        register() {
            UserService.register(this.user)
            .then(res => {
                console.log('Register Completed, now try to log-in!')
                this.$router.push('/login');
            })
            .catch(err => console.log('Register Failed!'))
        }
    },
    computed: {
    
    }
}
</script>