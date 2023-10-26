import React from "react";
import { paths } from "../../constants/paths";
import { MenuButton } from "../../components/MenuButton";
import styles from './index.module.css'

export const HomePage: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <h1>Welcome to backgammon!</h1>
      <MenuButton title="Create new game" path={paths.CREATE_GAME} />
      <MenuButton title="Join game" path={paths.JOIN_GAME} />
    </div>
  )
}