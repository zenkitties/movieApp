var app = angular.module('app',[]);

app.controller('MovieController',['$scope', function($scope) {
    
    $scope.isPopupVisible = false;
    $scope.movieAdd = {};
    $scope.newMovie = [
        {
            name: 'Vanilla Sky',
            length: 136,
            year: 2001,
            genre: 'drama',
            desc: 'A movie about letting go and waking up from the dream state.'
                    
        },
        {
            name: 'Big Fish',
            length: 125,
            year: 2003,
            genre: 'drama',
            desc: 'A movie about a son and dying father. The son is trying to piece together who his father actually was over the stories he told.'
        },
        {
            name: 'The Fountain',
            length: 96,
            year: 2006,
            genre: 'drama',
            desc: 'A story about a man trying to save his wife from disease. In his search he finds enlightenment through his wifes aztec wisdom.'
        },
        {
            name: 'Mr. Nobody',
            length: 141,
            year: 2009,
            genre: 'drama',
            desc: 'A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he does not choose, anything is possible.'
        },
        {
            name: 'Alice in Wonderland',
            length: 108,
            year: 2010,
            genre: 'action',
            desc: 'Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen\'s reign of terror.'
        }
            
            ];    
    
    
    $scope.submitMovie = function(){
        $scope.newMovie.push($scope.movieAdd);
        $scope.movieAdd = {};

            
        };
        
    
    $scope.clearForm = function(){
        $scope.movieAdd = {};
        };
    
    $scope.showPopup = function(names) {
        $scope.isPopupVisible = true;
        $scope.selectedMovie = names;    
    };
    
    $scope.closePopup = function(){
        $scope.isPopupVisible = false;
    };
    
    }]);