import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

const Home = () => {
    const navHandler = useNavigation();

    return (
        <View>
            <Text>Home Pge</Text>
            <Button
                onPress={() => navHandler.navigate('Calculator')}
                title="Calculator"
            />
            <Button
                onPress={() => navHandler.navigate('TicTacToe')}
                title="TicTacToe"
            />
            <Button
                onPress={() => navHandler.openDrawer()}
                title="Open Drawer"
            />
        </View>
    )
}

export default Home
