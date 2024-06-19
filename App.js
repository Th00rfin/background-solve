import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAuthoHideAsync();

const rootlayout = () =>{
return (
  <Stack>
    <Stack.Screen name="" component="" options={{headerShown: false}}/>
  </Stack>
)
}