import React from "react";
import List from "../../components/List";
import { useStateValue } from "../../Context/StateProvider";

function Home() {
  const [{ lists }] = useStateValue();

  const listMapping = lists?.map((list) => (
    <div key={list.id} className="col-sm-4 mb-3">
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
      <div className="row">{listMapping}</div>
    </div>
  );
}

export default Home;
