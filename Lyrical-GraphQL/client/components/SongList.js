import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const SongList = ({ data }) => {
  const { loading, songs } = data;

  if (loading) return <div>...Loading</div>;

  return (
    <ul className="collection">
      {songs &&
        songs.length > 0 &&
        songs.map((item) => (
          <li className="collection-item" key={item.id}>
            {item.title}
          </li>
        ))}
    </ul>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
