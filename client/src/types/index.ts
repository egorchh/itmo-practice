type MindMapNodeCoords = {
	x: number;
	y: number;
}

export type MindMapNode = {
	id: string;
	term: string;
	definition: string;
	coordinate: MindMapNodeCoords;
}

export type MindMapEdge = {
	source: string;
	target: string;
	relation: string;
	marker?: string;
}

export type Source = {
	name: string;
	url: string;
}

export type GlossaryTerm = {
	id: number;
	term: string;
	definition: string;
	source: Source;
}