import { GlossaryTerm, MindMapEdge, MindMapNode } from ".";

export type ResponseMindMapData = {
    nodes: MindMapNode[];
    links: MindMapEdge[]
};
  
  
export type ResponseGlossaryData = {
    data: GlossaryTerm[]
};
  