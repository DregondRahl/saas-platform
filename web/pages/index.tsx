import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Layout from "../components/Layout";

export default function Home({ products }: any) {
  return (
    <Layout>
      <Hero />
      <Pricing products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const products = [
    {
      title: "Free",
      price: "0",
      description: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
      buttonText: "Subscribe",
      buttonVariant: "outlined",
    },
    {
      title: "Pro",
      subheader: "Most popular",
      price: "15",
      description: [
        "20 users included",
        "10 GB of storage",
        "Help center access",
        "Priority email support",
      ],
      buttonText: "Subscribe",
      buttonVariant: "contained",
    },
    {
      title: "Enterprise",
      price: "30",
      description: [
        "50 users included",
        "30 GB of storage",
        "Help center access",
        "Phone & email support",
      ],
      buttonText: "Subscribe",
      buttonVariant: "outlined",
    },
  ];

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}
