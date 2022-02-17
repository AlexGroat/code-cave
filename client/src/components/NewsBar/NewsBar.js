import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_NEWS } from '../../utils/queries';

const NewsBar = () => {
  const { loading, data } = useQuery(GET_NEWS);
  console.log(data)


  return (
    <div>
     
    </div>
  )
}

export default NewsBar