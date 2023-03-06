import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, AntDesign, EvilIcons, Feather, FontAwesome, FontAwesome5   } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/*1ª primeira familia */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>Entypo</Text>
      <View style={styles.lista_icones}>
      <Entypo style={styles.espaco_icones} name="500px" size={24} color="green" />
      <Entypo style={styles.espaco_icones} name="500px-with-circle" size={24} color="green" />
      <Entypo style={styles.espaco_icones} name="add-to-list" size={24} color="green" />
      <Entypo style={styles.espaco_icones} name="add-user" size={24} color="green" />
      <Entypo style={styles.espaco_icones} name="address" size={24} color="green" />
      </View>
      </View>
      {/*2ª primeira familia */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>AntDesign</Text>
      <View style={styles.lista_icones}>
      <AntDesign style={styles.espaco_icones} name="stepforward" size={24} color="blue" />
      <AntDesign style={styles.espaco_icones} name="stepbackward" size={24} color="blue" />
      <AntDesign style={styles.espaco_icones} name="forward" size={24} color="blue" />
      <AntDesign style={styles.espaco_icones} name="banckward" size={24} color="blue" />
      <AntDesign style={styles.espaco_icones} name="caretright" size={24} color="blue" />
      </View>
      </View>
      {/*3ª primeira familia */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>EvilIcons</Text>
      <View style={styles.lista_icones}>
      <EvilIcons style={styles.espaco_icones} name="archive" size={24} color="yellow" />
      <EvilIcons style={styles.espaco_icones} name="arrow-down" size={24} color="yellow" />
      <EvilIcons style={styles.espaco_icones} name="arrow-left" size={24} color="yellow" />
      <EvilIcons style={styles.espaco_icones} name="arrow-right" size={24} color="yellow" />
      <EvilIcons style={styles.espaco_icones} name="arrow-up" size={24} color="yellow" />
      </View>
      </View>
      {/*4ª primeira familia */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>Feather </Text>
      <View style={styles.lista_icones}>
      <Feather style={styles.espaco_icones} name="activity" size={24} color="red" />
      <Feather style={styles.espaco_icones} name="airplay" size={24} color="red" />
      <Feather style={styles.espaco_icones} name="alert-circle" size={24} color="red" />
      <Feather style={styles.espaco_icones} name="alert-octagon" size={24} color="red" />
      <Feather style={styles.espaco_icones} name="alert-triangle" size={24} color="red" />
      </View>
      </View>
      {/*5ª primeira familia */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>FontAwesome </Text>
      <View style={styles.lista_icones}>
      <FontAwesome style={styles.espaco_icones} name="glass" size={24} color="orange" />
      <FontAwesome style={styles.espaco_icones} name="music" size={24} color="orange" />
      <FontAwesome style={styles.espaco_icones} name="search" size={24} color="orange" />
      <FontAwesome style={styles.espaco_icones} name="envelope-o" size={24} color="orange" />
      <FontAwesome style={styles.espaco_icones} name="heart" size={24} color="orange" />
      </View>
      </View>
      {/*6ª primeira familia */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>FontAwesome5 </Text>
      <View style={styles.lista_icones}>
      <FontAwesome5 style={styles.espaco_icones} name="500px" size={24} color="brown" />
      <FontAwesome5 style={styles.espaco_icones} name="accessible-icon" size={24} color="brown" />
      <FontAwesome5 style={styles.espaco_icones} name="accusoft" size={24} color="brown" />
      <FontAwesome5 style={styles.espaco_icones} name="acquisitions-incorporated" size={24} color="brown" />
      <FontAwesome5 style={styles.espaco_icones} name="ad" size={24} color="brown" />
      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  familia_icones:{
    backgroundColor: 'pink',
    borderRadius: 5,
    whidth:'90%',
    marginBottom: 20,
    padding: 15
  },
  lista_icones:{
    flexDirection: "row",
    marginTop: 20
  },
  familia_titulo:{
    fontSize: 30,
    borderStyle: 'solid',
    borderColor: '#222',
    borderBottomWidth: 2
  },
  espaco_icones:{
    margin: 5
  }
});


{/* <Entypo name="home" size={25} color="red" />
      <Text >This house is Red and your size is 25</Text>
      <AntDesign name="home" size={50} color="green" />
      <Text >This house is Green and your size is 50</Text>
      <Feather name="home" size={75} color="blue" />
      <Text >This house is Blue and your size is 75</Text>
      <FontAwesome name="home" size={100} color="pink" />
      <Text >This house is Pink and your size is 100</Text> */}