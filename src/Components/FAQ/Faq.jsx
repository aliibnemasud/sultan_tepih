import React from 'react'

export const Faq = () => {
  return (
    <div className="container-fluid text-center">
        <h2>Frequently Asked Questions</h2>
        
        <div className="accordion accordion-flush w-75 align-content-center d-inline-block " id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <span className="h4"> How Can I Purchase</span>
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, atque ut fuga laudantium vitae corporis, nemo cum rerum, officiis est suscipit temporibus? Qui sunt voluptate mollitia quo voluptas natus repudiandae?</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <span className="h4"> How Can I Choose The Best Carpet</span>
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero molestiae eaque, doloribus cumque recusandae eius perferendis assumenda optio dicta deleniti, tempore ipsam nesciunt ab.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <span className="h4">What Are Some Delivery Options</span>
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis autem animi magni, natus dolores!</div>
              </div>
            </div>
        </div>
    </div>
  )
}
