import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ResultCardProps {
  title: string;
  /**
   * Overall data
   */
  data: number;
  /**
   * Specific test data
   */
  stat: number;
  /**
   * up means if the stat is upward or dawnward
   */
  up?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({title, data, stat, up}) => {
  const indicator = up ? '#06d6a0' : '#ef476f';
  return (
    <View style={[styles.card, {borderBottomColor: indicator}]}>
      <Text style={styles.record}> {title} </Text>
      <Text style={styles.stat}>{data}</Text>
      <Text style={[styles.progress, {color: indicator}]}>
        {up ? '+' : '-'} {stat}
      </Text>
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 70,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 5,
    borderBottomWidth: 3,
  },
  record: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  stat: {
    fontSize: 16,
  },
  progress: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
});
