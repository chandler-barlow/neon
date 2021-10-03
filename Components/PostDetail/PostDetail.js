import React from "react";
import styles from "../../styles/ComponentStyles/PostDetail.module.css";
import * as BiIcons from "react-icons/bi";
//import { GlobalContext } from "../../context/GlobalContext";
export function PostDetail(props) {
  //let { dispatch } = useContext(GlobalContext);
  /**
  const addStake = (id, amountToStake) => {
    dispatch({
      type: "INCREMENT_STAKE",
      payload: { postId: id, amount: amountToStake },
    });
  };
  */
  const { title, body, user, id, dateClosing, stake } = props.post;
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <div
        className={
          styles.username
        }>{`by ${user} expires in ${dateClosing}`}</div>
      <h1 className={styles.body}>{body}</h1>
      <div className={styles.footer}>
        <div className={styles.stakeBox} onClick={() => addStake(id, 100)}>
          <BiIcons.BiRocket className={styles.rocket} />
          <h1 className={styles.stake}>{stake}</h1>
        </div>
        <h1 className={styles.stake}>reply</h1>
      </div>
    </div>
  );
}
