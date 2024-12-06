import { Edge, MarkerType, Node } from "@xyflow/react";
import { MindMapNode, MindMapEdge } from "../types";
import { ResponseMindMapData } from "../types/api";

export const getNodesFromData = (nodes: MindMapNode[]): Node[] => nodes.map(node => ({
	id: node.id,
	position: {
		x: node.coordinate.x,
		y: node.coordinate.y,
	},
	data: {
	  	label: node.term
	}
}));
  

export const getEdgesFromData = (edges: MindMapEdge[]): Edge[] => edges.map(({ source, target, relation, marker }) => {
	const markerConfig = {
		type: MarkerType.Arrow,
		strokeWidth: 1.5,
		width: 20,
		height: 20,
	};

	return {
		id: `${source}-${target}`,
		source,
		target,
		label: relation,
		markerStart: marker !== 'end' ? markerConfig : undefined,
		markerEnd: marker === 'end' ? markerConfig : undefined,
	};
});

export const processGraphData = (data: ResponseMindMapData) => {
    const nodes: Node[] = getNodesFromData(data.nodes);
    const edges: Edge[] = getEdgesFromData(data.links);

    return { nodes, edges };
};