import React from 'react'
import { Menu } from 'semantic-ui-react';

 const Navbar = () => {
    return (
        <Menu fixed='top' inverted>
            <Menu.Item name='home'/>
            <Menu.Item name='messages' />
            <Menu.Item name='friends'/>
        </Menu>
    )
}
export default Navbar