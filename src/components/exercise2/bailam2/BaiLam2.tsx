import { Flex, SegmentedControl, createStyles } from '@mantine/core';
import { useState } from 'react';
import { Switch, Group, useMantineTheme } from '@mantine/core';
import { Divider, Box } from '@mantine/core';
import { Button } from '@mantine/core';






export default function BaiLam2() {

  const [typeButton, setTypeButton] = useState("outline");

  const [isDisabled, setIsDisabled] = useState(false);



  return (
    <>
      <div style={{
        margin: "24px -8px -8px", display: "flex", flexWrap: "wrap", justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SegmentedControl color="pink"
              data={[
                { label: 'Outline', value: 'outline' },
                { label: 'Light', value: 'light' },
                { label: 'Filled', value: 'filled' },
                { label: 'Subtle', value: 'subtle' },
                { label: 'Default', value: 'default' },
              ]}
              onChange={(value) => {
                setTypeButton(value);
              }}
            />
          </div>
        </div>

        <div style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <Group position="center">
                <Switch label="Disabled"
                  onChange={(event) => setIsDisabled(event.currentTarget.checked)} />
              </Group>
            </div>
          </div>
        </div>
      </div>


      <div style={{ margin: '24px 0' }}>
        <Divider my="xs" />
      </div>

      <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant={typeButton}
          disabled={isDisabled}>
          The Button
        </Button>
      </div>


    </>
  );
};