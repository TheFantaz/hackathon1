function myFunction(the_text,the_time) {

    //var the_text = document.getElementById("RText").value;
    //var the_time = document.getElementById("RTIME").value;

    setTimeout(function(){ alert(the_text); }, the_time*1000);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting === "hello")
        myFunction(request.the_text,request.the_time);
        sendResponse({farewell: "goodbye"});
    }
  );