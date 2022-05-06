var gen=document.getElementsByClassName("gen")[0];
var output=document.getElementsByClassName("output")[0];
var duration=5000;
var arr=[1,2,3,4,"le1","le2"];




gen.addEventListener("click",function()
{
    var started=new Date().getTime();
    if(output.innerHTML!="1000")
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
                clearInterval(timer)
            }
            else
            {
                var num=arr[Math.floor(Math.random()*arr.length)];
                if(num==undefined)
                {
                    output.innerHTML="completed";

                }
                else{
                    output.innerHTML=num;

                }
           

               
                
                    
             
            }


        }
    ,200);
    

    
    

});
