import React from "react";
import { View, Text, ScrollView, Button, StyleSheet} from "react-native";
import { ListItem, Card } from "@rneui/themed";
import { Header } from "@rneui/base";

const ViewAllRentasScreen = (props) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}> Tabla de Rentas</Text>
      </View>


      <View> 
        <Card>
          <View style={{flexDirection:'row', flexWrap:"wrap", alignItems:"center"}}>
            <Card.Title style={{flex:4, marginRight:5, fontSize:18}}>José Armando Rosales Rodríguez</Card.Title>
            <Text style={{flex:2, backgroundColor:"#ffaaaa", borderRadius:5, textAlign:"center", padding: 2}}>Por Recoger</Text>
          </View> 

          <Text style={styles.h2}> - Calle Río San Lorenzo #2521</Text> 
          <Text style={styles.h2}> - Colonia Lomas de Tamazula</Text>
          <Text style={styles.h2}> - Telefono: 667 513 3213</Text>
          <Text style={styles.h2}> - Telefono Alterno: 667 513 3213</Text>
          </Card>
      </View>

      <View> 
        <Card>
          <View style={{flexDirection:'row', flexWrap:"wrap", alignItems:"center"}}>
            <Card.Title style={{flex:4, marginRight:5, fontSize:18}}>Armando Rosales</Card.Title>
            <Text style={{flex:2, backgroundColor:"#8eff94", borderRadius:5, textAlign:"center", padding: 2}}>Entregada</Text>
          </View> 

          <Text style={styles.h2}> - Calle Río San Lorenzo #2521</Text> 
          <Text style={styles.h2}> - Colonia Lomas de Tamazula</Text>
          <Text style={styles.h2}> - Telefono: 667 513 3213</Text>
          <Text style={styles.h2}> - Telefono Alterno: 667 513 3213</Text>
          </Card>
      </View>

      <View>  
        <Card>
          <View style={{flexDirection:'row', flexWrap:"wrap", alignItems:"center"}}>
            <Card.Title style={{flex:4, marginRight:5, fontSize:18}}>José Rodríguez</Card.Title>
            <Text style={{flex:2, backgroundColor:"#ffaaaa", borderRadius:5, textAlign:"center", padding: 2}}>Por Recoger</Text>
          </View> 

          <Text style={styles.h2}> - Calle Río San Lorenzo #2521</Text> 
          <Text style={styles.h2}> - Colonia Lomas de Tamazula</Text>
          <Text style={styles.h2}> - Telefono: 667 513 3213</Text>
          <Text style={styles.h2}> - Telefono Alterno: 667 513 3213</Text>
          </Card>
      </View>



      {/* <Button
        title="Buscar"
        onPress={() => props.navigation.navigate("Alta Renta - Buscar Cliente")}
      ></Button> */}
    </ScrollView>
  );
};







// function ViewAllRentasScreen() {
//   const [expanded, setExpanded] = React.useState(false);
//   const [expanded1, setExpanded1] = React.useState(false);

//   return (
//     <>
//       <ListItem.Accordion
      
//         content={
//           <ListItem.Content>
//             <ListItem.Title>José Armando Rosales Rodríguez</ListItem.Title>
//             <ListItem.Subtitle style={StyleSheet.create({backgroundColor: "#ff9b9b"})}>Por Recoger</ListItem.Subtitle>
//           </ListItem.Content>
//         }
//         isExpanded={expanded}
//         onPress={() => {
//           setExpanded(!expanded);
//         }}
//         >

//         <ListItem >
          
//           <ListItem.Content style={StyleSheet.create({backgroundColor: "#e8e8e8"})}>
//             <ListItem.Subtitle>Colonia Lomas de Tamazula, Calle Rio San Lorenzo #2521</ListItem.Subtitle>
//             <ListItem.Subtitle>Telefono 667 513 3213</ListItem.Subtitle>

//           </ListItem.Content>
//         </ListItem>

//       </ListItem.Accordion>

//       <ListItem.Accordion
//         content={
//           <ListItem.Content>
//             <ListItem.Title>Armando Rosales</ListItem.Title>
//             <ListItem.Subtitle style={StyleSheet.create({backgroundColor: "#adff9b"})}>Entregada</ListItem.Subtitle>
//           </ListItem.Content>
//         }
//         isExpanded={expanded1}
//         onPress={() => {
//           setExpanded1(!expanded1);
//         }}
//         >

//         <ListItem>
//           <ListItem.Content style={StyleSheet.create({backgroundColor: "#e8e8e8"})}>
//           <ListItem.Subtitle>Colonia Lomas de Tamazula, Calle Rio San Lorenzo #2521</ListItem.Subtitle>
//             <ListItem.Subtitle>Telefono 667 513 3213</ListItem.Subtitle>
//           </ListItem.Content>
//         </ListItem>

//       </ListItem.Accordion>
//     </>
//   );
// }

export default ViewAllRentasScreen;




const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  h1:{
    fontSize: 20,
    flex: 1
  },
  h2:{
    fontSize: 16
  }
});