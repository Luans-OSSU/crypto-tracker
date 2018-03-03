import React from "react";
import {View, Text, Image} from "react-native";
import {images} from "../../Utils/CoinIcons";
import style from "./CoinCard-style";

const CoinCard = ({symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {
    return (
        <View style={style.container}>

            <View style={style.upperRow}>
                <Image
                    style={style.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={style.coinSymbol}>{symbol}</Text>
                <Text style={style.seperator}>|</Text>
                <Text style={style.coinName}>{coin_name}</Text>
                <Text style={style.coinPrice}>{price_usd}
                    <Text style={style.moneySymbol}> $ </Text>
                </Text>
            </View>

            <View style={style.statisticsContainer}>

                <Text>24h:
                     <Text style={style.percent_change_24h < 0 ? style.percentChangeMinus : style.percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={style.percent_change_7d < 0 ? style.percentChangeMinus : style.percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View> 
    );
}

export default CoinCard;