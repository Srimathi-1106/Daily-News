import React, { useState, useEffect } from 'react';

const Headline = () => {
    const [headlineNews, setHeadlineNews] = useState([]);

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0a873ee982d84f158883db1639e767ec`);
                const data = await response.json();
                console.log('Fetched headlines:', data); // Log fetched data
                setHeadlineNews(data.articles);
            } catch (error) {
                console.error('Error fetching headlines:', error);
            }
        };

        fetchHeadlines();
    }, []);

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {headlineNews && headlineNews.map((news, index) => (
                    news.urlToImage && news.urlToImage.trim() !== '' ? (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={news.urlToImage} className="d-block w-100" alt={news.title} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{news.title}</h5>
                                <p>{news.description}</p>
                                <a href={news.url} className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Headline;
