		var box = document.getElementById("box");
		var oNavlist = document.getElementById("nav").children;
		var slider = document.getElementById("slider");
		var left = document.getElementById("left");
		var right = document.getElementById("right");
		var div = document.getElementById("word");
		var index = 1;
		var timer;
		var isMoving = false;
		var begin = 0;

		//轮播下一张的函数
		//点击右键头
		right.onclick = next;
		function next(){
			index++;
			navChange();
			animate(slider,{left:-1200*index},function(){
				if(index===6){
					slider.style.left="-1200px";
					index=1;
				}
			});
		}
		//点击左箭头
		left.onclick = previous;
		function previous(){
			index--;
			navChange();
			animate(slider,{left:-1200*index},function(){
				if(index===0){
					slider.style.left="-6000px";
					index=5;
				}	
			});
		}
		
		var timer = setInterval(next,3000);
		box.onmouseover=function(){
			animate(left,{opacity:50})
			animate(right,{opacity:50})
			clearInterval(timer);
		}

		box.onmouseout=function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next,3000);
		}

		for (var i =0;i<oNavlist.length;i++){
			oNavlist[i].idx = i;
			oNavlist[i].onclick = function(){
				
				index=this.idx+1;
				navChange();
				animate(slider,{left:-1200*index})
			}
		}
		window.onload=navChange();
		function navChange(){
			for(var j=0;j<oNavlist.length;j++){
				oNavlist[j].className="";
				if (j==0) {
					oNavlist[j].style.color = "red";
				}else{
					oNavlist[j].style.color = "black";
				}
			}
			if (index===6) {
				oNavlist[0].style.color="white";
				oNavlist[0].className = "active";
			}else if(index == 0){
				oNavlist[4].style.color="white";
				oNavlist[4].className = "active";
			}else{
				oNavlist[index-1].style.color="white";
				oNavlist[index-1].className = "active";
			}
		}
		var iSChange = setInterval(change,50);
		function change (){
					begin=5;
					var now = parseInt(getStyle(div,"right"));
					now=begin+now;
					if (now==1100) {
						word.style.right="-400px";
						now=-20;
					}else{
						word.style.right=now +"px";
					}
				}
		window.onload = iSChange;