<template>
  <div>
    <div class="container"><Navbar /></div>

    <div class="container"><h1>Computed Properties</h1></div>

    <div class="container">
      <input type="text" v-model="cari" placeholder="cari" />
    </div>

    <div class="container">
      <ul>
        <li v-for="item in cariData" :key="item.id">{{ item.id }} - {{ item.title }} - {{ item.price }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Computed Properties",
  components: {
    Navbar,
  },
  data() {
    return {
      cari: "",
      products: [
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
      ],
    };
  },

  computed: {
    cariData() {
      return this.products.filter((item) => {
        return item.title.match(this.cari);
      });
    },
  },
};
</script>

<style></style>
