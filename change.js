function change()
{
    document.getElementById("hero").style.display="none";
    document.getElementById("portal").style.display="block";
    
}
function back()
{
    document.getElementById("hero").style.display="inline";
    document.getElementById("portal").style.display="none";
}
function darkmodeswitch() {
    var element = document.body;
    
    element.classList.toggle("darkmode");
   
     
 }
