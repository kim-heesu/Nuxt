<template>
    <div class="modal" id="modalWrap">
        <div class="dimmed" @click="closeModal('modalWrap')"></div>
        <div class="modal-content">
            <div class="modal-head">
                <h2>{{ modalTitle }}</h2>
                <button type="button" class="btn-modal-close"  @click="closeModal('modalWrap')"><span class="blind">닫기</span></button>
            </div>
            <div class="modal-body">
				<component :is="modalContent"></component>
            </div>
        </div>
    </div>
</template>

<script>
import TermsView from '@/components/modal/TermsView.vue'
import PrivacyView from '@/components/modal/PrivacyView.vue'
export default {
	props: {
		modalTitle: {
			type: String,
			default: ''
		},
        visibleModal: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			modalContent: this.visibleModal,
		}
	},
	components: {
		TermsView,
        PrivacyView
	},
	methods: {
        closeModal (modalName) {
            this.$store.dispatch('closeModal', modalName)
        }
	}	
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.modal.active {
    display: block;
}
.modal .dimmed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}
.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80rem;
    height: 94.5rem;
    max-width: 90%;
    max-height: 80%;
    padding: 4rem;
    background: #fff;
    overflow: auto;
    z-index: 2;
    box-shadow: 0 0.4rem 2rem 0 rgba(81, 97, 72, 0.2);
    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -ms-border-radius: 2rem;
    -o-border-radius: 2rem;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
}
.modal-content {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.modal-content::-webkit-scrollbar {
    display: none;
}
.modal-content .modal-head {
    position: relative;
    text-align: center;
}
.modal-content .modal-head h2 {
    font-weight: 800;
    font-size: 2.4rem;
}
.modal-content .modal-head .btn-modal-close {
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    margin-top: -2rem;
    background: url(@/assets/img/ico_puppy_close_46x46.png) no-repeat center / 1.5rem;
}
.modal-content .modal-body {
    padding: 3.2rem 0 0;
}
@media screen and (max-width: 1024px) {
    .modal-content {
        padding: 0 2rem 3.2rem;
        border-radius: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius: 0;
        -o-border-radius: 0;
    }
    .modal-content .modal-head {
        min-height: 5.6rem;
    }
    .modal-content .modal-head h2 {
        display: none;
    }
    .modal-content .modal-head .btn-modal-close {
        right: -2rem;
    }
    .modal-content .modal-body {
        padding: 0;
    }
}
</style>
