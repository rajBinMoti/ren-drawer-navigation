import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';

const TicTacToe = () => {
    const nav = useNavigation();
    return (
        <View>
            <Text>TicTacToe</Text>
            <Button
                onPress={() => nav.navigate('Home')}
                title='Home'
            />
            <Button
                onPress={() => nav.navigate('Calculator')}
                title='Calculator'
            />
            <Button
                onPress={() => nav.goBack()}
                title='Back'
            />
            <Button
                onPress={nav.goBack}
                title='Back'
            />
            {/* <Button
                onPress={() => nav.goBack()}
                title='Back'
            /> */}

        </View>
    )
}

export default TicTacToe
