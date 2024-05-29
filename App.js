import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput, StatusBar } from 'react-native';
import ListView from './components/ListView';

export default function App() {
  const DATA = [
    {
        "id": 1,
        "nome": "ensopado de carne",
        "descricao": "Receita de família de um delicioso ensopado",
        "preco": "24.99",
        "id_restaurante": 2
    },
    {
        "id": 2,
        "nome": "frango grelhado",
        "descricao": "Acompanha arroz, feijão e batata frita",
        "preco": "20.99",
        "id_restaurante": 2
    },
    {
        "id": 3,
        "nome": "sopa de galinha",
        "descricao": "Uma canjinha para dias frios",
        "preco": "25.99",
        "id_restaurante": 2
    },
    {
        "id": 4,
        "nome": "x-monstro",
        "descricao": "O maior de todos",
        "preco": "40.99",
        "id_restaurante": 3
    },
    {
        "id": 5,
        "nome": "x-godzilla",
        "descricao": "Com ingredientes asiáticos",
        "preco": "49.99",
        "id_restaurante": 3
    },
    {
        "id": 6,
        "nome": "x-kingkong",
        "descricao": "O melhor da culinária americana",
        "preco": "39.99",
        "id_restaurante": 3
    },
    {
        "id": 7,
        "nome": "copo da felicidade",
        "descricao": "Uma explosão de serotonina",
        "preco": "15.99",
        "id_restaurante": 4
    },
    {
        "id": 8,
        "nome": "bolo de cenoura",
        "descricao": "Para lembrar da sua infância",
        "preco": "14.99",
        "id_restaurante": 4
    },
    {
        "id": 9,
        "nome": "sorvete artesanal de chocolate",
        "descricao": "Para refrescar seu dia",
        "preco": "40.29",
        "id_restaurante": 4
    },
    {
        "id": 10,
        "nome": "marcão",
        "descricao": "Macarrão de grandes defesas",
        "preco": "29.99",
        "id_restaurante": 5
    },
    {
        "id": 11,
        "nome": "ademir da guia",
        "descricao": "Lasanha de espinafre ao molho vermelho",
        "preco": "25.99",
        "id_restaurante": 5
    },
    {
        "id": 12,
        "nome": "abel ferreira",
        "descricao": "Pizza artesanal de primeira prateleira",
        "preco": "45.99",
        "id_restaurante": 5
    },
    {
        "id": 17,
        "nome": "dadinho de tapioca",
        "descricao": "Dadinho de tapioca acompanhado de geleia",
        "preco": "19.90",
        "id_restaurante": 2
    },
    {
        "id": 18,
        "nome": "x-pégrande",
        "descricao": "O maior lanche de frango já visto",
        "preco": "45.20",
        "id_restaurante": 3
    },
    {
        "id": 19,
        "nome": "bolo vulcão 3kg",
        "descricao": "Bolo de chocolate com erupção de ganache",
        "preco": "100.00",
        "id_restaurante": 4
    },
    {
        "id": 20,
        "nome": "pizza vamo porcada!",
        "descricao": "Deliciosa pizza de Calabresa de 10 pedaços",
        "preco": "72.54",
        "id_restaurante": 5
    },
    {
        "id": 21,
        "nome": "creme de milho",
        "descricao": "Creme de milho com arroz e carne",
        "preco": "33.42",
        "id_restaurante": 2
    },
    {
        "id": 22,
        "nome": "x-dracula",
        "descricao": "Para quem ama molho!",
        "preco": "33.42",
        "id_restaurante": 2
    },
    {
        "id": 23,
        "nome": "água sem gás",
        "descricao": "Aguá mineral sem gás",
        "preco": "2.45",
        "id_restaurante": 3
    },
    {
        "id": 24,
        "nome": "combo orgulho palmeirense",
        "descricao": "Duas pizzas 10 pedaços + 2 Refrigerantes",
        "preco": "152.57",
        "id_restaurante": 3
    },
    {
        "id": 25,
        "nome": "pão",
        "descricao": "Pão quentinho a toda hora",
        "preco": "2.00",
        "id_restaurante": 6
    },
    {
        "id": 26,
        "nome": "Porco a pururuca",
        "descricao": "Bem frito",
        "preco": "300.00",
        "id_restaurante": 7
    }
];

  const [produtos, setProdutos] = useState(DATA);
  const [modalVisible, setModalVisible] = useState(false);
  const [novoProduto, setNovoProduto] = useState({ nome: '', preco: '', descricao: '', id_restaurante: '' });
  const [produtoEditando, setProdutoEditando] = useState(null);

  const onDeleteItem = (id) => {
    setProdutos(produtos.filter(item => item.id !== id));
  };

  const onCreateProduct = () => {
    setModalVisible(true);
    setProdutoEditando(null);
  };

  const onEditProduct = (produto) => {
    setModalVisible(true);
    setProdutoEditando(produto);
    setNovoProduto(produto);
  };

  const onConfirmCreate = () => {
    if (produtoEditando) {
      const editedProducts = produtos.map(item => (item.id === produtoEditando.id ? novoProduto : item));
      setProdutos(editedProducts);
    } else {
      const newProduct = {
        id: String(produtos.length + 1),
        nome: novoProduto.nome,
        preco: parseFloat(novoProduto.preco),
        descricao: novoProduto.descricao,
        id_restaurante: novoProduto.id_restaurante
      };
      setProdutos([...produtos, newProduct]);
    }
    setModalVisible(false);
    setNovoProduto({ nome: '', preco: '', descricao: '', id_restaurante: '' });
    setProdutoEditando(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.produtoListContainer}>
        <ListView label="Produtos" DATA={produtos} onDeleteItem={onDeleteItem} onEditProduct={onEditProduct} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.title}>Crud de Produtos</Text>
        <Button title="Novo Produto" onPress={onCreateProduct} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{produtoEditando ? 'Editar Produto' : 'Novo Produto'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={novoProduto.nome}
              onChangeText={(text) => setNovoProduto({ ...novoProduto, nome: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Preço"
              value={novoProduto.preco}
              onChangeText={(text) => setNovoProduto({ ...novoProduto, preco: text })}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={novoProduto.descricao}
              onChangeText={(text) => setNovoProduto({ ...novoProduto, descricao: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Id_restaurante"
              value={novoProduto.id_restaurante}
              onChangeText={(text) => setNovoProduto({ ...novoProduto, id_restaurante: text })}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Confirmar" onPress={onConfirmCreate} />
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Alterado para uma cor de fundo branca
    alignItems: 'center',
    justifyContent: 'center',
  },
  produtoListContainer: {
    flex: 2,
    width: '100%',
  },
  footerContainer: {
    flex: 1 / 3,
    width: '100%',
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFB900',
    fontSize: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
