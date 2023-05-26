<template>
	<form class="login-form" @submit.prevent="handleSubmit">
		<div>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" placeholder="Username" required v-model="username" />
		</div>

		<div>
			<label for="password">Password</label>
			<input id="password" name="password" type="password" placeholder="Password" required v-model="password" />
		</div>

		<div>
			<button type="submit">Log In</button>
		</div>
	</form>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
	data() {
		return {
			username: '',
			password: ''
		};
	},
	methods: {
		handleSubmit() {
			Meteor.loginWithPassword(this.username, this.password);
		}
	},
};
</script>
