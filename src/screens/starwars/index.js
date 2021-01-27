import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Planets from "../../Planets";
import Login from "../login";
import Cookies from 'universal-cookie';
import { loadAllPlanets } from '../../shared/actions/items';

const Starwars = (props) => {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (cookies.get("myData")) {
            dispatch(loadAllPlanets(""));
        }
        else {
            history.push("/login");
        }
    }, []);
    return (
        <Router>
            <Switch>
                <Route exact path='/starwars'>
                    <Navbar />
                    <Planets data={props.items} />
                </Route>
                <Route exact path="/logout">
                    <Login data={[]} isLogout={true} />
                </Route>
            </Switch>
        </Router>
    );
}
function mapStateToProps(state) {
    return {
        ...state?.item
    };
}
var StarwarsComp = connect(mapStateToProps)(Starwars);
export default StarwarsComp;