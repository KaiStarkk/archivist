<script lang="ts">
	import { RecursiveTreeView, type TreeViewNode, Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import Placeholder from '$lib/components/Placeholder.svelte';
	import PathSelector from '$lib/components/PathSelector.svelte';
	import SidebarRight from './SidebarRight.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { DirData } from '../api/directory/DirData';

	let path = '';
	let progress: number = -1;

	let allNodes: TreeViewNode[] = [];
	let nodes: TreeViewNode[] = [];
	let checkedNodes: string[] = [];

	let settings: PaginationSettings = {
		page: 0,
		limit: 10,
		size: allNodes.length,
		amounts: [10, 20, 50, 100],
	}

	async function scan() {
		const response = await fetch(`/api/directory?path=${encodeURIComponent(path)}`);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			allNodes = buildTreeViewNodes(data.nodes);
			settings.size = allNodes.length;
			update();
			progress = 100;
		} else {
			console.error('Failed to load directory contents');
		}
	}

	function update() {
		nodes = [];
		nodes = allNodes.slice(settings.page * settings.limit, settings.page * settings.limit + settings.limit);
	}

	function buildTreeViewNodes(data : DirData[]) : TreeViewNode[] {
        return data.map((item : DirData) => {
            const node : TreeViewNode = {
                id: item.id,
                content: item.name,
                lead: Icon,
                leadProps: { icon: item.isDirectory ? 'Folder' : 'File' },
                children: item.children ? buildTreeViewNodes(item.children) : undefined,
                value: item.fullPath,
            } satisfies TreeViewNode;
            return node;
        });
    }
</script>

<div class="flex-1 flex flex-col space-y-4 p-7">
	<div class="flex-1 flex flex-col min-h-0 space-y-4">
		<PathSelector bind:path on:click={scan} />
		<hr class="!border-t-4" />
		<div class="card flex-1 overflow-auto">
			{#if progress < 100}
				<Placeholder />
			{:else}
				<RecursiveTreeView selection multiple relational bind:nodes bind:checkedNodes />
			{/if}
		</div>
	</div>
	<Paginator bind:settings on:page={update} on:amount={update} showFirstLastButtons={true} showPreviousNextButtons={true} />
	<!-- BUG: After 3 page turns, throws an error -->
</div>
<SidebarRight />
