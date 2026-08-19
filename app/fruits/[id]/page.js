import Link from "next/link";
import {notFound} from "next/navigation";
import FruitDetail from "../../components/FruitDetail";

const data={
apple:["Apple","ఆపిల్","Crisp, juicy and naturally refreshing apples selected for everyday snacking.","స్ఫటికంలా తాజా మరియు రసభరితమైన ఆపిల్స్.","https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=90"],
banana:["Banana","అరటిపండు","Naturally sweet and convenient bananas, perfect for breakfast and snacks.","సహజంగా తీపిగా ఉండే అరటిపండ్లు.","https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1200&q=90"],
orange:["Orange","నారింజ","Juicy, refreshing oranges with a bright citrus flavour.","రసభరితమైన మరియు రిఫ్రెషింగ్ నారింజ పండ్లు.","https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=90"],
grapes:["Grapes","ద్రాక్ష","Fresh, juicy grapes selected for their crisp texture and flavour.","తాజా మరియు రసభరితమైన ద్రాక్ష.","https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=1200&q=90"],
pomegranate:["Pomegranate","దానిమ్మ","Ruby-red pomegranate with juicy, naturally sweet arils.","రసభరితమైన, సహజంగా తీపి దానిమ్మ.","https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=1200&q=90"],
watermelon:["Watermelon","పుచ్చకాయ","Cool, juicy and refreshing watermelon.","చల్లగా, రసభరితంగా ఉండే పుచ్చకాయ.","https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=1200&q=90"],
papaya:["Papaya","బొప్పాయి","Soft, naturally sweet papaya, ideal for a fruit bowl.","మెత్తగా మరియు సహజంగా తీపిగా ఉండే బొప్పాయి.","https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=90"],
pineapple:["Pineapple","అనాసపండు","Tropical pineapple with a sweet and pleasantly tangy taste.","తీపి మరియు కొద్దిగా పుల్లని రుచితో తాజా అనాసపండు.","https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1200&q=90"],
guava:["Guava","జామపండు","Aromatic and refreshing guava, great for everyday snacking.","సువాసనతో కూడిన తాజా జామపండు.","https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=1200&q=90"],
mango:["Mango","మామిడి","A much-loved seasonal favourite with a naturally rich and sweet taste.","సహజంగా తీపి మరియు రుచికరమైన మామిడి పండు.","https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=90"],
muskmelon:["Muskmelon","ఖర్బూజ","Fragrant, juicy muskmelon that makes a refreshing summer fruit.","సువాసనతో కూడిన రసభరితమైన ఖర్బూజ.","https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=1200&q=90"],
sapota:["Sapota","సపోటా","Soft and naturally sweet sapota, a classic favourite.","మెత్తగా మరియు సహజంగా తీపిగా ఉండే సపోటా.","https://images.unsplash.com/photo-1605027990121-cbae9c7c9b8d?auto=format&fit=crop&w=1200&q=90"]};

export function generateStaticParams(){return Object.keys(data).map(id=>({id}))}
export default async function Page({params}){const {id}=await params;if(!data[id])notFound();return <FruitDetail fruit={data[id]}/> }