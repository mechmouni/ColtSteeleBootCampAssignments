$("#addBox").on("keydown", function(event) {
    if(event.which == 13) {
       console.log("Added: " + $(this).val());

      $("ul").append("<li><i></i> " + $(this).val() + "</li>");
      $("i").addClass("fas fa-minus-circle deleteIcon");
    
      $("li").addClass("todo");
      $("#addBox").val("");
}
  });



$("ul").on("click", "i", function(){
    console.log("Deleting:" + $(this).val());
    $(this).parent().fadeOut(300, function(){$(this).remove();});
    event.stopPropagation();
    });

$("ul").on("click", "li", function(){
    
    $("this").toggleClass("todoClicked");
    event.stopPropagation();

  });



