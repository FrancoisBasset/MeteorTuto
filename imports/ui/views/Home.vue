<template>
	<div class="container">
		<header>
			<h1>Todo List <span v-if="incompleteCount > 0">({{incompleteCount}})</span></h1>
		</header>
		<div v-if="currentUser">
			<button @click="logout()">Se déconnecter</button>
			<TaskForm />
			<button class="hide-button" @click="toggleHideCompleted()">
				<text v-if="hideCompleted">Show All</text>
				<text v-else>Hide all completed</text>
			</button>
			<div class="loading" v-if="!$subReady.tasks">Loading...</div>
			<ul>
				<Task v-for="task in tasks" :key="task._id" :task="task" />
			</ul>
		</div>
		<LoginForm v-else />
	</div>
</template>

<script>
import Task from '../components/Task.vue';
import TaskForm from '../components/TaskForm.vue';
import LoginForm from '../components/LoginForm.vue';
import TasksCollection from '../../api/db/TasksCollection';
import { Meteor } from 'meteor/meteor';

export default {
	components: {
		Task,
		TaskForm,
		LoginForm
	},
	data() {
		return {
			hideCompleted: false
		};
	},
	methods: {
		toggleHideCompleted() {
			this.hideCompleted = !this.hideCompleted;
		},
		logout() {
			Meteor.logout();
		}
	},
	meteor: {
		$subscribe: {
			tasks: []
		},
		tasks() {
			let filteredTasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
    
			if (this.hideCompleted) {
				filteredTasks = filteredTasks.filter(task => !task.checked);
			}

			return filteredTasks;
		},
		incompleteCount() {
			return TasksCollection.find({ checked: { $ne: true } }).count();
		},
		currentUser() {
			return Meteor.user();
		}
	}
};
</script>
