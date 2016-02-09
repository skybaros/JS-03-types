"Use strict;";
(function() {
    function getQuanOfUniqueElements(arr) {
        var unq = 0;
        var res = [];
        for (i = 0; i < arr.length; i++) {
            if (res.indexOf(arr[i]) == -1) {
                res.push(arr[i]);
            }
        }console.log(arr);
        unq = res.length;
        console.log("Result -> "+ unq);
    }
    getQuanOfUniqueElements([5, 5, '5', 4, 3]);
})();