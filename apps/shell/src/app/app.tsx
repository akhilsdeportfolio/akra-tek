import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import { Switch,Spin } from 'antd';

const Widgets = React.lazy(() => import('widgets/Module'));

export function App() {
  return (
    <React.Suspense fallback={<Spin />}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/widgets">Widgets</Link>
        </li>
      </ul>
      <ErrorBoundary fallback={<Switch/>}>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/widgets" element={<Widgets />} />        
      </Routes>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default App;
