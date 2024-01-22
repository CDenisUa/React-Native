// Core
import {ScrollView, Text, View} from "react-native";
import Animated, {FadeInDown} from 'react-native-reanimated'
// Data
import {carousalDataDollarFormatting} from '../utils'
// Components
import {CardItem} from "../components";

const Card = () => {
    return (
        <Animated.View
            entering={FadeInDown.duration(500).springify().delay(300)}
        >
            <Text
                style={{
                    fontFamily:"SpaceGroteskBold"
                }}
                className='text-3xl mb-4 mt-8 dark:text-white'
            >
                Card
            </Text>
            <ScrollView
                horizontal
                className='space-x-5'
                showsHorizontalScrollIndicator={false}
            >
                {
                    carousalDataDollarFormatting.map(item => (
                        <CardItem
                            key={item.id}
                            imgUrl={item.imgUrl}
                            price={item.price}
                            cardType={item.cardType}
                            cardNumber={item.cardNumber}
                            backgroundColor={item.backgroundColor}
                        />
                    ))
                }
            </ScrollView>
        </Animated.View>
    )
}

export default Card;