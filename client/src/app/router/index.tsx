import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import { Layout } from './components/layout/index.tsx';

const GlossaryPage = lazy(() => import('../../pages/glossary-page/index.tsx'));
const GraphPage = lazy(() => import('../../pages/graph-page/index.tsx'));
const NotFoundPage = lazy(() => import('../../pages/not-found-page/index.tsx'));

export const Router = () => {
	return (
		<HashRouter>
			<Suspense fallback={null}>
				<Routes>
					<Route path={AppRoutes.Glossary} element={<Layout />}>
						<Route index element={<GlossaryPage />} />
						<Route path={AppRoutes.Graph} element={<GraphPage />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</HashRouter>
	);
};
