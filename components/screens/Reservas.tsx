import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

function Reservas({ navigation }) {
  const [Prevision, setPrevision] = useState('');
  const [Sucursal, setSucursal] = useState('');
  const [Especialidad, setEspecialidad] = useState('');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:-410 }}>
         <Card>
          <Card.Title>RESERVAS</Card.Title>
          <Card.Divider />

          <TextInput
          style={styles.input}
          placeholder="Prevision"
          onChangeText={setPrevision}
          defaultValue={Prevision}
          maxLength={20}
          >
          </TextInput>
          <TextInput
          style={styles.input}
          placeholder="Sucursal"
          onChangeText={setSucursal}
          defaultValue={Sucursal}
          maxLength={20}
          >
          </TextInput>
          <TextInput
          style={styles.input}
          placeholder="Especialidad"
          onChangeText={setEspecialidad}
          defaultValue={Especialidad}
          maxLength={20}
          >
          </TextInput>
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 50,
      margin: 12,
      width: 300,
      borderWidth: 1,
      padding: 10,
      borderColor: '#dbdbdb',
      borderRadius: 10
    },
  });

  export default Reservas