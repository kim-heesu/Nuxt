<template>
  <div class="content-wrap">
    <div class="inner">
      <div>난어바웃</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'aboutPage',
  data () {
    return {
      thisRouter: this.$route.fullPath
    }
  },
  mounted () {
  },
  head () {
    return {
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Movie App' },
        { hid: 'og:title', property: 'og:title', content: '여긴 어바웃 페이지' },
        { hid: 'og:description', property: 'og:description', content: 'SEO이슈 땜에 생성했으니까 해결 잘 되나 확인은 해봐야겠쬬..?' },
        { hid: 'og:url', property: 'og:url', content: `${process.env.CLIENT_URL}${this.thisRouter}` }
      ]
    }
  }
}
</script>
