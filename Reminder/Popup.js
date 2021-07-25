document.getElementById("RButton").addEventListener("click", function() {
    var text = document.getElementById("RText").value;
    var time = document.getElementById("RTIME").value;

    chrome.runtime.sendMessage({greeting:"hello",the_text:text,the_time:time}, function(response) {console.log(response.farewell)})
});
