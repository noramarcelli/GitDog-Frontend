import EventBusService, { SHOW_MSG } from '../services/EventBusService.js'

export default {
    template: `
        <section>
            <img src="img/logo.png"/>
        </section>
    
    `,
    data() {
        return {
            
        }
    },
    created() {
        EventBusService.$emit(SHOW_MSG, {txt: 'HomePage Loaded!'});
    },
    methods: {
    },
    computed: {
    }

}