import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from './pages/Home';
import Calculator from './pages/Calculator'
import TicTacToe from './pages/TicTacToe';


const MainComponent = () => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Calculator" component={Calculator} />
                <Drawer.Screen name="TicTacToe" component={TicTacToe} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MainComponent
