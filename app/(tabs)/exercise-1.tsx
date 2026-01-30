import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

            <Button title='Toggle to Fahrenheit' onPress={toggleUnit} />

            <View>

                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(itemValue) => setSelectedCity(itemValue)}
                >

                    {weatherData.map((data, index) => (
                        <Picker.Item key={index} label={data.city} value={data.city} />
                    ))}
                </Picker>

                <Text style={{ marginTop: 10 }}>Selected: {selectedCity}</Text>

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
                <Text style={styles.loading}>No weather data available</Text>
            )}

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
        fontSize: 20,
        color: 'black',
    },
});

export default WeatherApp;