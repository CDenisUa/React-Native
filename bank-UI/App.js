// Core
import {useCallback} from "react";
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useColorScheme} from "nativewind";
import {useFonts} from "expo-font";
import {hideAsync} from "expo-splash-screen/build/index.native";
// Sections
import {
    Header,
    Card,
    Transactions
} from './src/sections';

export default function App() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    const [isFontsLoaded, isFontsError] = useFonts({
        SpaceGroteskSemiBold: require("./src/font/space-gro/static/SpaceGrotesk-SemiBold.ttf"),
        SpaceGroteskBold: require("./src/font/space-gro/static/SpaceGrotesk-Bold.ttf"),
        SpaceGroteskLight: require("./src/font/space-gro/static/SpaceGrotesk-Light.ttf"),
        SpaceGroteskMedium: require("./src/font/space-gro/static/SpaceGrotesk-Medium.ttf"),
        SpaceGroteskRegular: require("./src/font/space-gro/static/SpaceGrotesk-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if(isFontsLoaded || isFontsError) {
            await hideAsync();
        }
    }, [isFontsLoaded, isFontsError]);

    if(!isFontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView className="p-6 dark:bg-neutral-900">
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <View onLayout={onLayoutRootView}>
                <View className="my-6">
                    <Header/>
                    <Card/>
                    <Transactions/>
                </View>
            </View>
        </SafeAreaView>
    );
}
