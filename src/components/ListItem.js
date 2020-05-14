import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

const ListItem = (props) => {

  const { desc, dead, cases } = props

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{desc}</Text>
      <View style={styles.info}>
        <Text style={styles.subtext}>Casos Totales: {cases}  -  </Text>
        <Text style={styles.subtext}>Fallecidos: {dead}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
  },
  subtext: {
    fontSize: 15,
  },
  info: {
    flexDirection: 'row'
  }
});

export default ListItem
