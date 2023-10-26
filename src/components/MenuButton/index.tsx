import React from "react";
import styles from './index.module.css'

type Props = {
  title: string
  path: string
}
export const MenuButton: React.FC<Props> = ({ title, path }) => {

  return (
    <button className={styles.button}>{title}</button>
  )
}
