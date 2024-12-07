import { useCallback, useEffect, useState } from 'react';
import { apiService } from '../../services/api';
import { Spinner } from '../../components/spinner';
import { ErrorNotification, Graph } from '../../components';
import { Node, Edge } from '@xyflow/react';
import { processGraphData } from '../../utils';
import styles from './styles.module.css';

const GraphPage = () => {
  const [graphData, setGraphData] = useState<{ nodes: Node[]; edges: Edge[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [useMockData, setUseMockData] = useState<boolean>(false);

  const fetchMindMap = useCallback(async () => {
    setLoading(true);
    setUseMockData(false);
    try {
      const data = await apiService.getMindMap();
      const processedData = processGraphData(data);
      setGraphData(processedData);
      setError(null);
    } catch (err) {
      setError('Failed to load mind map');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMindMap();
  }, [fetchMindMap]);

  const handleUseMockData = useCallback(() => {
    setUseMockData(true);
    setError(null);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Семантический граф терминов:</h1>
      <div className={styles.graphContainer}>
        {error ? (
          <ErrorNotification error={error} onRepeatRequest={fetchMindMap} onUseMockData={handleUseMockData} />
        ) : (
          <Graph
            nodes={graphData?.nodes}
            edges={graphData?.edges}
            useMockData={useMockData}
          />
        )}
      </div>
    </div>
  );
};

export default GraphPage;