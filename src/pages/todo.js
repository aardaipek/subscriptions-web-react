import Todo from "../components/Todo";
import SubscriptionList from "../components/SubscriptionList";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function TodoPage() {
  const [isloading, setIsLoading] = useState(true);
  const [loadedSubscriptions, setLoadedSubscriptions] = useState([]);

  useEffect( async () => {
    setIsLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'DCarter' })
  };
    fetch("http://localhost:1337/api/subscription/get_all",requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setIsLoading(false);
        setLoadedSubscriptions(data); 
      });
  }, []);

  if (isloading) {
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  }

  if (loadedSubscriptions && !isloading) {
    return <SubscriptionList subscriptions={loadedSubscriptions }/>
    
  }
}

export default TodoPage;
