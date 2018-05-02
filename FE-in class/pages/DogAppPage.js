import EventBusService, { SHOW_MSG } from '../services/EventBusService.js'

export default {
    template: `
        <section>
            <h1>DOGS for User</h1>
            {{dogs.length}} Dogs
            <button @click="add">ADD</button>
        </section>
    
    `,
    data() {
        return {
            dogs :[]
        }
    },
    created() {
        axios.get('/dog')
        .then(res => {
            console.log('DOGS', res.data);
            this.dogs = res.data;
        })
    },
    methods: {
        add() {
            axios.post('/dog', {name: 'New Dog'})
            .then(res => {
                console.log('NEW DOG', res.data);
            })
        }
    },
    computed: {
    }

}