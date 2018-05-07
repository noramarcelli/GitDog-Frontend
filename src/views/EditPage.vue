<template>
    <section class="Msgs-page">
        <a @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle"></i></a>
        <p>This is a Temp Edit Page</p>
        
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
        <input class="input" type="text"/>
        <br>
        
        <div class="control">
            <label class="radio is-small"><input type="radio" name="answer" checked>Female</label>
            <label class="radio is-small"><input type="radio" name="answer">Male</label>
        </div>


        <!-- <textarea class="textarea" maxlength="40" size="60" type="text" v-model="setPlaceToEdit.desc"></textarea> -->
        <!-- RENDER DESC OF THE DOG -->
        <textarea class="textarea" maxlength="40" size="60" type="text"></textarea>
    </section>

    </section>
</template>


<script>
export default {};
</script>

<style>

</style>

