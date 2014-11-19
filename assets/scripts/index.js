$("#form").submit(function(){
	$(this).attr("action","/t/"+$("#keys").val());
});
