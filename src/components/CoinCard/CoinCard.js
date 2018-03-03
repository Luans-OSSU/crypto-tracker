import React from "react";
import {View, Text, Image} from "react-native";
import {images} from "../../Utils/CoinIcons";
import style from "./CoinCard-style";

const CoinCard = ({symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {
    return  (
        <View style={style.container}>
            <Image style={style.image} source={{uri: images[symbol]}} />
            <Text>{symbol}</Text>
            <Text>{coin_name}</Text>
            <Text>{price_usd} <Text style={style.bold}>$</Text></Text>
            <Text>Change past 24 hours: {percent_change_24h}</Text>
            <Text>Change past 7 days: {percent_change_7d}</Text>
        </View>
    )
}

export default CoinCard;