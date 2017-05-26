window.onload = function() {
	var oli = snav.getElementsByTagName('li');
	var oDiv = snav.getElementsByTagName('div');
	banner_ul.style.width = banner_ul.children.length * banner_ul.children[0].offsetWidth + 'px';
	var Index = 0;
	var speed = 0;
	var Timer = null;
	play();

	function play() {
		clearInterval(Timer);
		Timer = setInterval(function() {
			if(speed == 100) {
				for(var i = 0; i < oDiv.length; i++) {
					oDiv[i].style.width = 0;
				}
				speed = 0;
				Index++;
				if(Index == oDiv.length) Index = 0;

				banner_ul.style.left = -Index * banner_ul.children[0].offsetWidth + 'px';
			}
			oDiv[Index].style.width = speed + '%';
			speed++;
		}, 40);
	}

	for(var i = 0; i < oli.length; i++) {
		oli[i].index = i;
		oli[i].onmouseover = function() {
			clearInterval(Timer);
		};
		oli[i].onmouseout = play;
		oli[i].onclick = function() {
			for(var i = 0; i < oDiv.length; i++) {
				oDiv[i].style.width = 0;
			}
			Index = this.index;
			speed = 0;
			banner_ul.style.left = -this.index * banner_ul.children[0].offsetWidth + 'px';
		}
	}

	var ul = document.getElementById("ourads_ul"),
		aLi = ul.getElementsByTagName("li"),
		Img=ul.getElementsByTagName("img"),
		Div=ul.getElementsByTagName("div");
	for(var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[0].onmousemove=function() {
			for(var i = 0; i < aLi.length; i++) {
				Div[i].style.color = '';
				Img[0].src = 'img/icon_s1.gif';
				Img[1].src = 'img/icon_2.gif';
				Img[2].src = 'img/icon_3.gif';
				Img[3].src = 'img/icon_4.gif';
			}
			Img[0].src = 'img/icon_s1.gif';
			Div[0].style.color = '#8FD966';
		}
		aLi[0].onmouseout=function() {
			Img[0].src = 'img/icon_1.gif';
			Div[0].style.color = '';
		}
		aLi[1].onmouseover=function() {
			for(var i = 0; i < aLi.length; i++) {
				Div[i].style.color = '';
				Img[0].src = 'img/icon_1.gif';
				Img[1].src = 'img/icon_s2.gif';
				Img[2].src = 'img/icon_3.gif';
				Img[3].src = 'img/icon_4.gif';
			}
			Img[1].src = 'img/icon_s2.gif';
			Div[1].style.color = '#8FD966';
		}
		aLi[1].onmouseout=function() {
			Img[1].src = 'img/icon_2.gif';
			Div[1].style.color = '';
		}
		aLi[2].onmousemove= function() {
			for(var i = 0; i < aLi.length; i++) {
				Div[i].style.color = '';
				Img[0].src = 'img/icon_1.gif';
				Img[1].src = 'img/icon_2.gif';
				Img[2].src = 'img/icon_s3.gif';
				Img[3].src = 'img/icon_4.gif';
			}
			Img[2].src = 'img/icon_s3.gif';
			Div[2].style.color = '#8FD966';
		}
		aLi[2].onmouseout=function() {
			Img[2].src = 'img/icon_3.gif';
			Div[2].style.color = '';
		}
		aLi[3].onmousemove=function() {
			for(var i = 0; i < aLi.length; i++) {
				Div[i].style.color = '';
				Img[0].src = 'img/icon_1.gif';
				Img[1].src = 'img/icon_2.gif';
				Img[2].src = 'img/icon_3.gif';
				Img[3].src = 'img/icon_s4.gif';
			}
			Img[3].src = 'img/icon_s4.gif';
			Div[3].style.color = '#8FD966';
		}
		aLi[3].onmouseout=function() {
			Img[3].src = 'img/icon_4.gif';
			Div[3].style.color = '';
		}
	}
}