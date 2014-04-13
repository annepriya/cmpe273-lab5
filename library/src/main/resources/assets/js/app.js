

$(":button").click(function() {
	var isbn = this.id;
	var urlForUpdate="library/v1/books/"+isbn+"?status=lost";
	var status="lost";
	var dataObject = {'status': status };
    var response=$.ajax( { url:urlForUpdate , data : JSON.stringify(dataObject) ,contentType :'application/json' ,accept:'application/json',type:'PUT',success: function(){
    var value=	$("#"+isbn).attr("disabled","true");
    var num=$("#status"+isbn).html(status);
    	
       }
    
    } );
	
});
