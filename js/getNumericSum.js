"Use strict;";
(function() {
    function getNumericSum(arr) {
        var numbersArray = getNumbers(arr);
        var sum = 0;
        for (i = 0; i < numbersArray.length; i++) {
            if (!isNaN(numbersArray[i])) {
                sum = sum + numbersArray[i];
            }
        }
        console.log(sum);
    }
    getNumericSum(['4', '1', 'hi']);
})();