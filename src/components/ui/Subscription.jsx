import { FaCheck } from "react-icons/fa";
import { pricingPlans } from "../../assets/data/PricingPlans";
import { ButtonOne } from "./Button";

export default function Subscription() {
  return (
    <div className="w-full md:pt-6 pt-12">
      <div className="lg:max-w-[140rem] pb-20 bg-white rounded-xl md:mt-0 m-10">
        <div className="bg-blue-950 rounded-t-xl md:mt-6 mt-12 text-white p-10 w-full">
          <h2 className="text-4xl font-semibold normal-case">Subscription options</h2>
        </div>
        <div className="flex items-start">
          <div className="mx-auto max-w-[120rem] px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="border bg-gray-50 pb-20 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className={`text-3xl ${plan.color} w-fit text-white m-auto uppercase rounded-full py-2 px-6 font-medium text-center mb-7`}>
                    {plan.name}
                  </h3>
                  <p className="text-6xl flex gap-1 items-start justify-center font-semibold text-center mb-3">
                    <small className="text-xl">$</small>
                    {plan.price}
                  </p>
                  <p className="text-gray-600 text-xl font-normal text-center mb-8">{plan.billing}</p>
                  <ButtonOne name="select plan" className="w-full h-[5.5rem] md:h-[4.5rem] !shadow-none flex items-center" />
                  <ul className="space-y-4 mt-10">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex gap-4 items-start">
                        <FaCheck className="text-xl" />
                        <span className="text-2xl normal-case">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
