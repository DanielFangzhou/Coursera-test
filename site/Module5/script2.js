document.addEventListener("DOMContentLoaded",
function(event){

    document.querySelector("body").addEventListener("mousemove",
        function(event){
            console.log(event.clientX);
            console.log(event.clientY);

        }
    );
}
);

