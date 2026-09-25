import { phases } from '@/data/course';
import { CoursePhaseCard } from '@/components/course';
export default function CoursePage(){return <><div className="page-top"><div><span className="eyebrow">THE LEARNING PATH</span><h1>24周，从知识走向餐桌</h1><p>六个阶段，按自己的节奏学习。你也可以随时探索感兴趣的一周。</p></div></div><div className="roadmap-grid full">{phases.map(p=><CoursePhaseCard key={p.month} phase={p}/>)}</div></>}
