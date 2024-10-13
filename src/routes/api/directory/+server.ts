import { promises, Dirent } from 'fs';
import * as path from 'path';
import type { RequestHandler } from '@sveltejs/kit';
import { sha256 } from 'js-sha256';
const DEFAULT: string = 'R:/Downloads/qBittorrent/MAM/eBooks/Unimported';

async function readDirectory(directoryPath: string): Promise<any[]> {
	let dirents: Dirent[];
	try {
		dirents = await promises.readdir(directoryPath, { withFileTypes: true });
	} catch (error) {
		console.error(`Error reading directory ${directoryPath}:`, error);
		return [];
	}

	const nodes = await Promise.all(
		dirents.map(async (dirent) => {
			const fullPath = path.join(directoryPath, dirent.name);
			const isDirectory = dirent.isDirectory();

			const node = {
				id: sha256(fullPath),
				name: dirent.name,
				isDirectory,
				fullPath,
				children: isDirectory ? await readDirectory(fullPath) : undefined,
			};

			return node;
		})
	);
	return nodes;
}


export const GET: RequestHandler = async (event) => {
	const url = new URL(event.request.url);
	console.log(`API request received - search URL: ${event.request.url}`);
	const directoryPath = url.searchParams.get('path') || DEFAULT;
	try {
		const nodes = await readDirectory(directoryPath); // Use the recursive function
		return new Response(JSON.stringify({ nodes }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to read directory' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
