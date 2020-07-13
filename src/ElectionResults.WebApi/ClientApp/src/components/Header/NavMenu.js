import React, { useState, Suspense } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import votLogo from '../../images/rezultateVot.png';
import './NavMenu.css';
import ElectionPicker from '../../services/electionPicker';
import { useTranslation } from "react-i18next";

export function NavMenu() {
  const [state, setState] = useState({
    collapsed: true
  });

  const toggleNavbar = () => {
    setState({
      collapsed: !state.collapsed
    });
  }

  const loadElectionRound = (event) => {
    ElectionPicker.changeSelection(event.target.value);
  }

  const { t } = useTranslation();

  return (
    <Suspense fallback={ 'loading' }>
      <header>
        <Navbar light expand="md">
          <Container>
            <NavbarBrand tag={ Link } to="/web">
              <img src={ votLogo } width={ 90 } height={ 80 } alt="Rezultate Vot"/>
            </NavbarBrand>
            <NavbarToggler className="mr-2 menu-toggle" onClick={ toggleNavbar }/>
            <Collapse isOpen={ !state.collapsed } navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <select className="header-select" onChange={ loadElectionRound }>
                    <option value="prezidentiale24112019">TURUL 2</option>
                    <option value="prezidentiale10112019">TURUL 1</option>
                  </select>
                </NavItem>
                <NavItem>
                  <NavLink tag={ Link } className="text-dark" to="/web/despre-proiect">
                    {
                      t('despre_proiect')
                    }
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ Link } className="text-dark" to="/web/despre-noi">
                    {
                      t('despre_noi')
                    }
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    </Suspense>
  );
}
