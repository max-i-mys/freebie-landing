burgerBtn.onclick = function () {
	if (!this.classList.contains('open')) {
			this.classList.add('open')
			burgerMenu.classList.add('open')
	} else {
			this.classList.remove('open')
			burgerMenu.classList.remove('open')
	}
}