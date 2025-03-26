import { listData } from '../../libs/dummyData';
import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import MyMap from '../../components/myMap/MyMap';

function ListPage() {
  const data = listData;
  return (
    <div className='listPage'>
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <MyMap items={data} />
        </div>
    </div>
  )
}

export default ListPage
