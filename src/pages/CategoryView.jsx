import { useNavigate } from 'react-router-dom';
import './CategoryView.css'

function CategoryView({ viewData }) {
  const navigate = useNavigate();

  const title = viewData.title;
  const items = viewData.items;

  return (
    <div className={`subcategory-view`}>
      <header className="view__header">
        <h3 className="header__title">{title}</h3>
        <figure className="header__logo"><img src="SteelersLogo.png" alt="Logo" /></figure>
      </header>
      <section className="subcategory-list">
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

export default CategoryView;