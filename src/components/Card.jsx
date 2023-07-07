import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const apiImage = "https://image.tmdb.org/t/p/w500";
export default function Card({ content, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={apiImage + content.poster_path} alt="Movies" />
      </div>
      <div className={styles.container}>
        <h4 className={styles.content}>{content.title}</h4>
        <div className={styles.content}>
          <div className={styles.overview}>{content.overview}</div>
        </div>
        <div className={styles.content}>
          <h4>Release date</h4>
          {type === "movie" ? content?.release_date : content?.first_air_date}
        </div>
        <div className={styles.content}>
          <h4>Average rating</h4>
          {content.vote_average}
        </div>
      </div>
    </div>
  );
}
