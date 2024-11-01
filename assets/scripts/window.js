// window.onload = function () {
//     let startPos;
//     let geoSuccess = function (position) {
//       startPos = position;
//     //   document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//     //   document.getElementById('startLon').innerHTML = startPos.coords.longitude;
//     console.log("latitude",startPos.coords.latitude);
//     console.log("longitude",startPos.coords.longitude);
//     count=0
//     let user={
//         "latitude":startPos.coords.latitude,
//         "longitude":startPos.coords.longitude
//     }
//     localStorage.setItem(`user ${count++}`, user.json());
//     localStorage.setItem("longitude", startPos.coords.longitude);

//     };

//     navigator.geolocation.getCurrentPosition(geoSuccess);
//   };
//   function sendEmail() {
//     Email.send({
//         SecureToken : "<your generated token>",
//         To : 'recipient@example.com',
//         From : "sender@example.com",
//         Subject : "Test Email",
//         Body : "<html><h2>Header</h2><strong>Bold text</strong><br/></br><em>Italic</em></html>",
//         Attachments : [
//         {
//             name : "smtp.png",
//             path : "https://…/smtp.png"
//         }]
//         }).then(message => alert(message)
//         );
//     }