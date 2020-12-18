$("input").on("keypress",function(e){
    if(e.which===13 && $(this).val()!="")
    {
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+$(this).val()+"</li>");
        $(this).val("");
    }
});
$("ul").on("click" ,"li", function() //ul rather than li because toggle doesnt work for new added todo
{
    $(this).toggleClass("done");
});
$(".v").on("click",function(){
    $("input").fadeToggle();
});
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//How to add selector for particular delete icon
    //simple css use rather than jquery
//how to insert data in new li from input
   //.append()
//How to delete particular li
    //parent().remove()