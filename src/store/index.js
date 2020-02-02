import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


import ExampleModule from "./modules/ExampleModule";

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== "production",

	modules: {
		ExampleModule
	}
});