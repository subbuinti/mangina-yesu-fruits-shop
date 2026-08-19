"use client";
import Link from "next/link";
import { Phone, Leaf } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const te = language === "te";
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          <span className="brandMark"><Leaf size={20}/></span>
          <span>Fresh Basket <b>Hyderabad</b></span>
        </Link>
        <nav className="desktopNav">
          <a href="/#fruits">{te ? "పండ్లు" : "Fruits"}</a>
          <a href="/#about">{te ? "మా గురించి" : "About Us"}</a>
          <a href="/#contact">{te ? "సంప్రదించండి" : "Contact"}</a>
        </nav>
        <div className="headerRight">
          <div className="languageSwitch" aria-label="Language selector">
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>English</button>
            <span>|</span>
            <button className={language === "te" ? "active" : ""} onClick={() => setLanguage("te")}>తెలుగు</button>
          </div>
          <a className="callButton" href="tel:+919999999999">
            <Phone size={17}/><span>{te ? "కాల్ చేయండి" : "Call"}</span>
          </a>
        </div>
      </div>
    </header>
  );
}