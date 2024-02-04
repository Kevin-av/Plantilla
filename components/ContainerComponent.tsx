import React from "react";
import { View, Text, Image, Button } from "tamagui";
import { useRouter } from "expo-router";


const ContainerComponent = ({Film, Description}) => {
  const router = useRouter();

  const handleFormatButtonPress = () => {
    console.log("Datos formateados");
  };

  return (
    <View style={{ padding: 20, 
                   backgroundColor: 'silver', 
                   borderRadius: 10, 
                   margin: 10, 
                   borderColor: "#fff",
                   borderWidth: 1}}>
      <Text style={{ fontSize: 20, 
                     fontWeight: "bold", 
                     marginBottom: 10 }}>{Film}</Text>
      <Text>{Description}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Button onPress={() => router.push("tabs/_layout")} 
                style={{ alignItems: "center", 
                         justifyContent: "center", 
                         height: 40,
                         width: 10,
                         left: 257, 
                         top: 40,
                         backgroundColor: 'silver'}}>
          <Image source={require('../assets/edit.png')} 
                 style={{ width: 25,
                          height: 25,
                          alignSelf: "center"}}/>
        </Button>

        <Button onPress={handleFormatButtonPress} 
                style={{ alignItems: "center", 
                         justifyContent: "center", 
                         height: 40, 
                         width: 10, 
                         left: 300,
                         backgroundColor: 'silver'}}>
          <Image source={require('../assets/trash.png')} 
                 style={{ width: 20, 
                          height: 25, 
                          alignSelf: "center"}}/>
        </Button>
      </View>
    </View>
  );
};

export default ContainerComponent;
