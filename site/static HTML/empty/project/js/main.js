
function openDlg() {
    // default size, pixels unit
    var width = 400;
    var height = 200;

    // center position
    var x = window.innerWidth / 2 - width / 2;
    var y = window.innerHeight / 2 - height / 2;

    // setting options
    var options = "width=" + width +
        ",height=" + height +
        ",modal=yes,alwaysRaised=yes," +
        "left=" + x + ',' +
        "top=" + y;
    var sharedObject = {pWin: window};
    if(!window.dlg) {
        window.dlg = window.open("about.html", null, options, null);
        window.dlg.dialogArguments = sharedObject;

        window.dlg.addEventListener("beforeunload", function(e){
            this.dialogArguments.pWin.dlg = null;
        }, false);
    } else {
        window.dlg.focus();
    }
}
