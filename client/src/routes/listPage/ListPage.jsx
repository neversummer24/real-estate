
import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import MyMap from '../../components/myMap/MyMap';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function ListPage() {
  const data = useLoaderData();
  

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={data}
              errorElement={<p>Error</p>}
            >
              {data.data.map((post) => (
                <Card key={post.id} item={post} />
              ))}
            </Await>
          </Suspense>

        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={data}
            errorElement={<p>Error</p>}
          >
            {(data) => {
              return <MyMap items={data.data} />
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export default ListPage
