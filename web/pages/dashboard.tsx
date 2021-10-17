import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import { Button, Container } from "@mui/material";

import AccessDenied from "../components/AccessDenied";
import Layout from "../components/Layout";

import { postData } from "../shared/helper";

export default function Dashboard() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  const redirectToCustomerPortal = async () => {
    const { url, error } = await postData({
      url: "/api/stripe/create-portal-link",
    });
    if (error) {
      return alert(error.message);
    }
    window.location.assign(url);
  };

  // If session exists, display content
  return (
    <Layout>
      <Container maxWidth="md" component="main">
        <h1>Welcome</h1>
        <p>
          { content }
        </p>
        <Button onClick={redirectToCustomerPortal}>Open customer portal</Button>
      </Container>
    </Layout>
  );
}
