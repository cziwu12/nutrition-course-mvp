import {
  lesson,
  l,
  p,
  example,
  call,
  compare,
  section,
  term,
  q,
} from "../authoring";
import type { LessonBlock } from "../lesson-types";
const pathway = l<LessonBlock>(
  {
    type: "process",
    steps: [
      { title: "口腔", description: "咀嚼，混合唾液，开始分解淀粉。" },
      { title: "食道", description: "肌肉蠕动把食物推向胃。" },
      { title: "胃", description: "暂存、搅拌，胃酸与酶参与处理。" },
      {
        title: "小肠",
        description: "接受胰液与胆汁，完成大量消化并吸收营养。",
      },
      { title: "大肠", description: "吸收剩余水分，微生物利用部分残余成分。" },
      { title: "直肠与肛门", description: "储存并排出粪便。" },
    ],
  },
  {
    type: "process",
    steps: [
      {
        title: "Mouth",
        description: "Chew, mix with saliva and begin starch breakdown.",
      },
      {
        title: "Oesophagus",
        description: "Muscular waves move food towards the stomach.",
      },
      {
        title: "Stomach",
        description: "Store and mix food; acid and enzymes help process it.",
      },
      {
        title: "Small intestine",
        description:
          "Receive pancreatic juice and bile; digest and absorb most nutrients.",
      },
      {
        title: "Large intestine",
        description:
          "Absorb remaining water; microbes use some leftover material.",
      },
      { title: "Rectum and anus", description: "Store and pass stool." },
    ],
  },
);
export const week07Lesson = lesson({
  introduction: l(
    "吃进去不等于身体已经吸收。想象一餐饭要经历拆解、转运和分配，本周沿着消化道走一遍，区分每个器官的工作。你不必记住复杂解剖名称，只需能解释“食物去了哪里，发生了什么”。",
    "Eating a food does not mean its nutrients have already been absorbed. Imagine a meal being broken down, transported and distributed. This week follows its journey and separates the jobs of different organs. You do not need detailed anatomy; aim to explain where food goes and what happens there.",
  ),
  objectives: l(
    [
      "区分消化与吸收。",
      "按顺序描述食物经过的器官。",
      "解释酶、胃酸、胆汁和胰腺的不同作用。",
      "说明小肠与大肠工作的区别。",
      "用一个例子解释吃进去不等于全部吸收。",
    ],
    [
      "Distinguish digestion from absorption.",
      "Describe the organs food passes through in order.",
      "Explain the different roles of enzymes, stomach acid, bile and the pancreas.",
      "Distinguish small- and large-intestine functions.",
      "Use an example to explain why eating does not guarantee complete absorption.",
    ],
  ),
  sections: [
    section(
      "digestive-route",
      l("7.1 一餐饭的路线", "7.1 The route of a meal"),
      [
        p(
          "消化道是一条从口腔通到肛门的连续管道。食物沿着这条路移动，但不是在每一处做相同的事。肝脏、胆囊和胰腺从旁边提供帮助；食物本身并不经过这些器官内部。",
          "The digestive tract is a continuous tube from mouth to anus. Food moves along it, but different jobs happen in different places. The liver, gallbladder and pancreas provide help from alongside the tract; food itself does not pass through their interiors.",
        ),
        pathway,
        p(
          "消化指把食物加工、分解成更小的成分。吸收指成分穿过肠壁进入身体循环。咀嚼把米饭弄碎属于物理处理，酶切开淀粉链属于化学消化，葡萄糖穿过小肠壁才属于吸收。",
          "Digestion processes food and breaks it into smaller components. Absorption moves components through the intestinal wall into the body’s circulation. Chewing rice is physical processing; enzymes cutting starch chains are chemical digestion; glucose crossing the small-intestine wall is absorption.",
        ),
        example(
          "想象物流，而不是漏斗",
          "Think of a delivery system, not a funnel",
          "吃下豆腐时，完整豆腐块不会直接跑到肌肉中。食物先拆解，成分再吸收和利用。即使两个人吃同样分量，也不能只凭餐盘断言吸收量完全一样。",
          "A swallowed piece of tofu does not travel intact into a muscle. It is processed, then its components are absorbed and used. Identical portions do not establish identical absorption in two people.",
        ),
      ],
      ["digestion", "absorption", "digestive-tract"],
      ["digestion"],
    ),
    section(
      "mouth-stomach",
      l(
        "7.2 从口腔到胃：不是只有胃在消化",
        "7.2 Mouth to stomach: digestion starts earlier",
      ),
      [
        p(
          "牙齿咀嚼增加食物表面积，舌头帮助混合和吞咽，唾液湿润食物。唾液中的淀粉酶开始分解淀粉。机械处理与化学处理一起发生，所以细嚼是一种方便吞咽的方式，不是让所有营养瞬间吸收的魔法。",
          "Teeth increase food surface area through chewing, the tongue helps mixing and swallowing, and saliva moistens food. Salivary amylase starts starch breakdown. Mechanical and chemical processing happen together. Chewing helps make food manageable; it is not a trick that instantly absorbs every nutrient.",
        ),
        p(
          "吞咽后，食道肌肉以波浪式收缩推动食物，这叫蠕动。食物不是单靠重力掉进胃里。胃能暂时储存并搅拌食物，把它与胃液混合，再逐渐向小肠释放。",
          "After swallowing, waves of oesophageal muscle contraction push food along. This is peristalsis; gravity is not the only force moving food. The stomach temporarily stores food, mixes it with gastric juice and releases it gradually into the small intestine.",
        ),
        p(
          "胃酸形成酸性环境，帮助蛋白质改变形状，并让某些消化酶适合工作。胃壁有保护机制。酸并不是越多越好，也不能把所有消化不适都归为胃酸不足，然后自行购买增加胃酸的产品。",
          "Stomach acid creates an acidic environment that helps unfold proteins and suits certain digestive enzymes. The stomach lining has protective mechanisms. More acid is not automatically better, and digestive discomfort does not by itself establish low acid or justify acid-increasing products.",
        ),
        call(
          "把三种工作分开",
          "Separate three jobs",
          "咀嚼和搅拌改变物理形态；酶帮助化学分解；酸提供合适环境。胃很重要，但多数营养吸收发生在小肠。",
          "Chewing and mixing change physical form; enzymes help chemical breakdown; acid provides suitable conditions. The stomach matters, but most nutrient absorption takes place in the small intestine.",
        ),
      ],
      ["peristalsis", "enzyme", "stomach-acid"],
      ["digestion"],
    ),
    section(
      "enzymes-bile",
      l(
        "7.3 酶、胰腺和胆汁怎样合作",
        "7.3 How enzymes, the pancreas and bile cooperate",
      ),
      [
        p(
          "酶是加快特定化学反应的工具，多数是蛋白质。不同消化酶处理不同成分：淀粉酶处理淀粉，蛋白酶处理蛋白质，脂肪酶处理脂肪。这些名称提示作用对象，不需要背每一种酶的全名。",
          "Enzymes are tools that speed particular chemical reactions; most are proteins. Different digestive enzymes handle different components: amylase acts on starch, proteases on proteins and lipase on fats. The names help identify their targets; you do not need every enzyme’s full name.",
        ),
        p(
          "胰腺把含多种消化酶及碳酸氢盐的胰液送入小肠。碳酸氢盐帮助缓冲从胃来的酸。胰腺还有制造胰岛素等激素的工作，但向肠道送酶和向血液释放激素是两条不同的工作路线。",
          "The pancreas sends juice containing digestive enzymes and bicarbonate into the small intestine. Bicarbonate helps buffer acid arriving from the stomach. The pancreas also makes hormones such as insulin, but delivering enzymes to the gut and releasing hormones into blood are distinct pathways.",
        ),
        p(
          "胆汁由肝脏制造，胆囊储存并释放。它帮助把脂肪分散成较小油滴，让脂肪酶更容易接触，这叫乳化。胆汁不是消化酶，不能把“帮助处理脂肪”都理解成同一种化学切割。",
          "Bile is made by the liver and stored and released by the gallbladder. It helps disperse fat into smaller droplets so lipase can reach it more easily: emulsification. Bile is not a digestive enzyme. Helping with fat processing does not always mean chemically cutting the fat molecule.",
        ),
        example(
          "油滴与剪刀",
          "Oil droplets and scissors",
          "把大油滴分成小油滴，好比增加剪刀能接触的边缘；胆汁协助分散，脂肪酶负责化学拆解。这只是帮助理解的比喻，不是建议喝任何“洗油”饮品。",
          "Breaking a large droplet into smaller droplets increases the surface available to the cutting tool: bile helps disperse, while lipase performs chemical breakdown. This is an explanatory analogy, not a reason to drink a product claiming to wash away oil.",
        ),
      ],
      ["enzyme", "pancreas", "bile", "emulsification"],
      ["digestion"],
    ),
    section(
      "small-intestine",
      l(
        "7.4 小肠：吸收需要合适的界面",
        "7.4 Small intestine: absorption needs an interface",
      ),
      [
        p(
          "小肠是大部分营养吸收的主要场所。内壁的褶皱、绒毛和更细的表面结构增加接触面积。绒毛可想成细小的指状突起；它们不是把食物“抓住”，而是提供更大的吸收表面。",
          "The small intestine is the main site for most nutrient absorption. Folds, villi and finer surface structures increase contact area. Villi are small finger-like projections; they do not grab food, but provide more surface across which absorption can occur.",
        ),
        p(
          "淀粉最终分解成可吸收的糖，蛋白质分解成氨基酸和小肽，脂肪经过不同步骤形成可处理的成分。许多成分进入血液；大部分长链膳食脂肪经重新包装后先进入淋巴系统，再进入血液。不是所有营养素走完全相同的路线。",
          "Starch is broken down into absorbable sugars, proteins into amino acids and small peptides, and fats through several processing steps. Many components enter blood. Much long-chain dietary fat is repackaged and enters the lymphatic system first, then blood. Nutrients do not all take exactly the same route.",
        ),
        example(
          "乳糖酶不足的例子",
          "An example involving low lactase",
          "乳糖是奶中的一种糖，乳糖酶帮助分解它。乳糖酶不足时，未消化的乳糖可进入大肠，引起部分人的胀气或腹泻。这与免疫系统针对奶蛋白的过敏不同，也不能仅凭一次胀气自行确诊。",
          "Lactose is a sugar in milk, and lactase helps break it down. With insufficient lactase, undigested lactose can reach the large intestine and cause gas or diarrhoea in some people. This differs from an immune reaction to milk proteins and cannot be diagnosed from one episode of bloating.",
        ),
        call(
          "吸收不良不是可以自行认定的标签",
          "Malabsorption is not a self-diagnosis label",
          "某些疾病会影响肠道吸收，例如乳糜泻会损伤小肠。持续症状、非预期体重下降或营养问题需要评估；不要因为网上一张症状表就删除大量食物。",
          "Certain conditions affect absorption; coeliac disease, for example, damages the small intestine. Persistent symptoms, unintentional weight loss or nutritional concerns need assessment. Do not remove many foods based on an online symptom chart.",
          "warning",
        ),
      ],
      ["villi", "lymph", "lactose", "lactase", "malabsorption"],
      ["digestion", "lactose", "coeliac"],
    ),
    section(
      "large-intestine",
      l(
        "7.5 大肠与微生物：不只是废物仓库",
        "7.5 Large intestine and microbes: more than waste storage",
      ),
      [
        p(
          "到达大肠的内容物包含水、未被小肠消化吸收的成分及其他物质。大肠吸收部分剩余水和电解质，形成粪便。不能说所有水都在大肠吸收；小肠也吸收大量水分。",
          "Material reaching the large intestine contains water, components not digested or absorbed in the small intestine, and other substances. The large intestine absorbs some remaining water and electrolytes and forms stool. Water absorption is not exclusive to it; the small intestine also absorbs substantial water.",
        ),
        p(
          "肠道里生活着细菌及其他微生物。其中一些能利用人类消化酶不能充分分解的成分，例如部分纤维。这种微生物分解过程叫发酵，可以产生短链脂肪酸及气体。不同纤维的作用不完全一样。",
          "Bacteria and other microbes live in the gut. Some use material human digestive enzymes cannot fully break down, including certain fibres. This microbial breakdown, fermentation, can produce short-chain fatty acids and gas. Different fibres do not behave identically.",
        ),
        p(
          "直肠暂存粪便，排便涉及肌肉和神经协调。粪便也包含微生物和脱落细胞，不只是昨晚吃下的食物。排便次数有个人差异，不能仅凭不是每天一次就判断“肠道毒素堆积”。",
          "The rectum stores stool, and passing it involves coordinated muscles and nerves. Stool contains microbes and shed cells, not just last night’s food. Bowel frequency differs between people; not going once every day does not establish a buildup of gut toxins.",
        ),
        example(
          "纤维不是“完全没消化就没用”",
          "Undigested does not mean useless",
          "部分纤维到达大肠，仍能影响粪便或供某些微生物利用。第 2 周的“不能被人体消化酶完全分解”与“没有生理作用”不是同一个判断。",
          "Some fibre reaches the large intestine and can still affect stool or be used by microbes. Week 2’s “not fully broken down by human digestive enzymes” is not the same as having no physiological role.",
        ),
      ],
      [
        "large-intestine",
        "microbiome",
        "fermentation",
        "short-chain-fatty-acid",
      ],
      ["digestion", "fibre-guide", "constipation"],
    ),
    section(
      "digestion-practice",
      l("7.6 用一餐饭检验你的解释", "7.6 Test your explanation with a meal"),
      [
        p(
          "选择米饭、豆腐、蔬菜和少量食用油这一餐。先描述物理路线，再选一种营养素追踪化学变化。把米饭直接连到“血糖”，虽然省事，却跳过了淀粉分解和吸收这两个关键环节。",
          "Choose a meal of rice, tofu, vegetables and a little cooking oil. Describe the physical route first, then trace one nutrient’s chemical changes. Jumping straight from rice to blood glucose skips two essential steps: starch breakdown and absorption.",
        ),
        compare([
          {
            title: l("可由本课解释", "What this lesson can explain"),
            items: [
              l(
                "多数营养素在小肠吸收。",
                "Most nutrients are absorbed in the small intestine.",
              ),
              l(
                "胆汁与脂肪酶做不同工作。",
                "Bile and lipase do different jobs.",
              ),
              l(
                "部分纤维可到达大肠供微生物利用。",
                "Some fibre reaches microbes in the large intestine.",
              ),
            ],
          },
          {
            title: l("不能单凭本课判断", "What this lesson cannot establish"),
            items: [
              l(
                "某个人腹痛的诊断。",
                "The diagnosis behind someone’s abdominal pain.",
              ),
              l("某人一定缺哪种酶。", "Which enzyme someone definitely lacks."),
              l(
                "是否应该停药或严格限制某食物。",
                "Whether to stop medication or strictly restrict a food.",
              ),
            ],
          },
        ]),
        example(
          "检查自己的图",
          "Check your drawing",
          "如果图里食物经过肝脏再进胃，路线需要修改。如果把胆汁标成蛋白酶，也需要修改。用不同颜色画食物路线与辅助分泌物，帮助家人一眼看懂。",
          "If your drawing sends food through the liver before the stomach, revise the route. If bile is labelled as a protease, revise that too. Different colours for the food route and supporting secretions can make the explanation easier to follow.",
        ),
        call(
          "了解身体，是为了提出更好的问题",
          "Understanding helps you ask better questions",
          "持续疼痛、便血、明显脱水或非预期体重下降应寻求医疗帮助，而不是用“清肠”“排毒”或自行补酶替代评估。",
          "Persistent pain, blood in stool, significant dehydration or unintentional weight loss warrant medical help, rather than replacing assessment with cleanses, detoxes or self-prescribed enzymes.",
          "warning",
        ),
      ],
      ["digestion", "absorption", "bile"],
      ["digestion", "coeliac", "dehydration"],
    ),
  ],
  keyTerms: [
    term(
      "digestion",
      "消化",
      "Digestion",
      "通过物理和化学过程把食物加工、分解成较小成分。",
      "Physical and chemical processing that breaks food into smaller components.",
    ),
    term(
      "absorption",
      "吸收",
      "Absorption",
      "营养等成分穿过肠道表面进入身体循环的过程。",
      "Movement of nutrients and other components across the intestinal surface into circulation.",
    ),
    term(
      "digestive-tract",
      "消化道",
      "Digestive tract",
      "食物从口腔到肛门经过的一条连续管道。",
      "The continuous tube along which food travels from mouth to anus.",
    ),
    term(
      "peristalsis",
      "蠕动",
      "Peristalsis",
      "消化道肌肉有节律地收缩并推动内容物的过程。",
      "Wavelike contractions of digestive-tract muscles that move contents along.",
    ),
    term(
      "enzyme",
      "酶",
      "Enzyme",
      "加快特定化学反应的物质，多数为蛋白质；不同酶处理不同对象。",
      "A substance, usually a protein, that speeds a particular chemical reaction; different enzymes have different targets.",
    ),
    term(
      "stomach-acid",
      "胃酸",
      "Stomach acid",
      "胃液中的酸，提供帮助处理食物和部分酶工作的酸性环境。",
      "Acid in gastric juice providing an acidic environment for food processing and certain enzymes.",
    ),
    term(
      "pancreas",
      "胰腺",
      "Pancreas",
      "向小肠提供消化液，也向血液分泌胰岛素等激素的器官。",
      "An organ supplying digestive juice to the small intestine and hormones such as insulin to the blood.",
    ),
    term(
      "bile",
      "胆汁",
      "Bile",
      "由肝脏制造、帮助脂肪分散与处理的液体，不是消化酶。",
      "A fluid made by the liver that helps disperse and process fats; it is not a digestive enzyme.",
    ),
    term(
      "emulsification",
      "乳化",
      "Emulsification",
      "把脂肪分散成更小油滴以增加接触面积的过程。",
      "Dispersing fat into smaller droplets to increase the surface available for processing.",
    ),
    term(
      "villi",
      "绒毛",
      "Villi",
      "小肠壁上的细小指状突起，增加可用于吸收的表面积。",
      "Small finger-like projections of the small-intestine lining that increase absorptive surface area.",
    ),
    term(
      "lymph",
      "淋巴系统",
      "Lymphatic system",
      "运输淋巴液的网络，也参与把部分吸收后的脂肪送入循环。",
      "A fluid-transport network that also carries some absorbed fats towards the blood circulation.",
    ),
    term(
      "lactose",
      "乳糖",
      "Lactose",
      "奶中天然存在的一种糖，需要乳糖酶帮助分解。",
      "A naturally occurring milk sugar that requires lactase for breakdown.",
    ),
    term(
      "lactase",
      "乳糖酶",
      "Lactase",
      "在小肠帮助把乳糖分解成可吸收糖的消化酶。",
      "A small-intestine enzyme that breaks lactose into absorbable sugars.",
    ),
    term(
      "malabsorption",
      "吸收不良",
      "Malabsorption",
      "身体不能正常吸收某些营养成分的状态，需要评估其原因。",
      "Impaired absorption of certain nutrients, with causes that require assessment.",
    ),
    term(
      "large-intestine",
      "大肠",
      "Large intestine",
      "参与剩余水分吸收、微生物活动和粪便形成的消化道部分。",
      "The part of the tract involved in remaining-water absorption, microbial activity and stool formation.",
    ),
    term(
      "microbiome",
      "微生物群及其环境",
      "Microbiome",
      "特定环境中的微生物、其遗传物质及相关生态；本课指肠道环境。",
      "Microorganisms, their genetic material and associated environment; here, the gut ecosystem.",
    ),
    term(
      "fermentation",
      "发酵",
      "Fermentation",
      "微生物分解某些物质并产生新成分的过程。",
      "Microbial breakdown of certain substances that produces other compounds.",
    ),
    term(
      "short-chain-fatty-acid",
      "短链脂肪酸",
      "Short-chain fatty acid",
      "肠道微生物利用部分纤维时可产生的一类小分子脂肪酸。",
      "A small fatty-acid molecule that can be produced when gut microbes use certain fibres.",
    ),
  ],
  questions: [
    q(
      "absorption",
      l("哪一步属于吸收？", "Which step is absorption?"),
      [
        l("牙齿把米饭嚼碎。", "Teeth break rice into pieces."),
        l(
          "葡萄糖穿过小肠壁进入循环。",
          "Glucose crosses the small-intestine wall into circulation.",
        ),
      ],
      1,
      l(
        "消化是加工与拆解，吸收是跨过肠壁。",
        "Digestion processes and breaks down; absorption crosses the gut wall.",
      ),
    ),
    q(
      "bile",
      l("胆汁的主要相关作用是什么？", "What is bile’s relevant role?"),
      [
        l(
          "帮助把脂肪分散成小油滴。",
          "Help disperse fat into smaller droplets.",
        ),
        l("作为蛋白酶把肉切开。", "Act as a protease to cut meat proteins."),
      ],
      0,
      l(
        "胆汁不是酶；乳化帮助脂肪酶接触脂肪。",
        "Bile is not an enzyme; emulsification helps lipase reach fat.",
      ),
    ),
    q(
      "route",
      l("食物会经过胰腺内部吗？", "Does food pass through the pancreas?"),
      [
        l(
          "会，它在胃后面的一站。",
          "Yes, it is the next stop after the stomach.",
        ),
        l(
          "不会，胰腺向小肠提供消化液。",
          "No, the pancreas supplies digestive juice to the small intestine.",
        ),
      ],
      1,
      l(
        "辅助器官的分泌物进入消化道，食物不经过这些器官内部。",
        "Supporting organs send secretions into the tract; food does not pass through them.",
      ),
    ),
    q(
      "fibre",
      l(
        "纤维未被人体消化酶完全分解，代表什么？",
        "What follows if human enzymes do not fully digest fibre?",
      ),
      [
        l("它一定没有作用。", "It must have no role."),
        l(
          "部分可到大肠影响粪便或供微生物利用。",
          "Some can reach the large intestine, affect stool or feed microbes.",
        ),
      ],
      1,
      l(
        "不能完全消化不等于没有生理作用。",
        "Incomplete digestion does not mean no physiological role.",
      ),
    ),
  ],
  practicalTask: l(
    "画一张米饭、豆腐和蔬菜的消化路线图。标出口腔、食道、胃、小肠、大肠、直肠与肛门；用侧箭头标出肝脏、胆囊和胰腺的帮助。在图中分别圈出“消化”和“吸收”的例子，并用自己的话解释“吃进去不等于全部吸收”。",
    "Draw the digestive route of rice, tofu and vegetables. Label mouth, oesophagus, stomach, small intestine, large intestine, rectum and anus. Use side arrows for help from the liver, gallbladder and pancreas. Circle separate examples of digestion and absorption, then explain why eating does not guarantee complete absorption.",
  ),
  summary: l(
    [
      "消化负责拆解，吸收负责跨过肠壁。",
      "食物经过消化道，不经过肝脏或胰腺内部。",
      "胃酸、酶和胆汁作用不同。",
      "小肠承担大部分营养吸收，大肠也有重要工作。",
      "持续症状需要评估，不能用网上的“缺酶”判断代替。",
    ],
    [
      "Digestion breaks down; absorption crosses the gut wall.",
      "Food passes along the tract, not through the liver or pancreas.",
      "Acid, enzymes and bile have different jobs.",
      "The small intestine handles most nutrient absorption; the large intestine also matters.",
      "Persistent symptoms need assessment, not an online diagnosis of missing enzymes.",
    ],
  ),
  sourceIds: [
    "digestion",
    "lactose",
    "coeliac",
    "fibre-guide",
    "constipation",
    "dehydration",
  ],
});
