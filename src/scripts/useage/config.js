function Config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
    $urlRouterProvider.otherwise("/index/home");
    $stateProvider
        .state("index",{
            url:"/index", 
            templateUrl:"./view/index.html",
            resolve:{
                loadPlugin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        {
                            files:["./src/styles/useage/index.css"]
                        }
                    ])
                }
            }
        })
        .state("show",{
            url:"/show?id",
            templateUrl:"./view/show.html",
            resolve:{
                loadPlugin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        {
                            files:["./src/styles/useage/show.css"]
                        }
                    ])
                },
                showproData:function($http){ //返回一组数据
                    return $http.get("./moke/livelist.json").then(function(datas){
                        return datas.data;
                    })
                }
            },
            controller:"showcontroller"
        })
        .state("index.home",{
            url:"/home",
            templateUrl:"./view/home.html",
            controller:"homecontroller",
            resolve:{
                loadPlugin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        {
                            files:["./src/styles/useage/home.css"
                            ]
                        }
                    ])
                },
                proData:function($http){ //返回一组数据
                    return $http.get("./moke/livelist.json").then(function(datas){
                        return datas.data.data;
                    })
                }

            }
        })
        .state("index.find",{
            url:"/find",
            templateUrl:"./view/find.html",
            resolve:{
                loadPlugin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        {
                            files:["./src/styles/useage/find.css"]
                        }
                    ])
                }
            }
        })
        .state("index.aboutus",{
            url:"/aboutus",
            templateUrl:"./view/aboutus.html",
            resolve:{
                loadPlugin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        {
                            files:["./src/styles/useage/aboutus.css"]
                        }
                    ])
                }
            }
        })
        .state("index.exit",{
            url:"/exit",
            templateUrl:"./view/exit.html",
            resolve:{
                loadPlugin:function($ocLazyLoad){
                    return $ocLazyLoad.load([
                        {
                            files:["./src/styles/useage/exit.css"]
                        }
                    ])
                }
            }
        })

}
angular.module("myApp")
    .config(Config);