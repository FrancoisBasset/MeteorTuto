<template>
	<li>
		<input type="checkbox" readonly :checked="task.checked" @click="toggleChecked()" />
		{{ task.text }}
		<button @click="removeTask()" class="delete-button">X</button>
	</li>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
	props: ['task'],
	methods: {
		toggleChecked() {
			Meteor.call('tasks.setIsChecked', this.task._id, !this.task.checked);
		},
		removeTask() {
			Meteor.call('tasks.remove', this.task._id);
		}
	}
};
</script>
