<template>
	<Span>
		This is {{ today }}. Have a good day :)<Br />
		Currently you have {{ ANY_GETTER }} points.
	</Span>
</template>

<style lang = "scss" scoped>
	span {
		display: inline-block;
		padding: 1em;
	}
</style>

<script>
	import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

	import {
		MODULE_PREFIX,

		ANY_STATE_NAME,
		ANY_GETTER_NAME,
		ANY_MUTATION_NAME,
		ANY_ACTION_NAME
	} from "@/store/modules/ExampleModule";


	export default {
		computed: {
			...mapState(MODULE_PREFIX, [
				ANY_STATE_NAME
			]),

			...mapGetters(MODULE_PREFIX, [
				ANY_GETTER_NAME
			]),

			today () {
				return new Date().toLocaleDateString();
			}
		},

		methods: {
			...mapMutations(MODULE_PREFIX, [
				ANY_MUTATION_NAME
			]),

			...mapActions(MODULE_PREFIX, [
				ANY_ACTION_NAME
			])
		}
	};
</script>