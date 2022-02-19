<template>
  <div>
    <div class="container">
      <Navbar />
    </div>

    <div class="container">
      <h1>Life Cycle Hooks</h1>
    </div>

    <div class="container">
      <div v-if="products.length > 10">
        {{ products.length }}
      </div>
      <div v-else>
        <ul>
          <li v-for="item in products" :key="item.id">{{ item.id }} - {{ item.title }} - {{ item.price }}</li>
        </ul>
      </div>
    </div>

    <div class="container">
      <p>Mengetahui kapan komponen dibuat, ditambahkan ke DOM, diperbaharui, dihancurkan</p>
      <p>Contoh:</p>
      <ul>
        <li>beforeCreate()</li>
        <li>created()</li>
        <li>beforeMount()</li>
        <li>mounted()</li>
        <li>beforeUpdate()</li>
        <li>updated()</li>
        <li>beforeDestroy()</li>
        <li>destroyed()</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Life Cycle Hooks",
  components: {
    Navbar,
  },
  data() {
    return {
      products: [],
    };
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Created");
    this.products = [
      {
        id: 1,
        title: "product 1",
        price: "200",
      },
      {
        id: 2,
        title: "product 2",
        price: "300",
      },
      {
        id: 3,
        title: "product 3",
        price: "400",
      },
      {
        id: 4,
        title: "product 4",
        price: "500",
      },
    ];
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
};
</script>

<style></style>
