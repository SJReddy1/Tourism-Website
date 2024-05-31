import styles from './PageBanner.module.css'

export const PageBanner = ({ title }) => {
	return (
		<div
			className={styles.banner}
		>
			<h2>{title}</h2>
		</div>
	)
}