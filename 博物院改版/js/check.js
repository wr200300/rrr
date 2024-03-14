function tj() {
	// 获取姓名的值
	var name = document.getElementById('name').value
	// 获取手机号的值
	var phone = document.getElementById('phone').value
	// 获取微信的值
	var wechat = document.getElementById('wechat').value
	// 获取邮箱的值
	var email = document.getElementById('email').value
	// 获取内容的值
	var content = document.getElementById('content').value
	var regPhone = /^1[3456789]{1}\d{9}$/; //手机正则
	// 姓名不能为空
	if (!name) {
		alert('姓名不能为空')
		return false
	}
	// 手机不能为空
	if (!phone) {
		alert('手机不能为空')
		return false
	}
	// 手机号码不正确
	if (!regPhone.test(phone)) {
		alert('手机号码不正确')
		return false
	}
	// 微信不能为空
	if (!wechat) {
		alert('微信不能为空')
		return false
	}
	// 邮箱不能为空
	if (!email) {
		alert('邮箱不能为空')
		return false
	}
	// 内容不能为空
	if (!content) {
		alert('内容不能为空')
		return false
	}
	// 提交成功
	alert('提交成功')
	// 提交成功后跳转到首页
	window.location.href = 'index.html'
}