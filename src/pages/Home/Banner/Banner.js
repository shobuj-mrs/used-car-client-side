import React from 'react';


const Banner = () => {
    return (
        <section
  className="relative bg-[url(https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhciUyMGJhY2tncm91bmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Let us Buy and Sale

        <strong className="block font-extrabold text-rose-700">
          Your Uses Car.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
      With the global chip shortages continuing, your dealership may not be receiving as many new cars as you'd like. This makes it increasingly difficult to reach sales targets. However, you can combat the shortage of new cars by shifting some of your focus to the used car market. If you sell more used cars (and more cars in general), you will be much more likely to receive higher allocation levels from your manufacturer.
      </p>
    </div>
  </div>
</section>

    );
};

export default Banner;