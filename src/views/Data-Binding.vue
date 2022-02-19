<template>
  <div>
    <div class="container"><Navbar /></div>
    <div class="container">
      <h1>Data Binding</h1>
      <a v-bind:href="url" v-bind:id="id">Go to Anggiat's Github</a>
    </div>
    <hr />
    <div class="container">
      <p>Untuk memasukan data kedalam atribut tidak bisa menggunakan {{}}</p>
      <p>Agar atribut atau kelas dinamis</p>
      <p>Gunakan v-bind:<b>nama-atribut</b>="data-atribut"</p>
      <p>contoh v-bind:<b>id</b>="id"</p>
    </div>
  </div>
</template>

<script>
// import Navbar from "@components/Navbar.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Data-Binding",
  components: { Navbar },
  data() {
    return {
      url: "http://github.com/anggiatm",
      id: "a",
    };
  },
};
</script>

<style></style>
