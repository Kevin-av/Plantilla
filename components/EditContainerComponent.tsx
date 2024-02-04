import React, { useState } from "react";
import { View, Text, Button } from "tamagui";

const EditContainerComponent = ({ initialFilm, initialDescription, onUpdate, onCancel }) => {
  const [film, setFilm] = useState(initialFilm);
  const [description, setDescription] = useState(initialDescription);

  const handleUpdate = () => {
    onUpdate(film, description);
  };

  return (
    <View style={{ padding: 20, backgroundColor: 'silver', borderRadius: 10, margin: 10, borderColor: "#fff", borderWidth: 1 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Edit</Text>

      <input
        type="text"
        value={film}
        onChange={(e) => setFilm(e.target.value)}
        placeholder="Enter Film"
        style={{ marginBottom: 10, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5 }}
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description"
        style={{ marginBottom: 10, height: 40, borderColor: 'gray', borderWidth: 1, padding: 5 }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button onPress={handleUpdate} style={{ flex: 1, alignItems: "center", justifyContent: "center", height: 40, backgroundColor: 'silver', marginRight: 5 }}>
          <Text>Update</Text>
        </Button>
        <Button onPress={onCancel} style={{ flex: 1, alignItems: "center", justifyContent: "center", height: 40, backgroundColor: 'silver', marginLeft: 5 }}>
          <Text>Cancel</Text>
        </Button>
      </View>
    </View>
  );
};

export default EditContainerComponent;