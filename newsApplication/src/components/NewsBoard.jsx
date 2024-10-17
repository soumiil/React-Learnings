import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const [articles, setArticles] = useState([]);

    const fetchNews = () => {
        fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
                import.meta.env.VITE_API_KEY
            }`
        )
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setArticles(res.articles);
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div>
            <h2 className="text-center mt-4">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {articles.map((news, index) => {
                return (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        image={news.urlToImage}
                        url={news.url}
                    />
                );
            })}
        </div>
    );
};

export default NewsBoard;
