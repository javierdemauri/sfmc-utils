<script runat="server">
    function ArrayFilter(array, checkElement) {
        var returnArr = [];
        for (var i = 0; i < array.length; i++) {
            if (checkElement(array[i])) {
            returnArr.push(array[i]);
            }
        }
    
        return returnArr;
    };
</script>