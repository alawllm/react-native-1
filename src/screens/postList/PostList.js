import { StyleSheet, View, Text, FlatList } from "react-native";
import { Header, ListItem } from "./components";

import { usePostsGet } from "./hooks/usePostsGet";

export function PostList() {
  const { data, isError, isLoading } = usePostsGet();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <View>
            <Text>Sorry, no data!!!</Text>
          </View>
        }
        ListHeaderComponent={<Header />}
        ListFooterComponent={<Header />}
        data={data ?? []}
        renderItem={({ item, index }) => (
          <ListItem label={`${index}. ${item.title}`} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});
