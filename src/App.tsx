// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PuzzleProvider } from "./context/PuzzleContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import PuzzlePage from "./pages/PuzzlePage";
import CreatePuzzlePage from "./pages/CreatePuzzlePage";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <AuthProvider>
            <PuzzleProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/categories" element={<CategoryPage />} />
                        <Route path="/puzzle/:id" element={<PuzzlePage />} />
                        <Route path="/create" element={<CreatePuzzlePage />} />
                        <Route path="/login" element={<SignInPage />} />
                        <Route path="/signup" element={<RegisterPage />} />
                    </Routes>
                    <Footer />
                </Router>
            </PuzzleProvider>
        </AuthProvider>
    );
}

export default App;
