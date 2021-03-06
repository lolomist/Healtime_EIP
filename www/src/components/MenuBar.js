import React from 'react';
import {Link} from 'react-router'
import { ButtonGroup, Button } from 'react-bootstrap';

const Menubar = () => {
  return (
          <ButtonGroup id="menu" justified>
            <Button className="menu-btn" href="#">
            	<Link className="link" to="first">first</Link>
            </Button>
            <Button className="menu-btn" href="#" >
            	<Link className="link" to="assumptions">Assumptions</Link>
            </Button>
            <Button className="menu-btn" href="#">
            	<Link className="link" to="expenses">Expenses</Link>
            </Button>
            <Button className="menu-btn" href="#">
            	<Link className="link" to="savings-plan">Savings Plan</Link>
            </Button>
          </ButtonGroup>
  )
}

export default Menubar;
