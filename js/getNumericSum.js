"Use strict;";
(function() {
    function getNumbers(arr) {
        var sum = 0;
        var newarr = [];
        for (i = 0; i < arr.length; i++) {
            arr[i] = parseFloat(arr[i]);
            if (!isNaN(arr[i])) {
                newarr.push(arr[i]);
            }
        }
        console.log(newarr);
    }
    function getNumericSum(arr) {
        getNumbers(arr);
        var sum = 0;
        for (i = 0; i <arr.length; i++) {
            if (!isNaN(arr[i])) {
                sum = sum + arr[i];
            }
        }
        console.log("Result -> "+sum);
    }
    getNumericSum(['4', '1', 'hi', 'gtg']);
})();