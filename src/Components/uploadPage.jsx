import { Group, Button, TextInput, Text, Modal } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";

export default function Demo({ open, close }) {
  return (
    <>
      <Modal
        opened={open}
        withCloseButton
        onClose={close}
        size="xl"
        radius="md"
        centered
      >
        <Text size="sm" mb="xs" weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" sx={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Modal>
    </>
  );
}
