import React from "react";
import { View, Text, Image, Button } from "tamagui";

const ContainerComponent = ({ title, description, onButton1Press, onButton2Press }) => {
  return (
    <View style={{ padding: 20, backgroundColor: "#fff", borderRadius: 10, margin: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>{title}</Text>
      <Text>{description}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button onPress={onButton1Press} style={{ flexDirection: "row", alignItems: "center", alignContent:"center", height:40, width:10 }}>
          <Image source={require('../assets/edit.png')} style={{width: 19, height: 19, alignSelf: "center" }}/>
          Botón 1
        </Button>

        <Button onPress={onButton2Press} style={{ flexDirection: "row", alignItems: "center", alignContent:"center", height:40, width:10 }}>
          <Image source={require('../assets/trash.png')} style={{width: 19, height: 19, alignSelf: "center" }}/>
          Botón 2
        </Button>
      </View>
    </View>
  );
};

export default ContainerComponent;