import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const JobsCard = ({ title, company, salary, location, image, 
    onPress, style, }) => {
    return (
        <TouchableWithoutFeedback>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={image} />
                </View>
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.company}>{company}</Text>
                    <Text style={styles.salary}>{salary}</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>
            </TouchableOpacity>
        </TouchableWithoutFeedback>
);
};         

const styles = StyleSheet.create({
card: {
    width: 280,
    height: 186,
    top: 150,
    backgroundColor: '#5386E4',
    borderRadius: 24,
    opacity: 0.85,
    marginHorizontal: 10,
    padding: 20,
},
imageContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    marginBottom: 10,
},
image: {
    width: 25,
    height: 25,
    margin: 10,
},
title: {
    width: 145,
    height: 21,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 21,
    left: 70,
    bottom: 55,
    marginBottom: 5,
},
company: {
    width: 68,
    height: 17,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    opacity: 0.7,
    bottom: 60,
    left: 70,
    marginBottom: 10,
    lineHeight: 21,
},
salary: {
    width: 56,
    height: 24,
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    opacity: 0.7,
    marginBottom: 5,
    lineHeight: 24,
    top: 20,
},
location: {
    width: 102,
    height: 24,
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: 24,
    left: 150,
    bottom: 10,
},
titleStyle: {
    color: '#ffffff',
},
});

export default JobsCard;
