import React from "react";
import { ImageBackground ,StyleSheet, View,Text, Button, Image, Alert} from "react-native";

function WelcomeScreen(props) {
    return (
        
            <ImageBackground source={require('../assets/food.webp')} style={styles.background}>
                <View style={styles.logcontainer}>
                    <Image source={require('../assets/icon.png')} style={styles.imagecontainer}></Image>
                    <Text style={{color:"white"}}>WELCOME</Text>
                </View>
                <View style={styles.loginbutton}>
                    <Button title="login" onPress={()=>Alert.alert("Login","Please click me",[{text:"Yes",onPress:()=>console.log("yes")},{text:"No",onPress:()=>console.log("No")}])}></Button>
                    </View>
                    <View style={styles.registerbutton}>
                    <Button title="Register" onPress={()=>Alert.alert("Want to register","click yes or no",[{text:"yes",onPress:()=>console.log("yes")},{text:"no",onPress:()=>console.log("no")}])} ></Button>
                </View>
            </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginbutton:{
        width:"100%",
        height:70
    },
    imagecontainer:{
        width:100,
        height:100,
            },
    registerbutton:{
        width:"100%",
        height:70
    },
    
    logcontainer:{
        position:"absolute",
        top:50,
    } 
});

export default WelcomeScreen;
