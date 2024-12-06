export const dataStore = {
	glossary: null,
	mindMap: null,
	getGlossary() { return this.glossary; },
	setGlossary(newGlossary) { this.glossary = newGlossary; },
	getMindMap() { return this.mindMap; },
	setMindMap(newMindMap) { this.mindMap = newMindMap; },
};