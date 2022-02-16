import React from 'react';
import { Redirect, useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostForm from '../../components/PostForm';
import PostCard from '../../components/PostCard';

import { QUERY_ME, QUERY_USER } from '../../utils/queries';

import Auth from '../../utils/auth';



const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};

    

  return (
    <div>Profile</div>
  )
}

export default Profile