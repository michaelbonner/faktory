import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import React, { useState } from "react";
import { classNames } from "../functions/classNames";
import { getPathFromSlug, slugParamToPath } from "../utils/urls";

const Header = ({ title = "Missing title", navItems }) => {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 lg:relative flex justify-between items-end bg-white shadow-lg px-4 lg:px-14 py-2 lg:py-5">
      <div className="w-24 lg:w-auto">
        <Transition
          appear={true}
          show={true}
          enter="relative transition-all duration-500"
          enterFrom="opacity-0 -bottom-2"
          enterTo="opacity-100 bottom-0"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Link href="/">
            <a title={title}>
              <Image
                alt="Faktory logo"
                src="/images/faktory-gold.svg"
                height="80px"
                width="145px"
              />
            </a>
          </Link>
        </Transition>
      </div>
      <div className="absolute lg:hidden top-0 right-0 z-20">
        <button
          className="p-5"
          onClick={() => {
            setMobileNavOpen(!mobileNavOpen);
          }}
          type="button"
        >
          {mobileNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <Transition
        appear={true}
        show={true}
        enter="relative transition-all duration-500"
        enterFrom="opacity-0 -bottom-2"
        enterTo="opacity-100 bottom-0"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <nav
          className={classNames(
            `bg-dark-gray bg-opacity-95 z-10 items-center justify-center text-center fixed inset-0 gap-6 font-medium text-light-gray font-display text-3xl lg:text-xl uppercase transition-all duration-300`,
            `lg:pt-0 lg:bg-transparent lg:relative lg:text-lg lg:flex lg:text-medium-gray`,
            mobileNavOpen
              ? `top-0 flex flex-col h-full pt-8 opacity-100`
              : `-top-[100vh] lg:top-0 h-0 lg:h-auto overflow-hidden opacity-0 lg:opacity-100`
          )}
        >
          {navItems.map((item) => {
            const { slug, title, _id } = item;
            const isActive =
              slugParamToPath(router.query.slug) === slug.current;
            return (
              <Link key={_id} href={getPathFromSlug(slug.current)}>
                <a
                  data-is-active={isActive ? "true" : "false"}
                  aria-current={isActive}
                  onClick={() => {
                    setMobileNavOpen(!mobileNavOpen);
                  }}
                  className="block py-4 lg:py-0 px-1 lg:inline-block border-t lg:border-t-0 border-b-2 border-transparent hover:border-b-gold hover:text-gold transition-all tracking-wide"
                >
                  {title}
                </a>
              </Link>
            );
          })}
        </nav>
      </Transition>
    </header>
  );
};

export default withRouter(Header);
