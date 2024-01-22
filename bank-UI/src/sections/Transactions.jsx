// Core
import {FlatList, Text, View} from "react-native";
import Animated, {FadeInDown} from 'react-native-reanimated'
// Utils
import {transactionData} from '../utils';
// Components
import TransactionCard from "../components/TransactionCard";

const Transactions = () => {
    return (
        <Animated.View
            entering={FadeInDown.duration(500).springify().delay(300)}
            className="mt-8"
        >
            <Text
                className="text-3xl dark:text-white mb-4"
            >
                Transactions
            </Text>

            <FlatList
                data={transactionData}
                keyExtractor={item => item.id}
                initialNumToRender={20}
                contentContainerStyle={{paddingBottom: 100}}
                removeClippedSubviews={false}
                height={400}
                renderItem={({item}) => <TransactionCard {...item} />}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="h-4" />}
            />
        </Animated.View>
    )
}

export default Transactions;