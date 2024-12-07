import { useCallback, useEffect, useState } from 'react';
import { Card } from "../card";
import { Spinner } from "../spinner";
import { apiService } from '../../services/api';
import { GlossaryTerm } from '../../types';
import { fallbackGlossaryData } from '../../constants/fallback-glossary-data';
import { ErrorNotification } from '../error-notification';
import styles from './styles.module.css';

export const CardsTile = () => {
	const [cards, setCards] = useState<Array<GlossaryTerm>>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchGlossary = useCallback(async () => {
		setLoading(true);

		try {
			const glossary = await apiService.getGlossary();
			const glossaryArray: GlossaryTerm[] = glossary.data
			setCards(glossaryArray);
			setError(null);
		} catch (err) {
			setError('Failed to load glossary');
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchGlossary();
	}, [fetchGlossary]);

	const handleMockDataUse = useCallback(() => {
		setCards(fallbackGlossaryData);
		setError(null);
	}, []);

	if (loading) {
		return (
			<Spinner />
		);
	}

	return (
		<div className={styles.container}>
			{error ? (
				<ErrorNotification error={error} onRepeatRequest={fetchGlossary} onUseMockData={handleMockDataUse} />
			) : cards.map((card) => <Card key={card.id} {...card} />)}
		</div>
	);
};