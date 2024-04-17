import api from "./request.js"
export default {

	reg(data) {
		return api.post("/mobile/reg", data)
	},
	//登录的方法  
	login(data) {
		return api.post("/mobile/login", data)

	},
	//获取手机验证码
	getCaptcha(data) {
		return api.post("/mobile/get_captcha", data)

	},
	//绑定手机号
	bindMobile(data) {
		return api.post("/mobile/bind_mobile", data)

	},
	//忘记密码   
	forget(data) {
		return api.post("/mobile/forget", data)
	},
	//退出  
	logout() {
		return api.post("/mobile/logout")
	},
	//修改密码  
	updatePassword(data) {
		return api.post("/mobile/update_password", data)
	}, //文件上传
	upload(filePath, onProgress = null) {
		return api.upload("/mobile/upload", {
			filePath
		}, {
			onProgress
		})

	},
	//退出
	logout(){
		return api.post("/mobile/logout")
	},
	//修改资料 
	updateInfo(data) {
		return api.post("/mobile/update_info", data)
	},
	//获取手机验证码
	getCaptcha(data){
		return api.post("/mobile/get_captcha",data)
	},
	//绑定手机号
	bindMobile(data){
		return api.post("/mobile/bind_mobile",data)
	},
	//忘记密码   
	forget(data) {
		return api.post("/mobile/forget", data)
	}
}
