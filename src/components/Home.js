import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import Headline from './Headline';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNews, setFilteredNews] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a873ee982d84f158883db1639e767ec");
                const data = await response.json();
                setNews(data.articles);
                setFilteredNews(data.articles); // Initialize filtered news with all articles
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Filter news based on search query
        const filtered = news.filter((article) =>
            article.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredNews(filtered);
    };

    return (
        <>
            <div className="container">
                <h1 className="mt-5 mb-4">Headline News</h1>
                <Headline />
            </div>

            <header className="bg-primary text-white text-center py-4">
                <div className="container">
                    <h1>Welcome to My News App</h1>
                    <p>Your daily source of the latest news in business, technology, and more.</p>
                </div>
            </header>

            <main className="container my-5">
                <section className="intro text-center mb-5">
                    <div className="container">
                        <h2>Stay Informed</h2>
                        <p>
                            Our goal is to provide you with up-to-date news and information from around the world.
                            Whether you're interested in business, technology, sports, or entertainment, we've got you covered.
                        </p>
                    </div>
                </section>

                <section className="search-section mb-4">
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search news..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p>&copy; 2024 My News App. All rights reserved.</p>
                    <p>
                        Follow us on
                        <a href="https://twitter.com" className="text-white ml-2">Twitter</a>,
                        <a href="https://facebook.com" className="text-white ml-2">Facebook</a>, and
                        <a href="https://instagram.com" className="text-white ml-2">Instagram</a>.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Home;
