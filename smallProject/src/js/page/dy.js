
$(function(){
	var page={
		controller:function(){
			this.content();
			this.ico();
			this.skip();
			this.batch();
		},
//		tab切换
		content:function(){
			var $nav = $('.mains .tab .nav .sp1');
			var $con = $('.mains .tab .con');
			$nav.click(function() {
				$nav.eq($(this).index()).addClass('active').siblings().removeClass('active');
				$con.eq($(this).index()).addClass('active').siblings().removeClass('active');
			})
		},
		ico:function(){
			var $jian = $('.mains .tab .con .left .ico');
			$jian.toggle(function() {
				$(this).addClass('ico-jian');
			}, function() {
				$(this).removeClass('ico-jian');
			})
		},
		skip:function(){
			$('.mains .seach').click(function() {
				$('.mains').hide();
				$('.searchbox').show();
				$('.header p').html("搜索订阅");
				$('.header .succ').show();
			})
	
			$('.header .succ').click(function() {
				$('.mains').show();
				$('.searchbox').hide();
				$('.header p').html("订阅中心");
				$('.header .succ').hide();
			})
		},
		batch:function(){		
			var $huan = $('.mains .tab .nav .huan');
			var $con = $('.mains .tab .con');
			var daima = ["海外网", "南方都市报", "上海观察", "上海观察", "齐鲁网", "贵阳网", "舜网", "汉网", "太平洋时尚", "央视网", "21CN", "时尚网"];
			var $coss = $('.mains .tab .con .med .left .hai');
			$huan.click(function() {
					var num = "";
					for(var i = 0; i < 12; i++) {
						num = daima[Math.floor(Math.random() * 12)];
						num1 = daima[Math.floor(Math.random() * 12)];
						num2 = daima[Math.floor(Math.random() * 12)];
						num3 = daima[Math.floor(Math.random() * 12)];
						num4 = daima[Math.floor(Math.random() * 12)];
						num5 = daima[Math.floor(Math.random() * 12)];
						num6 = daima[Math.floor(Math.random() * 12)];
						num7 = daima[Math.floor(Math.random() * 12)];
						num8 = daima[Math.floor(Math.random() * 12)];
						num9 = daima[Math.floor(Math.random() * 12)];
						num10 = daima[Math.floor(Math.random() * 12)];
						num11 = daima[Math.floor(Math.random() * 12)];
						$($coss[0]).html(num);
						$($coss[1]).html(num1);
						$($coss[2]).html(num2);
						$($coss[3]).html(num3);
						$($coss[4]).html(num4);
						$($coss[5]).html(num5);
						$($coss[6]).html(num6);
						$($coss[7]).html(num7);
						$($coss[8]).html(num8);
						$($coss[9]).html(num9);
						$($coss[10]).html(num10);
						$($coss[11]).html(num11);


					}

				})
		}
		
	}
	page.controller();
	
	var seach={
		controller:function(){
			this.inputs();
			this.inputs();
			this.seach_cont();
		},
		inputs:function(){
			var $main1_title1= $(".main1-title1");
		    $(".searchbox1-search").keyup(function(){
		        $(".searchbox1-cancel").show();
		        $(".main1").show();
		        $(".main2").show();
		        $main1_title1.html($(".searchbox1-search").val());
		    });
		    $(".searchbox1-cancel").click(function(){
		       $(".searchbox1-search").val("");
		        $(".main1").hide();
		        $(".main2").hide();
		        $main1_title1.html("");
		        $(this).hide();
		    });
		},
		seach_cont:function(){
			var main2_title1=$(".main2-title1");
		    var $dvinum=$(".main2").find("div");
		    main2_title1.html($dvinum.length);
		    if($dvinum.length>11){
		        $dvinum.length=11;
		        main2_title1.html($dvinum.length);
		    }
		}
	}
	seach.controller();
	
})
