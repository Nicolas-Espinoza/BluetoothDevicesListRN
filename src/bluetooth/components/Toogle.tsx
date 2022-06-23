import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export const Toggle = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {props.value ? 'ON' : 'OFF'} </Text>
            <Switch style={styles.switch} value={props.value} onValueChange={props.onValueChange} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    switch: {
        width: 50,
    }
});