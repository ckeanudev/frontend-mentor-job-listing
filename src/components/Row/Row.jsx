import React from "react";
import styles from "./Row.module.css";
import { BsDot } from "react-icons/bs";

const Row = ({ data, filterCategory, setFilterCategory, setTempClose }) => {
  return (
    <div
      className={styles.row_container}
      style={
        data.featured
          ? { borderLeft: "6px solid #5ba4a4" }
          : { borderLeft: "6px solid #ffffff" }
      }
    >
      <div className={styles.row_left}>
        <div className={styles.inner_left_first}>
          <img src={data.logo} alt="" />
        </div>
        <div className={styles.inner_left_second}>
          <div className={styles.first_line}>
            <h3>{data.company}</h3>
            {data.new && <p className={styles.new_p}>NEW!</p>}

            {data.featured && <p className={styles.featured_p}>FEATURED</p>}
          </div>
          <div className={styles.second_line}>
            <h2>{data.position}</h2>
          </div>
          <div className={styles.third_line}>
            <p>{data.postedAt}</p>
            <BsDot style={{ margin: "0rem 0.4rem", color: "#7b8e8e" }} />
            <p>{data.contract}</p>
            <BsDot style={{ margin: "0rem 0.4rem", color: "#7b8e8e" }} />
            <p>{data.location}</p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------- */}
      <div className={styles.row_right}>
        <p
          className={styles.right_p}
          onClick={() => {
            setTempClose(false);
            let duplicate = false;
            for (let i = 0; i < filterCategory.length; i++) {
              if (filterCategory[i] === data.role) {
                duplicate = true;
              }
            }

            if (!duplicate) {
              setFilterCategory((oldArray) => [...oldArray, data.role]);
            }
            setTimeout(() => {
              setTempClose(true);
            }, 100);
          }}
        >
          {data.role}
        </p>
        <p
          className={styles.right_p}
          onClick={() => {
            setTempClose(false);

            let duplicate = false;
            for (let i = 0; i < filterCategory.length; i++) {
              if (filterCategory[i] === data.level) {
                duplicate = true;
              }
            }

            if (!duplicate) {
              setFilterCategory((oldArray) => [...oldArray, data.level]);
            }
            setTimeout(() => {
              setTempClose(true);
            }, 100);
          }}
        >
          {data.level}
        </p>
        {data.tools.map((datas, i) => {
          return (
            <p
              className={styles.right_p}
              key={i}
              onClick={() => {
                setTempClose(false);

                let duplicate = false;
                for (let i = 0; i < filterCategory.length; i++) {
                  if (filterCategory[i] === datas) {
                    duplicate = true;
                  }
                }

                if (!duplicate) {
                  setFilterCategory((oldArray) => [...oldArray, datas]);
                }

                setTimeout(() => {
                  setTempClose(true);
                }, 100);
              }}
            >
              {datas}
            </p>
          );
        })}
        {data.languages.map((datas, i) => {
          return (
            <p
              className={styles.right_p}
              key={i}
              onClick={() => {
                setTempClose(false);

                let duplicate = false;
                for (let i = 0; i < filterCategory.length; i++) {
                  if (filterCategory[i] === datas) {
                    duplicate = true;
                  }
                }

                if (!duplicate) {
                  setFilterCategory((oldArray) => [...oldArray, datas]);
                }

                setTimeout(() => {
                  setTempClose(true);
                }, 100);
              }}
            >
              {datas}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
