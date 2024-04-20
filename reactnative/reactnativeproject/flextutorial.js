export default function App() {
    console.log(Dimensions.get("screen"));
    console.log(useWindowDimensions());
    const {width,height}=useWindowDimensions();
    const orientation=width>height?'landscape':'potrait'
    //flexdirection has row,column,row-reverse,column-reverse properties in it
    //we can assign each view container with flex
  
  // generally we have two axis main axis and vertical axis 
  // if we use flexdirection row and use justify content in center then it use fix them in center of main axis
  //if we use column direction the it use vertical axis center point  
  //we have several properties under justifyContent 
  // **space-around
  // **space-evenly
  // **space-between
  // **flex-end and flex-start
  //now we use align items it used to align according to secondary axis 
  // justifyContent-PrimaryAxis 
  //align items:Secondary axis
  //We also have baseLinewhich gives same bas line for different height of view container
  // we also have stretch and some other properties like alignSelf
  // we have another properties called flexBasis,flexGrow,flexShrink
  //flexBasis is similar to width or height it sets width or height according to primary axxis type of the container
  //flexGrow in which similar to flex it will fill the remaining space
  //flexShrink is similar to flex with negative value in which it fit the container//we also have absolute and relative positioning
    return (
      <View style={{flex:1,flexDirection:'row',justifyContent:"space-evenly",alignItems:"baseline"}}>
    <View style={{backgroundColor:'red',flexBasis:400,flexShrink:1,height:100}}>
  <Text style={{paddingTop:20,color:'white'}}>Flex 1</Text>
  <Image source={require('./assets/food.png')} style={{width:50,height:50}}></Image>
    </View>
    <View  style={{backgroundColor:'blue',width:100,height:200}}>
  <Text  style={{paddingTop:20,color:'white'}}>Flex 2</Text>
  <Image source={require('./assets/food.png')} style={{width:50,height:50}}></Image>
    </View>
     <View  style={{backgroundColor:'green',width:100,height:300}}>
  <Text  style={{paddingTop:20,color:'white'}}>Flex 3</Text>
  <Image source={require('./assets/food.png')} style={{width:50,height:50}}></Image>
    </View>
    </View>
    );
  }
  
  