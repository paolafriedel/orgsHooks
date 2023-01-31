import React, { useState } from "react";
import {Text, View, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({onPress, desabilitada=true, preenchida, grande=false}){
    
    const estilos = estilosFuncao(grande);

    //metodo para escolher as estrelas baseado na quantidade

    const getImagem = () => {
        if (preenchida){
            return estrela; 
        }
        return estrelaCinza;
    }
    
    return <TouchableOpacity
            onPress={onPress}
            disabled={desabilitada}
            >
            <Image source={getImagem()} style={estilos.estrela}/>
        </TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({

    estrela:{
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    },
})