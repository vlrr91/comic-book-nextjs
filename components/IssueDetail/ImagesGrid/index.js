import styles from './ImagesGrid.module.scss';

export default function DetailBox({ info }) {
  return (
    <div className={styles.detailsInfo}>
      <img src={info.imageIcon} alt={info.name} />
      <p>{info.name}</p>
    </div>
  );
}
