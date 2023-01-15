$(() => {
  function hideAll() {
    $("#student-list").addClass("d-none");
    $("#add-exam-div").addClass("d-none");
  }

  (function () {
    $("#student").addClass("d-none");
  })();

  hideAll();

  $("#list-emails-btn").click(() => {
    if ($("#date").val() === "") return;
    hideAll();
    $("#student-list").removeClass("d-none");
  });

  $("#add-date-btn").click(() => {
    if ($("#date").val() === "") return;
    hideAll();
    $("#add-exam-div").removeClass("d-none");
    $("#new-date").val($("#date").val());
  });

  $("#create-exam-button").click(() => {
    hideAll();
  });

  $("#list-student-btn").click(() => {
    if ($("#email").val() === "") return;
    $("#student").removeClass("d-none");
  });

  $("#save-exam-button").click(() => {
    hideAll();
  });

  $("#delete-exam-button").click(() => {
    hideAll();
  });
});
