
  <template>
      <section class="details"> 
        <p>{{dog.description}}</p>
        <p>Breed: {{dog.breed}}</p>
        <p>Age: {{dog.age}}</p>
        <p>Weight: {{dog.weight}}</p>
        <p>City: {{dog.city}}</p>
        
      </section>
    </template>


<script>
export default {
  props: ["dog"],
  computed: {
    userDescription() {
      return this.$store.getters.userDescription;
    }
  }
};
</script>

<style scoped>
  .details, p {
    font-family: "CutiePatootie";
    /* font-weight: bold; */
    font-size: 1.2em;
    margin: 4px !important;
  }
</style>
      
