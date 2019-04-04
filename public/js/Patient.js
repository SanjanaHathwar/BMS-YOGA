window.onload=function(){
    
    console.log("d");
    $.ajax({
        type: 'GET',
        url: 'https://bms-icl-yoga.herokuapp.com/user',
        success: function(data) {
            console.log("x");
            $.getJSON("https://bms-icl-yoga.herokuapp.com/user", function (data) {
                for(i=0;i<data.count;i++)
                {
                    $("#admin tbody").append("<tr> <td>"+(i+1)+" </td> <td>"+data.user[i].user_details.username+"</td><td>"+data.user[i].user_details.email+"</td><td>"+data.user[i].user_details.phone+"</td></tr>");
                }
            })
        }
        
    })
}
    
      
