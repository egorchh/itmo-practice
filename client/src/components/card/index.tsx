import type { GlossaryTerm } from "../../types";
import styles from './styles.module.css';

export const Card = ({ term, definition }: GlossaryTerm) => {
	return (
		<article className={styles.card}>
			<h3 className={styles.title}>{term}</h3>
			<p className={styles.definition}>{definition}</p>
		</article>
	)
};