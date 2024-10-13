export interface DirData {
	id: string;
	name: string;
	isDirectory: boolean;
	fullPath: string;
	children: any[] | undefined;
}[];
