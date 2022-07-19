import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import dataJSON from "./utils/data.json";
import Row from "./components/Row/Row";
import Footer from "./components/Footer/Footer";
import { IoMdClose } from "react-icons/io";

const App = () => {
  const [filterCategory, setFilterCategory] = useState([]);
  const [tempClose, setTempClose] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [changeHeader, setChangeHeader] = useState(false);

  const onresize = () => {
    let width = document.body.clientWidth;

    if (width <= 776) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  window.addEventListener("resize", onresize);

  const removeFilter = (data) => {
    setTempClose(false);

    setFilterCategory((prev) => prev.filter((d) => d !== data));

    setTimeout(() => {
      setTempClose(true);
    }, 100);
  };

  const filteredDataJSON = () => {
    let tempList = dataJSON;
    if (filterCategory.length > 0) {
      const newData = tempList.filter((d) => {
        return filterCategory.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });

      setFilteredData(newData);
    } else {
      setFilteredData(tempList);
    }
  };

  useEffect(() => {
    filteredDataJSON();
  }, [filterCategory]);

  return (
    <div className={styles.app_container}>
      <div className={styles.top_header}>
        {changeHeader ? (
          <img src="./images/bg-header-mobile.svg" />
        ) : (
          <img src="./images/bg-header-desktop.svg" />
        )}
      </div>

      <div className={styles.inner_app_container}>
        {filterCategory.length > 0 && (
          <div className={styles.filter_container}>
            <div className={styles.left_filter}>
              {tempClose ? (
                filterCategory.map((data, i) => {
                  return (
                    <div className={styles.filter_content} key={i}>
                      <p>{data}</p>
                      <button
                        onClick={() => {
                          removeFilter(data);
                        }}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  );
                })
              ) : (
                <p className={styles.loading_filter_p}>...</p>
              )}
            </div>
            <div className={styles.right_filter}>
              <p
                className={styles.close_filter}
                onClick={() => {
                  setFilterCategory([]);
                }}
              >
                Clear
              </p>
            </div>
          </div>
        )}

        {filteredData.length > 0 &&
          filteredData.map((data, i) => {
            return (
              <Row
                data={data}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                setTempClose={setTempClose}
                key={i}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
