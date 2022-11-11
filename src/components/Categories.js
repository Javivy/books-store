import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories.js';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="categories-container">
      <button onClick={() => {
        console.log(dispatch(checkStatus()));
      }}>Check Status</button>
    </div>
  );
};

export default Categories;