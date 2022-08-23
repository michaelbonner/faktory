import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

function Custom404({ config }) {
  return (
    <Layout config={config}>
      <NextSeo
        titleTemplate={`%s | ${config.title}`}
        title={`404 | Page not found`}
        description={`The page you are looking for does not exist.`}
      />
      <div
        className="bg-dark-gray text-center bg-cover no-repeat"
        style={{
          backgroundImage: `url("/images/texture-white.svg")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-white grid gap-4 items-end">
          <h1 className="text-[20vw] lg:text-[160px] 2xl:text-[200px] leading-[0.8] font-bold font-serif">
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ease: "easeInOut",
                delay: 0.2,
                duration: 0.8,
                type: "spring",
              }}
            >
              <span className="block">404</span>
            </motion.div>
          </h1>
          <p className="mt-8">The page you are looking for does not exist.</p>
          <p>Please use the navigation to find the page you are looking for.</p>
        </div>
      </div>
    </Layout>
  );
}

export default Custom404;
