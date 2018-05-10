<template>
    <section class="chat-page">
        <!-- <a @click="$router.push('/msgs')" title="Done"><i class="fa fa-check-circle"></i></a> -->
        <a @click="$router.push('/msgs')" title="Done"><i class="fa fa-arrow-alt-circle-left"></i></a>
        <!-- <p>This is a Temp chat Page</p> -->

        <section class="chat-container">
            <div class="chat">
            <p class="msg-box" :class="{'from-me': msg.from === user._id}"
                v-for="(msg, idx) in msgs" :key="idx"> {{ msg.txt }}</p>
    

        
            <form class="chat1 inline" @submit.prevent="sendMsg">
                <input v-model="newMessageTxt" class="input is-medium is-danger inline" type="text"/> 
                <button class="button is-medium is-danger"  title="Smiley">&#9786;</button>
                <button class="button is-medium is-danger"  title="Gift"><i class="fa fa-gift"></i></button>
                <button @click.prevent="sendMsg" class="button is-medium is-danger send" title="Send"><i class="fa fa-location-arrow"></i></button>
            </form>

        </div>
        </section>
    </section>
</template>


<script>
export default {
  data() {
      return {
          matchId: null,
          newMessageTxt: '',
        //   msgs: [
        //       {txt: 'Yo yo yo'},
        //       {txt: 'Whaddup?'},
        //       {txt: 'lublub'},
        //       {txt: 'HAHA'},
        //   ]
      }
  },
  created() {
    //   OUR-ROOM IS THE NAME OF THE ROOM FOR THE CHAT WHIT OURSELF
      this.matchId = this.$route.params.matchId;
      this.$socket.emit('chatRequest',{username: 'puki', roomName: this.matchId});
  },
  computed: {
      msgs() {
          return this.$store.getters.currMsgs(this.matchId);
      },
      user() {
          return this.$store.getters.loggedInUserForDisplay;
      }
  },
  sockets: {
      newChatMember(memberName) {
          console.log('there is a new member in our chat. username:', memberName)
      },
      newMsg(data) {
          console.log('in component:')
          console.log({data})
        //   this.msgs.push({txt});
      }
  },
  methods: {
        sendMsg() {
            console.log('inside sendMsg')
            // this.msgs.push({txt: 'me: ' + this.newMessage})
            let newMessage = {
                txt: this.newMessageTxt,
                from: this.user._id,
                at: Date.now(),
                isRead: false
            }
            this.newMessageTxt = '';
            this.$socket.emit('newMsg', newMessage)
        }
  }
}
</script>

<style scoped>
p{
    font-size: 20px;
    font-family: "BiggerLove";
}
.inline {
    display: inline;
}
.done{
    font-size: 50px;
    color: black;
}
button, input {
    font-family: "BiggerLove";
    padding: 2px;
    margin: 1px;
    /* font-size: 1.7em !important; */
}
.send {
    width: 70px;
}
input {
    width: 70%;
}
.msg-box{
    /* width: 80%; */
    width: fit-content;
    background: #ff386038;
    margin: 5px;
    border-radius: 5px;
    /* text-align: left; */
    padding: 3px 10px;
    align-self: flex-start;
}
.chat-container {
    display: flex;
    justify-content: center;
}
.chat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(153, 153, 153, 0.27);
    padding: 5px;
    width: 80%;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 1px #bcbcbc;
}


.msg-box.from-me {
    /* text-align: right; */
    align-self: flex-end;
    background: lightgray;
}

</style>

