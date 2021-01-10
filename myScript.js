var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) 
{
  dropdown[i].addEventListener("click", function() 
  {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") 
    {
      dropdownContent.style.display = "none";
    } else 
    {
      dropdownContent.style.display = "block";
    }
  });
}

var navCounter = 1;
var active = 0;
/* in functie de paritatea lui navCounter, inchide sau deschide navigatia, 250x = 1; 0x = 0 */
function Nav() 
{
	if (navCounter%2)
	{
	    document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("main").style.marginLeft = "250px";
	    document.body.style.backgroundColor = "rgba(37, 39, 77, 1)";
	    active = 1;
	}
	else
	{
		document.getElementById("mySidenav").style.width = "0";
  		document.getElementById("main").style.marginLeft = "0";
  		document.body.style.backgroundColor = "rgba(37, 39, 77, 1)";
  		active = 0;
	}
	navCounter++;
}

function NavHover()
{
	if(!active)
	{
		document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("main").style.marginLeft = "250px";
	    document.body.style.backgroundColor = "rgba(37, 39, 77, 1)";
	    active = 1;
	}
	else
	{
		document.getElementById("mySidenav").style.width = "0";
  		document.getElementById("main").style.marginLeft = "0";
  		document.body.style.backgroundColor = "rgba(37, 39, 77, 1)";
  		active = 0;
	}
}