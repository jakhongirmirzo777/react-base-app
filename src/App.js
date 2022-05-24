import {Routes, Route} from "react-router-dom";
import {Fragment, lazy, Suspense} from "react";

const TheHeader = lazy(() => import('./layouts/TheHeader'))
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'))
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'))
const HomePage = lazy(() => import('./pages/HomePage'))
const UsersPage = lazy(() => import('./pages/UsersPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))

const fallbackLayout = <div>Loading...</div>

const App = () => {
    return (
        <Fragment>
            <Suspense fallback={fallbackLayout}>
                <TheHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<DefaultLayout/>}>
                            <Route index element={<HomePage/>}/>
                            <Route path='users' element={<UsersPage/>}/>
                        </Route>
                        <Route path="/dashboard" element={<DashboardLayout/>}>
                            <Route index element={<DashboardPage/>}/>
                            <Route path='login' element={<LoginPage/>}/>
                        </Route>
                    </Routes>
                </main>
            </Suspense>
        </Fragment>
    );
}

export default App;
