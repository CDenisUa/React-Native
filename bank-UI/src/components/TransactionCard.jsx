// Core
import {View, Text, Dimensions, Image} from "react-native";

const { width, height } = Dimensions.get('window');

const TransactionCard = (props) => {
    const {
        name,
        type,
        amount,
        date,
        imageSource
    } = props;
    return (
        <View
            className="rounded-3xl py-8 px-4 justify-between flex-row itemx-center bg-[#e5e5e5] shadow-sm"
            style={{
                width: "100%",
                maxWidth: width,
                height: height * 0.12
            }}
        >
            <View
                className="flex-row space-x-6 items-center justify-center"
            >
                <View className="bg-white rounded-xl" >
                    <Image
                        source={imageSource}
                        style={{
                            width: 65,
                            height: 65,
                        }}
                        resizeMode='contain'
                    />
                </View>
            </View>
            <View className="space-y-1">
                <Text
                    className='text-2xl'
                    style={{
                        fontFamily: "SpaceGroteskBold"
                    }}
                >
                    {name}
                </Text>
                <Text
                    className='text-sm text-neutral-500'
                    style={{
                        fontFamily: "SpaceGroteskMedium"
                    }}
                >
                    {type}
                </Text>
            </View>
            <View
                className="space-y-1"
                style={{
                    fontFamily: "SpaceGroteskMedium"
                }}
            >
                <Text
                    className="text-xl"
                    style={{
                        fontFamily: "SpaceGroteskMedium"
                    }}
                >
                    {amount}
                </Text>
                <Text
                    className="text-sm text-neutral-500"
                    style={{
                        fontFamily: "SpaceGroteskMedium"
                    }}
                >
                    {date}
                </Text>
            </View>
        </View>
    )
}

export default TransactionCard;