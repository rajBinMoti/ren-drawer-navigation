import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-elements';

const Calculator = () => {
    const nav = useNavigation();
    return (
        <View>
            <Text>Calculator</Text>
            <Button
                onPress={() => nav.navigate('Home')}
                title='Home'
            />
            <Button
                onPress={() => nav.navigate('TicTacToe')}
                title='TicTacToe'
            />
            <Button
                onPress={() => nav.goBack()}
                title='Back'
            />
            <Button
                onPress={nav.goBack}
                title='Back'
            />
        </View>
    )
}

export default Calculator
