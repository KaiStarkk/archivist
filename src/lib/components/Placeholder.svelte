<script lang="ts">
	let progress: number = -1; // TODO -- update during API call from server
</script>

	<!-- <ProgressBar value={progress >= 0 ? progress : undefined} /> -->
	<div class="card-header flex justify-between items-center">
		<div class="flex justify-center items-center space-x-4 animate-pulse">
			<div class="placeholder-circle w-16"></div>
			<div class="placeholder-circle w-14"></div>
			<div class="placeholder-circle w-10"></div>
		</div>
	</div>
	<div class="p-4 space-y-4 animate-pulse">
		<div class="placeholder"></div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder"></div>
			<div class="placeholder"></div>
			<div class="placeholder"></div>
			<div class="placeholder"></div>
		</div>
		<div class="placeholder"></div>
		<div class="placeholder"></div>
	</div>
