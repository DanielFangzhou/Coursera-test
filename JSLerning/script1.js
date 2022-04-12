document.addEventListener('DOMContentLoaded',
function(event){

    document.querySelector('button')
    .addEventListener('click',function(){
        let self=this;
        // console.log("self:"+self);
        let name=''; 

        //call server to get the name
        $$$ajaxUtils.sendGetRequest('/name.json',
        function(res){
            let message=res.firstName+' '+res.lastName;
            if(res.sex==='male'){
                message+=' is male ';
            }
            else{
                message+=' is female';
            }

            document.querySelector('#content').innerHTML='<h2>'+message+'</h2>';

        });

       
    });




});