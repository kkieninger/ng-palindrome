var app = angular.module('ngPalindromeApp', []);

app.controller('MainController', function($scope){

	$scope.result = '';

	$scope.isPalindrome = function(string) {
		var newString = string.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
  		var reverseString = newString.split("").reverse().join("");

	  	if(newString === reverseString){
	    	$scope.result = "Yes, it is a good palindrome. But there is one small problem... we require... ANOTHER PALINDROME!";
	  	} else if(newString === "it") {
	    	$scope.result = "Stop saying the word! The word! ...Ow! He said it again! Wait! I said it! I said it! Ooh!  I said it again!  And there again! That's three 'It's'! Ohh! Aaaaugh!";
	  	} else {
	  		$scope.result = "That is no palindrome! Bring us, a palindrome! NI! NI!! NI!";
	  	}
	}	

});
    
