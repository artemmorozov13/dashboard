import { Suspense, FC, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { AppRoutesWithAuthProps } from 'Shared/lib/routes/routesConfig'
import { routeConfig } from '../lib/RouterConfig';
import { PageLoader } from 'Widgets/PageLoader';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesWithAuthProps) => {
    const { path, element, authOnly } = route

    const renderElement = (
        <Suspense fallback={<PageLoader/>}>
            {element}
        </Suspense>
    )

    return (
        <Route
            key={path}
            path={path}
            element={authOnly ? <RequireAuth>{renderElement}</RequireAuth> : renderElement} />
    )
  }, [])

  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  )
}

export default memo(AppRouter)