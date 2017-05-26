function loginBox() {
	layer.open({
		type: 1,
		title: "登录",
		area: ["450px", "400px"],
		content: $(".login")
	});
}

function signBox() {
	layer.open({
		type: 1,
		title: "注册",
		area: ["450px", "400px"],
		content: $(".sign")
	});
}
$("#dl_login").click(function() {
	loginBox()
})
$("#zc_sign").click(function() {
	signBox()
})
$("#btn").click(function() {
	var tel = $.trim($('#phone').val());
	var pwd = $.trim($('#mima').val());
	if(tel == '' || pwd == '') {
		layer.alert("用户名不能为空", {
			title: '提示',
			icon: 5
		})
	} else {
		layer.alert("登录成功", {
			title: '提示',
			icon: 6
		})
		$.ajax({
			type: "post",
			url: "http://localhost:8005/user/zhuce",
			data: {
				tel: $("#phone").val(),
				password: $("#mima").val()
			},
			async: true,
			success: function(data) {
				console.log(data)
				if(data.flag == 1) {
					layer.alert("注册成功", {
						title: '提示',
						icon: 6
					})
				} else if(data.flag == 0) {
					layer.alert("注册失败", {
						title: '提示',
						icon: 2
					})
				} else if(data.flag == 2) {
					layer.alert("用户已存在", {
						title: '提示',
						icon: 0
					})
				} else {
					layer.alert("注册失败", {
						title: '提示',
						icon: 2
					})
				}
			}
		});
	}

})



$("#btn").click(function() {
	var tel = $.trim($('#phone').val());
	var pwd = $.trim($('#mima').val());
	if(tel == '' || pwd == '') {
		layer.alert("用户名不能为空", {
			title: '提示',
			icon: 5
		})
	} else {
		layer.alert("登录成功", {
			title: '提示',
			icon: 6
		})
		$.ajax({
			type: "post",
			url: "http://localhost:8005/user/zhuce",
			data: {
				tel: $("#phone").val(),
				password: $("#mima").val()
			},
			async: true,
			success: function(data) {
				console.log(data)
				if(data.flag == 1) {
					layer.alert("注册成功", {
						title: '提示',
						icon: 6
					})
				} else if(data.flag == 0) {
					layer.alert("注册失败", {
						title: '提示',
						icon: 2
					})
				} else if(data.flag == 2) {
					layer.alert("用户已存在", {
						title: '提示',
						icon: 0
					})
				} else {
					layer.alert("注册失败", {
						title: '提示',
						icon: 2
					})
				}
			}
		});
	}

})