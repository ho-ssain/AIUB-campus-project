import { useEffect, useState } from "react";
import "./Clubs.scss";

const Clubs = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [multiSelectEnabled, setMultiSelectEnabled] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/clubsInfo.json");
      const res = await response.json();
      if (res) {
        setData(res);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelection = (id) => {
    if (multiSelectEnabled) {
      setSelectedIds((prevSelectedIds) => {
        const index = prevSelectedIds.indexOf(id);
        if (index === -1) {
          return [...prevSelectedIds, id];
        } else {
          return prevSelectedIds.filter((itemId) => itemId !== id);
        }
      });
    } else {
      setSelectedId(id === selectedId ? null : id);
    }
  };

  const toggleMultiSelect = () => {
    setMultiSelectEnabled((prevEnabled) => !prevEnabled);
  };

  return (
    <article className="clubs-wrapper">
      <section className="wrapper">
        <h1 className="p-name">AIUB Student Organizations</h1>

        <button onClick={toggleMultiSelect}>
          {multiSelectEnabled ? (
            <p style={{ color: "red" }}>Disable Multi-Select</p>
          ) : (
            <p>Enable Multi-Select</p>
          )}
        </button>

        <div className="clubs">
          {
            //....................
            data &&
              data.length > 0 &&
              data.map((item) => (
                <div className="item" key={item.id}>
                  <div
                    className="title"
                    onClick={() => handleSelection(item.id)}
                  >
                    <h4>{item.name}</h4>
                    <span>+</span>
                  </div>

                  {selectedId === item.id ||
                  selectedIds.indexOf(item.id) !== -1 ? (
                    <div className="content">
                      <img src={item.img} alt="clubs" />
                      <div className="objective">
                        <h4>Objective</h4>
                        <p>{item.objective}</p>
                      </div>
                      <div className="activities">
                        <h4>Activities</h4>
                        <p>{item.activities}</p>
                      </div>
                      <div className="Membership">
                        <h4>Membership</h4>
                        <p>{item.Membership}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))
            //....................
          }
        </div>
      </section>
    </article>
  );
};

export default Clubs;
