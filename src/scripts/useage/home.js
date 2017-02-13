//区域滚动
/*var myScroll=new IScroll("#content",{
 onBeforeScrollStart:function(e){
 var ele=e.target.tagName.toLowerCase();
 if(ele!="input" && ele!="textarea" && ele!="a"){
 e.preventDefault();
 }
 }
 });*/
 
//ajax请求渲染数据
function getListData(){
    $.ajax({
        url:"./moke/livelist.json",
        type:"get",
        dataType:"json",
        success:function(rs){
            renderData(rs.data);
            //console.log(rs.data);
        }
    })

}
function showCurrent(parent,index){
    $("#"+parent).children().eq(index).addClass("active").siblings().removeClass();
}
//转换二维数组
function dataFormat(data){
    var tempArr=[];
    for(var i=0,len=Math.ceil(data.length/2);i<len;i++){
        tempArr[i]=[];
        tempArr[i].push(data[i*2]);
        data[i*2+1] && tempArr[i].push(data[i*2+1]);
    }
    return tempArr;
}
//渲染数据
function renderData(data){
    var lists=dataFormat(data),
        html="",
        i,
        len=lists.length,
        obj1,obj2;
    for(i=0;i<len;i++){
        obj1=lists[i][0];
        obj2=lists[i][1];
        html+="<ul>"
            +"<li><a href='./show.html?id='"+obj1.id+"''><img src='"+obj1.img+"'><b>"+obj1.title+"</b></a>"
            +"</li><li></li>"
            +"<li><a href='./show.html?id='"+obj2.id+"''><img src='"+obj2.img+"'><b>"+obj2.title+"</b></a>"
            +"</li>"
            +"</ul>";
    }
    //$("#list").html(html);
    //myScroll.refresh();  //刷新
    swiper2()
}

setTimeout(function(){
    swiper();
},500);

function swiper(){
    var mainSwiper = new Swiper('#main-container',{
        onClick:true,
        onSlideChangeStart:function(swiper){//滑动之后触发的回调
            //获取当前页面的索引
            var idx=swiper.activeIndex;
            showCurrent("title",idx);
        }
    });
    getListData();
}

function swiper2(){
    var navSwiper = new Swiper('#nav-container',{
        direction:"horizontal",
        loop: false,
        onSlideChangeStart:function(swiper){//滑动之后触发的回调
            //获取当前页面的索引
            var idx=swiper.activeIndex;
            showCurrent("nav",idx);
        }
    });
}