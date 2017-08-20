var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1418771899108s.jpg') {
      myImage.setAttribute ('src','images/4a43f58db21b4bf9a115974fc127b698_a4defe3be99c9f073ee0a4d56b52a9f1_1_social_large.jpeg');
    } else {
      myImage.setAttribute ('src','images/1418771899108s.jpg');
    }
}