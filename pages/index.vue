<template>
  <div class="content-wrap">
    <div class="inner">
      <div>난 메인</div>
      <button type="button" @click="openModal('modalTest')">모달오픈</button>
      <modalTest v-if="modalState.modalTest == true"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import modalTest from '@/components/modal/ModalTest.vue'
export default {
  name: 'IndexPage',
  components: {
    modalTest
  },
  computed: {
    ...mapState(['modalState'])
  },
  methods: {
    openModal (modalName) {
      this.$store.dispatch('openModal', modalName)
    }
  }
}
</script>
