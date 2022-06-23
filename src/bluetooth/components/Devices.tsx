import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Separator } from './Separator';

export const Devices = (props: any) => {
    return (
        <>
            {console.log(JSON.stringify(props, null, 3))}
            <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>

                <View style={styles.wrapperLeft}>
                    <Image style={styles.iconLeft} source={props.iconLeft} />
                </View>

                <View style={styles.wrapperName}>
                    <Text style={styles.text}>{props.item.name}</Text>
                </View>

                <Image style={styles.iconRight} source={props.iconRight} />

            </TouchableOpacity>
            <Separator color='red' />
        </>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    wrapperLeft: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperName: {

    },
    iconLeft: {
        width: 20,
        height: 20
    },
    text: {
        color: 'black',
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 15,
        marginTop: 10
    },
    iconRight: {
        width: 20,
        height: 20
    }
});