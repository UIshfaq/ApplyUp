import "./App.css";
import {AppliancesList} from "./components/AppliancesList";
import {ApplyForm} from "./components/ApplyForm";

import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {AppliancesProvider} from "./contexts/AppliancesContext";
import {DetailsAppliances} from "./components/DetailsApply.tsx";
import {Login} from "./components/Login.tsx";

function App() {
    return (
        <AppliancesProvider>
            <Router>
                <Link to="/" className="m-4 inline-block text-blue-500 underline">
                    Formulaire
                </Link>
                <Link
                    to="/list"
                    className="m-4 inline-block text-blue-500 underline"
                >
                    Liste des candidatures
                </Link>
                <Routes>
                    <Route path="/" element={<ApplyForm/>}/>
                    <Route path="/list" element={<AppliancesList/>}/>
                    <Route path="/details/:id" element={<DetailsAppliances/>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </Router>
        </AppliancesProvider>
    );
}

export default App;
