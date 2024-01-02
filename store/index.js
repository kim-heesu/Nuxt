export default {
	state: {
		modalState: {
			modalTest: false,
			modalToast: false,
			toastText: '기본값'
		}
	},
	getters: {},
	mutations: {
		openModal (state, modalName) {
			state.modalState[modalName] = true
		},
		closeModal (state, modalName) {
			state.modalState[modalName] = false
		}
	},
	actions: {
		openModal ({ commit }, payload) {
			commit('openModal', payload)
		},
		closeModal ({ commit }, modalName) {
			commit('closeModal', modalName)
		}
	}
}
