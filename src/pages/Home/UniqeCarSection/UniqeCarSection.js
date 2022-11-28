import React from 'react';



const UniqeCarSection = () => {
    
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt="Car"
                                src="https://images.unsplash.com/photo-1568559598349-dbf322d50a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNhciUyMGJhY2tncm91bmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                            Advertising Tips and Tricks
                            </h2>

                            <p className="mt-4 text-gray-600">
                                When putting your car on the market, you'll want to decide whether to trade it in at a dealership, sell it yourself, or get an instant cash offer. The value of your car will vary depending on which method you use. There are pros and cons to each option, such as the speed of sale, costs, and taxes.

                                Service records. These days, regular oil changes signal good upkeep to any potential buyer that the car comes well cared for. These will be great to show any interested buyer. No receipts? Check with your dealer, regular mechanic, or oil change center and ask for a statement that summarizes your visits. Having this information reassures a buyer that the car you're selling is in good shape. These documents can help you obtain or negotiate a higher price whether selling it to an individual or a dealer.

                                The selling process begins with collecting your car's paperwork. Do not overlook this crucial step. It's important to tackle this before you offer to sell your car. You'll be glad you did.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default UniqeCarSection;