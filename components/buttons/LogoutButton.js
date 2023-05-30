import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { GameContext } from "../providers/GameProvider";

const LogoutButton = () => {
  const gameContext = useContext(GameContext);
  const { user, setUser } = gameContext;

  const { signOut } = useAuth();

  const onClickLogout = () => {
    if (confirm(`${user}さん ログアウトしますか？`)) {
      setUser("ゲスト");
      signOut();
    }
  };
  return <button onClick={onClickLogout}>Logout</button>;
};

export default LogoutButton;
