import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';

const dummyBooks = [
  {
    id: '1',
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    description: 'In a deadly war college for dragon riders, Violet Sorrengail must prove her worth among elite warriors while uncovering hidden truths about her world and herself.',
    genre: 'Fantasy, Romance, New Adult',
    year: '2023',
    image: require('../assets/images/fourth-wing.jpg'),
  },
  {
    id: '2',
    title: 'The Shining',
    author: 'Stephen King',
    description: 'A family becomes caretakers of an isolated hotel with a terrifying history. As winter sets in, supernatural forces and a father\'s descent into madness threaten to destroy them.',
    genre: 'Horror, Psychological Thriller',
    year: '1977',
    image: require('../assets/images/stephen-king-book-cover.jpg'),
  },
  {
    id: '3',
    title: 'The Serpent and the Wings of Night',
    author: 'Carissa Broadbent',
    description: 'In a world ruled by vampires, Oraya, a human adopted by the Nightborn king, enters a brutal tournament to prove her worth—and discovers destiny, danger, and forbidden love.',
    genre: 'Fantasy, Romance, Dark Fantasy',
    year: '2022',
    image: require('../assets/images/SerpentWingsNight.png'),
  },
  {
    id: '4',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'A famous painter shoots her husband and never speaks again. A criminal psychotherapist is determined to uncover the reason behind her silence—and finds far more than he expected.',
    genre: 'Psychological Thriller, Mystery',
    year: '2019',
    image: require('../assets/images/silentpatient.jpg'),
  },
  {
    id: '5',
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    description: 'Detective Hercule Poirot investigates a murder aboard the luxurious Orient Express, uncovering secrets and lies among a train full of suspects.',
    genre: 'Mystery, Crime Fiction',
    year: '1934',
    image: require('../assets/images/murder.jpg'),
  },
];

export default function MyBooksScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState(dummyBooks);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === '') {
      setBooks(dummyBooks);
    } else {
      const filteredBooks = dummyBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(text.toLowerCase()) ||
          book.author.toLowerCase().includes(text.toLowerCase())
      );
      setBooks(filteredBooks);
    }
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetails', { book: item })}
    >
      <Image source={item.image} style={styles.bookCover} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>by {item.author}</Text>
        <Text style={styles.bookGenre}>{item.genre}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Book Collection</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by title or author..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.noResults}>No books found matching your search</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD1DC',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5A5A5A',
    marginBottom: 15,
    textAlign: 'center',
  },
  searchBar: {
    height: 45,
    borderColor: '#C1E1C1',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  bookItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  bookCover: {
    width: 60,
    height: 90,
    borderRadius: 5,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5A5A5A',
    marginBottom: 3,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#5A5A5A',
    marginBottom: 3,
  },
  bookGenre: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#5A5A5A',
  },
});