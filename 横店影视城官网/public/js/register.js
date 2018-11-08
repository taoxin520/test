/**
 * Created by uid on 2017/6/3.
 */
var a=0;
var b=0;
//用户名验证
document.getElementById("uname").onblur=function(){
    vali(this,/^\w{1,10}$/);
};
function vali(txt,reg) {
    if (reg.test(txt.value)) {
        document.getElementById("uname").nextElementSibling.innerHTML = "<img src='images/ok.png'>&nbsp;";
    }
    else {
        document.getElementById("uname").nextElementSibling.innerHTML = "<img src='images/err.png'>6至10位字母或数字";
    }
}
//密码验证
document.getElementById("upwd").onblur=function(){
    c(this,/^\d{6,12}$/);
    a=this.value;
};
function c(txt,reg){
    if(reg.test(txt.value)) {
        document.getElementById("upwd").nextElementSibling.innerHTML="<img src='images/ok.png'>&nbsp;";
    }
    else {
        document.getElementById("upwd").nextElementSibling.innerHTML="<img src='images/err.png'>6至12位字符数字";
    }
}
//确认密码验证
document.getElementById("upwd1").onblur=function(){
    b=this.value;
    if(a!=b){
        document.getElementById("upwd1").nextElementSibling.innerHTML="<img src='images/err.png'>&nbsp;";
    }else{
        document.getElementById("upwd1").nextElementSibling.innerHTML="<img src='images/ok.png'>&nbsp;";
    }
};
//电话验证
document.getElementById("phone").onblur=function(){
    n(this,/^1[35789][0-9]{9}$/);
};
function n(txt,reg){
    if(reg.test(txt.value)) {
        document.getElementById("phone").nextElementSibling.innerHTML="<img src='images/ok.png'>&nbsp;";
    }
    else {
        document.getElementById("phone").nextElementSibling.innerHTML="<img src='images/err.png'>请输入11位手机号";
    }
}





