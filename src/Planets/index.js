import React, { useState, useEffect } from "react";
import { connect, useDispatch } from 'react-redux';
import { Card, Grid, Dimmer, Loader, } from "semantic-ui-react";
import { Row } from "reactstrap";
import "./index.css";
import swal from 'sweetalert';
import * as util from '../shared/util.js';
import Cookies from 'universal-cookie';
import { loadAllPlanets } from '../shared/actions/items';

const Planets = (data) => {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [lastSearchTime, setLastSearchTime] = useState(0);
    const onChange = (event) => {
        const diff = timer - lastSearchTime;
        const input = event.target.value;
        let usrname = cookies.get('myData');
        const error = (usrname !== util.userNameforNoSearchLimit && counter > util.counterLimit && diff < util.timeLimitInSec) && util.timeoutMsgforOther;
        if (!error) {
            setCounter(counter + 1);
            dispatch(loadAllPlanets(input));
            setLastSearchTime(timer);
        }
        else {
            swal(error, "", "error");
            return false;
        }
    }
    useEffect(() => {
        dispatch(loadAllPlanets(""));
        const interval = setInterval(() => setTimer(timer + 1), 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <Row>
                <h1 className="planets_h1 hide">STAR WARS APP</h1>
                <input className="starwars_input" type="text" placeholder="Search for Planets" onChange={onChange} />
            </Row>
            <Row className="planets_row">
                {data.items.length > 0 ? <Grid columns={5} >
                    {
                        data.items.map((value, i) => {
                            const style = {
                                width: util.calculateHeightWidth(parseInt(value.population, 10)) + 'px',
                                height: util.calculateHeightWidth(parseInt(value.population, 10)) + 'px'
                            }
                            return (
                                <div id="div_change" key={`planetitem_${i}`}>
                                    <Grid.Column key={i} className="planet_card">
                                        <Card style={style}>
                                            <Card.Content >
                                                <Card.Header>{value.name}</Card.Header>
                                                <Card.Description>
                                                    <strong>Climate: {value.climate} </strong>
                                                    <br></br>
                                                    <strong>Surface Water: {value.surface_water}</strong>
                                                    <br></br>
                                                    <br></br>
                                                    <strong>Population: {value.population}</strong>
                                                    <br></br>
                                                    <strong>Rotation Period:{value.rotation_period}</strong>
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </div>
                            )
                        })
                    }

                </Grid> : !data.isFetching ? <div style={{ textAlign: 'center' }}>No Record(s) found</div> :
                        <Dimmer active>
                            <Loader />
                        </Dimmer>
                }
            </Row>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.item
    };
}
var PlanetsComp = connect(mapStateToProps)(Planets);
export default PlanetsComp;