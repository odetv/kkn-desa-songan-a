import Head from "../components/Head";
import Layout from "../components/Layout/Layout";
import Dashboard from "../components/Dashboard";
import Desaku from "../components/Desaku";
import Program from "../components/Program";
import Blog from "../components/Blog";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head title='KKN Desa Songan A Undiksha' />
      <Layout>
        <Dashboard />
        <Desaku />
        <Program />
        <Blog />
        <About />
      </Layout>
    </>
  );
}
