import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../../../components';
import styles from './styles.module.css';
// import { Footer } from '../footer';

export const Layout = () => {
	return (
		<div className={styles.page}>
			<Header />
			<div className={styles.body}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

