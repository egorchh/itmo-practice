import type { GlossaryCard } from "../../types/glossary";
import styles from './styles.module.css';

export const Card = ({ term, definition }: GlossaryCard) => {
	return (
		<article className={styles.card}>
			<h3 className={styles.title}>{term}</h3>
			<p className={styles.definition}>{definition}</p>
		</article>
	)
};