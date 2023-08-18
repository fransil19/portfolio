import Image from "next/image";
import {
  PythonOriginal,
  SeleniumOriginal,
  ReactOriginal,
  NodejsOriginal,
  ReduxOriginal,
  ExpressOriginal,
  PostgresqlOriginal,
  NextjsLine,
  DjangoPlain,
  NestjsPlain,
} from "devicons-react";

const About = () => {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10 w-4/5" id="about">
      <div className="text-center">
        <h3 className="font-general-medium text-3xl sm:text-4xl mb-5 text-ternary-dark dark:text-gray-300">
          About me
        </h3>
        <div className="flex flex-col items-center md:flex-row gap-4 mb-10">
          <div className="w-3/6 h-64 md:w-2/4 lg:w-2/6 xl:w-3/12 relative ">
            <Image
              src="/profilepic.jpg"
              alt="profile picture"
              fill
              className="rounded-full border-none"
            />
          </div>
          <p className="font-general-medium text-xl sm:text-2xl mb-1 text-ternary-dark dark:text-gray-300 md:w-full text-left">
            I&apos;m from Lomas de Zamora, Buenos Aires, Argentina.
            <br />
            I&apos;ve 29 years old, and i currently working as a QA Manual &
            Automation for AFIP for 4+ years with Python and Selenium.
            <br />
            I also worked as a PHP developer for 1 year and I recently
            finished Soy Henry fullstack bootcamp to aquire more tools to
            develop apps with the PERN stack.
            <br />
            I wish to join a development team where i can get more experience and use all my experience as a QA to develop apps with the best quality.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-general-medium text-2xl sm:text-3xl mb-1 text-ternary-dark dark:text-gray-300 md:w-full">
            My stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-8 lg:gap-4 sm:gap-6">
            <PythonOriginal size={70} />
            <DjangoPlain size={70} />
            <SeleniumOriginal size={70} />
            <ReactOriginal size={70} />
            <NodejsOriginal size={70} />
            <ReduxOriginal size={70} />

            <ExpressOriginal
              size={70}
              color="red"
              className="dark:fill-white"
            />

            <PostgresqlOriginal size={70} />
            <NextjsLine size={70} />
            <NestjsPlain size={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
