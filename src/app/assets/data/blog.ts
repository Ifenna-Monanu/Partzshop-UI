export interface IBlog {
  id: string;
  date: string;
  minutes: string;
  title: string;
  overview: string;
  fullTextHtml: string;
  image?: string;
}

const Blogs: IBlog[] = [
  {
    id: "authentic-car-parts",
    image: "authentic-car-parts.jpg",
    date: "2024-02-14",
    minutes: "3",
    title: "How to Identify Authentic Car Parts from Fake.",
    overview:
      "Regular tyre rotation is a crucial aspect of vehicle maintenance that often gets overlooked.",
    fullTextHtml: `<p>
          Using authentic car parts is crucial for ensuring safety,
          performance, and longevity when maintaining your vehicle. However,
          the market is flooded with counterfeit parts that can jeopardize
          your vehicle's integrity and pose serious risks. So, how can you
          distinguish between genuine and fake car parts? We are here to
          share practical tips for identifying authentic car parts and
          avoiding counterfeit products.
        </p>
  
        <h2>Importance of Authentic Car Parts</h2>
  
        <p>
          Before dishing out tips, let's understand why using authentic car
          parts is paramount. Genuine parts are engineered to meet stringent
          quality standards set by manufacturers, ensuring compatibility,
          reliability, and optimal performance. On the other hand,
          counterfeit parts are often made from inferior materials and lack
          the precision engineering of genuine parts, leading to potential
          safety hazards, premature wear and tear, and compromised vehicle
          performance.{" "}
        </p>
  
        <h2>Tips for Identifying Authentic Car Parts</h2>
  
        <h3>1. Purchase from Reputable Suppliers:</h3>
  
        <p>
          Start by sourcing car parts from authorized dealerships, reputable
          auto parts stores, or certified online retailers. These
          establishments have established relationships with manufacturers
          and adhere to strict quality control measures, minimizing the risk
          of counterfeit products.
        </p>
  
        <h3>2. Check for Manufacturer Labels and Packaging:</h3>
  
        <p>
          Authentic car parts typically feature manufacturer labels, serial
          numbers, or holographic seals for verification. Inspect the
          packaging for signs of tampering, poor-quality printing, or
          misspelt brand names, as these are common indicators of
          counterfeit products.
        </p>
  
        <h3>3. Inspect the Quality of Materials:</h3>
  
        <p>
          Examine the construction and materials used in the car part for
          any signs of inferior quality or discrepancies. Genuine parts are
          often made from high-grade materials and exhibit superior
          craftsmanship, whereas counterfeit parts may appear flimsy, poorly
          finished, or mismatched in colour and texture.
        </p>
  
        <h3>4. Verify Product Authenticity:</h3>
  
        <p>
          Many mufacturers provide online tools or verification services
          that nsumers to authenticate their products using unique
          identification codes or serial numbers. Take advantage of these
          resources to confirm the authenticity of your car parts and ensure
          peace of mind.
        </p>
  
        <h3>5. Beware of Unbelievably Low Prices:</h3>
  
        <p>
          While everyone loves a good deal, extremely low prices should
          raise suspicion, especially regarding car parts. Counterfeiters
          often lure unsuspecting customers with rock-bottom prices, but
          remember, if the price seems too good to be true, it probably is.
          Invest in quality parts from trusted sources to avoid costly
          repairs or safety hazards down the road.
        </p>
  
        <h2>Conclusion</h2>
  
        <p>
          Identifying authentic car parts amidst a sea of counterfeits can
          be challenging. Still, by following these practical tips and being
          observant, you can safeguard your vehicle and yourself from
          potential risks. Remember, the safety and performance of your
          vehicle depend on the quality of the parts you choose, so
          prioritize authenticity and reliability when making purchasing
          decisions.
        </p>
        <p>
          At Partzshop, we are committed to providing our customers with
          genuine, high-quality car parts sourced from reputable
          manufacturers. With us, you can shop with confidence, knowing that
          your vehicle's integrity and performance are our top priorities.
        </p>
        <p>Stay informed, stay vigilant, and drive safely!</p>`,
  },
  {
    id: "tyre-rotation",
    image: "tyre-rotation.jpg",
    date: "2024-01-17",
    minutes: "3",
    // title: "Tyre Rotation: Your Ultimate Guide to Maximizing Tyre Lifespan",
    title: "How frequently should you rotate your tyres?",
    overview:
      "Regular tyre rotation is a crucial aspect of vehicle maintenance that often gets overlooked.",
    fullTextHtml: `
        <p>
            Regular tyre rotation is a crucial aspect of vehicle maintenance that often gets overlooked. Rotating your tyre extends their lifespan and ensures better handling, improved fuel efficiency, and enhanced safety. In this ultimate guide, we will explore everything you need to know about tyre rotation and how it can benefit your vehicle.
        </p>

        <h2>What is Tyre Rotation?</h2>

        <p>
            Tyre rotation involves periodically changing the position of each tyre on your vehicle to ensure even tread wear. This practice helps distribute wear and tear evenly across all four tyres, prolonging their life and maintaining optimal performance.
        </p>

        <h2>How Often Should You Rotate Your Tyres?</h2>

        <p>
            The frequency of tyre rotation depends on various factors, including vehicle type, driving habits, and road conditions. However, a general rule of thumb is to rotate your tyres every 5,000 to 7,500 miles. Always refer to your vehicle's owner's manual for specific recommendations.
        </p>

        <h2>Steps to Rotate Your Tyres</h2>

        <ol>
            <li>
                <b>Check Your Owner's Manual: </b>
                Before rotating your tyres, consult your vehicle's owner's manual for the manufacturer's recommended rotation pattern. Different vehicles may require different rotation patterns.
            </l1>
            <li>
                <b<Gather Necessary Tools: </b>
                You will need a jack, lug wrench, and jack stand to safely lift and support your vehicle during the tyre rotation.
            </li>
            <li>
                <b>Loosen the Lug Nuts: </b>
                Before lifting your vehicle, slightly loosen the lug nuts on each wheel. This will make it easier to remove the wheels once the car is lifted.
            </li>
            <li>
                <b>Lift the Vehicle: </b>
                Use the jack to lift your vehicle and secure it with jack stands. Ensure that the car is stable and supported correctly before proceeding.
            </li>
            <li>
                <b>Remove the tyres: </b>
                Carefully remove the lug nuts and remove the tyres. Follow the rotation pattern recommended for your vehicle.
            </li>
            <li>
                <b>Reinstall the tyres: </b>
                Place the tyres in their new positions and hand-tighten the lug nuts. Once all tyres are in place, lower the vehicle and tighten the lug nuts to the manufacturer's specified torque.
            </li>
        </ol>

        <h2>Benefits of Regular Tire Rotation</h2>

        <ol>
            <li>
                <b>Improved Traction: </b>
                Evenly worn tyres provide better traction and handling, especially in adverse weather conditions.
            </li>
            <li>
                <b>Extended Tyre Lifespan: </b>
                Regularly rotating your tyres ensures even wear, which can significantly extend their lifespan.
            </li>
            <li>
                <b>Enhanced Fuel Efficiency: </b>
                Properly maintained tyres reduce rolling resistance, improving fuel efficiency and reducing fuel costs.
            </li>
            <li>
                <b>Increased Safety: </b>
                Regular tyre rotation helps maintain optimal tyre performance, reducing the risk of blowouts and other tire-related issues.
            </li>
        </ol>

        <p>
            Tyre rotation is a simple yet effective way to maintain your vehicle's performance and safety. Following the recommended rotation schedule and pattern, you can enjoy a smoother ride, better handling, and longer-lasting tyres.
            <br/>
            At Partzshop, we offer a wide range of high-quality tyres and expert advice to help you keep your vehicle in top condition. Visit our store today to learn more about our products and services.
        </p>`,
  },
  {
    id: "everything-pms-engines",
    image: "everything-pms-engines.jpg",
    date: "2024-01-17",
    minutes: "3",
    title: "Everything You Need to Know About PMS Engines",
    overview:
      "Preventive Maintenance Service (PMS) keeps your vehicle running smoothly and efficiently.",
    fullTextHtml: `
      <p>
        Preventive Maintenance Service (PMS) keeps your vehicle running smoothly and efficiently. This blog will demystify PMS engines, explain their role, and highlight their importance in car maintenance.
      </p>

      <h2>What is a PMS Engine?</h2>

      <p>
        PMS stands for Preventive Maintenance Service, a routine service that inspects, adjusts, and replaces various components of your vehicle's engine to ensure it operates at peak performance. PMS is designed to prevent potential issues before they become serious problems, thereby extending the life of your engine and improving its overall performance.
      </p>

      <h2>Key Components of a PMS Engine Service</h2>
      
      <ol>
        <li>
          <b>Fluid Checks and Replacements: </b>
          Regularly checking and replacing engine oil, coolant, brake fluid, and transmission fluid is essential for maintaining optimal engine performance and preventing wear and tear.
        </li>
        <li>
          <b>Filter Replacements: </b>
          Replacing air, oil, and fuel filters ensures that your engine receives clean air and fuel, which is vital for efficient combustion and performance.
        </li>
        <li>
          <b>Inspection of Key Components: </b>
          A thorough PMS service includes inspecting major engine components such as spark plugs, belts, hoses, and the battery to identify signs of wear or damage.
        </li>
        <li>
          <b>Tuning and Adjustments: </b>
          Fine-tuning the engine's timing, adjusting the idle speed, and calibrating the fuel injection system help optimize engine performance and efficiency.
        </li>
      </ol>

      <h2>Benefits of Regular PMS Engine Service</h2>
      
      <ol>
        <li>
          <b>Improved Engine Performance: </b>
          Regular PMS ensures your engine operates at its best, delivering smooth and efficient performance.
        </li>
        <li>
          <b>Enhanced Fuel Efficiency: </b>
          A well-maintained engine consumes fuel more efficiently, reducing fuel costs and environmental impact.
        </li>
        <li>
          <b>Extended Engine Life: </b>
          Preventive maintenance helps identify and address potential issues early, prolonging the life of your engine and preventing costly repairs.
        </li>
        <li>
          <b>Increased Reliability: </b>
          Regular PMS reduces the risk of unexpected breakdowns and ensures your vehicle is always ready for the road.
        </li>
      </ol>

      <h2>Determining the Ideal PMS Interval</h2>

      <p>
        The ideal PMS interval depends on vehicle age, mileage, and manufacturer recommendations. As a general guideline, most vehicles benefit from a PMS service every 5,000 to 10,000 miles.
      </p>

      <p>
        Understanding and adhering to a regular PMS schedule is essential for maintaining your vehicle's engine health and performance. Investing in preventive maintenance allows you to enjoy a reliable and efficient driving experience while avoiding costly repairs.
        <br/>
        At Partzshop, we offer expert preventive maintenance services to keep your vehicle in top condition. Visit our store to schedule your following PMS and experience the benefits of a well-maintained engine.
      </p>
    `,
  },
];

export function GetBlog(id: string): IBlog | null {
  return Blogs.find((blog) => blog.id === id) ?? null;
}

export function GetAllBlogs(): IBlog[] | [] {
  return Blogs;
}
