import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, FlatList, } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import JobsCard from './JobsCard';
import PopularCard from './PopularCard';


const HomeScreen = ({ name, email, onSwipeRight }) => {
    const handleGesture = (event) => {
        if (event.nativeEvent.translationX > 100) {
        onSwipeRight();
        }
    };
    const featuredJobs = [
        { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,00', location: 'Accra, Ghana', image: require('../assets/facebook.png') },
        { id: '2', title: 'Data Scientist', company: 'Google', salary: '$200,00', location: 'Toronto, CA', image: require('../assets/googleLogo.png') },
        { id: '3', title: 'Product Manager', company: 'Apple', salary: '$220,00', location: 'Cupertino, CA', image: require('../assets/appleLogo.png') },
        { id: '4', title: 'UX Designer', company: 'Microsoft', salary: '$150,00', location: 'Redmond, WA', image: require('../assets/microsoft.png') },
        { id: '5', title: 'Frontend Developer', company: 'Amazon', salary: '$170,00', location: 'Seattle, WA', image: require('../assets/amazon.png') },
        { id: '6', title: 'Backend Developer', company: 'Twitter(X)', salary: '$190,00', location: 'Los Gatos, CA', image: require('../assets/X.png') },
        { id: '7', title: 'DevOps Engineer', company: 'Uber', salary: '$160,00', location: 'New York, USA', image: require('../assets/uber.png') },
        { id: '8', title: 'AI Researcher', company: 'OpenAI', salary: '$210,00', location: 'Chicago, USA', image: require('../assets/openai.png') },
        ];
        
        const popularJobs = [
        { id: '1', title: 'Graphic Designer', company: 'GitHub', salary: '$120,000', location: 'San Jose, CA', image: require('../assets/github.png') },
        { id: '2', title: 'Marketing Manager', company: 'Nike', salary: '$130,000', location: 'Portland, OR', image: require('../assets/nike.png') },
        { id: '3', title: 'Cybersecurity Analyst', company: 'Huawei', salary: '$140,000', location: 'Armonk, NY', image: require('../assets/huawei.png') },
        { id: '4', title: 'HR Specialist', company: 'Instagram', salary: '$125,000', location: 'Los Angeles, USA', image: require('../assets/instagram.png') },
        { id: '5', title: 'Cloud Architect', company: 'Telegram', salary: '$150,000', location: 'Atlanta, USA', image: require('../assets/telegram.png') },
        { id: '6', title: 'Blockchain Developer', company: 'Pinterest', salary: '$160,000', location: 'New York, USA', image: require('../assets/pinterest.png') },
        { id: '7', title: 'Mobile App Developer', company: 'Snapchat', salary: '$145,000', location: 'Chicago, USA', image: require('../assets/snapchat.png') },
        { id: '8', title: 'Data Engineer', company: 'Spotify', salary: '$155,000', location: 'Stockholm, Sweden', image: require('../assets/spotify.png') },
        ];
        
        
        const renderJob = ({ item }) => (
            <JobsCard
            title={item.title}
            company={item.company}
            salary={item.salary}
            location={item.location}
            image={item.image}
            />
        );
        
        const renderPopularJob = ({ item }) => (
            <PopularCard
            title={item.title}
            company={item.company}
            salary={item.salary}
            location={item.location}
            image={item.image}
            />
        );
        const onPress = () => {
            console.log('Job card pressed');
        };
        
    return (
            <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler onGestureEvent={handleGesture}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.homeName}>Rahina Kayor</Text>
                        <Text style={styles.homeEmail}>rakayor@st.ug.edu.gh</Text>
                        <View style={styles.profileContainer}>
                            <Image style={styles.profileImage} source={require('../assets/RahKay.jpg')} />
                        </View>
                        <View style={styles.activeButtonContainer}></View>
                        <View style={styles.activeButton}></View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBox}>
                        <Image style={styles.searchIcon} source={require('../assets/search.png')} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder='Search a job or position'
                            placeholderTextColor='#95969D'
                        />
                        </View>
                        <View style={styles.filterContainer}>
                        <Image style={styles.filterIcon} 
                            source={require('../assets/filter.png')} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.jobsHeader}>
                        <Text style={styles.jobsHeading}>Featured Jobs</Text>
                        <Text style={styles.jobsText}>See all</Text>
                        </View>
                        <FlatList
                        data={featuredJobs}
                        renderItem={renderJob}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.jobsList}
                        />
                    </View>
                    <View style={styles.moreTextContainer}>
                        <Text style={styles.popJobs}>Popular Jobs</Text>
                        <Text style={styles.popJobsText}>See all</Text>
                    </View>
                    <FlatList 
                    data={popularJobs}
                    renderItem={renderPopularJob}
                    keyExtractor={(item) => item.id}
                    vertical
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.jobsList}
                    />
                </SafeAreaView>
            </PanGestureHandler>
            </GestureHandlerRootView>
    );
    };
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        backgroundColor: '#FAFAFD', 
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        top: 90,
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginTop: 50,
    },
    homeName: {
        width: 254,
        height: 36,
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
        left: 20,
        lineHeight: 36,
    },
    homeEmail: {
        width: 254,
        height: 24,
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '400',
        top: 25,
        opacity: 0.5,
        left: -235,
    },
    profileContainer: {
        width: 54,
        height: 54,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        right: 150,
        top: 10,
        borderRadius: '100',
        backgroundColor: '#FFFFFF',
    },
    activeButtonContainer: {
        width: 16,
        height: 16,
        borderRadius: '100',
        backgroundColor: '#FAFAFD',
        bottom: 8,
        right: 170,
    },
    activeButton: {
        width: 8,
        height: 8,
        borderRadius: '100',
        backgroundColor: '#FC1010',
        bottom: 8,
        right: 182,
    },
    searchContainer: {
        width: 327,
        height: 48,
        flexDirection: 'row',
        backgroundColor: '#F2F2F3',
        borderRadius: 12,
        right: 32,
        top: 120,
        paddingHorizontal: 15,
        marginBottom: 18,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    searchIcon: {
        width: 20,
        height: 20,
        top: 4,
        opacity: 0.4,
        marginHorizontal: 8,
    },
    searchInput: {
        width: 174,
        height: 23,
        flex: 1,
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22.5,
    },
    filterContainer: {
        width: 48,
        height: 48,
        backgroundColor: '#F2F2F3',
        borderRadius: 12,
        left: 75,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    filterIcon: {
        width: 17.33,
        height: 15.6,
        color: '#356899',
        transform: 'rotate(90deg)',
        opacity: 0.5,
    },
    jobsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    jobsHeading: {
        width: 114,
        height: 21,
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        left: 20,
        lineHeight: 21,
        top: 140,
    },
    jobsText: {
        width: 42,
        height: 17,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        opacity: 0.5,
        top: 140,
        right: 22,
    },
    jobsList: {
    },
    moreTextContainer: {
        bottom: 430,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 20,
    },
    popJobs: {
        width: 114,
        height: 21,
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        right: 110,
        lineHeight: 21,
    },
    popJobsText: {
        width: 42,
        height: 17,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        opacity: 0.5,
        left: 117,
        top: 5,
    },
    });
    
    export default HomeScreen;
    