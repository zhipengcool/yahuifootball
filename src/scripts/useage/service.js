function homeSer(){
    this.swiper = function(){

        var myscroll = new IScroll(".scroller1",{
            click:true
        });

        swiper();
        swiper2(); 
        function swiper(){
            var mainSwiper = new Swiper('#main-container',{
                direction:"horizontal",
                loop: false,
                preventClicks : true,
                click:true,
                onSlideChangeStart:function(swiper){//滑动之后触发的回调
                    //获取当前页面的索引
                    var idx=swiper.activeIndex;
                    showCurrent("title",idx);
                }
            });
        }

        function swiper2(){
            var navSwiper = new Swiper('#nav-container',{
                direction:"horizontal",
                loop: false,
                preventClicks : true,
                click:true,
                onSlideChangeStart:function(swiper){//滑动之后触发的回调
                    //获取当前页面的索引
                    var idx=swiper.activeIndex;
                    showCurrent("nav",idx);
                }
            });
        }

        function showCurrent(parent,index){
            $("#"+parent).children().eq(index).addClass("active").siblings().removeClass();
        }
    };
}

angular.module("myApp")
    .service("homeservice",homeSer);