var app=angular.module('github',[]);

app.controller('githubController',['$http','$scope',function($http,$scope){


	$scope.getIssues=function(url){
		//url-sample: /repos/robin850/carrierwave-dropbox/issues/
		var def='https://api.github.com/repos/octocat/Hello-World/issues?state=closed';
		if(url){
			url=url.split('/')
			var index=url.indexOf('repos')
			var url='https://api.github.com/repos/'+url[index+1]+'/'+url[index+2]+'/issues?state=closed'
		}
		
		$http({
            method: 'GET',
            url:url!=undefined?url:def
         }).then(function(data){
         	$scope.data=data.data
         	$scope.visible=0
         },function(errdata){
         	$scope.errordata=errdata
         	$scope.visible=1
         });
	}
}])