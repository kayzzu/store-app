import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopBar from "./src/components/TopBar";
import Home from "./src/pages/Home";
import Cart from "./src/pages/Cart";
import ContextWrapper from "./src/context/ContextWrapper";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <ContextWrapper>
                <StatusBar backgroundColor="black" />
                <SafeAreaView style={styles.container}>
                    <NavigationContainer>
                        <TopBar />
                        <Stack.Navigator
                            initialRouteName="Home"
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Cart" component={Cart} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </ContextWrapper>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
