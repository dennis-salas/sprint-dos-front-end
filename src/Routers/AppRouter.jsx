import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Bebidas } from "../Components/Bebidas/Bebidas";
import { Guajalotas } from "../Components/Guajalotas/Guajalotas";
import GuajalotasDetail from "../Components/GuajalotasGeneral/GuajalotasDetail";
import { Tamales } from "../Components/Tamales/Tamales";
import { Navbar } from "../Components/UI/Navbar";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/Guajalotas" component={Guajalotas} />
                    <Route exact path="/Bebidas" component={Bebidas} />
                    <Route exact path="/Tamales" component={Tamales} />
                    <Route exact path="/Guajalotas/:eleId" component={GuajalotasDetail} />
                </Switch>
            </div>
        </Router>
    );
}
export default App