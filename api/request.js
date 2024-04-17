import store from '@/store/index.js';
export default {
	config: {
		baseUrl: 'http://demonuxtapi.dishait.cn',
		appid: "bd9d01ecc75dbbaaefce",
		//请求拦截器
		beforRequest(options = {}) {
			return new Promise((resolve, reject) => {
				options.url = this.baseUrl + options.url
				console.log(store)
				options.method = options.method || 'GET'
				options.header = {
					appid: this.appid,
					token: store.state.token

				}
				//权限相关认证
				resolve(options)
			})
		}, //响应拦截器   
		handleResponse([err, res]) {
			return new Promise((resolve, reject) => {
				if (res.statusCode != 200 || res.data.msg == 'fail') {
					let msg = res.data.data || '请求失败'
					uni.showToast({
						title: msg,
						icon: 'none'
					});
					console.log(res.data)
					if(res.data.data=="Token 令牌不合法，请重新登录"){
						store.dispatch("logout")
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						}, 700);
						
					}
					return reject(msg)
				}
				resolve(res.data.data)

			})

		}
	},


	request(options = {}) {
		return this.config.beforRequest(options).then(opt =>
			uni.request(opt)).then(this.config.handleResponse)
	},
	/*
	a:1
	b:2
	c:3
	/mobile/index?a=1&b=2&c=3
	*/
	get(url, params = {}, options = {}) {
		options.url = url
		console.log(Object.keys(params).map(key => key + '=' + params[key]).join('&'));
		//拼接参数   两种情况  一种是有参数  一种无参数
		options.url += params ? ('?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')) : ''
		options.method = 'GET'

		return this.request(options)

	},
	post(url, data = {}, options = {}) {
		options.url = url
		options.method = 'POST'
		options.data = data
		
		return this.request(options)
	}, //专门上传文件的操作   

	upload(url, data = {}, options = {}) {
		options.url = url

		return this.config.beforRequest(options).then(opt => {
			return new Promise((resolve, reject) => {
			const uploadTask =	uni.uploadFile({
					url: opt.url, //仅为示例，非真实的接口地址
					filePath: data.filePath,
					name: data.name,
					header: opt.header,
					success: (res) => {
						console.log(res.data);
						if (res.statusCode != 200) {
							reject("上传失败")
							return uni.showToast({
								title: "上传失败",
								icon: 'none'
							})
						}
						let message = JSON.parse(res.data);
						resolve(message.data)
					},
					fail: (err) => {
						console.log(err)
						reject(err.message)
					}
				});
				uploadTask.onProgressUpdate((res) => {
					if(options.onProgress&& typeof options.onProgress=='function')
						options.onProgress(res.progress)
						// 测试条件，取消上传任务。
					});

			})




		})
	}
}
