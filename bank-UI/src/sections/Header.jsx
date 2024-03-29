// Core
import {View, Image, Switch} from "react-native";
import {useColorScheme} from "nativewind";
import Animated, {FadeInDown} from 'react-native-reanimated'
// Icons
import {BellIcon} from "react-native-heroicons/outline";

const Header = () => {
    const {colorScheme, toggleColorScheme} = useColorScheme();
    return (
        <Animated.View
            entering={FadeInDown.duration(500).springify().delay(300)}
            className="flex-row justify-between items-center"
        >
            <View className="border-2 border-white rounded-full overflow-hidden">
                <Image
                    style={{
                        width: 45,
                        height: 45
                    }}
                    source={require("../../assets/images/avatar.png")}
                />
            </View>
            <View className="flex-row space-x-4 justify-center items-center">
                <BellIcon
                    size={30}
                    strokeWidth={2}
                    color={colorScheme === "dark" ? "white" : "black"}
                />
                <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
            </View>
        </Animated.View>
    )
}

export default Header;