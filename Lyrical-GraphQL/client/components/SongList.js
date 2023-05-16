import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';
import gql from 'graphql-tag';

const SongList = ({ data, mutate }) => {
  const { loading, songs } = data;
  if (loading) return <div>...Loading</div>;

  const onSongDelete = (id) => {
    mutate({
      variables: {
        id,
      },
    });
  };

  return (
    <div>
      <ul className="collection">
        {songs &&
          songs.length > 0 &&
          songs.map(({ id, title }) => (
            <li className="collection-item" key={id}>
              {title}
              <i
                className="material-icons right btn-small "
                onClick={() => onSongDelete(id)}
              >
                delete
              </i>
            </li>
          ))}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
