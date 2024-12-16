import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios';
import Loading from './Loading';
import LoadingText from './LoadingText';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [datas, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState(true);
  let [totalResult, setTotal] = useState();
  // console.log(props.apikey);
  

  // const onNextClick = async () => {
  //   // console.log(page);

  //   if (page < Math.ceil(totalResult / `${props.pageSize}`)) {
  //     // console.log("next")
  //     setLoading(true);
  //     setPage(page += 1)
  //     let result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`);
  //     if (result) {
  //       setData(result.data.articles);
  //       setLoading(false);
  //     }
  //   }
  //   else {

  //   }

  // }
  // const onPreviousClick = async () => {

  //   setPage(page -= 1)
  //   setLoading(true);
  //   let result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`);
  //   if (result) {
  //     setData(result.data.articles);
  //     setLoading(false);
  //   }
  // }
  useEffect(() => {
    document.title = `${(props.category).toUpperCase()} News`
    fetchData();
  }, []);

  const fetchData = async () => {
    // setLoading(true);
    props.setProgress(35)
    let result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`);
    props.setProgress(50)
    if (result) {
      props.setProgress(65)
      setData(result.data.articles);
      setTotal(result.data.totalResults)
      props.setProgress(70)
      //  console.log(result.data.totalResults);
      setLoading(false);
      props.setProgress(100)

    }
  }

  const fetchMoreData = async () => {
    setLoading(true);
    setPage(page += 1)
    let result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`);
    if (result) {
      setData(datas.concat(result.data.articles));
      setLoading(false);
    }
  }

  return (
    <>
      <h1
  className="text-center text-capitalize fw-bold"
  style={{
    margin: "20px 0px",
    marginTop: "85px",
    color: "#343a40", // Dark gray color for text
    fontSize: "2.5rem",
    letterSpacing: "2px", // Slight spacing between letters
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Subtle text shadow
    transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out", // Smooth hover animations
  }}
  onMouseEnter={(e) => (e.target.style.color = "#1768AC")}
  onMouseLeave={(e) => (e.target.style.color = "#343a40")}
>
  NewsChef - Top {props.category} Headlines
</h1>

      {/* {loading && <Loading />} */}
      <InfiniteScroll
        dataLength={datas.length}
        next={() => fetchMoreData()}
        hasMore={datas.length !== totalResult}
        loader={<Loading />}
        endMessage={
          <p className='text-center'>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">



          <div className="grid my-3 row row-gap-3 " >
            {
              datas.map((e, i) => {
                return (
                  <div className="col-md-4 col-sm-6 col-12" key={i}>
                    <NewsItem
                      title={e.title ? e.title : <LoadingText />}
                      description={e.description ? e.description : <LoadingText />}
                      image={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-available-illustration-download-in-svg-png-gif-file-formats--found-pack-science-technology-illustrations-7706458.png"
                      }
                      url={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="d-flex justify-content-between flex-wrap align-items-center my-3">
        <button
          type="button"
          onClick={onPreviousClick}
          disabled={page <= 1}
          className="btn btn-outline-dark mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            ></path>
          </svg>
          Previous
        </button>
        <button
          type="button"
          disabled={page >= Math.ceil(totalResult / `${props.pageSize}`)}
          onClick={onNextClick}
          className="btn btn-outline-dark mb-2"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            ></path>
          </svg>
        </button>
      </div> */}
    </>

  )
}

export default News
