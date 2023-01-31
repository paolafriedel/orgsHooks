import React from "react";
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

export default function Produtor({nome, imagem, distancia, estrelas}){
    return <View>
        <Image source={imagem} accessibilityLabel={nome}/>
        <View>
            <Text>{nome}</Text>
            <Text>{distancia}</Text>
        </View> 
        
    </View>
}
// accessibilityLabek é para pessoas com deficiencia visual para elas ouvirem o nome