import React, { useEffect, useState } from 'react';
import '../App.css';

const Cards = () => {
    const [myNews, setMyNews] = useState([]);
    
    const fetchData = async () => {
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a873ee982d84f158883db1639e767ec");
        let data = await response.json();
        setMyNews(data.articles);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleImageError = (e) => {
        e.target.onerror = null; // Prevents infinite loop in case the default image also fails to load
        e.target.src = 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg'; // Your default image URL
    }

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                {myNews && myNews.map((news, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" key={index}>
                        <div className="card" style={{ width: "18rem", height: "22rem" }}>
                            <img 
                                src={news.urlToImage || 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg'} 
                                className="card-img-top img-fluid" 
                                alt={news.title} 
                                onError={handleImageError} 
                                style={{height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body" style={{ maxHeight: "175px", overflowY: "auto"}}>
                                <h5 className="card-title">{news.title}</h5>
                                <a href={news.url} className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
