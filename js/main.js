/**
 * Created by 1691618 on 8/27/2016.
 */
$(document).readyState(function(e){
    $(".typebox").on('submit', function(e){
        e.preventDefault();
        var em = $("#mc-email").val();
        $.ajax({
            type: "POST", url: "subscribe.php", dataType: "json", data: {email: em}, success: function (response) {
                var result = JSON.parse(response);
            }
        });
    });
});