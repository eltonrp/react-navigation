import { View, Text } from 'react-native'

export default function Contacts({ navigation }) {
  return(
    <View>
      <Text>Contacts</Text>
      <Text onPress={() => navigation.navigate('Information') }>Information</Text>
    </View>
  )
}