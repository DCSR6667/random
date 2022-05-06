var gen=document.getElementsByClassName("gen")[0];
var output=document.getElementsByClassName("output")[0];
var duration=7000;
var arr=[2,3,4,5,6,7,9,10,11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,"le2","le3","le4","le5","le6","le7","le8","le9","le11","le12","le13","le14","17-504"];
var aud = document.getElementById("myAudio")



gen.addEventListener("click",function()
{
    aud.play();
    gen.style.display="none";
    var started=new Date().getTime();
    if(output.innerHTML!="Welcome")
    {
        arr=arr.filter(function(ele)
        {
            return ele!=output.innerHTML;

        })
        
        
    }

    
    timer=setInterval(function()
        {
            var d=new Date().getTime();
            if(d-started>duration)
            {
                aud.load();
                clearInterval(timer)
                aud.pause();
                gen.style.display="block";

            }
            else
            {
                var num=arr[Math.floor(Math.random()*arr.length)];
                if(num==undefined)
                {
                    output.innerHTML="Sayonara";

                }
                else{
                    output.innerHTML=num;
                }
           

               
                
                    
             
            }


        }
    ,200);
    

    
    

});
