
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
  var buttons = $("#buttons");
  var name = $("<p>").text(student.name).attr("class", "name");
  var github= $("<li>").html($("<a>").text("github").attr({href: "http://github.com/" + student.github, class: "contact"}));
  var email = $("<li>").html($("<a>").text("email").attr({href: "mailto:" + student.email, class: "contact"}));
  var picture = $("<img>").attr({src: student.picture, class: "photo"});
  var blurb = $("<p>").text(student.blurb).attr("class", "blurb");
  var twitter = $("<li>").html($("<a>").text("twitter").attr({href: student.twitter, class: "contact"}));
  list.empty();
  buttons.empty();
  if(student.website) {
    var website = $("<li>").html($("<a>").text("website").attr({href: student.website, class: "contact"}));
    buttons.append(website);
  }
  if(student.twitter) {
    var website = $("<li>").html($("<a>").text("twitter").attr({href: student.twitter, class: "contact"}));
    buttons.append(twitter);
  }
  list.empty().append(picture).append(name).append(blurb);
  buttons.append(github).append(email);


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
