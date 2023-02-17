import styles from "./Author.module.scss";

export default function Author() {
	return (
		<div className={styles.avatar}>
			<div className={styles["avatar__image"]}>
				<img
					src="https://img.freepik.com/free-photo/positive-plump-man-with-thick-beard-shares-great-news-social-networks-with-friend-being-cloud-nine-from-happiness-holds-modern-smartphone_273609-34625.jpg?w=1380&t=st=1676645288~exp=1676645888~hmac=9970e77cda201b5162010838b58bd4b03291bca3f47c1ec7ff2dcf89b7e6aab9"
					alt="Author"
				/>
			</div>
			<div className={styles["avatar__name"]}>Maya Unzip</div>
			<div className={styles["avatar__roll"]}>Frontend developer</div>
		</div>
	);
}
