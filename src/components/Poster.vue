<template>
  <div>
    <b-button id="show-btn" @click="showModal">Poster</b-button>

    <b-modal ref="my-modal" hide-footer hide-header>
      <div class="d-block text-center">
        <img v-bind:src="Poster" alt="" />
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["Poster"],

  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
  },
};
</script>

<style></style>
