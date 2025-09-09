import { testValueType } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const StatsSection = () => {
  const [templateCount, setTemplateCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const maxTemplate = 400;
  const maxCustomer = 500000;

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    const templateIncrement = maxTemplate / totalFrames;
    const customerIncrement = maxCustomer / totalFrames;

    let currentFrame = 0;

    const counter = setInterval(() => {
      currentFrame++;

      setTemplateCount((prev) =>
        prev + templateIncrement > maxTemplate ? maxTemplate : prev + templateIncrement
      );

      setCustomerCount((prev) =>
        prev + customerIncrement > maxCustomer ? maxCustomer : prev + customerIncrement
      );

      if (currentFrame >= totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="bg-cover bg-center py-20 text-white text-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg')" }}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className=' grid w-[350px]'>
            <div className=' flex justify-start'>
          <h2 className="text-4xl font-bold">1MILLION +</h2>
          </div>
          <div className='flex justify-end mt-2'>
          <p className="text-lg">WEB PAGES CREATED BY USERS</p>
          </div>
        </div>
        <div className=' grid w-[300px]'>
            <div className=' flex justify-start'>
          <h2 className="text-4xl font-bold">{Math.round(templateCount)} +</h2>
          </div>
          <div className='flex justify-end mt-2'>
          <p className="text-lg">In-house designed templates</p>
          </div>
        </div>
        <div className=' grid w-[300px]'>
            <div className=' flex justify-start'>
          <h2 className="text-4xl font-bold">{(customerCount / 1000).toFixed(0)}K +</h2>
          </div>
          <div className='flex justify-end mt-2'>
          <p className="text-lg">WEB PAGES CREATED BY USERS</p>
          </div>
        </div>
        {/* <div>
          <h2 className="text-4xl font-bold">{Math.round(templateCount)} +</h2>
          <p className="text-lg">IN-HOUSE DESIGNED TEMPLATES</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">{(customerCount / 1000).toFixed(0)}K +</h2>
          <p className="text-lg">CUSTOMERS SERVED AROUND THE WORLD</p>
        </div> */}
      </div>
    </div>
  );
};

export default StatsSection;
