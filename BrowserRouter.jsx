import { BrowserRouter, Route } from 'react-router-dom';


function App() {
    return (
<BrowserRouter>
        <Route path='/' component={Employee} exact></Route>
        <Route path='/form' component={Form} exact></Route>
</BrowserRouter>
    );
}
