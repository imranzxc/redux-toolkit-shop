import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

function Sidebar() {
  const cats = useSelector((state) => state.categories);
  return (
    <div>
      {cats.map((item) => {
        return (
          <div className="list-group list-group-flush">
            <Link
              className="list-group-item list-group-item-action"
              to={`/category/${item.id}`}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
  // вывод списка категорий
}

export default Sidebar;