import EventBusService, { SHOW_MSG } from '../services/EventBusService.js'
import MsgService from '../services/MsgService.js'

export default {
    template: `
        <section class="chat-page">
            <router-link to="/">Home</router-link>
            <div>
                <label> <input type="radio" value="food" v-model="topic" />Food</label>
                <label><input type="radio" value="dogs" v-model="topic" />Dogs</label>
            </div>
            <h1>Chatting is Everything</h1>
            

            <ul class="msgs">
                <li v-for="msg in msgs" v-html="msg.txt">
                </li>
            </ul>
            <form @submit.prevent="send">
                <input @input="whenInput" v-model="msg.txt" autocomplete="off" />
                <button>Send</button>
            </form>
            <div style="background-color:yellow">
                {{status.txt}}
            </div>
        </section>
    `,
    data() {
        return {
            msg: {
                txt: ''
            },
            msgs: MsgService.msgs,
            status: MsgService.status,
            topic: 'food'
        }
    },
    created() {
        MsgService.init();
        // EventBusService.$emit(SHOW_MSG, { txt: 'Chat Loaded!' });
    },
    destroyed() {
        MsgService.destroy();
    },
    methods: {
        send() {
            MsgService.sendMsg(this.msg);
            // socket.emit('chat newMessage', chatMsg);
            this.msg.txt = '';
        },
        whenInput() {
            var who = (this.loggedinUser)? this.loggedinUser.name : 'Someone'
            MsgService.sendStatus(`${who} is typing...`)
        }
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        }
    },
    watch: {
        topic(newVal) {
            MsgService.setTopic(newVal);
        },
        'status.txt'() {
            setTimeout(()=>{
                this.status.txt = '';
            }, 1000)
        }
    }

}