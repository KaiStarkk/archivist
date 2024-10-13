<script lang="ts">
	import '../app.postcss';
	import { init } from './init';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import SidebarLeft from './SidebarLeft.svelte';

	init();
</script>

<div class="flex flex-col h-screen">
	<Header />
	<div class="flex-1 flex min-h-0">
		<SidebarLeft />
		<main class="flex-1 flex">
			<slot />
		</main>
	</div>
	<Footer />
</div>
