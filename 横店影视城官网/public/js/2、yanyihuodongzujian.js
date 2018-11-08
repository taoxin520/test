/*梦幻谷景区*/
$(".jqshownav").on("click","[data-toggle=item]",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.parent().addClass("active").siblings().removeClass("active");
    var id=$a.attr("href");
    $(id).addClass("active1").siblings().removeClass("active1")
});

$(".jqshownav").on("click","[data-toggle=item1]",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.parent().addClass("active").siblings().removeClass("active");
    var id=$a.attr("href");
    $(id).addClass("active1").siblings().removeClass("active1")
});
$(".jqshownav").on("click","[data-toggle=item2]",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.parent().addClass("active").siblings().removeClass("active");
    var id=$a.attr("href");
    $(id).addClass("active1").siblings().removeClass("active1")
});
$(".jqshownav").on("click","[data-toggle=item3]",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.parent().addClass("active").siblings().removeClass("active");
    var id=$a.attr("href");
    $(id).addClass("active1").siblings().removeClass("active1")
});
$(".jqshownav").on("click","[data-toggle=item4]",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.parent().addClass("active").siblings().removeClass("active");
    var id=$a.attr("href");
    $(id).addClass("active1").siblings().removeClass("active1")
});
$(".jqshownav").on("click","[data-toggle=item5]",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.parent().addClass("active").siblings().removeClass("active");
    var id=$a.attr("href");
    $(id).addClass("active1").siblings().removeClass("active1")
});
/*梦幻谷景区 | 明清宫苑景区 | 秦王宫景区 | 清明上河图景区 | 广州街·香港街景区 | 明清民居博览城景区按钮*/
$(".jqmenu").on("click","a",function(e){
    e.preventDefault();
    var $a=$(this);
    $a.addClass("cur").siblings().removeClass("cur");
    var id=$a.attr("href");
    $(id).addClass("grod").siblings().removeClass("grod")
});


/*梦幻谷景区轮播图*/
function slider(){
    var imgShow=document.querySelector("div#slider>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider,2000);

function slider1(){
    var imgShow=document.querySelector("div#slider1>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider1,2000);

function slider2(){
    var imgShow=document.querySelector("div#slider2>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider2,2000);

function slider3(){
    var imgShow=document.querySelector("div#slider3>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider3,2000);
/*明清宫苑景区轮播图*/
function slider4(){
    var imgShow=document.querySelector("div#slider4>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider4,2000);

function slider5(){
    var imgShow=document.querySelector("div#slider5>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider5,2000);

function slider6(){
    var imgShow=document.querySelector("div#slider6>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider6,2000);

function slider7(){
    var imgShow=document.querySelector("div#slider7>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider7,2000);
/*秦王宫景区*/
function slider8(){
    var imgShow=document.querySelector("div#slider8>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider8,2000);

function slider9(){
    var imgShow=document.querySelector("div#slider9>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider9,2000);

function slider10(){
    var imgShow=document.querySelector("div#slider10>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider10,2000);

function slider11(){
    var imgShow=document.querySelector("div#slider11>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider11,2000);
/*清明上河图景区*/
function slider12(){
    var imgShow=document.querySelector("div#slider12>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider12,2000);

function slider13(){
    var imgShow=document.querySelector("div#slider13>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider13,2000);

function slider14(){
    var imgShow=document.querySelector("div#slider14>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider14,2000);

function slider15(){
    var imgShow=document.querySelector("div#slider15>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider15,2000);
/*广州街·香港街景区*/

function slider16(){
    var imgShow=document.querySelector("div#slider16>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider16,2000);

function slider17(){
    var imgShow=document.querySelector("div#slider17>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider17,2000);

function slider18(){
    var imgShow=document.querySelector("div#slider18>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider18,2000);

function slider19(){
    var imgShow=document.querySelector("div#slider19>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider19,2000);
/*明清民居博览城景区*/
function slider20(){
    var imgShow=document.querySelector("div#slider20>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider20,2000);

function slider21(){
    var imgShow=document.querySelector("div#slider21>img.show");
    imgShow.className="";
    if(imgShow.nextElementSibling!=null){
        imgShow.nextElementSibling.className="show";
    }else{
        imgShow.parentNode.children[0].className="show";
    }
}
timer=setInterval(slider21,2000);
