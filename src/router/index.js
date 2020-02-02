import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


import Home from "../views/Home.vue";



export default new VueRouter({
	mode: "history",

	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: Home
		}
	]
});