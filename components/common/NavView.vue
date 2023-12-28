<template>
  <nav>
    <ul>
        <li><nuxt-link to="/index">HOME</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/test">test</nuxt-link></li>
        <li><nuxt-link to="/testfolder/test">테스트안에 테스트</nuxt-link></li>
    </ul>
</nav>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  display: flex;
  gap: 1rem;
}

nav ul {
  display: flex;
  align-content: center;
  gap: 2rem;
  font-size: 1.8rem;
}
nav ul li {
  position: relative;
}
nav .depth {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  width: max-content;
  padding: 1rem;
  background: #fff;
  border: 1px solid #ddd;
  transform: translateX(-50%);
}
nav .depth li {
  margin: 0.5rem 0;
}
nav ul li:hover .depth {
  display: block;
}

.user-box > * {
  padding: 0.8rem 1.2rem;
  margin: 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}
/* nuxt active style */
.nuxt-link-active {
  color: green;
  font-weight: 800;
  border-bottom: 2px solid green;
}
</style>
