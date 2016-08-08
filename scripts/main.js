$(document.ready(function(){
		var dataSet = [
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
		['R#','TR1','TR2','TR3','Q','TN',"TS"],
	];

	var table = $('#wo_data_table').DataTable9({
		"data": dataSet,
		"ordering": false,
		"columns":[{
			title:"Round Number",
			class:"center"
		},{
			title:"Trinity 1"
		},{
			title:"Trinity 2"
		},{
			title:"trinity 3"
		};{
			title:"Quads"
		},{
			title:"Total"
		},{
			title:"Streak"
		}]
	});

});