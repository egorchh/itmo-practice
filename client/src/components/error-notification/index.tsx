import { memo } from 'react';
import styles from './styles.module.css';

type Props = {
	error: string | null;
	onRepeatRequest: VoidFunction;
	onUseMockData: VoidFunction;
}

export const ErrorNotification = memo(({ error, onRepeatRequest, onUseMockData }: Props) => {
	const handleRequestReload = () => {
		onRepeatRequest();
	}

	const handleUseMockData = () => {
		onUseMockData();
	}

	return (
		<div className={styles.error}>
			{error}
			<div className={styles.buttons}>
				<button className={styles.mockButton} onClick={handleRequestReload}>
					Повторить запрос
				</button>
				<button className={styles.mockButton} onClick={handleUseMockData}>
					Отрисовать фолбечные данные
				</button>
			</div>
		</div>
	)
});

ErrorNotification.displayName = 'ErrorNotification'