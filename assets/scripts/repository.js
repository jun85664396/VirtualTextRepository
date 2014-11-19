function e(t,n){
	if (e.timeHandler) clearTimeout(e.timeHandler);
	e.timeHandler = setTimeout(t, n)
}
$("#msg").keyup(function(){
	$("#save-ok").hide();
	var t = function(){
		var data = {
			"msg":$("#msg").val()
		}
		$.ajax({
			"url":"/t/"+$("#keys").val(),
			"type":"PUT",
			"data":data,
			"dataType":"JSON",
			"success":function(res){
				if(res){
					$("#save-ok").show();
				}else{
					alert("Error!");
				}
			}
		})
	};
	e(t,500);
});
