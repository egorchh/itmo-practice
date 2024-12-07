import type { GlossaryTerm } from "../../types";
import styles from './styles.module.css';

export const Card = ({ term, definition, source }: GlossaryTerm) => {
	return (
		<article className={styles.card}>
			<div>
				<h3 className={styles.title}>{term}</h3>
				<p className={styles.definition}>{definition}</p>
			</div>
			{source && (
				<div className={styles.source}>
					<p>Источник:&nbsp;
						<a href={source.url} target="_blank" rel="noopener noreferrer">
							{source.name}
						</a>
					</p>
				</div>
			)}
		</article>
	)
};