export const SeriesCard = ({currentElement}) =>{
    
  const {heading,heading_number,img_url,description} =currentElement;
    return(
      <>
    <div className="container-secton1">
        <div className="headline_container">
          <div className="small-box">
            <h1>{heading_number}</h1>
          </div>
          <div className="headline_info">
            <h3 className="h3">{heading}</h3>
          </div>
        </div>
  
        <div className="section_text">
        <li id="para-section-id-12">
            <div className="image">
            
              <img
                className="image-big"
                alt="Set a timer"
                loading="lazy"
                src={img_url}
              />
            </div>
  
            <div className="para-section">
              
              {description}
            </div>
            </li>
        </div>
      </div>
      
      </>
  
        );
};