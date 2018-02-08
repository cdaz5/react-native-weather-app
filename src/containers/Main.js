import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Highlighter from 'react-native-highlight-words';
import { getWeather } from '../state/weather/actions';
import { getLocation } from '../state/location/actions';
import phrases from '../utils/Phrases';
import iconNames from '../utils/iconNames';

const baseText = {
	fontFamily: 'HelveticaNeue-Bold',
	color: '#fff'
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffd017'
	},
	header: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row'
	},
	body: {
		flex: 5,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		padding: 10
	},
	temperature: {
		fontSize: 45,
		...baseText
	},
	bodyTitle: {
		fontSize: 65,
		marginBottom: 5,
		flex: 2,
		...baseText
	},
	bodySub: {
		fontSize: 35,
		flex: 1,
		...baseText
	}
});

class Main extends Component {
	componentDidMount = () => {
		this.props.getLocation();
		setTimeout(() => {
			this.props.getWeather(this.props.lat, this.props.long);
		}, 3000);
	};

	render() {
		const { temp, weatherType } = this.props;

		return (
  <View style={[styles.container, { backgroundColor: phrases[weatherType].background }]}>
    <StatusBar hidden />
    <View key={1} style={styles.header}>
      {weatherType === 'initialLoad'
						? null
						: [
  <Icon key={1} name={iconNames[weatherType]} size={80} color="#fff" />,
  <Text key={2} style={styles.temperature}>{`${temp}°`}</Text>
							]}
    </View>
    <View key={2} style={styles.body}>
      <Highlighter
        style={styles.bodyTitle}
        highlightStyle={{ color: phrases[weatherType].color }}
        searchWords={[phrases[weatherType].highlight]}
        textToHighlight={phrases[weatherType].title}
      />
      <Text style={styles.bodySub}>{phrases[weatherType].subTitle}</Text>
    </View>
  </View>
		);
	}
}

const mapStateToProps = state => ({
	temp: state.weather.temp,
  weatherType: state.weather.type,
  lat: state.location.lat,
  long: state.location.long,
});

export default connect(mapStateToProps, {
	getWeather,
	getLocation
})(Main);
