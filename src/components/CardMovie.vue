<template>
  <div class="mt-4" v-b-hover="handleHover">
    <b-card v-bind:img-src="movie.Poster" img-alt="Card image" img-top class="mb-3" :class="isHovered ? 'text-danger' : ''" border-variant="success">
      <b-card-text>
        <div class="row ml-2">
          <h6>{{ movie.Title }} ({{ movie.Year }})</h6>
        </div>
        <router-link :to="{ name: 'detail', params: { id: movie.imdbID } }">Movie Detail</router-link>
        <Poster :Poster="movie.Poster" />
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import Poster from "@/components/Poster.vue";
export default {
  props: ["movie"],
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },
  },
  components: {
    Poster,
  },
};
</script>

<style></style>
