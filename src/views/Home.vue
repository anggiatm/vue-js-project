<template>
  <div class="home">
    <div class="container"><Navbar /></div>
    <div class="container"><Card /></div>

    <Hero />
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Card,
    Hero,
  },
};
</script>
