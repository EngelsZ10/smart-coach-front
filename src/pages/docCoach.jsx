import { Link } from "react-router-dom";
import { Group, Text, useMantineTheme, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

import "./docCoach.css";

export function DocCoach(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme({
    primaryColor: 'blue',
    colorScheme: 'dark', // O 'light' si prefieres un esquema claro
    colors: {
      blue: ['#007bff', '#0056b3', '#0089ff'],
      orange: ['#ff9800', '#d77a00', '#ffae33'],
      // Aquí puedes definir más colores personalizados si lo necesitas
    },
  });
  return (
    

        <div className="docCoach">
          <Link to="/">
            <button className="backbutton">Volver al Menú</button>
          </Link>
          <img src="SteelersLogoWithName.png" alt="Mantine logo" className="imgright"/>
          <h1 className="title">Documentos Coaches</h1>
          <div className="pdfcase-container">
            <div className="pdfcase">
              <div className="pdfview">
              
              <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            size="3.2rem"
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>

              </div>
              <Link to="/ReglamentosCoaches/pdf">
                <Text className="pdfname">Reglamentos Coaches</Text>
              </Link>
            </div>
            <div className="pdfcase">
              <div className="pdfview">
              <iframe
                src="Programa Tec Verano.pdf"
                title="PDF"
                height="100%"
                width="100%"/>
              </div>
              <Link to="/FormatosCoaches/pdf">
                <Text className="pdfname">Formatos Coaches</Text>
              </Link>
            </div>
            <div className="pdfcase">
              <div className="pdfview">

              </div>
              <Link to="/ONEFA/pdf">
                <Text className="pdfname">Reglamento ONEFA</Text>
              </Link>
            </div>
            <div className="pdfcase">
              <div className="pdfview">

              </div>
              <Link to="/OFANO/pdf">
                <Text className="pdfname">Reglamento OFANO</Text>
              </Link>
            </div>
          </div>
        </div>
        
  );
}

export default DocCoach;