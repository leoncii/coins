import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async ({ key, value }) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    return true
  } catch (e) {
    return false
  }
}

export const getStorage = async ({ key }) => {
  console.log('KEY', key)
  try {
    if (key.length < 2) {
      return false
    }
    return await AsyncStorage.getItem(key)
  } catch (error) {
    throw new Error('Error ni modales.')
  }
}
export const getMultiStorage = async ({ keys }) => {
  try {
    return await AsyncStorage.multiGet(keys)
  } catch (error) {
    throw new Error('Error ni modales.')
  }
}
export const getAllStorage = async () => {
  try {
    return await AsyncStorage.getAllKeys()
  } catch (error) {
    throw new Error('Error ni modales.')
  }
}

export const removeStorage = async ({ key }) => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  } catch (error) {
    return false
  }
}
