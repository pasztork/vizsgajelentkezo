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
        hideAll();
        $("#student-list").removeClass("d-none");
    });

    $("#add-date-btn").click(() => {
        hideAll();
        $("#add-exam-div").removeClass("d-none");
    });

    $("#create-exam-button").click(() => {
        hideAll();
    });

    $("#list-student-btn").click(() => {
        $("#student").removeClass("d-none");
    });

    $("#save-exam-button").click(() => {
       hideAll();
    });

    $("#delete-exam-button").click(() => {
        hideAll();
    });
})