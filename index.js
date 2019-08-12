var ctr = 0;

function sendSnackbar() {
    var notification = document.querySelector('.mdl-js-snackbar');
    notification.MaterialSnackbar.duration = 500;
    notification.MaterialSnackbar.showSnackbar(
        {
            message: ctr++,
            timeout: 500
        }
    );
}
