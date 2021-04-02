import React, { useEffect, useState } from "react";
import axios from "axios";

const Game = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      headers: { Authorization: "Token " + props.token },
      url: "https://shr-adv-project.herokuapp.com/api/adv/init/",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <div className="Game">
      {!data && <p>Couldn't fetch data</p>}
      {data && (
        <>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </>
      )}
    </div>
  );
};

export default Game;
