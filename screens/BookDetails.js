import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function BookDetails({ route }) {
  const { book } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>
      </View>
      
      <Image 
        source={book.image} 
        style={styles.bookImage}
        resizeMode="contain"
      />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{book.description}</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Genre:</Text>
          <Text style={styles.detailValue}>{book.genre}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Year:</Text>
          <Text style={styles.detailValue}>{book.year}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD1DC',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5A5A5A',
    marginBottom: 5,
  },
  author: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5A5A5A',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  bookImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5A5A5A',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#C1E1C1',
    paddingBottom: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5A5A5A',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#5A5A5A',
    width: 80,
    fontSize: 16,
  },
  detailValue: {
    flex: 1,
    fontSize: 16,
    color: '#5A5A5A',
  },
});