"use client";
import React, { useState } from "react";
import FormInput from "../FormInput";
import Button from "../Button";
import Image from "next/image";

const ThalaForm = () => {
  //value="3fe0e64c-1fd4-4e02-afb7-5476880638a2"
  const [thalaInput, setThalaInput] = useState<string | undefined>("MsDhoni");
  const [isThalaValue, setThalaValue] = useState<boolean | false>(false);

  const handleThalaInput = (e: any) => {
    e.preventDefault();
    console.log(thalaInput);
    if (
      thalaInput?.length == 7 ||
      thalaInput?.includes("7" || thalaInput === "7")
    ) {
      setThalaValue(true);
    } else {
      setThalaValue(false);
    }
  };
  return (
    <div title="Thala Form">
      <div className="flex max-w-7xl px-6 lg:px-8">
        <div className="flex-auto mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Welcome to THALA World!!
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Thala is a former Indian cricketer who captained the national team
              in all formats. He is widely regarded as one of the greatest
              wicket-keeper-batsmen and finishers in cricket history. He led
              India to win the 2007 T20 World Cup, the 2011 ODI World Cup, and
              the 2013 Champions Trophy
            </p>
          </div>
          <div className="mt-6 flex  items-center justify-center max-w-md gap-x-4">
            <FormInput
              label="Enter something"
              type="text"
              labelProps={{ htmlFor: "Thala Input" }}
              value={thalaInput !== undefined ? thalaInput : ""}
              id="thala-text"
              placeholder="ThalaMS"
              onChange={(e) => setThalaInput(e.target.value)}
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              required
            />
            <Button
              type="submit"
              className="mt-6 flex-auto rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              onClick={handleThalaInput}
            >
              Submit
            </Button>
          </div>
        </div>

        {isThalaValue && (
          <>
            <div className="flex-auto relative md:w-96 md:h-96 mx-auto">
              <div>
                <Image
                  src="/images/thala.jpg"
                  fill
                  className="object-contain"
                  alt="illustration"
                />
              </div>
              <div className="relative">
                <p>You Gussed it right, Thala for a reason 💖</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="pt-5"></div>
    </div>
  );
};

export default ThalaForm;
