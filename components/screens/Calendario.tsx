import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const Agenda = [
    {
        "id": 1,
        "Especialdiad": "Pediatra General",
        "Mes": "Junio",
        "Dia": 23
    },
    {
        "id": 2,
        "Especialdiad": "Pediatra Nutricional",
        "Mes": "Junio",
        "Dia": 19
    },
    {
        "id": 3,
        "Especialdiad": "Pediatra Bronco Pulmonar",
        "Mes": "Agosto",
        "Dia": 2
    },
    {
        "id": 4,
        "Especialdiad": "Pediatra Bronco Pulmonar",
        "Mes": "Agosto",
        "Dia": 2
    }
]

function Calendario({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -400 }}>
            <Card>
                <Card.Title>CALENDARIO</Card.Title>
                <Card.Divider />
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Profesional</Text>
                        <Text style={styles.tableHeader}>Mes</Text>
                        <Text style={styles.tableHeader}>Dia</Text>
                    </View>
                    {Agenda.map(item => (
                        <View key={item.id} style={styles.tableRow}>
                        <Text style={styles.tableCell}>{item.Especialdiad}</Text>
                        <Text style={styles.tableCell}>{item.Mes}</Text>
                        <Text style={styles.tableCell}>{item.Dia}</Text>
                    </View>

                    ))}
                


                </View>


                <Button
                    icon={
                        <Icon
                            name="code"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="Buscar"
                    onPress={() => navigation.navigate('Home')}
                />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        width: 350,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableHeader: {
        flex: 1,
        padding: 5,
        fontWeight: 'bold',
    },
    tableCell: {
        flex: 1,
        padding: 5,
    },
});

export default Calendario