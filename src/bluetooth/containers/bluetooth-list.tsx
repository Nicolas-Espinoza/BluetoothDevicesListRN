import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import { BluetoothListLayout } from '../components/BluetoothListLayout';
import { Empty } from '../components/Empty';
import { Toggle } from '../components/Toogle';
import { Subtitle } from '../components/Subtitle';
import { Devices } from '../components/Devices';
import BluetoothSerial from "react-native-bluetooth-serial-next";
//npx react-native link react-native-bluetooth-serial-next;


const BluetoothList = (props: any) => {

    const [lista, setLista] = useState([]);
    const [bolEnable, setBolEnable] = useState(false);

    useEffect(() => {
        async function init() {
            //pregunta si quiero activar o desactivar el bluetooth
            const enable = await BluetoothSerial.requestEnable();
            //lista de dispositivos vinculados
            const lista = await BluetoothSerial.list();
            setLista(lista as never);
            setBolEnable(enable);
            console.log("LISTA DE DISPOSITIVOS", JSON.stringify(lista, null, 3));
        }
        init();
        return () => {
            async function remove() {
                await BluetoothSerial.stopScanning();
                console.log("termino de scanear");
            }
            remove();
        }

    }, []);

    const toggleBluetooth = (value: any) => {
        if (value) {
            return enableBluetooth();
        }
        disableBluetooh();
    }

    const enableBluetooth = async () => {
        try {
            await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            await BluetoothSerial.stopScanning();
            setBolEnable(true);
            setLista(lista as never);
        } catch (e) {
            console.log(e);
        }
    }

    const disableBluetooh = async () => {
        try {
            await BluetoothSerial.disable();
            await BluetoothSerial.stopScanning();
            setBolEnable(false);
            setLista([]);
        } catch (e) {
            console.log(e)
        }
    }

    const renderItem = (item: any) => {
        return <Devices {...item} iconLeft={require('../../iconos/dispositivos.png')}
            iconRight={require('../../iconos/config.png')} />
    }


    return (
        <BluetoothListLayout title='Bluetooth'>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth} />
            <Subtitle title='Lista de dispositivos' />
            <FlatList
                data={lista}
                ListEmptyComponent={() => <Empty text='No hay dispositivos' />}
                renderItem={renderItem}
            />
        </BluetoothListLayout>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black'
    }
});

export default BluetoothList;