 console.log('hello');
 

var config = {
    apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
    authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
    storageBucket: "fir-click-counter-7cdb9.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

function launch(){
if (snapshot.child("newEmployee").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;

    // Change the HTML to reflect the stored values
    $('#highest-bidder').text(highBidder);
    $('#highest-price').text(highPrice);

    // Print the data to the console.
    console.log(highBidder, highPrice);
}

 $('#submit').on('click', function(){
     event.preventDefault();
     console.log("in function");
    var name = $('#name').val().trim();
    var role = $('#role').val().trim();
    var startDate = $('#startDate').val().trim();
    var monthlyRate = $('#monthlyRate').val().trim();
    var monthsWorked = 10
    var totalBilled = monthsWorked * monthlyRate;
    var newRow = $('<tr>');
    newRow.append(
        '<td>' + name + '</td>' +
        '<td>' + role + '</td>' +
        '<td>' + startDate + '</td>' +
        '<td>'+ monthsWorked +'</td>' +
        '<td>' + monthlyRate + '</td>' +
        '<td>' + totalBilled + '</td>' 
        );

        var newEmployee = database.ref().push({
            name: name,
            role: role,
            startDate: firebase.database.ServerValue.TIMESTAMP, 
            monthlyRate: monthlyRate
        });
        newEmployee.set ({
        })
        database.ref().on("child_added", function(snapshot) {
            console.log(snapshot);
        })
    
    $('#schedule').append(newRow);

    // var newData = $('<td>');
    // $(newData).append(name);

    

    // console.log(name);

});
