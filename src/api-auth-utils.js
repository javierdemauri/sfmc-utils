<script runat=server>
    Platform.Load("core","1.1.1");

    function GenerateToken(clientId, clientSecret, mid, authURL) {
        var versionEndpoint = '/v2/token';

        var authJSON = {
            "grant_type": "client_credentials",
            "client_id": clientId,
            "client_secret": clientSecret,
            "account_id": mid
        };
      
        var authUrl = authURL + versionEndpoint;
        var contentType = 'application/json';
        var authPayload = Platform.Function.Stringify(authJSON);
      
        var accessTokenResult = HTTP.Post(authUrl, contentType, authPayload);
      
        var statusCode = accessTokenResult["StatusCode"];
        var response = accessTokenResult["Response"][0];
      
        var accessToken = Platform.Function.ParseJSON(response).access_token;
      
        return accessToken;
    }
</script>