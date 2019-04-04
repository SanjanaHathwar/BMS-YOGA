window.onload=function(){
    
    //TO GET THE NUMBER OF REGISTERED USERS
    $.ajax({

        type: 'GET',
        url: 'https://bms-icl-yoga.herokuapp.com/user',
        success: function(data) {   
            $.getJSON('https://bms-icl-yoga.herokuapp.com/user', function (data) {
                /* 
                var timer = $("#userss");
                timer.countTo({
                    from: 0,
                    to: timer.prop('data-to'),
                    speed: 1000,
                    refreshInterval: 50
                });
                 */
                var div = $('#userss');
                div.attr('data-from',0);
                div.attr('data-to',data.count);
                div.attr('data-speed',1000);
                div.attr('data-fresh-interval',20);
                //console.log(div.attr('data-to'));  
                $("#userss").html(div.attr('data-to')); 
            
            })
        }
    })
    var disapproved_load = "";
    
    $.ajax(
    {

        type: 'GET',
        url: 'https://bms-icl-yoga.herokuapp.com/tip/',
        success: function(data) 
        {   
            $.getJSON('https://bms-icl-yoga.herokuapp.com/tip/', function (data) {
                //alert(data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED);
                disapproved_load = data.TOTAL_NO_OF_PROJECTS_UPLOADED_YET_TO_BE_APPROVED;
                var div = $('#tips');
                div.attr('data-from',0);
                div.attr('data-to',data.count);
                div.attr('data-speed',1000);
                div.attr('data-fresh-interval',20);
                //console.log(div.attr('data-to'));  
                $("#tips").html(div.attr('data-to')); 
            })
        }
    })
    }
