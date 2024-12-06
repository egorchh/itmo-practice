import { type Node, type Edge, MarkerType } from '@xyflow/react'
import { glossaryNodes, glossaryEdges } from './glossary';

const nodes: Node[] = glossaryNodes.map(node => ({
	id: node.id,
	position: {
		x: node.coordinate.x,
		y: node.coordinate.y,
	},
	data: {
	  	label: node.term
	}
}));
  

const edges: Edge[] = glossaryEdges.map(({ source, target, relation, marker }) => {
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
  
export { nodes, edges };