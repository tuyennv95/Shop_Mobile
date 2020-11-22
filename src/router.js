import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Category from './Pages/Category';
import ProductDetail from './Pages/ProductDetail';
import Card from './Pages/Card';
import Success from './Pages/Success';
import Search from './Pages/Search';


import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import Menu from './Components/layout/Menu';
import Slider from './Components/layout/Slider';
import SideBar from './Components/layout/SideBar';


export default function Router() {

    return (
        <BrowserRouter>
            <Header />
            <div id="body">
                <div className="container">
                    <Menu />
                    <div className="row">
                        <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                            <Slider />


                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/404" component={NotFound} />
                                <Route path="/cat-:slug.:id/" component={Category} />
                                <Route path="/product-detail-:id" component={ProductDetail} />
                                <Route path="/Card" component={Card} />
                                <Route path="/Success" component={Success} />
                                <Route path="/Search" component={Search} />
                                <Route render={() => <Redirect to="/404" />} />
                                {/* <Route component={} /> */}
                            </Switch>
                        </div>

                            <SideBar />
                    </div>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    )
}