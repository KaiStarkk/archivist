<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Icon from '$lib/components/Icon.svelte';
</script>

<header>
	<AppBar>
		<svelte:fragment slot="lead">
			<h1 class="h3" style="font-family: Sometype;">archivist</h1>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<a
				class="btn-icon btn-icon-sm variant-filled-surface"
				href="https://www.linkedin.com/in/kieranhannigan"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="Linkedin" />
			</a>
			<a
				class="btn-icon btn-icon-sm variant-filled-surface"
				href="https://github.com/kaistarkk"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="Github" />
			</a>
			<span class="divider-vertical h-5" />
			<LightSwitch />
		</svelte:fragment>
	</AppBar>
</header>
