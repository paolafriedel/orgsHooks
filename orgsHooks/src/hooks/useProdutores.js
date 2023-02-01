import React, {useEffect, useState} from "react";
import { carregaProdutores } from "../servicos/carregaDados";

export default function useProdutores(){
    const [titulo, setTitulo] = useState(''); // criando estado titulo
    const [lista, setLista] = useState([]); // criando estado lista

    useEffect(() =>{
        const retorno = carregaProdutores();

        retorno.lista.sort(
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );

        setTitulo(retorno.titulo);
        setLista(retorno.lista);

        console.log(retorno);
    }, []);

    return [titulo, lista];

}