<template>
    <section class="edit-page">
        <a class="done" @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle"></i></a>
        <!-- <p>This is a Temp Edit Page</p> -->
        
        <section class="profile-imgs">
            <div class="block">
                <div class="columns">
                    <div class="column is-8">
                        <!-- PROFILE PICTURE - THE FIRST -->
                        <img src="../../public/img/dogs/stella_1.jpeg">
                        <!-- <a><i class="fa fa-minus-circle"></i></a> -->
                    </div>
                    <div class="column is-4">
                        <img src="../../public/img/dogs/stella_1.jpeg">
                        <!-- <a><i class="fa fa-plus-circle"></i></a> -->
                        <img src="../../public/img/dogs/stella_1.jpeg">
                        <!-- <a><i class="fa fa-plus-circle"></i></a> -->
                    </div>
                    
                </div>
                <div class="columns">
                    <div class="column is-4">
                            <img src="../../public/img/dogs/stella_1.jpeg">
                        </div>
                        <div class="column is-4">
                            <img src="../../public/img/dogs/stella_1.jpeg">
                        </div>
                        <div class="column is-4">
                            <img src="../../public/img/dogs/stella_1.jpeg">
                        </div>
                </div>
            </div>
        </section>

    <section class="edit-details">
        <!-- <input class="message-header" type="text" v-model="setPlaceToEdit.name"/> -->
        <!-- RENDER NAME OF THE DOG -->
        <label class="name">Name:</label>
        <input class="input is-small is-danger" type="text" placeholder="NAME OF THE DOG"/>
        <label class="age">Age:</label>
        <input class="input is-small is-danger" type="text" placeholder="AGE"/>

        <br>
       <div class="specs"> 
        <div class="select is-danger is-small">
            <label>Gender:</label>
                <select>
                    <!-- <option disabled>Gender</option> -->
                    <option>Female</option>
                    <option>Male</option>
                </select>
                <br>
            </div>
            <div class="select is-danger is-small">
                <label>weight &nbsp;&nbsp;</label>
                <select>
                    <option>0-5KG</option>
                    <option>6-15KG</option>
                    <option>16-30KG</option>
                    <option>31-45KG</option>
                    <option>46KG &amp; up</option>
                </select>
            </div>
       </div>
        

        <!-- <textarea class="textarea" maxlength="40" size="60" type="text" v-model="setPlaceToEdit.desc"></textarea> -->
        <!-- RENDER DESC OF THE DOG -->
        <div class="desc">
            <label class="desc about">About:</label>
            <textarea class="textarea is-small is-danger" maxlength="40" size="60" type="text" placeholder="DEC DOG"></textarea>
        </div>    

        <div class="select is-danger is-small">
           <label>City/Region &nbsp;&nbsp;</label>
            <select>
                <optgroup label="HaMerkaz">
                    <option>Tel Aviv</option>
                    <option>Ramat Gan</option>
                    <option>Rishon Letzion</option>
                    <option>Bat Yam</option>
                </optgroup>
                <optgroup label="HaSharon">
                    <option>Natanya</option>
                    <option>Hertzeliya</option>
                    <option>Raanana</option>
                    <option>Kfar Saba</option>
                </optgroup>
                <optgroup label="HaDarom">
                    <option>Ashdod</option>
                    <option>Ashkelon</option>
                    <option>Beer Sheva</option>
                </optgroup>
                <optgroup label="HaTzafon"> 
                    <option>Haifa</option>
                    <option>Ako</option>
                    <option>Hadera</option>
                    <option>Nahariya</option>
                    <option>Krayot</option>
                </optgroup>
            </select>
            <br>
        </div>
        <br>
        
    </section>

    </section>
</template>


<script>
export default {};
</script>

<style scoped>
.input, select, .edit-page, textarea, .weight-slider, .specs,  .desc {
    font-family: "CutiePatootie";
    padding: 5px;
    margin: 10px;
    font-size: 16px;
}
label {
    font-size: 16px;
    font-weight: bold;
    display: block;
}
.name, .age, .about {
    left: 5px;
}
.done{
    font-size: 50px;
    color: black;
}
</style>

