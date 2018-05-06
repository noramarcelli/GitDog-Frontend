
  <template>
      <section class="details"> 
        <!-- <h1>Details</h1> -->
        <p>{{dog.description}}</p>
        <!-- <p>{{dog.weight}}</p> -->
        <!-- <p>{{dog.city}}</p> -->
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
  .details {
    font-family: "CutiePatootie";
    /* font-weight: bold; */
    font-size: 1.5em;
  }
</style>
      
