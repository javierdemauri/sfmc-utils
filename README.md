
## sfmc-utils

This is a Server-Side JavaScript library with useful functions for Salesforce Marketing Cloud Architects. 

### Setup
This library is just a collection of SSJS code that you may use at your best convenience. Recommended practice is to create a content block in Content Builder to then reference then needed.

#### Data Extension Utils
1. QueryDataExtension: function that enables retrieve all records from a data extension invoking a function to process each record.

```javascript
<script runat=server>
    Platform.Load("core","1");
    Platform.Function.ContentBlockByKey('data-extension-utils');

    function ProcessRow(row) {
        Platform.Response.Write(row.first_name);
    }

    var cols = ["first_name", "last_name"];
    QueryDataExtension("My Audience", cols, ProcessRow);
</script>
``` 