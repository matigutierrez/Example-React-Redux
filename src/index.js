import React, { useState, Component } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { get_regions } from './reducers/cases_regions'

class App extends Component {

  componentDidMount() {
    this.props.get_regions();
  }

  render() {
    const { regions } = this.props

    return (
      <View style={styles.container}>
          <Text style={styles.tittle}> Casos Totales - Chile </Text>
        <FlatList
          style={styles.list}
          data={regions}
          keyExtractor={x => x.Region}
          renderItem={({ item }) => <ListItem desc={item.Region} dead={item.Fallecidos} cases={item.Casostotalesacumulados}/>}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  regions: state.todos.regions,
  loading: state.todos.loading,
  error: state.todos.errorMessage
})

const mapDispatchToProps = dispatch => ({
  get_regions: () => dispatch(get_regions())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
  tittle: {
    alignSelf: "stretch",
    fontSize: 25,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5
  }
});