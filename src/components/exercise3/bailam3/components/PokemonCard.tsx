import { PokemonData } from "../data/pokemon.data";
import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { useState } from 'react';

export default function PokemonCard({ pokemon }: { pokemon: PokemonData; }) {
  const clipboard = useClipboard({ timeout: 500 });
  const [description, setDescription] = useState();

  //Làm Bài Tại Đây

  return (
    <>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={pokemon.image}
            height={300}
            alt="Norway"
            fit="fill"
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{pokemon.name}</Text>

        </Group>

        <Text size="sm" color="dimmed">
          {pokemon.description}
        </Text>

        <Button variant="light" color="green" fullWidth mt="md" radius="md" style={{ flex: 1, backgroundColor: `${clipboard.copied ? 'teal' : "#e8590c33"}` }}
          onClick={() => clipboard.copy(`${pokemon.description}`)}>
          {clipboard.copied ? 'Copied' : 'Copy Pokemon Description'}
        </Button>
      </Card>
    </>
  );
}