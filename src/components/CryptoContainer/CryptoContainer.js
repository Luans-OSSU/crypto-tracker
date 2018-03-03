import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import fetchCoinData from "../../Actions/FetchCoinData";
import CoinCard from "../CoinCard/CoinCard";

import Spinner from "react-native-loading-spinner-overlay";


class CryptoContainer extends Component {

    componentDidMount() {
        this.props.fetchCoinData();
    }

    renderCoinCards() {
        const {crypto} = this.props;
        if(crypto && crypto.data) {
            return crypto.data.map((item, index) => (
                <CoinCard
                    key={index}
                    coin_name={item.name}
                    symbol={item.symbol}
                    price_usd={item.price_usd}
                    percent_change_24h={item.percent_change_24h}
                    percent_change_7d={item.percent_change_7d}
                />
            ))
        }
    }

    render() {
        const {crypto} = this.props;
        if(crypto.isFetching) {
            return (
                <View>
                    <Spinner 
                        visble={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: "#253145"}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {crypto && this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 50
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, {fetchCoinData})(CryptoContainer);