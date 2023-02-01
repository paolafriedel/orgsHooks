import React, {useReducer, useMemo} from "react";
import {Text, View, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Estrelas from "../../../componentes/Estrelas";


const distanciaEmMetros = (distancia) => {
    console.log('distanciaEmMetros')
    return `${distancia}m`
}


export default function Produtor({nome, imagem, distancia, estrelas}){
    
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado, 
        false); //use reducer recebe um estado e uma ação, nesse caso, como não tem ação é false 

    const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]); // sempre que a distancia for alterada, a distanciaTexto seja alterada

    return <TouchableOpacity 
            style={estilos.cartao}
            onPress={inverterSelecionado}
    >
        <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas 
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                />
            </View>
            <Text style={estilos.distancia}>{distanciaTexto}</Text>
        </View> 
        
    </TouchableOpacity>
}
// accessibilityLabek é para pessoas com deficiencia visual para elas ouvirem o nome

const estilos = StyleSheet.create({
    cartao:{
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 4 //só p android
        
        // p ios
        //shadowcolor: '#000, 
        //shadowOffset:{
            //width: 0,
            //height:2
        //},
        //shadowOpacity: 0.23,
        //shadowRadius: 2.62
    },
    
    imagem:{
        width:48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },

    informacoes:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },

    nome:{
        fontSize:14,
        lineHeight: 22,
        fontWeight: 'bold'
    },

    distancia:{
        fontSize: 12,
        lineHeight: 19
    }
});