"use client";
import Link from "next/link";
import { ChevronRight, Phone, Leaf, Truck } from "lucide-react";
import Header from "./components/Header";
import { useLanguage } from "./components/LanguageProvider";

const fruits = [
  {id:"apple",en:"Apple",te:"ఆపిల్",image:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=85"},
  {id:"banana",en:"Banana",te:"అరటిపండు",image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85"},
  {id:"orange",en:"Orange",te:"నారింజ",image:"https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=85"},
  {id:"grapes",en:"Grapes",te:"ద్రాక్ష",image:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=900&q=85"},
  {id:"pomegranate",en:"Pomegranate",te:"దానిమ్మ",image:"https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=900&q=85"},
  {id:"watermelon",en:"Watermelon",te:"పుచ్చకాయ",image:"https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=85"},
  {id:"papaya",en:"Papaya",te:"బొప్పాయి",image:"https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=900&q=85"},
  {id:"pineapple",en:"Pineapple",te:"అనాసపండు",image:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=85"},
  {id:"guava",en:"Guava",te:"జామపండు",image:"https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=900&q=85"},
  {id:"mango",en:"Mango",te:"మామిడి",image:"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=85"},
  {id:"muskmelon",en:"Muskmelon",te:"ఖర్బూజ",image:"https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=900&q=85"},
  {id:"sapota",en:"Sapota",te:"సపోటా",image:"https://images.unsplash.com/photo-1605027990121-cbae9c7c9b8d?auto=format&fit=crop&w=900&q=85"}
];

export default function Home() {
  const {language}=useLanguage();
  const te=language==="te";
  return <main>
    <Header/>
    <section className="hero"><div className="container heroGrid">
      <div>
        <span className="eyebrow">{te?"తాజా • నాణ్యత • నమ్మకం":"Fresh • Quality • Trusted"}</span>
        <h1>{te?<>ప్రతిరోజూ <span>తాజా పండ్లు.</span></>:<>Fresh fruits for <span>every day.</span></>}</h1>
        <p>{te?"హైదరాబాద్‌లోని కుటుంబాల కోసం నమ్మకమైన వనరుల నుండి ఎంపిక చేసిన తాజా పండ్లు.":"Hand-picked fresh fruits from trusted sources, serving families across Hyderabad."}</p>
        <div className="heroActions">
          <a href="#fruits" className="primaryButton">{te?"పండ్లను చూడండి":"Explore Fruits"} <ChevronRight size={18}/></a>
          <a href="tel:+919999999999" className="secondaryButton"><Phone size={18}/> {te?"షాప్‌కు కాల్":"Call Shop"}</a>
        </div>
        <div className="trustRow"><div><Leaf size={18}/> {te?"తాజాగా ఎంపిక చేసినవి":"Freshly selected"}</div><div><Truck size={18}/> {te?"హైదరాబాద్ సేవ":"Hyderabad service"}</div></div>
      </div>
      <div className="heroVisual"><img src={fruits[9].image} alt="Mangoes"/><div className="floatingCard"><strong>{te?"ప్రతిరోజూ తాజా":"Fresh every day"}</strong><span>{te?"మీ నమ్మకమైన నాణ్యమైన పండ్లు":"Quality fruits you can trust"}</span></div></div>
    </div></section>

    <section id="fruits" className="section"><div className="container">
      <div className="sectionHead"><div><span className="eyebrow">{te?"మా సేకరణ":"Our collection"}</span><h2>{te?"తాజా పండ్లు":"Fresh fruits"}</h2></div><p>{te?"మా రోజువారీ తాజా పండ్లను చూడండి. వివరాల కోసం ఏదైనా పండుపై క్లిక్ చేయండి.":"Browse our everyday fruit selection. Tap any fruit for details."}</p></div>
      <div className="fruitGrid">{fruits.map(f=><Link href={"/fruits/"+f.id} className="fruitCard" key={f.id}><div className="fruitImage"><img src={f.image} alt={f.en}/></div><div className="fruitInfo"><div><h3>{te?f.te:f.en}</h3><span>{te?f.en:f.te}</span></div><ChevronRight size={19}/></div></Link>)}</div>
    </div></section>

    <section id="about" className="aboutSection"><div className="container aboutCard"><div><span className="eyebrow">{te?"ఎందుకు మమ్మల్ని ఎంచుకోవాలి":"Why choose us"}</span><h2>{te?"మీరు చూడగల తాజాదనం. మీరు నమ్మగల నాణ్యత.":"Freshness you can see. Quality you can trust."}</h2></div><p>{te?"మేము జాగ్రత్తగా ఎంపిక చేసిన పండ్లు మరియు మంచి స్థానిక సేవపై దృష్టి పెడతాము. అందుబాటులో ఉన్న పండ్ల వివరాల కోసం మాకు కాల్ చేయండి.":"We focus on carefully selected fruits and friendly local service. Call us to know today's availability."}</p></div></section>

    <section id="contact" className="contactSection"><div className="container contactCard"><div><span className="eyebrow">{te?"పండ్లు కావాలా?":"Need fruits?"}</span><h2>{te?"మా షాప్‌కు కాల్ చేయండి":"Call our shop"}</h2><p>{te?"అందుబాటు మరియు ఆర్డర్ల కోసం మమ్మల్ని నేరుగా సంప్రదించండి.":"For availability and orders, contact us directly."}</p></div><a href="tel:+919999999999" className="primaryButton"><Phone size={18}/> +91 99999 99999</a></div></section>
    <footer><div className="container footer"><span>© 2026 Fresh Basket Hyderabad</span><span>{te?"తాజా పండ్లు • హైదరాబాద్":"Fresh fruits • Hyderabad"}</span></div></footer>
  </main>
}