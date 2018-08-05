'use strict';

$(document).ready(function () {
    $('#count-sum').click(function () {
        var sumSalary = $('.salary');
        var result = 0;
        for (var i = 0; i < sumSalary.length; i++) {
            var changeStr = sumSalary[i].innerHTML;
            var valInt = parseInt(changeStr);
            var result = result += valInt;
        }
        $('#sum').text(result);
    });
});
