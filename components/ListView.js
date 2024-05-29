import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import React from 'react';

export default function ListView({ label, DATA, onDeleteItem, onEditProduct }) {
  const Item = ({ id, nome, preco, descricao, id_restaurante }) => (
    <View style={styles.produtoContainer}>
      <Text style={styles.nomeProduto}>{nome}</Text>
      <Text style={styles.precoProduto}>R${preco}</Text>
      <Text style={styles.descricaoProduto}>{descricao}</Text>
      <Text styles={styles.restaurante}>Id do restaurante:{id_restaurante}</Text>
      <Pressable style={styles.editButton} onPress={() => onEditProduct({ id, nome, preco, descricao, id_restaurante })}>
        <Text style={styles.editButtonText}>Editar</Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={() => onDeleteItem(id)}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listLabel}>{label}</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    listLabel: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    produtoContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 15,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    nomeProduto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    precoProduto: {
      fontSize: 16,
      color: 'green',
      marginBottom: 5,
    },
    descricaoProduto: {
      fontSize: 14,
      color: '#555',
      marginBottom: 10,
    },
    restaurante: {
      fontSize: 14,
      color: '#555',
      marginBottom: 10,
      paddingBottom:10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    editButton: {
      backgroundColor: '#007bff',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginBottom:5,
    },
    editButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    deleteButton: {
      backgroundColor: 'red',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  
