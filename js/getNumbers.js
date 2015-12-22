"Use str";
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
        return newarr;
    }
    getNumbers(['7', '5', '500', 'array[]', '1', '2', 'sdf']);
})();