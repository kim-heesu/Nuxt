<template>
    <div class="modal-wrap" id="modalTest">
      <div class="modal-content">
        <div class="modal-head">
          <h3>모달 헤더입니다.</h3>
          <button type="button" class="btn-modal-close" @click="closeModal('modalTest')"><span class="blind">닫기</span></button>
        </div>
        <div class="modal-body">
          <p>모달안에 들어갈 내용입니다.</p>
        </div>
        <div class="modal-foot">
          <button type="button">확인</button>
          <button type="button" @click="closeModal('modalTest')">닫기</button>
        </div>
      </div>
      <div class="dimmed" @click="closeModal('modalTest')"></div>
    </div>
</template>
<script>
export default {
  methods: {
    closeModal (modalName) {
      this.$store.dispatch('closeModal', modalName)
    }
  }
}
</script>
