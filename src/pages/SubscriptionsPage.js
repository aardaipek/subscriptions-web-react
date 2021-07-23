import SubscriptionList from "../components/subscriptions/SubscriptionList";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import SubscriptionDetail from "../components/subscriptions/SubscriptionDetail";
import SkeletonCard from '../components/skeleton-loading/SkeletonCard';


function SubscriptionsPage() {
  const [isloading, setIsLoading] = useState(true);
  const [loadedSubscriptions, setLoadedSubscriptions] = useState([]);
  const [title, setTitle] = useState({});
  const [isDetailClicked, setDetailClicked] = useState(false);

  const openDetail = (title) => {
    setDetailClicked(true);
    setTitle(title);
  };
  

  useEffect(async () => {
    setIsLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "DCarter" }),
    };
    fetch("http://localhost:1337/api/subscription/get_all", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedSubscriptions(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setLoadedSubscriptions([]);
      });
  }, []);

  if (isloading) {
    return (
      <SkeletonCard></SkeletonCard>
    );
  }

  const offlineData = [
    {
      title: "Amazon Prime",
      payCycle: "01.01.2001",
      currency: "usd",
      total: "9.99",
      type: "movie,shopping",
      systemCode :"amazon_prime",
      yearly:false,
      color:'#146eb4'
    },
    {
      title: "Netflix",
      payCycle: "02.02.2001",
      currency: "tl",
      total: "19.99",
      type: "movie",
      systemCode:"netflix",
      yearly:false,
      color:'#e50914'
    },
    {
      title: "Spotify",
      payCycle: "03.03.2010",
      currency: "tl",
      total: "29.99",
      type: "music",
      systemCode : "spotify",
      yearly:false,
      color:'#1db954'
    },
    {
      title: "Storytel",
      payCycle: "04.03.2011",
      currency: "tl",
      total: "39.99",
      type: "book,entertainment",
      systemCode : "storytel",
      yearly:false,
      color:'#f97200'

    },
    {
      title: "Apple Music",
      payCycle: "05.03.2020",
      currency: "tl",
      total: "9.99",
      type: "music",
      systemCode : "apple_music",
      yearly:false,
      color:'#ff0e83'

    },
    {
      title: "Youtube Premium",
      payCycle: "05.03.2020",
      currency: "tl",
      total: "9.99",
      type: "video,entertainment",
      systemCode : "youtube_premium",
      yearly:false,
      color:'#ff0000'

    },
    {
      title: "Duolingo",
      payCycle: "07.03.2021",
      currency: "tl",
      total: "109.99",
      type: "learning,language",
      systemCode : "duolingo",
      yearly:true,
      color:'#7ac70c'

    },
  ];

  if (offlineData && !isloading) {
    if (offlineData.length > 0)
      return (
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={3}>
              <SubscriptionList subscriptions={offlineData} detail={openDetail} />
            </Col>
            <Col md={4}>
              {isDetailClicked && (
                <SubscriptionDetail record={title}></SubscriptionDetail>
              )}
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      );
    else
      return (
        <Container fluid>
          <h2>Add new subscription</h2>
        </Container>
      );
  }
}

export default SubscriptionsPage;
