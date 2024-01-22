// Core
import {View, Text, TouchableOpacity, Dimensions, Image} from "react-native";

const { width, height } = Dimensions.get("window");

const CardItem = (props) => {
    const {
        id,
        imgUrl,
        price,
        cardType,
        cardNumber,
        backgroundColor
    } = props;
    return (
        <TouchableOpacity
            key={id}
            className="mr-4"
        >
            <View
                style={{
                    width: width * 0.45,
                    height: height * 0.3,
                    backgroundColor: backgroundColor
                }}
                className="rounded-3xl py-8 px-4 justify-between"

            >
                <Image
                    style={{
                        width: 65,
                        height: 65
                    }}
                    source={imgUrl}
                    resizeMode="contain"
                />
                <View>
                    <Text
                        className='text-lg text-white'
                        style={{
                            fontFamily: "SpaceGroteskBold"
                        }}
                    >
                        {cardNumber}
                    </Text>
                </View>
                <View classNeme="space-y-2">
                    <Text
                        style={{
                            fontFamily: "SpaceGroteskBold"
                        }}
                        className='text-2xl text-white'>
                        {price}
                    </Text>
                    <Text
                        className="font-medium text-lg text-white"
                        style={{
                            fontFamily: "SpaceGroteskBold"
                        }}
                    >
                        {cardType}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardItem;