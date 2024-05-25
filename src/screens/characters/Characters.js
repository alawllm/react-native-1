import { FlatList, View, Text } from "react-native";

import { CharacterTile } from "./components/CharacterTile";
import { useCharactersGet } from "./hooks/useCharactersGet";

export const CharactersScreen = () => {
  const { data, isError, isLoading } = useCharactersGet();

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
    <View>
      {/* <FlatList
        horizontal
        data={mockedCharacters.results}
        renderItem={({ item }) => <CharacterTile {...item} />}
      /> */}
      <FlatList
        ListHeaderComponent={<Text>Ricky Morti Api Characters</Text>}
        ListFooterComponent={<Text>Footer</Text>}
        data={data?.results ?? []}
        renderItem={({ item, index }) => (
          <CharacterTile {...item} highlighted={index % 2 === 0} />
        )}
      />
    </View>
  );
};
