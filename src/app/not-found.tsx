import Link from 'next/link';
export default function NotFound(){return <div className="empty-state"><span className="eyebrow">404</span><h1>没有找到这一课</h1><p>课程包含第1至第24周，请从课程路线选择。</p><Link className="button primary" href="/course">返回课程路线</Link></div>}
