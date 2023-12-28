<template>
  <header>
      <div class="inner">
          <h1 class="logo"><nuxt-link to="/">Vue</nuxt-link></h1>
          <NavView />
      </div>
  </header>
</template>

<script>
import NavView from '~/components/common/NavView.vue'
export default {
  components: {
    NavView
  }
}
</script>

<style scoped>
header {
  border-bottom: 1px solid #ddd;
}
header .inner {
  display: flex;
  align-items: center;
  gap: 5rem;
  padding: 1rem;
}
.logo {
  display: inline-block;
  vertical-align: middle;
  font-size: 3rem;
  font-weight: 800;
  color: #006900;
}
</style>
