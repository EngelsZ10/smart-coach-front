import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Group, Text } from "@mantine/core";
import "./CategoryView.css";
// import { IconUpload, IconFileTypePdf, IconX } from "@tabler/icons-react";
import { Dropzone, PDF_MIME_TYPE } from "@mantine/dropzone";

function CategoryView({ viewData }, props) {
  const navigate = useNavigate();
  const location = useLocation();

  const title = getTitle(viewData, location.pathname);
  const theme = getTheme(viewData, location.pathname);
  const buttonContent = getButtonContent(location.pathname);
  const columns = viewData.columns || 3;
  const items = viewData.items;

  //const stelscout = window.location.pathname.split("/").slice(-2)[0];

  return (
    <div className={`view view--${theme}`}>
      <header className="view_header">
        <div className="container">
          <h3 className="header_title">{title}</h3>
          <button className="header_button" onClick={() => navigate(-1)}>
            <i className="fa fa-solid fa-arrow-left"></i>
            Volver a {buttonContent}
          </button>
        </div>
        <figure className="header_logo">
          <img src="/Logos/Logo circular1.png" alt="Logo Circular 1" />
          <img src="/Logos/logo texto1.png" alt="Logo texto 1" />
        </figure>
      </header>
      <section className={`subcategory-list cols--${columns}`}>
        {items.map((item) => (
          <div className="nav-item" key={item.category}>
            <div className="pdfcase">
              <div className="pdfview">
                <Dropzone
                  onDrop={(files) => console.log("accepted files", files)}
                  onReject={(files) => console.log("rejected files", files)}
                  maxSize={3 * 1024 ** 2}
                  accept={PDF_MIME_TYPE}
                  {...props}
                >
                  <Group position="center" spacing="xl" className="Grupo">
                    <Dropzone.Accept>
                      {/* <IconUpload
                        size="3.2rem"
                        stroke={1.5}
                        color={
                          theme.colors[theme.primaryColor][
                            theme.colorScheme === "dark" ? 4 : 6
                          ]
                        }
                      /> */}
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      {/* <IconX
                        size="3.2rem"
                        stroke={1.5}
                        color={
                          theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                        }
                      /> */}
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      {/* <IconFileTypePdf size="3.2rem" stroke={1.5} /> */}
                      <figure className="item_image">
                        <img
                          src={item.image}
                          alt={`category-${item.category}`}
                        />
                      </figure>
                    </Dropzone.Idle>
                  </Group>
                </Dropzone>
              </div>
            </div>

            <Link to={item.target}>
              <Text className="pdfname item_category">{item.category}</Text>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

function getTitle(viewData, url) {
  if (viewData.title === "parent") {
    const title = url.replace(/[-]/g, " ");
    return title;
  }
  return viewData.title;
}

function getTheme(viewData, url) {
  if (viewData.theme === "parent") {
    const view = url.split("/")[1];
    let theme;
    switch (view) {
      case "scout":
        theme = "yellow";
        break;
      case "steelers":
        theme = "black";
        break;
      default:
        theme = "white";
        break;
    }
    return theme;
  }
  return viewData.theme;
}

function getButtonContent(url) {
  const path = url.substring(1).split("/");
  const prevPageIdx = path.length - 2; // Retrieve the category of the second to last element of url
  if (prevPageIdx >= 0) {
    return path[prevPageIdx];
  }
  return "menu";
}

export default CategoryView;
