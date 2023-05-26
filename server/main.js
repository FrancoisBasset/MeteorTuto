import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import TasksCollection from '../imports/api/db/TasksCollection';
import '../imports/api/tasksMethods';
import '../imports/api/tasksPublications';

const insertTask = taskText => TasksCollection.insert({text: taskText});

Meteor.startup(() => {
	if (TasksCollection.find().count() === 0) {
		[
			'First Task',
			'Second Task',
			'Third Task',
			'Fourth Task',
			'Fifth Task',
			'Sixth Task',
			'Seventh Task'
		].forEach(insertTask);
	}

	if (!Accounts.findUserByUsername('meteorite')) {
		Accounts.createUser({
			username: 'meteorite',
			password: 'password'
		});
	}
});
