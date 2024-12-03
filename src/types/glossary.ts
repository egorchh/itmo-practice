type GlossaryCardCoords = {
	x: number;
	y: number;
}

export type GlossaryCard = {
	id: string;
	term: string;
	definition: string;
	coordinate: GlossaryCardCoords;
}