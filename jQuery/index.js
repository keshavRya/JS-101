$("h1").css("color", "purple").css("font-size", "5rem");


$("h1").before("<button>before</button>");


$("h1").prepend("<button>prepend</button>");


$("h1").append("<button>append</button>");


$("h1").after("<button>after</button>");
$("h1").addClass("m-0");

$("h1 button").css("font-size", "1rem");

$("button").on("click", function(){
    $("h1").slideToggle();
});