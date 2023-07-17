import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: "#2b2c3d",
    maxWidth: rem(350),
    margin: "24px 0 0",
    padding: '20px',
  },

  section: {

    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },


  like: {
    color: theme.colors.red[6],
  },

  label: {
    fontSize: '14px',
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  badges: {
    emoji: string;
    label: string;
    color: string;
  }[];
}




export default function BaiLam1({ image, title, description, country, badges }: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges?.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}

      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <>


      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <Image src={"https://images.unsplash.com/photo-1638793772352-631e0543c211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"} alt={title} height={160} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text fz="md" fw={500}>
              Son Doong Adventures
            </Text>
            <Badge size="sm" color="green" style={{ fontSize: "11px", padding: "10px" }}>FEATURED</Badge>
          </Group>
          <Text fz="sm" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text className={classes.label} c="dimmed">
            With Son Doong Tours you can explore more of the magical fjord landscapes with tours and activities on and around the Son Doong cave of Vietnam
          </Text>
          <Group spacing={7} mt={5} >
            {features}
          </Group>
        </Card.Section>

        <Group mt="xs" >


          <Button radius="md" color="green" style={{ flex: 1, backgroundColor: "#e8590c33" }}>
            <Text color='#ffd8a8'>
              Book classic tour now
            </Text>
          </Button>


        </Group>
      </Card >
    </>



  );
};;