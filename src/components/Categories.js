import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories.js';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="categories-container">
      <div className='categories-div' onClick={() => {
        dispatch(checkStatus());
      }}>Under Construction</div>
    </div>
  );
};

export default Categories;