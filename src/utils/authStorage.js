import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:authenticate`
    )

    return token
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:authenticate`, accessToken)
  }

  async removeAccessToken() {
    await  AsyncStorage.removeItem(`${this.namespace}:authenticate`)
  }
}

export default AuthStorage;