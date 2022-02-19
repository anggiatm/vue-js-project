<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/data-method">Data & Method</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/data-binding">Data Binding</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/two-way-data-binding">Two-Way Data Binding</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/conditionals-loop">Conditionals & Loop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/lifecycle-hooks">Lifecycle Hooks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/computed-properties">Computed Properties</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/components">Components</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/props">Props</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/custom-events">Custom Events</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/vue-router">Vue Router</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>

          <!-- <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">Keranjang <b-icon-bag></b-icon-bag><span class="badge badge-success ml-2">0</span></router-link>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
