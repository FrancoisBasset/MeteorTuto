<template>
	<div class="container">
		<header>
			<h1>Todo List</h1>
		</header>
		<ul>
			<Task v-for="task in tasks" :key="task._id" :task="task" />
		</ul>
	</div>
</template>

<script>
import Task from '../components/Task.vue';
import { TasksCollection } from '../../api/TasksCollection';

export default {
	components: {
		Task
	},
	meteor: {
		tasks() {
			return TasksCollection.find({}).fetch();
		}
	}
};
</script>
