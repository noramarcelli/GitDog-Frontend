import EventBusService, { SHOW_MSG } from '../services/EventBusService.js'

export default {
    template: `
        <section>
            <h1>Admin Only</h1>
        </section>
    
    `,
    data() {
        return {
            
        }
    },
    created() {
        EventBusService.$emit(SHOW_MSG, {txt: 'HomePage Loaded!'});
    },
    // beforeRouteEnter (to, from, next) {
    //     // called before the route that renders this component is confirmed.
    //     // does NOT have access to `this` component instance,
    //     // because it has not been created yet when this guard is called!
    //     console.log('beforeRouteEnter!!!', this);

    //     next(vm => {
    //         console.log('VM is: ', vm.loggedinUser);
    //         return false
    //     })

    //     // const loggedinUser = this.$store.getters.loggedinUser;
    //     // if (loggedinUser && !loggedinUser.isAdmin) {
    //     //     next();
    //     // }
    //   },
    methods: {
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser;
        }
    }

}