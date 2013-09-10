getFormData = function(arr) {
	var obj = new Object;
	$.map(arr, function(val, index) {
		obj[val.name] = val.value;
	});
	return obj;
}

