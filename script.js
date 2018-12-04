
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
            FB.login(function(response) {
                console.log(response);
            },
            {
                scope: 'user_friends',
                auth_type: 'rerequest'
            });
        }
        console.log(response);
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));