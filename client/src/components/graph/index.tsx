import {
	ReactFlow,
	Controls,
	Background,
	Node,
	Edge
} from '@xyflow/react';
import { fallbackEdges, fallbackNodes } from '../../constants/fallback-data';
import '@xyflow/react/dist/style.css';
import styles from './styles.module.css';

interface GraphProps {
	nodes?: Node[];
	edges?: Edge[];
	useMockData?: boolean;
}

export const Graph = ({ nodes, edges, useMockData = false }: GraphProps) => {
	const displayNodes = useMockData && !nodes ? fallbackNodes : nodes;
	const displayEdges = useMockData && !edges ? fallbackEdges : edges;

	return (
		<div className={styles.graphWrapper}>
			<ReactFlow
				nodes={displayNodes}
				edges={displayEdges}
				fitView
			>
				<Controls showInteractive={false} />
				<Background />
			</ReactFlow>
		</div>
	);
};