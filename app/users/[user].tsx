import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Button } from "tamagui";

import { MyStack } from "../../components/MyStack";
import ContainerComponent from "../../components/ContainerComponent";

export default function User() {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <MyStack justifyContent="flex-start">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Panel",
          headerLeft() {
            return (
              <Button
                mr="$2.5"
                onPress={router.back}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />

      <MyStack justifyContent="center">
        <ContainerComponent/>
      </MyStack>
    </MyStack>
  );
}
