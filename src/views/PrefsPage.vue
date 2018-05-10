<template>
    <section class="prefs-page">
    <a @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle block done"></i></a>
    <div class="settings">
        <p>Please select your interests:</p>
        <div class="select is-danger is-small ">
            <label class="block">Show me:</label>
            <select class="block">
                <!-- <option disabled>Gender</option> -->
                <option>Female</option>
                <option>Male</option>
            </select>
            <br>
        </div>

        <div class="select is-danger is-small ">
            <label class="block">weight group&nbsp;&nbsp;</label>
            <select class="block" multiple>
                <option>0-5KG</option>
                <option>6-15KG</option>
                <option>16-30KG</option>
                <option>31-45KG</option>
                <option>46KG &amp; up</option>
            </select>
        </div>

        <div class="select is-danger is-small ">
            <label class="block">City/Region &nbsp;&nbsp;</label>
            <select class="block" multiple>
                    <option class="optionGroup">HaMerkaz</option>
                    <option class="optionChild">Tel Aviv</option>
                    <option class="optionChild">Ramat Gan</option>
                    <option class="optionChild">Rishon Letzion</option>
                    <option class="optionChild">Bat Yam</option>
                    <option class="optionGroup">HaSharon</option>
                    <option class="optionChild">Natanya</option>
                    <option class="optionChild">Hertzeliya</option>
                    <option class="optionChild">Raanana</option>
                    <option class="optionChild">Kfar Saba</option>
                    <option class="optionGroup">HaDarom</option>
                    <option class="optionChild">Ashdod</option>
                    <option class="optionChild">Ashkelon</option>
                    <option class="optionChild">Beer Sheva</option>
                    <option class="optionGroup">HaTzafon</option>
                    <option class="optionChild">Haifa</option>
                    <option class="optionChild">Ako</option>
                    <option class="optionChild">Hadera</option>
                    <option class="optionChild">Nahariya</option>
                    <option class="optionChild">Krayot</option>
            </select>
            <br>
        </div>
    </div>    

        <div class="contact">
            <label >Contact Us:</label>

            <button class="button is-danger is-small is-rounded">Help &amp; support</button>
            <button class="button is-danger is-small is-rounded" @click="logout">Logout</button>
            <!-- <button class="button block is-danger is-small is-rounded" v-if="loggedinUser" @click="logout">{{loggedinUser.name}} Logout</button> -->
        </div>
    </section>
</template>


<script>
export default {
    methods: {
        logout() {
            console.log('Logging out!');
            this.$store.dispatch('logout').then(()=>{
                this.$router.push('/')
            })
        }
    },
}
</script>

<style scoped>
.input, select, .edit-page, textarea, .weight-slider, .specs,  .desc{
    font-family: "CutiePatootie";
    padding: 5px;
    margin: 10px;
    font-size: 16px;
}
p {
    font-size: 3rem;
    font-family: "CutiePatootie";
}
.optionGroup {
    font-weight: bold !important;
    font-style: italic;
}
.optionChild {
    padding-left: 15px;
}
label {
    font-family: "CutiePatootie";
    font-size: 20px;
    font-weight: bold;
    display: block;
}
.done{
    font-size: 50px;
    color: black;
}
.block {
    display: block;
}
button {
    width: 150px;
    font-family: "CutiePatootie";
    font-size: 2em;
    margin: 10px;
}
.contact-block{
    margin: o auto;
    margin-top: 200px;
}
</style>

