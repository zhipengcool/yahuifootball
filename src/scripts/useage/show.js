/*util.access_server("./moke/livelist.json",{},getDetailData);
var ind=location.search;
var len=ind.length;
id=ind.slice(len-1,len);*/
//console.log(len);

var html='<img src="../images/img1.jpg" /><p></p>';
//console.log(html);
$("#img").html(html);

 
function getDetailData(data){
	for(var i in data){	
		for(var j=0;j<data[i].length;j++){		
			if(data[i][j].id==id){			
				var html='<img src="'+data[i][j].img+'" /><p>'+data[i][j].description+'</p>';
				//console.log(html);
				$("#img").html(html);
			}
		}
	}	
		/*var data=e.data;
		for(var i=0;i<data.length;i++){
			if(data[i].id==len){
				var html="<img src='"+data[i].img+"'>";
				$("#scroller").html(html);
			}
		}*/	
}

$("#back").on("click",function(){
	location.href="../app.html";
});
/*var location_href=location.search;
len=location_href.length;
var id=location_href.slice(len-1,len);
$.ajax({
	url:"./moke/livelist.json",
	success:function(e){
		var data=e.data;
		for(var i=0;i<data.length;i++){
			if(data[i].id==id){
				var html="<img src='"+data[i].img+"'>";
				$("#scroller").html(html);
			}
		}
	}
})*/
