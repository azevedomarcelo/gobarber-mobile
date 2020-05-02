import React from 'react';
import { View, Button, SafeAreaView, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
        <Text
          style={{
            color: '#f4ede8',
            fontFamily: 'RobotoSlab-Medium',
            fontSize: 25,
            marginLeft: 32,
            width: 300,
          }}
        >
          Dashboard
        </Text>
        <View>
          <Button title="Sair" onPress={signOut} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;
