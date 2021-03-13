import React from "react";
import List from "../../components/List";
import { useStateValue } from "../../Context/StateProvider";

function Home() {
  const [{ lists, anotherLists }] = useStateValue();

  const listMapping = lists?.map((list) => (
    <div key={list.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <List
        list={list}
        listId={list.id}
        listCreated={list.created}
        listTitle={list.title}
      />
    </div>
  ));

  const newListMapping = lists
    ?.filter((list) => list?.title?.length)
    .map((list) => (
      <div key={list.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
        <List
          list={list}
          listId={list.id}
          listCreated={list.created}
          listTitle={list.title}
        />
      </div>
    ));

  return (
    <div className="container-fluid mt-5 px-3">
      <div className="row">
        {lists.length <= 1 ? listMapping : newListMapping}
        {/* another list add */}
        {lists.length > 1 && (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <List
              list={anotherLists}
              listId={anotherLists[0].id}
              listCreated={anotherLists[0].created}
              listTitle={anotherLists[0].title}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
