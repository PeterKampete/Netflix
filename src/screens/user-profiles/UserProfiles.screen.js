import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import styles from './UserProfiles.styles';
import { fonts } from '../../constants/fonts';
import { profiles } from '../../constants/dummy_data/profiles';
import UserProfile from '../../components/user-profile/UserProfile.component';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { paths } from '../../navigation/paths';

const UserProfiles = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../assets/images/logo2.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </View>
      <TouchableOpacity style={styles.editButton}>
        <FontAwesome5 name='user-edit' size={20} color='#fff' />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.heading}>Who is watching</Text>
        <View style={styles.userProfiles}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: 20 }}
            contentContainerStyle={{ gap: 20 }}
            ListHeaderComponent={
              <View style={{ alignItems: 'center', marginBottom: 16 }}>
                <UserProfile
                  name={'item.name'}
                  isActive={false}
                  image={require('../../assets/images/glass.jpg')}
                  blurRadius={20}
                  height={DEVICE_HEIGHT * 0.12}
                  width={DEVICE_HEIGHT * 0.12}
                  borderRadius={10}
                  borderWidth={0.5}
                  borderColor='#fff'
                >
                  <View style={{ alignItems: 'center' }}>
                    <MaterialIcons
                      name='person-add-alt'
                      size={30}
                      color='#fff'
                    />
                    <Text style={{ color: '#fff', marginTop: 12 }}>
                      Add Profile
                    </Text>
                  </View>
                </UserProfile>
              </View>
            }
            data={profiles}
            keyExtractor={(item) => '_' + item.id}
            renderItem={({ item }) => (
              <UserProfile
                name={item.name}
                isActive={item.isActive}
                image={item.image}
                width='47%'
                onPress={() => navigation.navigate(paths.BOTTOMNAVIGATOR)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default UserProfiles;
