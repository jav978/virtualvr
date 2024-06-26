import { testimonials } from "../constants";

const Testimonials = () => {
    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center my-10 md:my-20 dark:text-white">
                What people are Saying
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 px-3 py-3 flex"
                    >
                        <div className="dark:bg-neutral-900 rounded-md p-6 text-md border border-neutral-400 dark:border-neutral-800 font-thin dark:text-neutral-200    flex flex-col">
                            <p className="text-neutral-500 flex-1">{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img
                                    className="rounded-full w-12 h-12 mr-6 border border-neutral-300"
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                />
                                <div>
                                    <h6 className="font-semibold">
                                        {testimonial.user}
                                    </h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
