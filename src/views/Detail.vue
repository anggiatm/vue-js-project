<template>
  <div>
    <div class="container">
      <div class="mt-4" v-b-hover="handleHover">
        <b-card v-bind:img-src="detail.Poster" img-alt="Card image" img-left class="mb-3" :class="isHovered ? 'text-danger' : ''">
          <b-card-text>
            <div class="row ml-2">
              <h3>{{ detail.Title }} ({{ detail.Year }})</h3>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Rated</div>
              <div class="col-8">{{ detail.Rated }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Released</div>
              <div class="col-8">{{ detail.Released }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Runtime</div>
              <div class="col-8">{{ detail.Runtime }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Genre</div>
              <div class="col-8">{{ detail.Genre }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Director</div>
              <div class="col-8">{{ detail.Director }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Writer</div>
              <div class="col-8">{{ detail.Writer }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Actors</div>
              <div class="col-8">{{ detail.Actors }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Language</div>
              <div class="col-8">{{ detail.Language }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Country</div>
              <div class="col-8">{{ detail.Country }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Awards</div>
              <div class="col-8">{{ detail.Awards }}</div>
            </div>
            <div class="row ml-2 mt-1">
              <div class="col-2">Plot</div>
              <div class="col-8">{{ detail.Plot }}</div>
            </div>
          </b-card-text>
          <router-link :to="{ name: 'Home' }">Back</router-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: [],
    };
  },
  methods: {
    getDetail() {
      axios.get(`http://www.omdbapi.com/?apikey=715289b&i=${this.$route.params.id}`).then((response) => (this.detail = response.data));
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>

<style></style>
