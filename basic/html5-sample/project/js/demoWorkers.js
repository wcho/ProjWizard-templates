/*
 * demo watch
 */
function demoTime() {
    var date = new Date();
    
    var ampm;
    var hour = date.getHours();
    if(hour > 12 && hour < 24) {
        ampm = 'pm';
        hour = hour - 12;
    } else {
        ampm = 'am';
        if(hour === 24) {
            hour = 12;
        }
    }

    var min = date.getMinutes();
    var sec = date.getSeconds();

    var data = {
        ampm: ampm,
        hour: hour,
        min: min,
        sec: sec
    };
    postMessage(data);
    
    console.log('demoworker....');
    setTimeout(demoTime, 500);
}

demoTime();
