		let obj=document.getElementById('objeto');
		let dx;
		let dy;
		let px;
		let py;
		let anima;

		function inicia(){
			vel=5;
			dx=1;
			dy=0;
			px=0;
			py=0;
			obj.classList.remove('obj');
			game();
		}

		function game(){
			px+=(dx*vel);
			console.log(px)
			obj.style.left=px+"px";
			if(px>800){
				dx=-1;
			}else if(px<0){
				dx=1;
			}
			anima=requestAnimationFrame(game);
		}

		window.addEventListener('load', inicia);