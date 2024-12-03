import { Router } from './router';
import styles from './styles.module.css';
import './styles/index.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<Router />
		</div>
	)
};
