app.filter('listItemFilter', function() {
	return function(listItemTitle) {
		var output = listItemTitle;
		console.log('stuff');
		if (listItemTitle.length > 40) {
			output = output.slice(0,40) + ' ...';
		}
		return output;
	};
});