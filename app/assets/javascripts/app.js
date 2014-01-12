
function navigateTo(){
  $("#toAbout").click(function(){
    $(".main").moveTo(2);
  });
  $("#toStudents").click(function(){
    $(".main").moveTo(3);
  });
  $("#toGa").click(function(){
    $(".main").moveTo(4);
  });
}

function changeStudent(callback){
  $(".get_student").click(function(){
    studentId = this.id;
    $.getJSON("students/"+studentId, callback);
  })
}

function studentCall(student){
  var studentInfo = student;

  var list = $("#student-info");
  var github= $("<li>").html($("<a>").text("github").attr("href", "http://github.com/" + student.github));
  var email = $("<li>").html($("<a>").text("email").attr("href", "mailto:" + student.email));
  var website = $("<li>").html($("<a>").text("website").attr("href", student.website));
  var picture = $("<img>").attr({src: "/assets/" + student.picture, class: "photo"});
  list.empty().append(github).append(email).append(website).append(picture);


}

function addStudent(){

  var check = prompt("Are you a student? Prove it! What's the magic word?");
  var formDiv = $("#add-student");
  if(check == "wdi_array"){
    formDiv.removeClass("hidden");
  }else{
    $("#warning").removeClass("hidden");
    $("#retry").removeClass("hidden");
    $("#giveup").removeClass("hidden");

    $("#retry").click(function(){
      window.location.reload();
    });
    $("#giveup").click(function(){
      window.location.href = window.location.origin;
    })
  }
}
