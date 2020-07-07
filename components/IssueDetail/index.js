import Link from 'next/link';

// Components
import ImagesGrid from "./ImagesGrid";

// Styles
import styles from './IssueDetail.module.scss';

function renderImages(data) {
  if (data.length === 0) {
    return <p>Elements not found</p>;
  }

  return data.map(item => (
    <ImagesGrid
      info={item}
      key={item.name}
    />
  ));
}

export default function IssueDetail({ issue }) {
  const {
    image,
    characterCredits,
    teamCredits,
    locationCredits
  } = issue;
  return (
    <>
      <div className={styles.backHome}>
          <Link href="/">
            <a>Back</a>
          </Link>
        </div>
      <div className={styles.detailIssue}>
        <div className={styles.detailInfo}>
          <div className={styles.detailBox}>
            <h3 className={styles.detailTitle}>Characters</h3>
            <div className={styles.detailImages}>
              {renderImages(characterCredits)}
            </div>
          </div>
          <div className={styles.detailBox}>
            <h3 className={styles.detailTitle}>Teams</h3>
            <div className={styles.detailImages}>
              {renderImages(teamCredits)}
            </div>
          </div>
          <div className={styles.detailBox}>
            <h3 className={styles.detailTitle}>Locations</h3>
            <div className={styles.detailImages}>
              {renderImages(locationCredits)}
            </div>
          </div>
        </div>

        <img className={styles.detailImage} src={image} alt="Issue detail"/>
      </div>
    </>
  );
}
