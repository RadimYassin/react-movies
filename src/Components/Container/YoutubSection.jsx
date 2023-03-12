import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

export default function YoutubSection({data}) {

    const [key,setKey]=useState('')
    useEffect(()=>{
          if (data) {
            setKey(data?.key)
          }
        
    },[data])


    const opts = {
        height: '240',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }}

  return (
      <YouTube opts={opts}  videoId={key}/>
  )
}
