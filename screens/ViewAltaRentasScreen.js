import axios from 'axios';
import React, { useState, useEffect } from "react";
import {View, Text, TextInput, Button, ScrollView, StyleSheet, Alert} from "react-native";

const ViewAltaRentasScreen = () => {
  const [clientData, setClientData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    NoTelefono: "",
    NoTelefonoAlt: "",
  });


  const [loading, setLoading] = useState(false);

  const handleChangeOnText = (key,value) => {
    setClientData({...clientData, [key]:value})
  }




  const createTwoButtonAlert = async () => {
        setLoading(true);

    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      NoTelefono,
      NoTelefonoAlt
    } = clientData;
  
    let message = '' 
    // `
    //   Nombre: ${nombre ? nombre : 'Null'}
    //   Apellido Paterno: ${apellidoPaterno ? apellidoPaterno : 'Null'}
    //   Apellido Materno: ${apellidoMaterno ? apellidoMaterno : 'Null'}
    //   No. Teléfono: ${NoTelefono ? NoTelefono : 'Null'}
    //   No. Teléfono Alterno: ${NoTelefonoAlt ? NoTelefonoAlt : 'Null'}
    // `;
  
    if (NoTelefono) {
      try {
        const response = await axios.get(`https://restapitamazula.2.us-1.fl0.io/clientes/telefono/${NoTelefono}`);
        message += `${JSON.stringify(response.data, null, 2)}`;
      } catch (error) {
        console.error(error);
        message += `\nError al obtener datos de la API`;
      }
    }
  
    setLoading(false);




    Alert.alert(
      'Datos obtenidos de la API:', 
      message,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  };
  





  return (
    <ScrollView style={styles.inputsBox}>
      <View>
        <TextInput
          style={styles.inputsArea}
          onChangeText={(value) => handleChangeOnText("nombre", value)}
          placeholder="Nombre(s) del Cliente"
        />
      </View>
      <View>
        <TextInput
          style={styles.inputsArea}
          onChangeText={(value) => handleChangeOnText("apellidoPaterno", value)}
          placeholder="Apellido Paterno"
        />
      </View>
      <View>
        <TextInput
          style={styles.inputsArea}
          onChangeText={(value) => handleChangeOnText("apellidoMaterno", value)}
          placeholder="Apellido Materno"
        />
      </View>
      <View>
        <TextInput
          style={styles.inputsArea}
          onChangeText={(value) => handleChangeOnText("NoTelefono", value)}
          placeholder="No. Telefono"
        />
      </View>
      <View>
        <TextInput
          style={styles.inputsArea}
          onChangeText={(value) => handleChangeOnText("NoTelefonoAlt", value)}
          placeholder="No. Telefono Alterno"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Buscar"
          onPress={createTwoButtonAlert}
          disabled={loading}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputsBox: {
    marginTop: 25,
  },
  inputsArea: {
    backgroundColor: "#e8e8e8",
    marginHorizontal: 25,
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#bfbfbf",
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 10,
  },
});

export default ViewAltaRentasScreen;
