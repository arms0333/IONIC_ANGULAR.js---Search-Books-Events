angular.module('starter.controllers', ['ngMaterial'])

.controller('AppCtrl',function ($scope, $stateParams, $timeout, $http) 
{
    $scope.theArray = [];


     $scope.onSwipeLeft = function(ev) {
            alert('You swiped left!!');
     };
   
    $scope.searchIt = function()
    {
        $scope.theValue = document.getElementById("valueData").value;
        
         $http({
             url: "http://localhost:8100/search/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg" + "&q=" + $scope.theValue,
            //url: "http://www.goodreads.com/search/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg" + "&q=" + $scope.theValue,
            method:"GET",
            transformResponse: function (value) {
                        var x2js = new X2JS({});
                        $scope.test = value.toString();
                        var response = angular.bind(x2js, x2js.xml_str2json, value)();
                        return response;
                    }
        }).then(function(response){
        console.log(response);
        $scope.theArray = response.data.GoodreadsResponse.search.results.work;
        }, function(err){
        console.log("error");
        });

        // $scope.items = [theArray];
        // $scope.doRefresh = function() {
        // $http.get(response)
        // .success(function(response) {
        // $scope.items = response;
        // })
        // .finally(function() {
        // // Stop the ion-refresher from spinning
        // $scope.$broadcast('scroll.refreshComplete');
        // });
        // };

    }
})

.controller('EventCtrl',function ($scope, $stateParams, $timeout, $http) 
{
    $scope.theArrayEvent = [];

     $scope.onSwipeLeft = function(ev) {
            alert('You swiped left!!');
     };
   
    $scope.searchEvents = function()
    {
        $scope.theValue = document.getElementById("valueDataEvent").value;
        
         $http({
             url: "http://localhost:8100s/event/index.xml?search%5Bcountry_code%5D=CA&key=vwhrg6TGzcbpZ3ZTgzdDXg" + "&q=" + $scope.theValue,
            //url: "http://www.goodreads.com/event/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg" + "&q=" + $scope.theValue,
            method:"GET",
            transformResponse: function (value) {
                        var x2js = new X2JS({});
                        $scope.test = value.toString();
                        var response = angular.bind(x2js, x2js.xml_str2json, value)();
                        return response;
                    }
        }).then(function(response){
        console.log(response);
        $scope.theArrayEvent = response.GoodreadsResponse.events;
        }, function(err){
        console.log("error");
        });

        // $scope.items = [theArray];
        // $scope.doRefresh = function() {
        // $http.get(response)
        // .success(function(response) {
        // $scope.items = response;
        // })
        // .finally(function() {
        // // Stop the ion-refresher from spinning
        // $scope.$broadcast('scroll.refreshComplete');
        // });
        // };

    }
})

.controller('SearchCtrl', function($scope, $stateParams,  $timeout, $http)
{
        $scope.response = [];
        $scope.myCategoryBooks = [];
        $scope.books = [];

        $http({
             url: "http://localhost:8100/search/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg&q",
            //url: "http://www.goodreads.com/event/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg&q" + "&q=" + $scope.theValue,
            method:"GET",
            transformResponse: function (value) {
                        var x2js = new X2JS({});
                        $scope.test = value.toString();
                        var response = angular.bind(x2js, x2js.xml_str2json, value)();
                        return response;
                    }
        }).then(function (response) {
                $scope.recievedData = response.data;
                $scope.categoryID = $stateParams.categoryID;
                $scope.books = $scope.recievedData.best_book;
                var numJson = $scope.best_book.length;
                for (var i = 0; i < numJson; i++) {
                    if ($scope.books[i].id == $scope.categoryID)
                    {
                        $scope.myCategoryBooks.push($scope.best_book[i]);
                    }
                }

        })

});

