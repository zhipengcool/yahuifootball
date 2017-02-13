function homeCon($scope,proData,homeservice){
    console.log(proData);
    $scope.items = proData;

    homeservice.swiper();
    //myScroll.refresh();
    /*setTimeout(function(){
        myScroll.refresh();
        var myscroll = new IScroll(".scroller1",{
            click:true
        }); 
    },1000);*/

}

function showCon($stateParams,showproData){
    console.log($stateParams);

    getDetailData(showproData);
    function getDetailData(data){
        for(var i in data){
            for(var j=0;j<data[i].length;j++){
                if(data[i][j].id==$stateParams.id){
                    var html='<img src="'+data[i][j].img+'" /><p>'+data[i][j].description+'</p>';
                    //console.log(html);
                    $("#img").html(html);
                }
            }
        }
    }
}


angular.module("myApp")
    .controller("homecontroller",homeCon)
    .controller("showcontroller",showCon);