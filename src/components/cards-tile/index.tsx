import { Card } from "../card";
import { glossaryNodes as cards } from '../../data/glossary';
import styles from './styles.module.css'

export const CardsTile = () => {
	return (
		<div className={styles.container}>
			{cards.map((card, index) => <Card key={index} {...card} />)}
		</div>
	)
};