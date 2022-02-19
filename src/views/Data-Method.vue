<template>
  <div>
    <div class="container">
      <Navbar />
    </div>

    <div class="container">
      <h2>Data & Method</h2>
    </div>

    <div class="container">
      <h4>Nama : {{ nama }}</h4>
      <h4>Prodi : {{ prodi }}</h4>
      <button @click="changeName">Change Name</button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Data-Method",
  components: {
    Navbar,
  },

  // DATA DISIMPAN DISINI
  data() {
    return {
      nama: "Anggiat Mora",
      prodi: "Ilmu Komputer",
    };
  },

  // METHOD DISINI
  methods: {
    changeName() {
      //  for (let i = 1; i < 10; i++) {
      //    this.nama = i;
      //  }
      this.nama = "asjhdkj";
    },
  },
};
</script>

<style></style>
