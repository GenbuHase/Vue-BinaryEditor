export const MODULE_PREFIX = "ExampleModule"; // A variable to access to namespaced modules

export const ANY_STATE_NAME = "ANY_STATE";

export const ANY_GETTER_NAME = "ANY_GETTER";

export const ANY_MUTATION_NAME = "ANY_MUTATION";

export const ANY_ACTION_NAME = "ANY_ACTION";


/** @type {import("vuex").StoreOptions} */
const storeModule = {
	/**
	 * It will affect to the module's UUIDs.
	 * ex) Getters: getters["getterA"] -> getters["namespace/getterA"]
	 * ex) Mutations: commit("mutationA") -> commit("namespace/mutationA")
	 * ex) Actions: dispatch("actionA") -> dispatch("namespace/actionA")
	 */
	namespaced: true,

	state: {
		[ANY_STATE_NAME]: 0
	},

	getters: {
		[ANY_GETTER_NAME] (state, getters, rootState, rootGetters) {
			return state[ANY_STATE_NAME];
		}
	},

	// Synchronized functions
	mutations: {
		[ANY_MUTATION_NAME] (state, payload) {
			state[ANY_STATE_NAME] += payload.value;
		}
	},

	// Asynchronized functions
	actions: {
		[ANY_ACTION_NAME] (context, payload) {
			setTimeout(() => context.commit(ANY_MUTATION_NAME, payload), 500);
		}
	}
};

export default storeModule;