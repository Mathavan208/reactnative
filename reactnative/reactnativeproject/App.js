import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableWithoutFeedback, TouchableHighlight, Button,Alert,Platform, SafeAreaView,Dimensions} from 'react-native';
import {useWindowDimensions} from 'react-native';
export default function App() {
 return (
<View style={{flex:1}}>
<View style={{flex:22}}>
    
<Image resizeMode='cover' source={require('./assets/food.webp')}></Image>
<Text style={{fontSize:50,color:"orange"}}>WELCOME TO FOOD BLOG</Text>
</View>
<View style={{flex:1}}>

<Button color={'orange'} title="login"></Button>

</View>


<View style= {{flex:1}}>
<Button color={'orange'} title='signup'></Button>

</View>


</View>





 );
}

