import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';
import { Layout } from './components/layout/index.tsx';

const GlossaryPage = lazy(() => import('../../pages/glossary-page'));
const GraphPage = lazy(() => import('../../pages/graph-page'));
const NotFoundPage = lazy(() => import('../../pages/not-found-page/index.tsx'));

export const Router = () => {
	return (
		<BrowserRouter>
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
