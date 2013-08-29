function (doc){
	if (doc._id !== '_design/app'){
		emit([doc._id, doc._rev], {
			"method": doc.method,
			"type": doc.type,
			"dest": doc.dest,
			"date": doc.date,
			"people": doc.people,
			"notes:": doc.notes
		});
	}
};