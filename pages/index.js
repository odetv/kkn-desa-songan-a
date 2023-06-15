import Head from "../components/Head";
import Layout from "../components/Layout/Layout";
import Dashboard from "../components/Dashboard";
import ProfilDesa from "../components/ProfilDesa";
import ProgramKKN from "../components/ProgramKKN";
import Blog from "../components/Blog";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head title='KKN Desa Songan A Undiksha' />
      <Layout>
        <Dashboard />
        <ProfilDesa />
        <ProgramKKN />
        <Blog />
        <About />
      </Layout>
    </>
  );
}
