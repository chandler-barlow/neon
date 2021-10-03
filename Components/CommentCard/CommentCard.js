import React from "react";
import styles from "../../styles/ComponentStyles/CommentCard.module.css";
import * as BiIcons from "react-icons/bi";
//import { GlobalContext } from "../../context/GlobalContext";
export function CommentCard(props) {
  //let { dispatch } = useContext(GlobalContext);
  /**
  const addStake = (id, amountToStake) => {
    dispatch({
      type: "INCREMENT_STAKE",
      payload: { postId: id, amount: amountToStake },
    });
  };
  */
  const { body, user, id, datePosted, points } = props.comment;
  return (
    <div className={styles.card}>
      <div className={styles.title}>{user}</div>
      <h1 className={styles.body}>{body}</h1>
      <div className={styles.footer}>
        <div className={styles.stakeBox} onClick={() => addStake(id, 100)}>
          <BiIcons.BiRocket className={styles.rocket} />
          <h1 className={styles.points}>{points}</h1>
        </div>
      </div>
    </div>
  );
}
