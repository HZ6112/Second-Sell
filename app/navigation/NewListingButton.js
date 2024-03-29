import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({onPress}) {
    return (	
       <GestureHandlerRootView>
       <TouchableOpacity onPress={onPress}>		
        <View style={styles.container}>
            <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40}/>
        </View>	
        </TouchableOpacity>
        </GestureHandlerRootView>		
 );
}			
const styles = StyleSheet.create({				
    container:{	
        alignItems:"center", 
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white, 
        borderWidth: 10,
        height: 80, 
        width: 80, 
        borderRadius: 40, 
        bottom: 20			
  }
})

export default NewListingButton;