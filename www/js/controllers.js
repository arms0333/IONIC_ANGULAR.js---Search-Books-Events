angular.module('starter.controllers', ['ngMaterial'])

.controller('AppCtrl',function ($scope, $stateParams, $timeout, $http) 
{
    $scope.theArray = [];

    $scope.searchIt = function()
    {
        $scope.theValue = document.getElementById("valueData").value;
        
         $http({
             url: "http://www.goodreads.com/search/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg" + "&q=" + $scope.theValue,
            // url: "http://www.goodreads.com/search/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg" + "&q=" + $scope.theValue,
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

    }
})


.controller('SearchCtrl', function($scope, $stateParams,  $timeout, $http)
{
        $scope.response = [];
        $scope.myCategoryBooks = [];
        $scope.books = [];
console.log("HERE");
        $http({
             url:  "http://www.goodreads.com/book/show/" + $stateParams.categoryID + ".xml?key=vwhrg6TGzcbpZ3ZTgzdDXg",
            method:"GET",
            transformResponse: function (value) {
                        var x2js = new X2JS({});
                        $scope.test = value.toString();
                        var response = angular.bind(x2js, x2js.xml_str2json, value)();
                        return response;
                    }
        }).then(function (response) {
                $scope.recievedData = response.data;
                console.log(response.data)
                $scope.books = $scope.recievedData.GoodreadsResponse.book;
        })

})


.controller('EventCtrl',function ($scope, $stateParams, $timeout, $http) 
{   

    $scope.myNewEvents = [];
    $scope.valueDataEvent;
    $scope.valueDataEvent2;
    $scope.searchEvents = function()
    {
        $scope.valueDataEvent = document.getElementById("valueDataEvent").value;
        $scope.valueDataEvent2 = document.getElementById("valueDataEvent2").value;
        
         $http({
             url: "http://www.goodreads.com/event/index.xml?search%5Bcountry_code%5D=CA&key=vwhrg6TGzcbpZ3ZTgzdDXg" + "&q=" + $scope.theValue,
            method:"GET",
            transformResponse: function (value) {
                        var x2js = new X2JS({});
                        $scope.test = value.toString();
                        var response = angular.bind(x2js, x2js.xml_str2json, value)();
                        return response;
                    }
        }).then(function(response){
        $scope.theArrayEvent = response.data.GoodreadsResponse.events.event;
        $scope.filtermyarray($scope.theArrayEvent);
        }, function(err){
        console.log("error");
        });
    }
    $scope.filtermyarray = function(myEvents) {
            myEvents.forEach(function(event){
                if ( new Date(event.start_at.__text).getTime() >= new Date($scope.valueDataEvent).getTime() && (new Date(event.start_at.__text).getTime() <= new Date($scope.valueDataEvent2).getTime())) {
                    $scope.myNewEvents.push(event);
                }
            })
    };
  

});

