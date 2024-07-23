import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Card from "../components/card";
import { Cliente } from "../Interfaces/Cliente";

const Clientes = () => {
  const [listaClientes, setListaClientes] = useState<Cliente[]>([
    {
      cod: 100,
      nomeFantasia: "Supermercado X",
      razaoSocial: "Supermecado X e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
    {
      cod: 111,
      nomeFantasia: "Supermercado Y",
      razaoSocial: "Supermecado Y e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
    {
      cod: 112,
      nomeFantasia: "Supermercado Y",
      razaoSocial: "Supermecado Y e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
    {
      cod: 113,
      nomeFantasia: "Supermercado Y",
      razaoSocial: "Supermecado Y e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
    {
      cod: 114,
      nomeFantasia: "Supermercado Y",
      razaoSocial: "Supermecado Y e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
    {
      cod: 115,
      nomeFantasia: "Supermercado Y",
      razaoSocial: "Supermecado Y e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
    {
      cod: 116,
      nomeFantasia: "Supermercado Y",
      razaoSocial: "Supermecado Y e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
    {
      cod: 117,
      nomeFantasia: "Supermercado Y",
      razaoSocial: "Supermecado Y e Cia Ltda",
      endereço: "Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE",
    },
  ]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
        {listaClientes.map((data) => (
          <Card
            key={data.cod}
            cod={data.cod}
            title={data.nomeFantasia}
            subtitle={data.razaoSocial}
            address={data.endereço}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Clientes;
