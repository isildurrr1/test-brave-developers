import { apiOperators } from '../data/api'
import { ListProps } from '../types/types';
import Element from './Element';

const List: React.FC<ListProps> = ({ operatorChoice }) => {
  return (
    <>
      <h1 className="title">Выберите оператора</h1>
      <div className="list">
        {apiOperators.map(data => {
          return <Element key={Math.random()} operatorChoice={operatorChoice} data={data} />
        })}
      </div>
    </>
  );
}

export default List;