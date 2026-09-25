import { notFound } from 'next/navigation';
import { weeks } from '@/data/course';
import { WeekDetail } from '@/components/week-detail';
export function generateStaticParams(){return weeks.map(w=>({id:String(w.week)}));}
export default async function WeekPage({params}:{params:Promise<{id:string}>}){const {id}=await params;const week=weeks.find(w=>String(w.week)===id);if(!week)notFound();return <WeekDetail week={week}/>;}
