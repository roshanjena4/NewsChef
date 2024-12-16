import React from 'react'

const NewsItem = (props) => {
  // console.log(props.title);

  return (
    <>
      <div className="card h-100 d-flex flex-column shadow-lg rounded overflow-hidden">
        <div className="d-flex justify-content-end position-absolute end-0">

          <span className="badge rounded-pill bg-danger text-light" style={{ left: '93%', zIndex: '1' }}>
            {props.source}
          </span>
        </div>
        <img src={props.image} className="card-img-top" alt="Loading"  style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }}  />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text text-primary"><small className="text-body-secondary fst-italic "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={'blue'} className="bi bi-pencil-square " viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"></path>
          </svg> By {props.author ? props.author : 'Unknown'} on {new Date(props.date).toGMTString()}</small></p>

          <div className="mt-auto">
            <a href={props.url} target="_blank" className="btn btn-dark text-uppercase fw-bold" 
            style={{
              borderRadius: '50px',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1768AC'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}>
              Read more..
            </a>
          </div>
        </div>
      </div>

{/* <div className="card h-100 d-flex flex-column shadow-lg rounded overflow-hidden">
  <div className="position-absolute top-0 end-0 ">
    <span className="badge rounded-pill bg-danger text-light">
      {props.source}
    </span>
  </div>
  <div className="card-img-container position-relative">
    <img 
      src={props.image} 
      className="card-img-top img-fluid" 
      alt="Article" 
      style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} 
    />
  </div>
  <div className="card-body d-flex flex-column p-3">
    <h5 className="card-title fw-bold text-truncate">{props.title}</h5>
    <p className="card-text text-muted">{props.description}</p>
    <p className="card-text text-primary">
      <small className="text-body-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="blue"
          className="bi bi-pencil-square me-1"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          ></path>
        </svg>
        By {props.author ? props.author : 'Unknown'} on{' '}
        {new Date(props.date).toGMTString()}
      </small>
    </p>
    <div className="mt-auto">
      <a 
        href={props.url} 
        target="_blank" 
        className="btn btn-dark text-uppercase fw-bold"
        style={{
          borderRadius: '50px',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8d210'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
      >
        Read More
      </a>
    </div>
  </div>
</div> */}

    </>
  )
}

export default NewsItem
