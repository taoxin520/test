/*导航栏中的机酒自由行*/
$(".head_top1_li_ul1")
    .hide()
    .parent()
    .mouseenter(function(){
        $(this).children(":last").show();
    })
    .mouseleave(function(){
        $(this).children(":last").hide();
    });
$(".head_top1_li_ul2")
    .hide()
    .parent()
    .mouseenter(function(){
        $(this).children(":last").show();
    })
    .mouseleave(function(){
        $(this).children(":last").hide();
    });
$(".head_top1_li_ul3")
    .hide()
    .parent()
    .mouseenter(function(){
        $(this).children(":last").show();
    })
    .mouseleave(function(){
        $(this).children(":last").hide();
    });
$(".head_top1_li_ul4")
    .hide()
    .parent()
    .mouseenter(function(){
        $(this).children(":last").show();
    })
    .mouseleave(function(){
        $(this).children(":last").hide();
    });
/*3、轮播图*/
function slide1(){
    var imgShow=document.querySelector("div#slider>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slide1,2500);

/*独家日游-左右移动*/
/*var $ri = $("div.picScroll>div");
$(".prev>img").click(function(){
    if($(".picScroll_1").position().left!==0) {
        $ri.animate({left: "+=375px"}, 100);
    }else{
        $ri.stop();
    }
});
$('.next>img').click(function(){
    if($(".picScroll_9").position().left!==0){
        $ri.animate({left: "-=375px"}, 100);
    }else{
        $ri.stop()
    }
});*/
/*特色长线-左右移动*/
var ri = $(".slid_specialty div");
$(".slid_specialty_left").click(function(){
    if($('.NO1').position().left!==0) {
        ri.animate({left: "+=1000px"}, 100);
    }else{
        ri.stop();
    }
});
$(".slid_specialty_right").click(function(){
    if($('.NO2').position().left!==0) {
        ri.animate({left: "-=1000px"}, 100);
    }else{
        ri.stop();
    }
});
/*特色长线最底部跟随鼠标感应悬浮动画*/
var nodes  = document.querySelectorAll(".bontain li"),
    _nodes = [].slice.call(nodes, 0);
var getDirection = function (ev, obj) {
    var w = obj.offsetWidth,
        h = obj.offsetHeight,
        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
    return d;
};
var addClass = function ( ev, obj, state ) {
    var direction = getDirection( ev, obj ),
        class_suffix = "";
    obj.className = "";
    switch ( direction ) {
        case 0 : class_suffix = "-top";    break;
        case 1 : class_suffix = "-right";  break;
        case 2 : class_suffix = "-bottom"; break;
        case 3 : class_suffix = "-left";   break;
    }
    obj.classList.add( state + class_suffix );
};

_nodes.forEach(function (el) {
    el.addEventListener("mouseover", function (ev) {
        addClass( ev, this, "in" );
    }, false);

    el.addEventListener("mouseout", function (ev) {
        addClass( ev, this, "out" );
    }, false);
});
/*Q-Home*/
$(".hd").on("mouseenter","[data-toggle=item]",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.parent().addClass("active").siblings().removeClass("active");
    var id=$a.attr("href");
    $(id).addClass("active").siblings().removeClass("active")
});
/*微信*/
$(".img1").mouseenter(function(){
    $(".foot_hide1").css("display","block");
}).mouseleave(function(){
    $(".foot_hide1").css("display","none");
});
/*微博*/
$(".img2").mouseenter(function(){
    $(".foot_hide2").css("display","block");
}).mouseleave(function(){
    $(".foot_hide2").css("display","none");
});


/*右下角固定导航栏*/
