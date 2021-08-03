import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from "color";
export default function ColorDetail({route}) {
    const { color:name } = route.params
    const color = Color(name);
    const textColor = {fontSize: 20, color: color.negate().toString()};
  return (
       <View style={[styles.container, {backgroundColor:name}]}>
           <Text style={textColor}>Color Name : {name}</Text>
           <Text style={textColor}>Color RGB : {color.rgb().toString()}</Text>
           <Text style={textColor}>Color HSL : {color.hsl().toString()}</Text>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
});
