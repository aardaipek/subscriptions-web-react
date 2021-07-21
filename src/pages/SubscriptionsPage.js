import SubscriptionList from "../components/subscriptions/SubscriptionList";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import SubscriptionDetail from "../components/subscriptions/SubscriptionDetail";

import Card from "../components/ui-components/common/Card";

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
      <Container fluid>
        <p>Loading..</p>
      </Container>
    );
  }

  const offlineData = [
    {
      title: "Amazon Prime",
      payCycle: "01.01.2001",
      currency: "usd",
      total: "9.99",
      type: "movie,shopping",
    },
    {
      title: "Netflix",
      payCycle: "02.02.2001",
      currency: "tl",
      total: "19.99",
      type: "movie",
    },
    {
      title: "Spotify",
      payCycle: "03.03.2010",
      currency: "tl",
      total: "29.99",
      type: "music",
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
