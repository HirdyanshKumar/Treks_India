import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedTreks from "@/components/FeaturedTreks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedTreks />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}
