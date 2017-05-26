//
$('input[type=button]').click(function(){
	if($('#name').val()!='' && $('#tel').val()!='' && $('#mail').val()!='' && $('#DepartureDate').val()!=''  && $('#days').val()!='' && $('#nnt').val()!=''){
		var re=/\w+@[a-z0-9]+\.[a-z]+/i;
		if(re.test($('#mail').val())){
			alert('合法')
		}else{
			alert('你呀写错了')
		}
	}else{
		alert(0)
	}
})
//[1-9]/d{4,10}//qq
$('#tel').bind('input propertychange', function() {
	var tel=/^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/ig;//手机正则
	if($('#tel').val()==''){
		$(this).next().css({
			"opacity":'0'
		})
	}else{
		$(this).next().css({
			"opacity":'1'
		})
	}
	if(tel.test($('#tel').val())){
			console.log('合法')
			$(this).next().css({
			'background':'url(img/x20.png) no-repeat center center ',
			'background-size':'50px 50px'
		})
		}else{
		$(this).next().css({
			'background':'url(img/x21.png) no-repeat center center ',
			'background-size':'50px 50px'
		})
			console.log('你呀写错了')
		}
})
$('#mail').bind('input propertychange', function() {
		var re=/^\w+@[a-z0-9]+\.[a-z]+$/i;//邮箱正则
	if($('#mail').val()==''){
		$(this).next().css({
			"opacity":'0'
		})
	}else{
		$(this).next().css({
			"opacity":'1'
		})
	}
	if(re.test($('#mail').val())){
			console.log('合法')
			$(this).next().css({
			'background':'url(img/x20.png) no-repeat center center ',
			'background-size':'50px 50px'
		})
		}else{
		$(this).next().css({
			'background':'url(img/x21.png) no-repeat center center ',
			'background-size':'50px 50px'
		})
			console.log('你呀写错了')
		}
})
//$('input[type=button]').click(function(){
//		var re=/^\w+@[a-z0-9]+\.[a-z]+$/i;//邮箱正则
//		if(re.test($('#mail').val())){
//			alert('合法')
//		}else{
//			alert('你呀写错了')
//		}
//})