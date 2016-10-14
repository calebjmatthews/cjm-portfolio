export class Project {
	id: number;
	type: string;
	name: string;
	logo: string;
	screenshots: string[] = [];
	captions: string[] = [];
	shortDescription: string;
	longDescription: string[] = [];
	link: number;
	linkName: string;
}