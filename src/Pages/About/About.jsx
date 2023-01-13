import React from 'react'
import { SmallThumbnail } from '../../Components/SmallThumbnail/SmallThumbnail'

export const About = () => {
  return (
    <div className='text-center'>
      <SmallThumbnail img={"./img/landing-carpet.jpg"}/>

      <div className="container mt-5 mb-5">
        <h1>O nama</h1>
        <hr className="mb-5" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque quisquam tempore delectus commodi neque natus ipsum placeat officiis alias eveniet voluptate quos architecto impedit minus recusandae modi, repellendus dolorum corporis, error assumenda dignissimos quibusdam! Est autem eius consectetur sequi reiciendis culpa cum asperiores error praesentium, consequuntur totam quas rem officiis quo aliquid sint nesciunt suscipit? Molestias adipisci dolor ratione, quod corrupti iusto eaque sequi tenetur repellat cupiditate placeat aliquid, unde fuga fugiat voluptatem, totam nisi? Quas in sit tempore.</p>
       </div>
       <img className="img-fluid my-5" src="./img/lines.png" alt="lines-img" id="linesImg" />
    </div>
  )
}
