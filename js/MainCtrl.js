angular.module('quotebook').controller('mainCtrl', function($scope, dataService) {

    $scope.quotes = dataService.getData();

    $scope.removeData = function(textToDelete) {
        dataService.removeData(textToDelete);
    };
    $scope.addData = function() {
        var newQuote = {
            text: $scope.newQuoteText,
            author: $scope.newQuoteAuthor
        };
        if (dataService.addData(newQuote)) {
            $scope.newQuoteText = '';
            $scope.newQuoteAuthor = '';
        }
    };
});
