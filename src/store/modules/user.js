export default {
	state: {
		username: window.localStorage.getItem('username') ?  window.localStorage.getItem('username') :null,
		user_id: window.localStorage.getItem('user_id') ?  window.localStorage.getItem('user_id') :null
	},
	getters: {
		username(state) {
			return state.username
		},
		user_id(state) {
			return state.user_id
		}
	},
	mutations: {
		LOGIN(state, params) {
			state.username = params.username
			state.user_id = params.user_id
			window.localStorage.setItem('username', params.username)
			window.localStorage.setItem('user_id', params.user_id)
		},
		LOGOUT(state) {
			state.username = null
			window.localStorage.removeItem('username')
		}
	},	
	actions: {
		login(context,params) {
			context.commit('LOGIN', params)
		},
		logout(context) {
			context.commit('LOGOUT')
		}
	}
}