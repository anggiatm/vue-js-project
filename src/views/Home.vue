<template>
  <div class="home">
    <div class="container"><Navbar /></div>
    <div class="container"><h1>Home</h1></div>

    <div class="container">
      <div class="row">
        <div class="col-3">
          <CardMovie v-for="(movie, i) in movie_list" :key="i" :movie="movie" />
          <!-- <CardMovie /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardMovie from "@/components/CardMovie.vue";
import axios from "axios";
// import Card from "../components/Card.vue";

export default {
  name: "Home",
  data() {
    return {
      page: 1,
      movie_list: [],
    };
  },
  components: {
    Navbar,
    CardMovie,
    //     Card,
  },
  methods: {
    getMovie() {
      axios.get(`http://www.omdbapi.com/?apikey=715289b&s=Batman&page=${this.page}`).then((response) => (this.movie_list = [...this.movie_list, ...response.data.Search]));
    },

    handleScroll() {
      console.log(this.page);
      if (window.scrollY + window.innerHeight >= document.documentElement.offsetHeight) {
        this.page++;
        this.getMovie();
      }
      console.log(window.scrollY, window.innerHeight, document.body.scrollHeight);
    },
  },
  mounted() {
    this.getMovie();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
