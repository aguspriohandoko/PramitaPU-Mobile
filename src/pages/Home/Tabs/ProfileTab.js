import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Avatar, Card, Divider, Paragraph, Title } from 'react-native-paper';
import { connect, useDispatch, useSelector } from 'react-redux';
import user_ico from '../../../assets/user.jpg';

const ProfileTab = () => {

    const { auth } = useSelector(state => state);

    return(
        <View style={styles.main}>
            <ScrollView>
                <View style={{ height: 50, backgroundColor: '#e62e2d' }}>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -50 }}>
                    <View style={{ borderWidth: 5, borderColor: '#fff', borderRadius: 100, width: 110, height: 110, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Avatar.Image size={100} source={user_ico} />
                    </View>
                </View>

                {/* <View style={{marginTop:'50%'}}>
                    <ActivityIndicator size={'large'} animating={true} color='#e62e2d' />
                    <Text style={{marginTop:10,fontSize:20,textAlign:'center'}}>Loading...</Text>
                </View> */}
                <View style={styles.container}>
                
                    {
                        auth.loading?
                        <View style={{marginTop:'50%'}}>
                            <ActivityIndicator size={'large'} animating={true} color='#e62e2d' />
                            <Text style={{marginTop:10,fontSize:20,textAlign:'center'}}>Loading...</Text>
                        </View>
                        :
                        <Card style={{ borderColor: '#fff', borderWidth: 0.5 }}>
                            <Card.Content>
                                <Title style={{ textAlign: 'center' }}>{auth.user?.namalengkap}</Title>
                                {/* <Divider style={{ height: 3, marginVertical: 5 }} /> */}
                                <Paragraph style={{ textAlign: 'center' }}>{auth.user?.username}</Paragraph>
                            </Card.Content>
                        </Card>
                    }
                    
                </View>
                <View>
                    {/* <Text>{JSON.stringify(auth,0,2)}</Text> */}
                </View>
            </ScrollView>
        </View>
        
    );
}

// const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 10
    }
});

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps)(ProfileTab);