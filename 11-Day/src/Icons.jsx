import {FaBeer, FaApple } from "react-icons/fa";
import { FiCoffee, FiHome } from 'react-icons/fi';
import { MdAlarm, MdAccessAlarm } from 'react-icons/md';
import {
      TiSocialLinkedin,
      TiSocialGithubCircular,
      TiSocialTwitterCircular,
      TiSocialGithub,
    } from 'react-icons/ti';

import moment from "moment";
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';






function ReactStrap() {
      
      const [modal, setModal] = React.useState(false);
      const toggleModal = () => setModal(!modal);

      return (
      <div>
            <Navbar color="dark" dark expand="md">
                  <NavbarBrand href="/">Reactstrap App</NavbarBrand>
                  <Nav className="mr-auto" navbar>
                        <NavItem>
                              <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                              <NavLink href="/about">About</NavLink>
                        </NavItem>
                  </Nav>
            </Navbar>

            <Button color="info" onClick={toggleModal}>Open Modal</Button>
            <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
            <ModalBody>
            This is a modal body.
            </ModalBody>
            </Modal>
      </div>
      );
}






function Icons() {
  return (
    <div>




      <ReactStrap/>
      <MdAlarm size="64"/>
      <MdAccessAlarm />
      <FaBeer/>
      <FaApple/>
      <FiCoffee />
      <FiHome />
      <TiSocialLinkedin size="32"/>
      <TiSocialGithub size="32"/>

      <div className='App'>
        <h1>How to use moment</h1>
        <p>This challenge was started {moment('2020-10-01').fromNow()}</p>
        <p>The challenge will be over in {moment('2020-10-30').fromNow()}</p>
        <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
      </div>


    </div>)


}

export default Icons
