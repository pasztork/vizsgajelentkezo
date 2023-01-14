$(() => {
    (function () {
        let responseDiv = $("#response-div");
        responseDiv.addClass("d-none");
    })();

    $("#signup-btn").click(function (event) {
        event.preventDefault();
        (function () {
            let signupDiv = $("#signup-div");
            signupDiv.addClass("d-none");
        })();
        (function () {
            let responseDiv = $("#response-div");
            responseDiv.removeClass("d-none");
        })();
    });
});
