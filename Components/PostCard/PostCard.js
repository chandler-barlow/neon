import React from "react";
import styles from "../../styles/ComponentStyles/PostCard.module.css";
import * as BiIcons from "react-icons/bi";
//import { GlobalContext } from "../../context/GlobalContext";
export function PostCard(props) {
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
      <h1 className={styles.body}>{body}</h1>
      <h1>stake</h1>
      <div>
        <BiIcons.BiRocket className={styles.rocket} />
      </div>

      <button onClick={() => addStake(id, 100)}>Add Stake</button>
    </div>
  );
}
