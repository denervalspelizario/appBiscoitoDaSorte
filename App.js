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

      <Text style={styles.textoFrase}>"Alguma Frase Aqui !!!"</Text>
      <TouchableOpacity style={styles.botao}>{/* 2 Chamando o botão */}
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
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
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
