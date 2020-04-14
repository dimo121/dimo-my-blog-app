import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateEntry from '../components/CreateEntry';
import CreateBlog from '../components/CreateBlog';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path ='/' component={Dashboard} exact={true}/>
                <Route path='/createblog' component={CreateBlog} />
                <Route path ='/createentry' component={CreateEntry} />
            </Switch>
        </div>
    </BrowserRouter>

);

export default AppRouter;