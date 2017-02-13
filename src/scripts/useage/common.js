//显示加载动画
function Util(){
	
}
Util.prototype={ 
	//创建遮罩层
	showMask:function(){
		if($("#mask").length==0){
			$('<div class="mask" id="mask"></div>').appendTo($("body"));
		}
	},
	hideMask:function(){
		$("#mask").remove();
	},
	showLoading:function(){
		this.showMask();
		if($("#loader").length==0){
			$('<div class="loader" id="loader"></div>').appendTo($("body"));
		}
	},
	hideLoading:function(){
		$("#mask").remove();
		$("#loader").remove();
	},
	access_server:function(url,data,callback,method,async){
		var _this=this;
		method=method?method:"get";
		async=typeof(async)==="undefined"?true:async;
		this.showLoading();
		$.ajax({
			url:url,
			data:data,
			type:method,
			async:async,
			success:function(data){
				setTimeout(function(){
					_this.hideLoading();
					callback(data);
				},1000)				
			}
		})
	}
};
 
var util=new Util();