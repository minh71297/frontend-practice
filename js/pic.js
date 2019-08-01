	// Hiển thị, lựa chọn chuyển ảnh phần About-human
	var picIndex=0;
	showPics(0);	
	loopPics(0);
	function loopPics(n) {
		if (true)
		setTimeout(function(){
			picIndex += n;
			plusPics(n);
			loopPics(n);
		}, 4000);
	}
	function showPics() {
		var i;
		var pics = document.getElementsByClassName('john-img');
		var dots = document.getElementsByClassName('dot-abj');
		var content = document.getElementsByClassName('each-human');
		for (i= 0; i < pics.length; i++) {
			pics[i].style.display = "none";
			content[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		pics[picIndex].style.display = "block";
		content[picIndex].style.display = "block";
		dots[picIndex].className += " active";
		picIndex++;
		if (picIndex > pics.length - 1) {
			picIndex = 0;
		}
		if (picIndex < 0) {
			picIndex = pic.length - 1;
		}
	}


	function plusPics(n) {
    showPics(picIndex += n);
	}	

	function currentPic(n) {
		showPics(picIndex = n);
	}

	// Hiển thị, lựa chọn chuyển mục phần From Notice Board
	var newsIndex;
	function showNews() {
		var i;
		var lastnews = document.getElementsByClassName('news');
		var title = document.getElementsByClassName('nb-head');
		for (i = 0; i < lastnews.length; i++) {
			lastnews[i].style.display = "none";
			title[i].className = title[i].className.replace(" in-use", "");
		}
		lastnews[newsIndex].style.display = "block";
		title[newsIndex].className += " in-use";
	}

	showNews(newsIndex = 0);

	function currentNews(m) {
		showNews(newsIndex = m);
	}