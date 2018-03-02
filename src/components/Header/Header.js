import React from "react";
import {View, Text} from "react-native";
import style from "./Header-style";

const Header = ({children}) => {
    return (
        <View style={style.headerContainer}>
            <Text style={style.header}>{children}</Text>
        </View>
    )
}

export default Header;