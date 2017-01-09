var app=angular.module('github',[]);

app.controller('githubController',['$http','$scope',function($http,$scope){

	$scope.getIssues=function(url){
		//url-sample: /repos/robin850/carrierwave-dropbox/issues/
		var def='https://api.github.com/repos/octocat/Hello-World/issues?state=closed';
		var def_url='https://api.github.com/repos/octocat/Hello-World'
		if(url!="" && url!=undefined){
			url=url.split('/')
			var index=url.indexOf('repos')
			var urlnew='https://api.github.com/repos/'+url[index+1]+'/'+url[index+2]+'/issues?state=closed'
			var user_url='https://api.github.com/repos/'+url[index+1]+'/'+url[index+2]
		}

		$http({
            method: 'GET',
            url:user_url!=undefined?user_url:def_url
         }).then(function(data){
         	$scope.user=data.data.owner
         },function(errdata){
         	console.log("user not found")
         });

		$http({
            method: 'GET',
            url:urlnew!=undefined?urlnew:def
         }).then(function(data){
         	$scope.data=data.data
         	$scope.visible=0
         },function(errdata){
         	$scope.errordata=errdata
         	$scope.visible=1
         });
	}
}])