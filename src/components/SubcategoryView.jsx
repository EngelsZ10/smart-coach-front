import { useNavigate } from 'react-router-dom';
import './SubcategoryView.css'

function SubcategoryView({
  title,
  navData,
  bgColor
}) {
  const navigate = useNavigate();
  return (
    <div className={`subcategory-view view--${bgColor}`}>
      <header className="view__header">
        <h3 className="header__title">{title}</h3>
        <figure className="header__logo"><img src="SteelersLogo.png" alt="Logo" /></figure>
      </header>
      <section className="subcategory-list">
        {navData.map(navItem => (
          <div 
            className="nav-item" 
            key={navItem.category}
            onClick={() => { navigate(navItem.path) }}  
          >
            <figure className="item__image"><img src={navItem.image} alt={`category-${navItem.category}`} /></figure>
            <div className="item__category">{navItem.category}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default SubcategoryView;