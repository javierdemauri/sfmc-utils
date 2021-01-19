<script runat=server>
    Platform.Load("core","1.1.1");

    function SaveLog(type, message) {
        //Save log record to data extension
    }

    function QueryDataExtension(dataExtensionName, cols, processRow) {
        var prox = new Script.Util.WSProxy();
        var moreData = true;
        var reqID = null;
        var data = null;
        var filter = {};
        
        while (moreData) {
            moreData = false;
            if (reqID == null) {
                data = prox.retrieve("DataExtensionObject[" + dataExtensionName + "]", cols);
            } 
            else {
                data = prox.getNextBatch("DataExtensionObject["+ dataExtensionName +"]", reqID);
            }

            if(data != null) {
                moreData = data.HasMoreRows;
                reqID = data.RequestID;

                SaveLog('Info', 'Found ' + data.Results.length + ' records.');

                for (i = 0; i < data.Results.length; i++) {
  		    var currentObject = {};
                    for (j = 0; j < data.Results[i].Properties.length; j++) {
                        currentObject[data.Results[i].Properties[j].Name] = data.Results[i].Properties[j].Value;
                    }

                    processRow(currentObject);
                }
            }
        }
    }
</script>