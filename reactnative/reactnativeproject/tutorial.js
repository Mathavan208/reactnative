export default function App() {
    console.log(Dimensions.get("screen"));
    console.log(useWindowDimensions());
    const {width,height}=useWindowDimensions();
    const orientation=width>height?'landscape':'potrait'
    return (
      <SafeAreaView>
      <View style={styles.container}>
        <Text numberOfLines={2}  onPress={()=>console.log("welcome")}>BURGER</Text>
  
  <TouchableHighlight onPress={()=>console.log("image tapped")}>
  <Image style={{  width: 200, height: 200, resizeMode: 'contain' }}  source={require('./assets/food.png')} ></Image>
  </TouchableHighlight>
  <Button title='order me' color='orange' onPress={()=>Alert.alert("Delicious Burger","Do you want to order",[{
    text:"Yes",onPress:()=>console.log("ordered")
  },{text:"No",onPress:()=>console.log("not ordered")}])}></Button>
      </View>
      <View style={backgroundstyle.container}>
        <Text style={{width:"100%",height:orientation==='landscape'?"100%":"60%"}}>WELCOME</Text>
      </View>
      </SafeAreaView>
    );
  }
  const backgroundstyle=StyleSheet.create({
    container:{
    backgroundColor:'red',
    paddingTop:60,
    flex:1
    }
  })
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignContent:'center',
      padding:Platform.OS==="android"?10:0
    },
  });
  