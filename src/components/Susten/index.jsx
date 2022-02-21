import React, { useEffect, useRef, useState } from "react";
import styles from './styled.module.scss';



export default function Susten() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  
  return (
    <>
    <div className={styles.collection}>
      <h3>Neviton</h3>
    </div>
    </>
  )
}