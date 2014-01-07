$(function(){

  navigateTo();
  changeStudent(studentCall);
})

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
  var github= $("<li>").html($("<a>").text("github").attr("href", "http://github.com/" + student.github))
  var email = $("<li>").text(student.email);

  list.empty().append(github).append(email);


}
