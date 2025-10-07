// function that gets length of a video in minutes (mm:ss) and returns its lenth in seconds
function videoLenthToSeconds(videoLength){
    let minutes;
    let seconds;
    if(String(videoLength).at(0) == 0){
        minutes = String(videoLength).substring(1,2);
    } else{
        minutes = String(videoLength).substring(0,2);
    }

    if(String(videoLength).at(3) == 0){
        seconds = String(videoLength).substring(4,5);
    } else {
        seconds = String(videoLength).substring(3,5);
    }
    return Number(minutes)*60 + Number(seconds);

}

console.log(videoLenthToSeconds("13:56"));