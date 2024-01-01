<template>
  <div class="wrap">
      <HeaderView />
      <Nuxt />
      <FooterView />
  </div>
</template>

<script>
import HeaderView from '@/components/common/HeaderView.vue'
import FooterView from '@/components/common/FooterView.vue'
export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>
