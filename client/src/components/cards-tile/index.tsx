import { useEffect, useState } from 'react';
import { Card } from "../card";
import { Spinner } from "../spinner";
import { apiService } from '../../services/api';
import { GlossaryTerm } from '../../types';
import styles from './styles.module.css';

export const CardsTile = () => {
  const [cards, setCards] = useState<Array<GlossaryTerm>>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGlossary = async () => {
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
    };

    fetchGlossary();
  }, []);
  
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className={styles.container}>
      {cards.map((card) => <Card key={card.id} {...card} />)}
    </div>
  );
};