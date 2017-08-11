$(document).ready(
	function(){
		$('#contArts').hover(
			function(){
				$(this).css({
                    "transform": "translate(-25%,0) scale(1.5,1)"
				});
				$('#contGames').css({
					"transform": "translate(-25%,0) scale(.50,1)"
				});
				$('#contProfileOuter').css({
					"transform":"translate(-160%,-50%)",
					"width":"300px"
				});
			},
			function(){
                $(this).css({
                    "transform": "scale(1,1)"
                });
                $('#contGames').css({
                    "transform": "translate(0,0) scale(1,1)"
				});
                $('#contProfileOuter').css({
					"transform":"translate(-50%,-50%)",
					"width":"35%"
				});
			}
		);
		$('#contGames').hover(
			function(){
				$(this).css({
                    "transform": "scale(2,1)"
				});
				$('#contArts').css({
					"transform": "translate(25%,0) scale(.50,1)"
				});
				$('#contProfileOuter').css({
					"transform":"translate(60%,-50%)",
					"width":"300px"
				});
			},
			function(){
                $(this).css({
                    "transform": "scale(1,1)"
                });
                $('#contArts').css({
                    "transform": "translate(0,0) scale(1,1)"
				});
                $('#contProfileOuter').css({
					"transform":"translate(-50%,-50%)",
					"width":"35%"
				});
			}
		);

    }
);
