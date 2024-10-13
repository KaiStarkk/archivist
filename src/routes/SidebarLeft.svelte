<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

	let pages = {
		lead: [{ href: '/', icon: 'Home', text: 'Home' }],
		default: [
			{ href: '/process', icon: 'HardDriveDownload', text: 'Process' },
			{ href: '/ignore-list', icon: 'SquareSlash', text: 'Ignore List' },
		],
		trail: [{ href: '/settings', icon: 'Cog', text: 'Settings' }],
	};
</script>

<aside>
	<AppRail>
		<!-- Lead Slot -->
		<svelte:fragment slot="lead">
			{#each pages.lead as { href, icon, text }}
				<AppRailAnchor {href} selected={$page.url.pathname === href}>
					<svelte:fragment slot="lead">
						<Icon {icon} />
					</svelte:fragment>
					<span>{text}</span>
				</AppRailAnchor>
			{/each}
		</svelte:fragment>

		<!-- Default Slot -->
		{#each pages.default as { href, icon, text }}
			<AppRailAnchor {href} selected={$page.url.pathname === href}>
				<svelte:fragment slot="lead">
					<Icon {icon} />
				</svelte:fragment>
				<span>{text}</span>
			</AppRailAnchor>
		{/each}

		<!-- Trail Slot -->
		<svelte:fragment slot="trail">
			{#each pages.trail as { href, icon, text }}
				<AppRailAnchor {href} selected={$page.url.pathname === href}>
					<svelte:fragment slot="lead">
						<Icon {icon} />
					</svelte:fragment>
					<span>{text}</span>
				</AppRailAnchor>
			{/each}
		</svelte:fragment>
	</AppRail>
</aside>
