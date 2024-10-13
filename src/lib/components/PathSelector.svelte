<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	export let path: string;
</script>

<div class="flex flex-col space-y-1">
	<p>Library location</p>
	<div class="input-group-divider input-group grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">
			<Icon icon="FolderSearch" />
		</div>
		<input
			type="search"
			bind:value={path}
			placeholder="R:/Downloads/qBittorrent/MAM/eBooks/Unimported"
		/>
		<button class="input-group-shim" on:click>Scan</button>
	</div>
</div>
