<template>
  <div class="content-wrap">
    <div class="inner">
      <div>난 메인</div>
      <button type="button" @click="changeModalTitle('약관뷰'),changeModalVisible('TermsView'), openModal('modalWrap')">
        모달오픈
      </button>
      <button type="button" @click="changeModalTitle('프라이버시뷰'),changeModalVisible('PrivacyView'), openModal('modalWrap')">
        모달오픈02
      </button>
      <ModalWrap v-if="$store.state.modalState.modalWrap" :modalTitle="modalTitle" :visibleModal="visibleModal"/>
      {{ $store.state.modalState.modalWrap }}
    </div>
  </div>
</template>

<script>
import ModalWrap from '@/components/modal/ModalWrap.vue'
export default {
  name: 'IndexPage',
  components: {
    ModalWrap,
  },
  data () {
		return {
      modalTitle: '',
			visibleModal: 'TermsView'
		}
	},
  methods: {
    openModal (modalName) {
			this.$store.dispatch('openModal', modalName)
		},
    changeModalTitle(title){
      this.modalTitle = title
    },
    changeModalVisible(visible){
      this.visibleModal = visible
    }
  }
}
</script>
