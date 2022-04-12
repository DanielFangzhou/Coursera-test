

(function (global){

    //Set up a namespae for our ultility
    let ajaxUtils={};

    //Returns an HTTP request object
    function getRequestObject(){
        if(window.XMLHttpRequest){
            console.log('XMLHttpRequest is avaliable');
            return new XMLHttpRequest();
        } 
        //for old explorer browsers:
        // else if(window.ActiveXObject){
        //     return new ActiveXObject('Microsoft.XMLHTTP');
        // }
        else{
            global.alert("Ajax is not supported");
            return null;
        }
    }

    //Make an Ajax GET request to 'requestURL'
    ajaxUtils.sendGetRequest=
    function (requestUrl,responseHandler,isJsonResponse){
        let request=getRequestObject();
        request.onreadystatechange=
        function(){
            handleResponse(request,responseHandler,isJsonResponse);
        };
        request.open('GET',requestUrl,true);
        request.send(null);//for POST only
    }


    function handleResponse(request,responseHandler,isJsonResponse){
        if((request.readyState==4)&&(request.status==200)){
            // responseHandler(request);
            if(isJsonResponse==undefined){
                isJsonResponse=true;
            }
            if(isJsonResponse){
                responseHandler(JSON.parse(request.responseText))
            }
            else{
                responseHandler(request,responseText);
            }
        }
    }


    global.$$$ajaxUtils=ajaxUtils;
})(window);

