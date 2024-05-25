import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const onPressButton = () => {
    console.log("Boom");
  };

const makeAlert = () => {
  Alert.alert('aleeert', 'mehh alert ehh')
}

const Header = () => {
  return (
    <Text style={{fontSize: 30}}>Your little list</Text>
  )
}
 
const data = new Array(100).fill(null)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Header/>
        {data.map((_, index) => (
          <Text key={index.toString()}>{index + 1}. Blabla</Text>
        ))}
      </ScrollView>

      <Text style={styles.basicTitle}>
        Ala <Text style={styles.boldedTitle}>Wu</Text>
      </Text>
      {/* presable */}
      <Pressable
        onPress={onPressButton}
        style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
        <Text>test</Text>
      </Pressable>
      <Image source={require("./assets/favicon.png")} style={styles.image} />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Cauliflour_Jellyfish%2C_Cephea_cephea_at_Marsa_Shouna%2C_Red_Sea%2C_Egypt_SCUBA.jpg/230px-Cauliflour_Jellyfish%2C_Cephea_cephea_at_Marsa_Shouna%2C_Red_Sea%2C_Egypt_SCUBA.jpg",
        }}
        style={{ height: 100, width: 100 }}
      />
      {/* imported icon */}
      <TouchableHighlight
        style={styles.button}
        onPress={makeAlert}
        underlayColor="blue">
        <AntDesign name="meh" size={24} color="black" />
      </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  );
}

// ui8 - kupowanie gotwych designow

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    gap: 25,
    paddingTop: 35,
    padding: 10
  },
  title: {},
  boldedTitle: {
    fontWeight: "900",
    color: "green",
  },
  basicTitle: {
    fontSize: 48,
    fontWeight: "400",
  },
  button: {
    fontSize: 25,
    backgroundColor: "yellow",
    padding: 16,
    borderRadius: "5px",
  },
  image: {
    minWidth: 30,
    minHeight: 30
  }
});

//ScrollView - ok jak sie renedruje malo komponentow
// jak np 1000 to wszystkie beda faktzcynie wyrenderowane co jest mega niewydajne