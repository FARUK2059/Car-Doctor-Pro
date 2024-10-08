import ServiceCard from "./ServiceCard/ServiceCard";

import { services } from '../../lib/ServiceData'



const Services = () => {

    // const { services } = await getServices();

    // if (services?.length <= 0) {
    //     return null;
    // }

    // Menual Inpute Data
    console.log(services);

    





    return (
        <div>
            <div className="text-slate-800 mb-24">
                <div className="text-center container mx-auto">
                    <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                    <h2 className="text-5xl">Our Service Area</h2>
                    <p>
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised <br /> words which do not look even slightly
                        believable.{" "}
                    </p>
                </div>
                <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {services?.length > 0 &&
                        services?.map((service) => (
                            <ServiceCard service={service} key={service._id} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Services;