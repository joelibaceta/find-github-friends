var base_url = "https://graph.facebook.com/v3.2";

var load_friends = function(user_id, access_token) {
    fetch(base_url + "/" + user_id + "/friends?access_token=" + access_token)
        .then(data => {return data.json})
        .then(res => {console.log(res)})
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '2108757459436917',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.2'
    });
        
    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
        if (response.status == "connected"){
            console.log("connected");
        } else {
            FB.login(function(response)
            {
                console.log(response);
                load_friends(
                    response.authResponse.userID, 
                    response.authResponse.accessToken);
            },
            {
                scope: 'user_friends',
                auth_type: 'rerequest'
            });
        }
        console.log(response);
        load_friends(
            response.authResponse.userID,
            response.authResponse.accessToken);
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));