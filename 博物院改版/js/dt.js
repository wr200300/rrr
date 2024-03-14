const navs = document.querySelector('.navs')
const boxItems = document.querySelectorAll('.box-item')
const navItems = document.querySelectorAll('.nav-item')
// 内容区 -> 电梯导航
window.addEventListener('scroll', function() {
	let n = document.documentElement.scrollTop
	// 当滚动到某一位置时，就让电梯导航显示出来
	if (n >= 80) {
		navs.classList.add('show')
	} else {
		navs.classList.remove('show')
	}

	// 滚动页面激活对应导航栏
	// 先移除其他navsActive类
	const old = document.querySelector('.navs .navsActive')
	old && old.classList.remove('navsActive')
	// 直接判断当前滑动距离是否超过每个大盒子的offsetTop值，超过了就说明在该盒子区间内
	for (let i = 0; i < boxItems.length; i++) {
		if (n + 150 >= boxItems[i].offsetTop) {
			let old = document.querySelector('.navsActive')
			old && old.classList.remove('navsActive')
			navItems[i].classList.add('navsActive')
		}
	}
})

// 电梯导航 -> 内容区
for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener('click', function() {
		window.scrollTo({
			top: boxItems[i].offsetTop,
			behavior: 'smooth' // smooth滚动效果  
		});
	})
}