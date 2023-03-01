
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row'
  },
  topContainerLeft: {
    justifyContent: 'center'
  },
  topContainerRight: {
    flexDirection: 'column'
  },
  //
  imageItem: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 5,
    marginLeft: 5
  },
  fullNameItem: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
  },
  descriptionItem: {
  },
  languageItem: {
    backgroundColor: '#0366d6',
    color: '#ffffff',
    borderRadius: 4,
    padding: 3,
    marginTop: 5,
    marginBottom: 5
  },
  //
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5
  },
  numberItem: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomInfo: {
    textAlign: 'center'
  }
});

const CountNumber = ({ number }) => {
  if (number >= 1000) {
    return Math.abs(number) > 999 ? Math.sign(number)*((Math.abs(number)/1000).toFixed(1)) + 'k' : Math.sign(number)*Math.abs(number)
  }
  return number
}

const RepositoryItem = ({ item }) => {
  return (
    <View>

      <View style={styles.topContainer}>
        <View style={styles.topContainerLeft}>
          <Image style={styles.imageItem} source={{ uri: `${item.ownerAvatarUrl}` }} />
        </View>

        <View style={styles.topContainerRight}>
          <Text style={styles.fullNameItem}>
            {item.fullName}
          </Text>
          <Text style={styles.descriptionItem}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.languageItem}>
              {item.language}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.numberItem}>
            <CountNumber number={item.stargazersCount} />
          </Text>
          <Text style={styles.bottomInfo}>
            Stars
          </Text>
        </View>
        <View>
          <Text style={styles.numberItem}>
            <CountNumber number={item.forksCount} />
          </Text>
          <Text style={styles.bottomInfo}>
            Forks
          </Text>
        </View>
        <View>
          <Text style={styles.numberItem}>
            <CountNumber number={item.reviewCount} />
          </Text>
          <Text style={styles.bottomInfo}>
            Review
          </Text>
        </View>
        <View>
          <Text style={styles.numberItem}>
            <CountNumber number={item.ratingAverage} />
          </Text>
          <Text style={styles.bottomInfo}>
            Rating
          </Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem