import { Coin as CoinProps } from "../../interfaces/Coin.d";
import Link from "next/link";
import styles from "./Coin.module.css";

export const Coin = ({
  name,
  symbol,
  current_price,
  market_cap,
  total_volume,
}: CoinProps) => {
  return (
    <div className={styles.coin}>
      <div className={styles.title}>
        <Link href="/">
          <a>{name}</a>
        </Link>
        <p>
          <i>{symbol}</i>
        </p>
      </div>
      <ul className={styles.list}>
        <li>Price: {current_price} eur</li>
        <li>Marketcap: {market_cap}</li>
        <li>Volume: {total_volume}</li>
      </ul>
    </div>
  );
};
