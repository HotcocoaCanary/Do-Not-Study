// 用于保存token等数据   
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({

	state: {
		user: null,
		token: null
	},
	actions: {
		//数据初始化   
		init({
			state
		}) {
			let user = uni.getStorageSync("user");
			if (user) {
				state.user = JSON.parse(user)
				state.token = state.user.token
			}


		},
		logout({state}){
			state.user=null
			state.token=null
			uni.removeStorageSync("user")
			// uni.$emit("userLogin")
			
		},
		login({
			state
		}, user) {
			state.user = user
			state.token = user.token
			uni.setStorageSync('user', JSON.stringify(user))
			uni.$emit("userLogin",user)

		},
		updateInfo({state},phone){
		state.user.phone=phone
		uni.setStorageSync('user', JSON.stringify(state.user))
		
	},
	updateInfo2({state},data){
		Object.keys(data).forEach(k=>state.user[k]=data[k]),
		
		uni.setStorageSync('user', JSON.stringify(state.user))
	}
	}
})
