import {
	ReactFlow,
	Controls,
	Background
} from '@xyflow/react';
import { nodes as initialNodes, edges as initialEdges } from '../../data/graph-data'

import '@xyflow/react/dist/style.css';

export const Graph = () => {
	return (
		<ReactFlow
			nodes={initialNodes}
			edges={initialEdges}
			fitView
		>
			<Controls showInteractive={false} />
			<Background />
		</ReactFlow>
	)
};