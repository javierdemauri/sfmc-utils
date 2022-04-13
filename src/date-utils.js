<script runat="server">
    Platform.Load("core","1");

    function FormatDateISO(d) {
        var month = d.getMonth()+1;
        month = ("0" + month).slice(-2);

        var days = d.getDate();
        days = ("0" + days).slice(-2);

        var hours = d.getHours();
        hours = ("0" + hours).slice(-2);

        var minutes = d.getMinutes();
        minutes = ("0" + minutes).slice(-2);

        var datestring = d.getFullYear()  + "-" + month + "-" + days + "T" + hours + ":" + minutes + ":00.000Z";

        return datestring;
    }

</script>