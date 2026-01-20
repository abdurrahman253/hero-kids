import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2
            className={`${fontBangla.className} text-4xl md:text-6xl font-extrabold leading-tight`}
          >
            আপনার শিশুকে দিন একটি{" "}
            <span className="text-primary">সুন্দর ভবিষ্যত</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Buy every toy with up to <span className="font-semibold">15% discount</span> and make learning more fun.
          </p>

          <div>
            <button className="btn btn-primary btn-outline px-8">
              Explore Products
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/hero.png"
            alt="Buy every toy with up to 15% discount"
            width={520}
            height={420}
            priority
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
