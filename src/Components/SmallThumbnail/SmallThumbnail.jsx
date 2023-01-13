import React from 'react'

export const SmallThumbnail = ({img}) => {
  return (
    <div className="mx-auto text-start overflow-hidden" id="thumbnailBg">
       <img src={img} alt="thumbnail-img" id="thumbnailImg" />
    </div>
  )
}
