import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import { Layout } from './components/layout/index.tsx';
import { GITHUB_PAGES_BASE_APP_ROUTER } from './constants/index.ts';

const GlossaryPage = lazy(() => import('../../pages/glossary-page'));
const GraphPage = lazy(() => import('../../pages/graph-page'));
const NotFoundPage = lazy(() => import('../../pages/not-found-page/index.tsx'));

export const Router = () => {
	return (
		<BrowserRouter basename={GITHUB_PAGES_BASE_APP_ROUTER}>
			<Suspense fallback={null}>
				<Routes>
					<Route path={AppRoutes.Glossary} element={<Layout />}>
						<Route index element={<GlossaryPage />} />
						<Route path={AppRoutes.Graph} element={<GraphPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};
