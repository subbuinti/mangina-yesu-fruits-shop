"use client";
import Link from "next/link";
import {ArrowLeft,Phone,MapPin,Leaf} from "lucide-react";
import Header from "./Header";
import {useLanguage} from "./LanguageProvider";

export default function FruitDetail({fruit:f}){
 const {language}=useLanguage(); const te=language==="te";
 return <main><Header/><section className="detailSection"><div className="container">
 <Link href="/" className="backLink"><ArrowLeft size={17}/> {te?"పండ్లకు తిరిగి వెళ్లండి":"Back to fruits"}</Link>
 <div className="detailGrid"><div className="detailImage"><img src={f[4]} alt={f[0]}/></div>
 <div className="detailCopy"><span className="eyebrow">{te?"తాజా పండు":"Fresh fruit"}</span>
 <h1>{te?f[1]:f[0]}</h1><div className="teluguName">{te?f[0]:f[1]}</div>
 <p>{te?f[3]:f[2]}</p>
 <div className="availability"><Leaf size={18}/><div><strong>{te?"తాజా ఎంపిక":"Fresh selection"}</strong><span>{te?"రోజువారీ లభ్యత మారవచ్చు.":"Availability may vary by day."}</span></div></div>
 <a href="tel:+919999999999" className="primaryButton large"><Phone size={19}/> {te?"కాల్ చేయండి":"Call"} +91 99999 99999</a>
 <div className="location"><MapPin size={18}/> {te?"హైదరాబాద్, తెలంగాణ":"Hyderabad, Telangana"}</div>
 </div></div></div></section></main>
}