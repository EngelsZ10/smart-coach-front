import { redirect, useLocation, useNavigate } from 'react-router-dom';
import './CategoryView.css'
import navigationJSON from '../data/navigation.json';

function CategoryView() {
  const navigate = useNavigate();
  const location = useLocation();

  let title;
  let navData;

  // Use the URL to get the correct navigation data from 'navigation.json'
  const [category, subcategory ] = location.pathname.substring(1).split('/');

  let currentView;
  if (!subcategory) {
    currentView = navigationJSON.views.find((view) => view.id === category )
  } else {
    currentView = navigationJSON.views.find((view) => view.id === subcategory )
  }
  // Handle invalid route
  if (!currentView) {
    return (
      <>
        404 Not found! 
      </>
    )
  }
  
  navData = currentView.navData;
  title = currentView.title;


  return (
    <div className={`subcategory-view`}>
      <header className="view__header">
        <h3 className="header__title">{title}</h3>
        <figure className="header__logo"><img src="SteelersLogo.png" alt="Logo" /></figure>
      </header>
      <section className="subcategory-list">
        {navData.map(navItem => (
          <div 
            className="nav-item" 
            key={navItem.category}
            onClick={() => { navigate(location.pathname + navItem.target) }}  
          >
            <figure className="item__image"><img src={navItem.image} alt={`category-${navItem.category}`} /></figure>
            <div className="item__category">{navItem.category}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CategoryView;