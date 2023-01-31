import React, {useEffect, useState} from "react";
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';
import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores(){

    const [titulo, setTitulo] = useState(''); // criando estado titulo
    const [lista, setLista] = useState([]); // criando estado lista

    useEffect(() =>{
        const retorno = carregaProdutores();

        setTitulo(retorno.titulo);
        setLista(retorno.lista);

        console.log(retorno);
    }, []);

    return <FlatList
        data={lista}
        renderItem={({item:{nome}}) => <Text>{nome}</Text>}
        ListHeaderComponent = {() => <Text>{titulo}</Text>}
    />
}