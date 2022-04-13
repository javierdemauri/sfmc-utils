
## sfmc-utils

This is a Server-Side JavaScript library with useful functions for Salesforce Marketing Cloud Architects. 

### Setup
This library is just a collection of SSJS code that you may use at your best convenience. Recommended practice is to create a content block in Content Builder to then reference then needed.

#### API Auth Utils
1. GenerateToken: generates a v2 token to use with REST Api.
```javascript
<script runat=server>
    Platform.Load("core","1");
    Platform.Function.ContentBlockByKey('api-auth-utils');

    var token = GenerateToken('{{client id}}', '{{secret}}', {{mid}}, 'https://{{base uri}}.auth.marketingcloudapis.com');
</script>
``` 

#### Date Utils
1. FormatDateISO: toISOString() was introduced in ECMA 5, so here we can found an implementation for that.
```javascript
<script runat=server>
    Platform.Load("core","1");
    Platform.Function.ContentBlockByKey('date-utils');

    var d = new Date();
    var isoDate = FormatDateISO(d);
</script>
``` 

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