import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const PopularCard = ({ popularJobs, onPress}) => {
    
    return (
            <View style={styles.card}>
                {popularJobs.map ((item) => {
                    return (
                    <TouchableWithoutFeedback key = {item.id}>
                    <TouchableOpacity onPress={onPress}>
                        <View key={item.id} style={styles.cardContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={item.photo} style={styles.companyImage} />
                            </View>
                            <View>
                                <Text style={styles.pjTitle}>{item.pjTitle}</Text>
                                <Text style={styles.firm}>{item.firm}</Text>
                                <Text style={styles.wage}>{item.wage}</Text>
                                <Text style={styles.place}>{item.place}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    </TouchableWithoutFeedback>
                    )
                }) }  
            </View>
    );
};

const styles = StyleSheet.create({
card: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'column'
},
cardContainer: {
    width: 400,
    height: 74,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
},

companyImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',  
    bottom: 5,
},
infoContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
},
pjTitle: {
    width: '100%',
    height: 20,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#0D0D26',
    bottom: 50,
    left: 70,
},
firm: {
    width: 74,
    height: 21,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: 21,
    left: 70,
    bottom: 50,
    color: '#0D0D26',
    opacity: 0.5,
},
wage: {
    width: 62,
    height: 20,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: 20,
    left: 280,
    bottom: 95,
    color: '#0D0D26',
},
place: {
    width: 90,
    height: 21,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#0D0D26',
    lineHeight: 21,
    left: 280,
    bottom: 95,
    opacity: 0.5,
},
});

export default PopularCard;
