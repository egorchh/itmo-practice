
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../types/routes';
import itmoLogo from './assets/itmo-logo.webp';
import githubSvg from './assets/github.svg';
import { EGORCH_GITHUB_URL, ITMO_URL } from './constants';
import styles from './styles.module.css';



export const Header = () => {
	const [isGithubLinkHovered, setIsGithubLinkHovered] = useState(false);

	const handleGithubLinkMouseEnter = () => {
		setIsGithubLinkHovered(true);
	};

	const handleGithubLinkMouseLeave = () => {
		setIsGithubLinkHovered(false);
	};

	return (
		<div className={styles.header}>
			<a className={styles.link} href={ITMO_URL} target='_blank'>
				<img className={styles.logo} src={itmoLogo} height={40} width='auto' />
			</a>
			<nav className={styles.navbar}>
				<NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to={AppRoutes.Glossary}>Глоссарий</NavLink>
				<NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.link} to={AppRoutes.Graph}>Граф</NavLink>
			</nav>
			<div className={styles.githubLink}>
				<a
					className={styles.link}
					href={EGORCH_GITHUB_URL}
					target='_blank'
					onMouseEnter={handleGithubLinkMouseEnter}
					onMouseLeave={handleGithubLinkMouseLeave}
				>
					{isGithubLinkHovered && <p className={styles.author}>Egor Podolskij</p>}
					<img className={styles.icon} src={githubSvg} height={30} width='auto' />
				</a>
			</div>
		</div>
	)
};