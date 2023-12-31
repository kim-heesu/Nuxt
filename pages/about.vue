<template>
  <div>난어바웃</div>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Movie App' },
        { hid: 'og:title', property: 'og:title', content: '여긴 어바웃 페이지' },
        { hid: 'og:description', property: 'og:description', content: 'SEO이슈 땜에 생성했으니까 해결 잘 되나 확인은 해봐야겠쬬..?' },
        { hid: 'og:url', property: 'og:url', content:`${process.env.CLIENT_URL}${this.$route.fullPath}`}
      ]
    }
  }
}
</script>
