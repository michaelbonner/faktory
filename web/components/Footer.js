import Image from "next/image"
import Link from "next/link"
import React from "react"

function Footer() {
  return (
    <footer className="grid lg:grid-cols-3 gap-8 2xl:gap-24 gap-y-24 py-24 px-4 lg:px-14 text-medium-gray text-center lg:text-left bg-dark-gray">
      <div className="grid lg:grid-cols-3 gap-8 2xl:gap-12 items-start text-sm">
        <Link href="/">
          <a className="lg:col-span-1">
            <Image alt="Faktory logo" src="/images/faktory-gray.svg" height="80px" width="145px" />
          </a>
        </Link>
        <div className="lg:col-span-2">
          <p>
            702 West Porter Lane
            <br />
            Centerville, UT 84014
          </p>
          <p>
            <span className="italic">info@faktorymail.com</span>
            <br />
            Tel: 385.393.3357
          </p>
        </div>
      </div>
      <div className="text-center grid gap-12">
        <div className="flex justify-around max-w-xs grid-cols-3 mx-auto gap-8">
          <a href="https://www.facebook.com/FaktoryInc/">
            <Image src="/images/facebook.svg" alt="Facebook logo" width="40px" height="40px" />
          </a>
          <a href="https://www.instagram.com/faktory/">
            <Image src="/images/instagram.svg" alt="Instagram logo" width="40px" height="40px" />
          </a>
          <a href="https://www.linkedin.com/company/faktory-showroom/">
            <Image src="/images/linkedin.svg" alt="LinkedIn logo" width="40px" height="40px" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Faktory, Inc. All Rights Reserved.
        </p>
      </div>
      <div className="mx-auto w-full flex justify-around items-start max-w-sm font-semibold tracking-wider uppercase font-display">
        <div className="grid gap-y-4 items-start">
          <Link href="/work">
            <a className="block">Work</a>
          </Link>
          <Link href="/work">
            <a className="block">Case Studies</a>
          </Link>
          <Link href="/work">
            <a className="block">What We Do</a>
          </Link>
        </div>
        <div className="grid gap-y-4 items-start">
          <Link href="/work">
            <a className="block">Who We Are</a>
          </Link>
          <Link href="/work">
            <a className="block">Contact</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
