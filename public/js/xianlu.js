window.onload=function(){
var hh=document.getElementsByClassName("top")[0];
var dd=hh.getElementsByTagName("dd");
for(var i = 0; i < dd.length; i++) {
		dd[i].index = i; //为什么加自定义属性，以为要创建关联条件
		dd[i].onclick = function() {
			//给按钮加className 先清空 后给当前的追加className
			for(var i = 0; i < dd.length; i++) {
				dd[i].className = '';
//				dd[i].style.display = 'none';
			}
			//给当前加上className
			this.className = 'seerty';
			//alert(this.index); 0 1 2 3 4
//			aDiv[this.index].style.display = 'block';

		};
	}
$("#jiage").click(function(){
		$("#jiage").addClass("bian");	
		$("#tui").removeClass("bian")
//		i++;
//		if(i%2==0){
//			jiage.sort(function(a,b){
//				var a=a.count;
//				var b=b.count;
//				return b-a;
//			})
//		}else{
//			jiage.sort(function(a,b){
//				var a=a.count;
//				var b=b.count;
//				return a-b;
//			})
//		}
	})
$("#tui").click(function(){
		$("#tui").addClass("bian");	
		$("#jiage").removeClass("bian")
//		i++;
//		if(i%2==0){
//			jiage.sort(function(a,b){
//				var a=a.count;
//				var b=b.count;
//				return b-a;
//			})
//		}else{
//			jiage.sort(function(a,b){
//				var a=a.count;
//				var b=b.count;
//				return a-b;
//			})
//		}
	})








}
