import { CardsTile } from "../../components";
import styles from './styles.module.css';

const GlossaryPage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Глоссарий:</h1>
			<CardsTile />
		</div>
	)
}

export default GlossaryPage;