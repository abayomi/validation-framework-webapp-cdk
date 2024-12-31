"use client";
import { useParams } from "react-router-dom";
import withAuth from "../withAuth";

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1 className="title is-1">This is the Profile Page</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
          <p>{name}</p>
        </div>
        <div className="message-body">
          Test Profile Page
        </div>
      </article>
    </div>
  );
};

export default withAuth(Profile);