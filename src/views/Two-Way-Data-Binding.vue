<template>
  <div>
    <div class="container">
      <Navbar />
    </div>

    <div class="container">
      <h1>Two Way Data Binding</h1>
    </div>

    <div class="container">
      <label for="nama">Input</label>
      <input type="text" v-model="nama" id="nama" />

      <label for="output">Output</label>
      <input type="text" id="output" disabled v-bind:value="nama" />
      {{ nama }}
    </div>

    <div class="container">
      <p>Gunakan atribut v-model="<b>nama-data</b>"</p>
      <p>Untuk menggirim/sinkronasi data dengan data()</p>
      <p>contoh v-model="<b>nama</b>"</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Two Way Data Binding",
  components: {
    Navbar,
  },
  data() {
    return {
      nama: "",
    };
  },
};
</script>

<style></style>
