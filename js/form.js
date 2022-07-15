$(document).ready(function () {

    var reg = $("#contact-form");
    function submitMessage() {
        $('#contact-submit span').text('Sending ');
        $('#contact-submit i').removeClass('fas fa-arrow-right').addClass('fas fa-spinner');

    };
    function submitSuccessMessage() {
        $('#contact-submit span').text('Sent');
        $('#contact-submit i').removeClass('fas fa-spinner').addClass('fas fa-check');

    };
    function refreshPage() {
        window.location.reload();
    }

    reg.validate({
        rules: {
            Username: {
                required: true,
                minlength: 4,
            },
            email: {
                required: true,
            },
            subject: {
                required: true,
                minlength: 4,
            },
            message: {
                required: true,
                minlength: 10,
            },
        },

        messages: {
            Username: {
                required: "Please enter your name",
            },
            email: {
                required: "Please enter a valid email",
            },
            subject: {
                required: "Please enter the subject",
            },
            message: {
                required: "Please enter your message here",
            },
        },

        submitHandler: function (form) {

            // $('#contact-submit').html('Sending....');
            // $('#contact-submit span').text('Sending ');
            // $('#contact-submit i').removeClass('fas fa-arrow-right').addClass('fas fa-spinner-third');
            submitMessage();
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbw5OJia2h0FUS4lUz4OOXyDyc5WgdXZbWbg45V98ILlQYSGuP9vu0DMQ4zmi5kRGjPB/exec",
                data: $("#contact-form").serialize(),
                method: "post",
                success: function (response) {
                    // $('#contact-submit').html('Sent');
                    submitSuccessMessage();
                    $('.modal-form-success').css("display", "block");
                    $('#modal-btn').click(refreshPage);



                    // alert("Form submitted successfully");
                    // console.log("sent");
                    // window.location.href = "index.html";

                },
                error: function (err) {
                    alert("Something Error");
                },
            });
        },
    });


});
