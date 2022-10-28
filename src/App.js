import './App.css';

// import logoDesktop from './assets/logo-desktop.svg'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage";
import MainLayout from "./layout/MainLayout";

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<MainPage />} />
                <Route path="catalog" element={<CatalogPage />}/>
            </Route>

            <Route path="*" element={
                <div>страница не найдена</div>
            }/>
        </Routes>
    )


}

export default App;
