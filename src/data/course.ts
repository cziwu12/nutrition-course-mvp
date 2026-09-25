export type Resource = { id: string; title: string; source: string; description: string; url?: string; type: 'article' | 'official guide' | 'video' | 'interactive tool' | 'PDF'; tags: string[]; weeks: number[] };
export type Video = { title?: string; channel?: string; url?: string; description?: string };
export type Week = { week: number; month: number; titleZh: string; titleEn: string; description: string; objectives: string[]; topics: { en: string; zh: string }[]; vocabulary: { en: string; zh: string }[]; practicalTask: string; reflection: string; resourceIds: string[]; videos: Video[]; checklist: { id: string; label: string; required: boolean }[] };
export const phases = [
 { month: 1, title: '建立营养学基础', description: '认识食物，也认识身体的需要', icon: '01', color: 'sage' },
 { month: 2, title: '微量营养素与消化系统', description: '从吃进去，到吸收与利用', icon: '02', color: 'peach' },
 { month: 3, title: '营养与身体健康', description: '理解饮食和健康的连接', icon: '03', color: 'blue' },
 { month: 4, title: '生命周期营养', description: '照顾不同年龄的家人', icon: '04', color: 'purple' },
 { month: 5, title: '饮食分析与实践', description: '把知识带回自家的餐桌', icon: '05', color: 'yellow' },
 { month: 6, title: '科学思维与毕业项目', description: '有依据地判断，有信心地选择', icon: '06', color: 'pink' },
];
export const resources: Resource[] = [
 { id: 'who', title: '健康饮食 · Healthy diet', source: 'WHO', description: '阅读世界卫生组织的健康饮食概览，认识多样、均衡与适量。英文资料，可配合浏览器翻译。', url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet', type: 'official guide', tags: ['基础营养','carbohydrates','protein','cardiovascular health'], weeks: [1,2,3,4,9,10,11,13,14,15,17,18,19,23] },
 { id: 'nih', title: '维生素与矿物质资料库', source: 'NIH Office of Dietary Supplements', description: '按营养素浏览消费者资料，注意适用人群、摄入上限与药物相互作用。', url: 'https://ods.od.nih.gov/factsheets/list-all/', type: 'official guide', tags: ['vitamins','维生素D','矿物质','补充剂'], weeks: [5,6,16] },
 { id: 'plate', title: '健康餐盘 · Healthy Eating Plate', source: 'Harvard Nutrition Source', description: '用餐盘框架思考一餐的食物搭配，再结合家庭习惯和可获得的食材。', url: 'https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/', type: 'article', tags: ['家庭菜单','whole grains','饮食分析'], weeks: [17,19,20,24] },
 { id: 'kkm', title: '马来西亚本地营养指南', source: 'KKM / Ministry of Health Malaysia', description: 'Resource to be added · 本地官方指南链接待核验。', type: 'official guide', tags: ['马来西亚'], weeks: [19,20] },
 { id: 'gut', title: '消化与肠道健康资源', source: 'Other trusted sources', description: 'Resource to be added · 专题阅读待核验。', type: 'article', tags: ['gut health','消化系统'], weeks: [7,8] },
 { id: 'evidence', title: '科学研究与证据评估资源', source: 'Other trusted sources', description: 'Resource to be added · 专题阅读待核验。', type: 'article', tags: ['科学研究','营养误区'], weeks: [12,21,22] },
 { id: 'youtube', title: '课程视频待补充', source: 'YouTube', description: '尚未选定视频。核验标题、频道与链接后加入课程；当前视频学习为选修。', type: 'video', tags: ['视频'], weeks: [] },
];
// Editorial curriculum: bilingual concepts, specific weekly goals and practical activities.
// Resource URLs above were checked on 2026-09-25; placeholders intentionally have no URL.
type Seed = [string, string, string, string, string, string, string, string];
const seeds: Seed[] = [
 ['营养学基础','Nutrition foundations','从一日三餐出发，认识营养素、能量与膳食参考值。','nutrition:营养学|nutrient:营养素|macronutrients:宏量营养素|micronutrients:微量营养素|energy:能量|calories:卡路里|RDA:推荐膳食供给量|EAR:平均需要量|UL:可耐受最高摄入量|food vs nutrients:食物与营养素','区分食物与营养素|解释宏量与微量营养素|说出 RDA、EAR 与 UL 的用途和差异','记录今天的一顿饭，列出食材，并尝试指出每种食物提供的营养素。不要只给食物贴“好”或“坏”的标签。','我们吃的是食物，但身体真正需要的是不同的营养素。','who'],
 ['碳水化合物','Carbohydrates','读懂糖、淀粉与膳食纤维，认识日常主食。','glucose:葡萄糖|starch:淀粉|sugar:糖|fibre:膳食纤维|whole grains:全谷物|refined carbohydrates:精制碳水|simple vs complex carbohydrates:简单与复杂碳水|glycemic index (GI):升糖指数','区分糖、淀粉与纤维|比较全谷与精制食物|说明 GI 不能单独评价整餐','选择家中的面包、饼干、米粉、早餐谷物和饮料，按相同重量比较碳水、糖和纤维，并记录实际食用份量。','同样是碳水化合物，食物的纤维与整体搭配有什么不同？','who'],
 ['蛋白质','Protein','学习氨基酸、植物与动物蛋白质，以及日常蛋白质需要。','amino acids:氨基酸|essential amino acids:必需氨基酸|non-essential amino acids:非必需氨基酸|complete / incomplete protein:完全与不完全蛋白质|animal vs plant protein:动物与植物蛋白|protein digestion:蛋白质消化|protein requirements:蛋白质需要量','解释蛋白质与氨基酸的关系|区分必需与非必需氨基酸|比较完全与不完全蛋白及植物和动物来源|了解需要量随年龄、健康和活动而异','设计适合普通马来西亚家庭的高质量早餐。列出一种主食、一种蛋白质来源及蔬果，考虑预算与准备时间。','除了肉类，家里还有哪些容易获得的蛋白质来源？','who'],
 ['脂肪','Dietary fats','认识不同脂肪与胆固醇，不把“低脂”当作唯一标准。','saturated fat:饱和脂肪|unsaturated fat:不饱和脂肪|trans fat:反式脂肪|omega-3:欧米伽3|omega-6:欧米伽6|cholesterol:胆固醇|HDL:高密度脂蛋白|LDL:低密度脂蛋白','区分三类膳食脂肪|认识 omega-3 与 omega-6|区分膳食胆固醇与血液脂蛋白','查看家中两种食用油与一种零食的标签，比较脂肪种类，写下一个可行的烹调调整。','脂肪是不是越少越健康？','who'],
 ['维生素','Vitamins','认识维生素家族，学习查阅可靠的营养素资料。','Vitamin A:维生素A|Vitamin B:维生素B族|Vitamin C:维生素C|Vitamin D:维生素D|Vitamin E:维生素E|Vitamin K:维生素K','识别常见维生素的食物来源|比较水溶性与脂溶性维生素|在 NIH 资料中找到补充剂风险信息','选两种维生素，在 NIH 消费者资料中查找作用、食物来源与注意事项，写入笔记；不要据此自行开始补充剂。','更多的维生素一定更好吗？','nih'],
 ['矿物质','Minerals','了解骨骼、血液与身体运作所需的矿物质。','calcium:钙|iron:铁|magnesium:镁|zinc:锌|potassium:钾|sodium:钠|iodine:碘','列出常见矿物质及食物来源|识别标签中的钠|查找摄入上限与适用人群','从家庭常吃的食物中找出钙和铁的来源，再比较两种调味品的钠含量。','盐与钠是同一个计量单位吗？查阅资料后解释。','nih'],
 ['消化系统','Digestion & absorption','沿着食物的旅程，认识消化与吸收。','mouth:口腔|stomach:胃|small intestine:小肠|large intestine:大肠|digestion:消化|absorption:吸收|enzymes:酶|stomach acid:胃酸|bile:胆汁|pancreas:胰腺|microbiome:微生物群','画出消化道的主要顺序|区分消化与吸收|说明酶、胃酸、胆汁和胰腺的角色','画出一口饭经过身体的路线，将口腔、胃、小肠与大肠标在图上，并记录两个待查的问题。','吃进去 ≠ 身体吸收到了。','gut'],
 ['肠道健康','Gut health','把肠道知识与蔬菜、饮水和日常饮食联系起来。','gut microbiome:肠道微生物群|probiotics:益生菌|prebiotics:益生元|fibre:膳食纤维|fermented foods:发酵食品|constipation:便秘|diarrhoea:腹泻','区分益生菌和益生元|认识纤维与饮食多样性|辨别需要就医的持续不适','完成“我的家庭肠道健康饮食检查”：记录蔬菜、饮水、纤维、全谷物、发酵食物与超加工食品的摄入习惯。','发酵食品是否都等于经过研究的益生菌产品？','gut'],
 ['血糖','Blood glucose','先理解血糖调节，再判断“降糖食物”的说法。','carbohydrate → glucose → insulin:碳水到葡萄糖到胰岛素|blood glucose:血糖|insulin:胰岛素|insulin resistance:胰岛素阻抗|HbA1c:糖化血红蛋白|prediabetes:糖尿病前期|type 2 diabetes:2型糖尿病','描述血糖与胰岛素的关系|认识胰岛素阻抗与 HbA1c|区分饮食教育与疾病治疗','用自己的话画出“吃饭后血糖如何调节”的流程，列出三个想向医生或营养专业人士请教的问题。','先理解调节机制，不急着记忆号称“降血糖”的食物。','who'],
 ['心血管健康','Cardiovascular health','理解血压、血脂与日常饮食的联系。','blood pressure:血压|cholesterol:胆固醇|LDL:低密度脂蛋白|HDL:高密度脂蛋白|triglycerides:甘油三酯|saturated fat:饱和脂肪|fibre:膳食纤维|sodium:钠','区分血压与血脂指标|解释脂肪种类、纤维与钠的相关性|认识整体饮食模式','记录一天使用的酱油、汤底与加工食品，找出一个可以减少钠的实际做法。','一次饮食选择和长期饮食习惯，哪个更值得关注？','who'],
 ['体重与能量','Energy & body weight','理解能量平衡，同时关注饱腹感与食物质量。','energy intake:能量摄入|energy expenditure:能量消耗|BMR:基础代谢率|TDEE:每日总能量消耗|calorie deficit:能量缺口|calorie surplus:能量盈余|appetite:食欲|satiety:饱腹感','解释能量摄入与消耗|区分 BMR 和 TDEE|观察食欲与饱腹感而不苛责自己','记录两餐前后的饥饿与饱腹感，以及睡眠和活动情况。寻找规律，不制定极端节食目标。','Calories matter，但食物质量也 matters.','who'],
 ['炎症、氧化压力与抗氧化','Inflammation & antioxidants','理解术语，并学习追问健康宣传背后的证据。','inflammation:炎症|oxidative stress:氧化压力|antioxidants:抗氧化物|polyphenols:多酚|phytochemicals:植物化学物','区分基本概念与营销语言|区分实验室结果和人体研究|提出可核验的证据问题','找一条“抗炎食物”宣传，记录原话、来源、研究对象以及是否有人体研究；找不到证据时明确标注未知。','当有人说“这个食物抗炎”，问：“人体研究在哪里？”','evidence'],
 ['儿童营养','Child nutrition','关注成长、规律进餐、食物多样与安全。','growth:生长|food variety:食物多样性|regular meals:规律进餐|food allergy:食物过敏|responsive feeding:回应式喂养','认识儿童需求随年龄变化|尊重饥饱信号并提供多样食物|了解食物过敏及噎食需专业指导','设计一份适龄的家庭正餐搭配，记录口感、食物大小与过敏方面需要进一步确认的事项。','如何鼓励尝试食物，又不给孩子造成压力？','who'],
 ['青少年营养','Adolescent nutrition','支持生长发育，建立平衡而友善的饮食观。','adolescence:青春期|growth spurt:生长高峰|iron:铁|calcium:钙|body image:身体意象|breakfast:早餐','认识生长阶段的营养关注点|识别铁和钙的食物来源|避免体重羞辱与极端饮食','为忙碌的上学日设计方便的早餐和加餐，说明如何兼顾时间、口味和多样性。','怎样讨论营养，才能把关注点放在健康而非外形？','who'],
 ['成年人营养','Adult nutrition','在工作、家务与外食之间，建立可持续习惯。','dietary pattern:饮食模式|nutrient density:营养密度|hydration:补水|meal planning:膳食计划|physical activity:身体活动','评估饮食模式而非单一食物|平衡外食与家庭餐|设定一个可执行的小调整','选择最忙碌的一天，提前安排一顿容易准备的饭和饮水方式，并记录执行障碍。','什么改变能在一个月后仍然坚持？','who'],
 ['40+女性营养','Nutrition for women 40+','关注骨骼、肌肉与健康老龄化，理解个体差异。','bone health:骨骼健康|calcium:钙|vitamin D:维生素D|protein:蛋白质|iron:铁|menopause:更年期|muscle mass:肌肉量|healthy ageing:健康老龄化','认识骨骼与肌肉的营养关注点|理解更年期和铁需求的个体差异|识别补充剂需要专业评估的情境','检查一天的饮食中有哪些钙和蛋白质来源，写下准备向合格专业人士咨询的问题。','年龄是起点，个人健康、用药与生活方式同样重要。','nih'],
 ['记录饮食','Food diary','先观察，不评判。用记录认识真实饮食习惯。','breakfast:早餐|lunch:午餐|dinner:晚餐|snacks:零食|drinks:饮料|portion:份量','完整记录正餐、零食和饮料|描述份量和烹调方法|找出记录中的重复模式','连续记录三个普通日子的早餐、午餐、晚餐、零食和饮料，补充大致份量、时间和进餐情境。','记录是为了理解自己，不是给自己打分。','who,plate'],
 ['读懂食品标签','Food labels','从每份与每100克开始，做有依据的比较。','serving size:每份大小|calories:热量|protein:蛋白质|carbohydrate:碳水化合物|sugar:糖|fat:脂肪|saturated fat:饱和脂肪|sodium:钠|ingredients:配料表','区分每份与每100克信息|比较糖、钠和饱和脂肪|阅读配料顺序与实际食用量','拿出家中两种同类包装食品，将标签数据换算到相同重量，再按自己的实际食用份量比较。','包装正面的健康宣传，与背面的数据一致吗？','who'],
 ['设计一日饮食','A day of balanced meals','用简单烹调，为真实生活设计餐食。','balanced meals:均衡餐食|food groups:食物组|afternoon snack:下午加餐|convenience:便利性|food preference:食物偏好','根据生活情境选择餐食|为每餐安排不同食物组|解释搭配而不进行医疗处方','案例：43岁女性，久坐，普通马来西亚华人家庭饮食，不喜欢复杂烹调。设计早餐、午餐、下午加餐、晚餐，并解释每项选择。','一份可实施的菜单，需要考虑什么生活限制？','plate,kkm'],
 ['设计一周家庭菜单','A weekly family menu','好吃、买得到、做得到、营养合理。','weekly menu:每周菜单|shopping list:采购清单|food budget:食物预算|healthy eating plate:健康餐盘|leftovers:剩余饭菜','用健康餐盘作为一种搭配框架|协调采购与准备时间|兼顾家人口味和食物安全','写一份七天家庭菜单与采购清单，重复利用常见食材，注明忙碌日的简易做法及妥善保存安排。','追求可持续的家庭餐桌，不追求“完美”饮食。','plate,kkm'],
 ['如何阅读科学研究','Reading nutrition research','认识研究设计，区分相关性和因果关系。','observational study:观察性研究|randomized controlled trial:随机对照试验|systematic review:系统综述|meta-analysis:荟萃分析|correlation:相关性|causation:因果关系','区分四种常见研究类型|识别研究对象、干预与结果|说明相关性不等于因果关系','选一则营养新闻，尝试追溯原研究，记录研究类型、样本、时间与局限；未能找到时明确写下。','系统综述的结论，也取决于纳入研究的质量。','evidence'],
 ['营养误区','Nutrition myths','面对吸引人的健康承诺，先停一下，再看证据。','detox:排毒|miracle foods:神奇食物|fat-burning foods:燃脂食物|alkaline diets:碱性饮食|evidence:证据|conflict of interest:利益冲突','识别绝对化治愈承诺|追查引用与销售利益|用证据而非热度判断','从排毒、神奇食物、燃脂食物、碱性饮食治病或食物治癌说法中选一个，列出主张、证据和未知之处。不要用食物替代治疗。','说法越惊人，是否提供了相称的可靠证据？','evidence'],
 ['饮食案例分析','Case study','用学到的知识，提出三个现实的小改进。','diet assessment:饮食评估|sweetened drinks:含糖饮料|food variety:食物多样性|realistic changes:现实调整|sedentary lifestyle:久坐生活','从有限记录中提出问题而非诊断|识别可能缺少的信息|提出三个负担较小的改变','案例：40岁女性；早餐咖啡与面包，午餐米饭、蔬菜与肉，下午奶茶，晚餐面条，几乎不运动。指出潜在问题与需要补充的信息，建议三个现实改进，避免诊断疾病。','我们知道哪些信息？又有哪些只能先提问？','who'],
 ['我的家庭营养指南','Your family nutrition guide','把24周的学习，整理成家人真正用得上的指南。','nutrition guide:营养指南|reliable sources:可靠来源|reflection:反思|sustainable habits:可持续习惯','综合基础知识与家庭饮食观察|形成可执行的菜单和选择建议|为信息标注来源与局限','完成13个章节：我的家庭饮食习惯、常见问题、营养基础、早餐建议、午餐建议、晚餐建议、零食建议、饮料选择、食品标签怎么看、一周家庭菜单、儿童饮食注意事项、40+女性饮食注意事项、我的营养知识来源。','回顾第一周：你现在能用简单的语言解释哪些营养概念？','plate'],
];
export const weeks: Week[] = seeds.map(([titleZh,titleEn,description,terms,goals,practicalTask,reflection,ids], i) => {
 const topics = terms.split('|').map(t => { const [en,zh] = t.split(':'); return { en, zh }; });
 const resourceIds = ids.split(',');
 const hasResource = resources.some(r => resourceIds.includes(r.id) && r.url);
 return { week: i+1, month: Math.floor(i/4)+1, titleZh,titleEn,description,topics,vocabulary:topics.slice(0,6), objectives:goals.split('|'), practicalTask,reflection,resourceIds,videos:[{}],checklist:[
 {id:'topics',label:'阅读本周主题',required:true}, {id:'resources',label:'查看推荐资源',required:hasResource}, {id:'videos',label:'观看视频',required:false}, {id:'practice',label:'完成实践任务',required:true}, {id:'review',label:'完成本周复习',required:true},
 ] };
});
export const disclaimer = '本课程仅供教育学习，不能替代注册营养师、医生或其他合格医疗专业人士的建议。涉及疾病、怀孕、药物或营养补充剂，请寻求合适的专业指导。';
export const disclaimerEn = 'This course is for education only and does not replace advice from a registered dietitian, nutritionist, doctor, or other qualified healthcare professional.';
export function searchWeeks(query: string) { const q = query.toLowerCase().replace(/\s/g,''); return weeks.filter(w => [w.titleZh,w.titleEn,w.description,...w.topics.flatMap(t=>[t.zh,t.en])].join(' ').toLowerCase().replace(/\s/g,'').includes(q)); }
