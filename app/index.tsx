import { Image } from "tamagui";
import { useRouter } from "expo-router";
import { Button, H1, Paragraph, YStack } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack space="$4" maxWidth={600}>
        <Image 
            source={require('../assets/icon.png')}
            style={{ top: 100,
                     width: 200, 
                     height: 200, 
                     alignSelf: 'center' }}
        />

          <H1 textAlign="center"
              style= {{position: "relative",
                       top: 150,
                       width: 300,
                       alignSelf: "center",
                       fontSize: 50,
                       fontFamily: "Roboto"}}>Movie Making</H1>

          <Paragraph textAlign="center"
                     style= {{position: "relative",
                              top: 150,
                              width: 300,
                              alignSelf: "center",
                              fontSize: 16,}}>Maze Runner</Paragraph>
        </YStack>

        <YStack space="$2.5">
          <Button onPress={() => router.push("/users/testuser")}
                  style={{position: "relative",
                          top: -200,
                          width: 200,
                          alignSelf: "center"}}>
            Comienza
          </Button>
        </YStack>
      </MyStack>
    </MySafeAreaView>
  );
}
