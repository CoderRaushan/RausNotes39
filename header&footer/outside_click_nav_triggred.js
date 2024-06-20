    document.addEventListener('DOMContentLoaded', function () {
        var nav = document.querySelector('.nav-class-for-phone');
        var checkbox = document.getElementById('check');
        document.addEventListener('click', function (event) {
            if (!nav.contains(event.target) && checkbox.checked) {
                checkbox.checked = false;
            }
        });
    });
