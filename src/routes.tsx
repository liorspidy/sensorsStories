import { lazy, Suspense } from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import PageLoader from './tools/loading/PageLoader';

const Main = lazy(() => import('./pages/main/Main'));
const About = lazy(() => import('./pages/about/About'));
const Media = lazy(() => import('./pages/media/Media'));

const wrap = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: wrap(Main) },
      { path: 'about-me', element: wrap(About) },
      { path: 'courses', element: wrap(Media) },
      { path: '*', element: <h1>Not Found</h1> },
    ],
  },
];
