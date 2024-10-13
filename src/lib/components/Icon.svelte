<script lang="ts">
	import * as icons from 'lucide-svelte';
	import type { ComponentType } from 'svelte';
	type IconName = keyof typeof icons;
	export let icon: string;
	let Icon: ComponentType = icons[icon as IconName] as unknown as ComponentType;
	let isIcon: boolean = icon in icons;
</script>

{#if isIcon}
	<Icon {...$$props} />
{:else}
	<span>[{icon}]</span>
{/if}
