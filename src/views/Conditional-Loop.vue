<template>
  <div>
    <div class="container">
      <Navbar />
    </div>

    <div class="container">
      <h1>Conditional & Loop</h1>
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
      <p>membuat looping for dengan atribut contoh v-for="variable in data" :key="variable.id"</p>
      <p>membuat kondisi if else elseif dengan atribut v-if v-else v-else-if contoh v-if="argument" v-else-if="product.length > 100"</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Conditional & Loop",
  components: {
    Navbar,
  },
  data() {
    return {
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
};
</script>

<style></style>
