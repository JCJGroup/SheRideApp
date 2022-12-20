
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor:'white',
        height:'100%',

    },
    textInput:{
        backgroundColor:'#eee',
        marginVertical:5,
        padding: 10,
        marginLeft:20,
    },
    iconContainer:{
        backgroundColor:'#a2a2a2',
        padding:5,
        borderRadius:50,
        marginRight:15

    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    locationText:{

    },
    seperator:{
        backgroundColor:'#efefef',
        height:1,
    },
    listView:{
        position:'absolute',
        top:105,
    },
    autoCompleteContainer:{
        position:'absolute',
        top:0,
        left:10,
        right:10
    },
    circle:{
        width:5,
        height:5,
        backgroundColor:'black',
        position:'absolute',
        top:20,
        left:15,
        borderRadius:5
    },
    line:{
        width:1,
        height:49,
        backgroundColor:'#919191',
        position:'absolute',
        top:28,
        left:17,
    },
    square:{
        width:5,
        height:5,
        backgroundColor:'black',
        position:'absolute',
        top:80,
        left:15,
    }
    
});

export default styles;