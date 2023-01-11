import  React  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';  // 2 TouchableOpacity  tipo de botao facil de customizar
import ImageOpen from './assets/biscoitoAberto.png';
import ImageClose from './assets/biscoito.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={ImageClose}  // 1 chamando a imagem importada
      style={styles.img}  // 1 estilizacao da imagem
      
      />

      <Text>"Alguma Frase Aqui !!!"</Text>
      <TouchableOpacity>{/* 2 Chamando o botão */}
        <View>
          <Text>
            Quebrar o Biscoito
          </Text>      
        </View>            
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  // estilizacao do container principal
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img : {
    width: 250,
    height: 250,
  }
});
