import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WeatherApp = () => {
    // App State (What unit of measurement? What city?)
    const [unit, setUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit
    const [selectedCity, setSelectedCity] = useState('Saskatoon'); // Default city

    // Static weather data
    const weatherData = [
        { city: 'Saskatoon', temperatureC: 22, condition: 'Sunny' },
        { city: 'Regina', temperatureC: 19, condition: 'Cloudy' },
        { city: 'Prince Albert', temperatureC: 16, condition: 'Rainy' },
    ];

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
    };

    const convertTemperature = (tempC: number) => {
        return unit === 'C' ? tempC : (tempC * 9) / 5 + 32;
    };

    const selectedWeather = weatherData.find((data) => data.city === selectedCity);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Weather App</Text>

            <View style={styles.locationCard}>

                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedCity(itemValue)}
                >

                    {weatherData.map((data, index) => (
                        <Picker.Item key={index} label={data.city} value={data.city} />
                    ))}
                </Picker>

                <Text style={styles.selected}>Selected: {selectedCity}</Text>

            </View>

            {selectedWeather ? (
                <View style={styles.weatherCard}>
                    <Text style={styles.city}>{selectedWeather.city}</Text>
                    <Text style={styles.condition}>{selectedWeather.condition}</Text>
                    <Text style={styles.temperature}>
                        {convertTemperature(selectedWeather.temperatureC)}°{unit}
                    </Text>
                </View>
            ) : (
                <Text>No weather data available</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={toggleUnit}>
                <Text style={styles.buttonText}>Toggle Unit of Measurement</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        bottom: 60,
    },
    locationCard: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderColor: 'black',
        borderWidth: 2,
        padding: 8,
        width: 300,
        marginBottom: 20,
    },
    selected: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 18
    },
    weatherCard: {
        backgroundColor: '#63e2ff',
        borderRadius: 16,
        borderColor: 'black',
        borderWidth: 2,
        padding: 8,
        width: 300,
        marginBottom: 10
    },
    city: {
        fontSize: 32,
        textAlign: 'center',
    },
    condition: {
        fontSize: 24,
        textAlign: 'center',
    },
    temperature: {
        fontSize: 46,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 14,
    },
    button: {
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
    },
    buttonText: {
        color: 'blue',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default WeatherApp;