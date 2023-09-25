import { Suspense, FC, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { AppRoutesWithAuthProps } from 'Shared/lib/routes/routesConfig'
import { routeConfig } from '../lib/RouterConfig';
import { PageLoader } from 'Widgets/PageLoader';
import { NotAuthOnly } from './NotAuthOnly';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesWithAuthProps) => {
    const { path, element, authOnly, notAuthOnly } = route

    const renderElement = (
        <Suspense fallback={<PageLoader/>}>
            {element}
        </Suspense>
    )
    
    if (authOnly) {
        return (
            <Route
                key={path}
                path={path}
                element={<RequireAuth>{renderElement}</RequireAuth>} />
        )
    }

    if (notAuthOnly) {
        return (
            <Route
                key={path}
                path={path}
                element={<NotAuthOnly>{renderElement}</NotAuthOnly>} />
        )
    }

    return (
        <Route
            key={path}
            path={path}
            element={renderElement} />
    )
  }, [])

  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
  )
}

export default memo(AppRouter)