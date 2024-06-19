import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const loader = () => {
  const [ellipsis, setEllipsis] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setEllipsis(prev => (prev.length < 3 ? prev + "." : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading{ellipsis}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 24,
  },
});

export default loader;