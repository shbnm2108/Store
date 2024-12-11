import React from "react";

import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";
import { Routes,Route } from "react-router-dom";
import Checkout from './containers/Checkout/Checkout'
import Account from "./containers/Account/Account";
class App extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Shopping/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/account" element={<Account/>}/>
                    </Routes>
                </Layout>
            </div>
        )
    }
}

export default App