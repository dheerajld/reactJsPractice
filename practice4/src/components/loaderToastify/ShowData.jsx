import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

export const ShowData = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(
        "https://hub.dummyapis.com/products?noofRecords=100&idStarts=1001&currency=usd"
      );
      const results = await res.json();
      //   console.log(results);
      setData(results);
      setLoading(false);
      toast("Wow so easy !");
    }

    getData();
  }, []);

  return (
    <div>
      <ToastContainer />
      {loading ? (
        <div className="loader">
          <TailSpin color="red" height="80" width="80" />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            <div key={i}>
              <h2 className="App-text">
                {e.name} : {e.price}
              </h2>
              <p>{e.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
