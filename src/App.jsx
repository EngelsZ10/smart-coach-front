import "./App.css";
import { useDisclosure } from "@mantine/hooks";
import { Center, Group, Button } from "@mantine/core";
import Demo from "./Components/uploadPage";

function App() {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <>
      <div className="App">
        <Center maw={400} h={100} mx="auto">
          <Group position="center">
            <Button onClick={toggle}>Toggle dialog</Button>
          </Group>
        </Center>
      </div>

      <Demo open={opened} close={close}></Demo>
    </>
  );
}

export default App;
