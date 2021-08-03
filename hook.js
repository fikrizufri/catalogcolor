import {useState,useEffect} from "react";
import {generate} from "shortid";
import { AsyncStorage } from "react-native";
import dataColor from './data/defaultColors.json'
import { Alert } from "react-native";

export const useColors = () => {
  const [colors, setColors] = useState([]);
  const loadColors = async () => {
      const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
      if (colorData) {
          const color = JSON.parse(colorData);
          setColors(color);
      }
  }

  useEffect(() => {
      if(colors.length) return;
      loadColors();
  }, [])
  useEffect(() => {
      AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(""));
      
  }, [colors])
  const addColor = color =>{

    let data = dataColor.filter(function(item){
        return item.color == color;
    });
    
    if (data.length) {
         let ColorList = colors.filter(function(item){
            return item.color == color;
        });
        if (!ColorList.length){
            const newColor = {id: generate(),color};
            setColors([newColor, ...colors]);
        }else{
            Alert.alert("color already available");
        }
    }else{
        Alert.alert("Color not available");
    }
  }

  return {colors, addColor};
};