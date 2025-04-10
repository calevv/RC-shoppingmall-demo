import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import HeaderBar from './components/HeaderBar';
import { useState } from 'react';

function App() {
    const [authenticate, setAuthenticate] = useState(false);
    const PrivateRoute = () => {
        return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
    };
    return (
        <div>
            <HeaderBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
                <Route path="/product/:id" element={<PrivateRoute />} />
            </Routes>
        </div>
    );
}

export default App;
