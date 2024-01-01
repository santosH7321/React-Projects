import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent,   DrawerOverlay } from '@chakra-ui/react'
import React from 'react';
import Sidenav from './Sidenav';


const SideDrawer = ({isOpen, onClose}) => {
    
    return (
      <>
       
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
            <Sidenav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideDrawer
