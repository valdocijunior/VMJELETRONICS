import React from "react";
import HeroSection from "./HeroSection";

import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Comprar Iphone 14 Pro"
        subtitle="Tenha uma incrível experiência com o poder inimaginável de uma das melhores câmeras desta geração."
        link="/product/653f1cfc9d852468a90bbbe0"
        image={iphone}
      />

      <FeaturedProducts />

      <HeroSection
        title="Monte seu setup"
        subtitle="Você pode adicionar um ''Display Studio'' e efetuar combinações de cores, desde os acessórios até a cor de sua mochila, após configurar o seu Mac Mini!"
        link="/product/653f1cfc9d852468a90bbbe8"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
