import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Information = () => {
  // States to toggle "see more" content for each card
  const [showMoreHighArches, setShowMoreHighArches] = useState(false);
  const [showMoreNormalArches, setShowMoreNormalArches] = useState(false);
  const [showMoreFlatArches, setShowMoreFlatArches] = useState(false);

  const infoCards = [
    {
      title: 'High Arch',
      description:
        'Pes cavus (High Arch) refers to a medial longitudinal arch of the foot which is higher than normal. It may develop in childhood years and may worsen with age. The height of the arch being more than normal decreases the capacity of the foot to act as a shock absorber while walking, leading to excessive load over the ball and heel areas of the foot.',
      extra: `As a consequence, people may report foot pain radiating to the ankles, legs, thighs, and even the hip. This pain travels up the lower limb due to overuse of the hindfoot during walking. Treatment involves mechanical restraints like special shoes or foot inserts.`,
      showMoreState: showMoreHighArches,
      toggleShowMore: () => setShowMoreHighArches((prev) => !prev),
    },
    {
      title: 'Normal Arch',
      description:
        'Neutrally Aligned (Normal Arch) is generally considered to be the best due to the fact that it has a slight curve allowing for even weight distribution over the foot. This type of arch is associated with excellent stability and optimal shock absorption.',
      extra: `If the middle part of your arch is about half filled, this means you have a normal arch. It naturally supports your body weight and pronates under normal load. Look for shoes with firm midsoles and moderate rear-foot stability.`,
      showMoreState: showMoreNormalArches,
      toggleShowMore: () => setShowMoreNormalArches((prev) => !prev),
    },
    {
      title: 'Flat Foot',
      description:
        'Pes planus (Flat Foot) refers to the condition wherein the foot’s longitudinal arches are not formed. It is acceptable to see flat feet in babies since it is around the age of two or three the arches begin to form.',
      extra: `In some individuals, the arches fail to form. Most flat feet are not associated with discomfort. When it causes pain, treatments like arch support inserts can help alleviate discomfort.`,
      showMoreState: showMoreFlatArches,
      toggleShowMore: () => setShowMoreFlatArches((prev) => !prev),
    },
  ];

  return (
    <View style={styles.content}>
      {/* Title */}
      <Text style={styles.mainHeading}>
        Plantar Pressure Distribution Classification System
      </Text>

      {/* Information Cards */}
      <View style={styles.cardContainer}>
        {infoCards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>
              {card.description}{' '}
              {card.showMoreState && <Text style={styles.extraText}>{card.extra}</Text>}
              <TouchableOpacity onPress={card.toggleShowMore}>
                <Text style={styles.seeMore}>
                  {card.showMoreState ? ' see less...' : ' see more...'}
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFE9C7',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  mainHeading: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#2c3e50',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  extraText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  seeMore: {
    fontSize: 14,
    color: '#295582',
    fontWeight: 'bold',
  },
});

export default Information;
