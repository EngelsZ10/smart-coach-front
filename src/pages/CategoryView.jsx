import { useLocation, useNavigate } from 'react-router-dom';
import './CategoryView.css'

function CategoryView({ viewData }) {
  const navigate = useNavigate();
  const location = useLocation();

  const title = getTitle(viewData, location.pathname);
  const theme = getTheme(viewData, location.pathname);
  const columns = viewData.columns || 3;
  const items = viewData.items;

  return (
    <div className={`view view--${theme}`}>
      <header className="view__header">
        <h3 className="header__title">{title}</h3>
        <button onClick={() => navigate(-1)}>Volver</button>
        <figure className="header__logo"><img src="SteelersLogoWithName.png" alt="Logo" /></figure>
      </header>
      <section className={`subcategory-list cols--${columns}`}>
        {items.map(item => (
          <div 
            className="nav-item" 
            key={item.category}
            onClick={() => { navigate(item.target) }}  
          >
            <figure className="item__image"><img src={item.image} alt={`category-${item.category}`} /></figure>
            <div className="item__category">{item.category}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

function getTitle(viewData, url) {
  if(viewData.title == "parent") {
    const title = url.replace(/[\/-]/g, " ")
    return title;
  }
  return viewData.title;
}

function getTheme(viewData, url) {
  if(viewData.theme == "parent") {
    const view = url.split('/')[1];
    let theme;
    switch(view) {
      case 'scout':
        theme = 'yellow';
        break;
      case 'steelers':
        theme = 'black';
        break;
      default:
        theme = "white";
        break;
    }
    return theme;
  }
  return viewData.theme;
}

export default CategoryView;