import Carousel from "@/components/carousel/carousel";

import Products from "@/app/features/product/products";

const HomePage = () => {
  return (
    <section className="w-11/12  m-auto">
      <Carousel />
      <Products />
    </section>
  );
};

export default HomePage;
