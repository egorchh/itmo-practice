import { Outlet } from 'react-router-dom';
import { Header } from '../../../../components';
import styles from './styles.module.css';

export const Layout = () => {
	return (
		<div className={styles.page}>
			<Header />
			<div className={styles.body}>
				<Outlet />
			</div>
		</div>
	);
};

