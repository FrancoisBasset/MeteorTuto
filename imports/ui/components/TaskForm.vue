<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" v-model="newTask" placeholder="Type to add new tasks" />

		<button type="submit" class="create-button">Add task</button>
	</form>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
	data() {
		return {
			newTask: ''
		};
	},
	methods: {
		handleSubmit() {
			if (this.newTask.trim() === '') {
				return;
			}

			Meteor.call('tasks.insert', this.newTask);
			this.newTask = '';
		}
	}
};
</script>
