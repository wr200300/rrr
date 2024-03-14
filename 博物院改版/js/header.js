window.addEventListener('scroll', function() {
	// 获取滚动条滚动距离顶部高度
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	// 距离顶部距高度大于100时
	if (scrollTop > 100) {
		document.getElementById('header').style.position = 'fixed'
	} else {
		document.getElementById('header').style.position = 'relative'
	}
});