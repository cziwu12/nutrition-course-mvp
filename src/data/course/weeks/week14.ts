import {
  l,
  p,
  example,
  call,
  compare,
  section,
  term,
  q,
  lesson,
} from "../authoring";
export const week14Lesson = lesson({
  introduction: l(
    "青春期同时经历成长、自主选择与社交变化。营养学习要帮助年轻人获得足够食物、理解自己的需要，并能辨别身材与饮食宣传。本周不提供减重目标，也不把青春期正常变化当作缺点。",
    "Adolescence combines growth, increasing independence and social change. Nutrition education should help young people obtain enough food, understand their needs and question body and diet marketing. This lesson gives no weight-loss target and does not treat normal pubertal changes as flaws.",
  ),
  objectives: l(
    [
      "解释青春期的能量与营养需求为何不同。",
      "识别蛋白质、钙、维生素 D 和铁的日常来源。",
      "设计适合上学时间的餐食与点心安排。",
      "用支持性的方式回应身体形象和限制饮食问题。",
    ],
    [
      "Explain why adolescent energy and nutrient needs vary.",
      "Identify everyday protein, calcium, vitamin D and iron sources.",
      "Design meals and snacks around a school day.",
      "Respond supportively to body image and restrictive eating concerns.",
    ],
  ),
  sections: [
    section(
      "teen-growth",
      l("14.1 青春期：身体正在建设", "14.1 Puberty: a body under construction"),
      [
        p(
          "青春期是生殖成熟与身体变化的阶段，时间和速度因人而异。身高、骨骼、肌肉和身体组成会改变。能量不只用在运动，也支持成长与基本功能；看起来不运动的一天仍需要规律进食。",
          "Puberty is a period of reproductive maturation and physical change, with timing and pace that vary. Height, bones, muscle and body composition change. Energy supports growth and basic functions as well as sport; a day without formal exercise still requires regular nourishment.",
        ),
        p(
          "能量需求受成长速度、体格、活动与健康影响。同班同学不一定需要相同饭量，也不能照搬成年人的热量限制。成人的身体质量指数解释方式与成长中的青少年不同，家庭不应自行用一个数字决定节食。",
          "Energy needs depend on growth rate, body size, activity and health. Classmates do not necessarily need identical portions, and adult calorie limits do not transfer directly. Adult interpretation of body mass index differs from assessment during growth; a family should not use one number to prescribe a diet.",
        ),
        example(
          "同龄不等于同一阶段",
          "Same age, different stage",
          "两位十四岁学生的身高增长速度、月经情况和运动量可能不同。比较便当大小不如了解各自是否有足够、可取得的食物，以及是否存在持续疲倦或进食担忧。",
          "Two fourteen-year-olds may differ in growth rate, menstruation and activity. Comparing lunchbox sizes is less useful than checking access to adequate food and asking about persistent fatigue or eating concerns.",
        ),
        call(
          "从身体能做什么开始",
          "Begin with what the body can do",
          "谈学习、精力、恢复和享受运动，比反复评论体重更有帮助。成长变化不应成为嘲笑或奖励的依据。",
          "Discuss learning, energy, recovery and enjoyable movement rather than repeatedly commenting on weight. Developmental changes should not become grounds for teasing or reward.",
        ),
      ],
      ["puberty", "energy-needs", "body-composition"],
      ["teen-niddk", "teen-kent"],
    ),
    section(
      "teen-building",
      l(
        "14.2 蛋白质与骨骼：给成长准备材料",
        "14.2 Protein and bones: supply building materials",
      ),
      [
        p(
          "蛋白质由氨基酸组成，参与组织、酶和其他功能。规律正餐中的蛋、豆腐、鱼、鸡肉、豆类或奶类可以提供来源。开始运动不自动代表需要蛋白粉；先看能量是否足够以及平常的饮食是否多样。",
          "Protein consists of amino acids and contributes to tissues, enzymes and other functions. Eggs, tofu, fish, chicken, pulses or dairy in regular meals provide sources. Starting sport does not automatically create a need for protein powder; first consider adequate energy and everyday variety.",
        ),
        p(
          "青春期是骨量累积的重要时期。钙构成骨骼矿物部分，维生素 D 帮助钙吸收并参与骨健康。奶类或合适的强化替代品能贡献营养，但不同植物饮料的蛋白质、钙和维生素 D 差异很大，需看标签。",
          "Adolescence is an important period for accumulating bone mass. Calcium contributes to bone mineral, and vitamin D supports calcium absorption and bone health. Dairy or suitable fortified alternatives can contribute, but plant drinks vary substantially in protein, calcium and vitamin D, so labels matter.",
        ),
        example(
          "不喝牛奶的早餐",
          "A breakfast without cow’s milk",
          "若不喝牛奶，可了解适合自己的强化豆奶等选择，再配面包、蛋或其他食物。不要把“植物”两个字当作营养等同的保证；有过敏或多类排除时请营养师协助。",
          "If cow’s milk is not used, explore a suitable fortified option such as soy drink alongside bread, egg or other food. The word plant does not guarantee nutritional equivalence. Allergy or multiple exclusions warrant dietetic support.",
        ),
        call(
          "运动与营养互相配合",
          "Movement and nutrition work together",
          "骨骼与肌肉也受日常活动影响。食物不是训练的替代，训练也不是不吃饭的理由；不需要先改变外形才有资格参加喜欢的活动。",
          "Bones and muscles also respond to activity. Food does not replace movement, and exercise does not justify missing food. A young person need not change appearance before joining an activity they enjoy.",
        ),
      ],
      ["protein", "bone-mass", "calcium", "vitamin-d", "fortification"],
      ["calcium", "vitamin-d", "protein-guide", "teen-niddk"],
    ),
    section(
      "teen-iron",
      l(
        "14.3 铁：留意来源，不凭疲倦诊断",
        "14.3 Iron: notice sources without diagnosing from fatigue",
      ),
      [
        p(
          "铁参与血红蛋白形成，帮助血液携带氧。成长会增加对营养的需要，有月经的人还会失血。肉、鱼、豆类与部分强化谷物可以提供铁；不同食物中铁的吸收方式和比例不同。",
          "Iron is needed for haemoglobin, which enables blood to carry oxygen. Growth creates nutritional demands, and menstruation involves blood loss. Meat, fish, pulses and some fortified cereals supply iron, with differences in how much is absorbed from different foods.",
        ),
        p(
          "把植物铁来源与含维生素 C 的食物一起吃，是可以考虑的搭配，例如豆类与番茄、饭后水果。它不是治疗贫血的方法。贫血指血红蛋白等低于适当范围的一类情况，原因不只有缺铁，需要评估。",
          "Pairing plant iron foods with vitamin C foods is a useful meal consideration, such as pulses with tomato or fruit after a meal. This is not treatment for anaemia. Anaemia involves measures such as haemoglobin below an appropriate range and has causes beyond iron deficiency; assessment is needed.",
        ),
        example(
          "提出问题而不是下结论",
          "Ask rather than conclude",
          "一位学生常疲倦又月经过多，可以向可信任成人与医生说明情况。不能仅凭这两句话自行认定缺铁，也不该只建议喝红糖水后忽略问题。",
          "A student with persistent fatigue and heavy periods can discuss this with a trusted adult and clinician. These details alone do not diagnose iron deficiency, and suggesting a sweet drink should not replace attention to the concern.",
        ),
        call(
          "不要自行用高剂量铁剂",
          "Do not self-prescribe high-dose iron",
          "需要补充多少、多久以及是否有其他原因，属于个人医疗评估。补充剂广告或同学经验不能代替检查与跟进。",
          "Whether supplementation is needed, for how long and for what cause belongs in individual care. Advertising or a classmate’s experience cannot replace assessment and follow-up.",
          "warning",
        ),
      ],
      ["iron", "haemoglobin", "anaemia", "menstruation"],
      ["iron", "teen-kent"],
    ),
    section(
      "teen-routine",
      l(
        "14.4 让上学日有实际可行的食物",
        "14.4 Make food workable on school days",
      ),
      [
        p(
          "规律进食不是规定所有人同一钟点吃饭，而是减少因赶时间、预算或没有准备而长时间没东西吃。早餐、午餐、晚餐和需要时的点心，能提供多次取得营养的机会。先询问日程，比简单命令“吃健康一点”更有用。",
          "Regular eating does not mean identical clock times for everyone. It reduces long gaps caused by rushing, cost or missing preparation. Meals and snacks when needed offer several opportunities for nourishment. Ask about the schedule before simply instructing someone to eat more healthily.",
        ),
        p(
          "点心可以补上长时间课外活动之间的需要，但饮料不应自动代替餐食。能量饮料的宣传可能把清醒感与真正营养混在一起；睡眠不足不能靠饮料解决。水容易取得、餐食能携带且符合食物安全，往往比菜单很漂亮更重要。",
          "A snack can bridge a long interval around activities, but drinks should not automatically replace meals. Energy-drink marketing can confuse stimulation with nourishment, and a drink does not solve inadequate sleep. Accessible water, portable food and safe storage often matter more than an attractive menu.",
        ),
        example(
          "早上十分钟",
          "Ten minutes in the morning",
          "前晚准备可携带的全麦面包和合适的蛋白质食物，水果放在书包旁。需要冷藏的食物用合适的冷藏方式携带，不能在马来西亚炎热环境放到下午再吃。",
          "Prepare portable wholemeal bread and a suitable protein food the night before, with fruit near the school bag. Keep perishable foods properly chilled; do not leave them in Malaysian heat until an afternoon break.",
        ),
        call(
          "让青少年参与选择",
          "Include the teenager in decisions",
          "一起选两种可接受、买得到的早餐，保留社交和口味空间。参与选择能发现成人没注意到的限制，例如食堂选择、携带不便或同伴压力。",
          "Choose two acceptable, available breakfasts together and allow room for taste and social life. Participation reveals constraints adults may miss, such as canteen options, carrying food or peer pressure.",
        ),
      ],
      ["regular-eating", "food-environment"],
      ["teen-niddk", "teen-kent", "teen-health"],
    ),
    section(
      "teen-body-image",
      l("14.5 身体形象与限制饮食", "14.5 Body image and restrictive eating"),
      [
        p(
          "身体形象是对自己身体的想法、感受与看法，并不等于身体健康的客观评估。社交媒体可能筛选光线、姿势和片段，不能告诉你一个人的健康。把食物分成“干净”与“罪恶”，容易让正常进食附带羞耻。",
          "Body image includes thoughts, feelings and perceptions about one’s body; it is not an objective health assessment. Social media selects lighting, poses and moments rather than revealing health. Labelling food clean or sinful can attach shame to ordinary eating.",
        ),
        p(
          "高度限制饮食可能包括跳餐、排除许多食物、刻意挨饿或用运动补偿进食。素食等选择不一定是问题，关键是是否满足需要、是否有恐惧与僵硬规则。饮食失调可发生在不同体型，不能等到明显消瘦才认真对待。",
          "Highly restrictive eating may involve skipping meals, excluding many foods, deliberate hunger or exercising to compensate for eating. A preference such as vegetarian eating is not automatically a problem; adequacy, fear and rigid rules matter. Eating disorders can occur across body sizes, so visible thinness is not a requirement for concern.",
        ),
        compare([
          {
            title: l("支持性的说法", "Supportive language"),
            items: [
              l(
                "最近吃饭是不是让你很担心？",
                "Has eating been worrying you lately?",
              ),
              l(
                "我们可以一起找可信任的专业帮助。",
                "We can find trusted professional support together.",
              ),
            ],
          },
          {
            title: l("可能增加压力", "Language that can add pressure"),
            items: [
              l(
                "你看起来不瘦，所以没问题。",
                "You do not look thin, so there is no problem.",
              ),
              l("只要有意志力就能控制。", "Willpower is all you need."),
            ],
          },
        ]),
        call(
          "及早求助",
          "Seek support early",
          "持续限制、对体型强烈焦虑、催吐、晕厥或其他健康变化应尽快联系医疗专业人员。家庭成员可以倾听、陪伴求助，而不是自行制定惩罚性饮食规则。",
          "Persistent restriction, intense body anxiety, vomiting to control weight, fainting or other health changes warrant prompt professional help. Families can listen and accompany the young person rather than impose punitive food rules.",
          "warning",
        ),
      ],
      ["body-image", "restriction", "eating-disorder"],
      ["eating-disorders", "teen-niddk"],
    ),
    section(
      "teen-practice",
      l(
        "14.6 一个支持成长的上学日计划",
        "14.6 Plan a school day that supports growth",
      ),
      [
        p(
          "从日程开始画时间线：起床、交通、课间、午餐、活动、回家。标出最容易漏餐的时段，并选择一项实际可行的支持。目标不是完美控制每口食物，而是让足够、可接受的选择更容易发生。",
          "Draw the timetable first: waking, travel, breaks, lunch, activities and home. Mark where food is most often missed and choose one practical support. The aim is easier access to enough acceptable food, not perfect control over every mouthful.",
        ),
        p(
          "检查是否有蛋白质来源、含钙食物、含铁食物、蔬果和饮水机会。还要写预算、保存方法与替代方案。计划由成人与青少年共同讨论，若有健康或饮食困难则加入专业建议。",
          "Check for protein, calcium and iron foods, produce and opportunities to drink. Include cost, storage and alternatives. Develop the plan jointly with the teenager, incorporating professional advice where health or eating difficulties exist.",
        ),
        example(
          "计划失效时如何调整",
          "When the plan fails",
          "如果早上常来不及吃坐下来的早餐，可以准备合适的便携版本，而不是责备懒惰。若根本吃不下或持续不舒服，则需要了解原因，不只是再换一种面包。",
          "If a seated breakfast rarely fits, prepare a suitable portable option rather than blaming laziness. Persistent inability to eat or discomfort needs exploration, not simply a different kind of bread.",
        ),
        call(
          "评价方法",
          "How to review it",
          "一周后问：是否更容易吃到东西？是否喜欢？有没有增加压力？不要以体重变化或和同学比较来评价计划。",
          "After a week ask: was food easier to access, was it acceptable, and did it add pressure? Do not judge the plan by weight changes or comparison with classmates.",
        ),
      ],
      ["regular-eating", "food-environment", "energy-needs"],
      ["teen-niddk", "teen-kent"],
    ),
  ],
  keyTerms: [
    term(
      "puberty",
      "青春期发育",
      "Puberty",
      "身体向生殖成熟发展的阶段，时间与速度因人而异。",
      "Physical development toward reproductive maturity, with timing and pace that vary.",
    ),
    term(
      "energy-needs",
      "能量需求",
      "Energy needs",
      "支持维持、成长和活动所需的能量，受个人情况影响。",
      "Energy supporting maintenance, growth and activity, influenced by individual context.",
    ),
    term(
      "body-composition",
      "身体组成",
      "Body composition",
      "身体中脂肪、肌肉、骨骼等组织构成的情况。",
      "The makeup of body tissues, including fat, muscle and bone.",
    ),
    term(
      "protein",
      "蛋白质",
      "Protein",
      "由氨基酸组成并参与组织及多种功能的营养素。",
      "An amino-acid-based nutrient contributing to tissues and many functions.",
    ),
    term(
      "bone-mass",
      "骨量",
      "Bone mass",
      "骨骼组织或矿物数量的概念，是骨健康的一部分。",
      "The amount of bone tissue or mineral, one aspect of skeletal health.",
    ),
    term(
      "calcium",
      "钙",
      "Calcium",
      "参与骨骼矿物结构和其他身体功能的必需矿物质。",
      "An essential mineral contributing to bone structure and other body functions.",
    ),
    term(
      "vitamin-d",
      "维生素 D",
      "Vitamin D",
      "支持钙吸收与骨健康等功能的脂溶性维生素。",
      "A fat-soluble vitamin supporting calcium absorption and bone health.",
    ),
    term(
      "fortification",
      "营养强化",
      "Fortification",
      "在生产食品时添加指定营养素的做法。",
      "The addition of specified nutrients during food manufacturing.",
    ),
    term(
      "iron",
      "铁",
      "Iron",
      "参与携氧和其他过程的必需矿物质。",
      "An essential mineral involved in oxygen transport and other processes.",
    ),
    term(
      "haemoglobin",
      "血红蛋白",
      "Haemoglobin",
      "红细胞中参与携带氧的含铁蛋白质。",
      "An iron-containing protein in red blood cells involved in carrying oxygen.",
    ),
    term(
      "anaemia",
      "贫血",
      "Anaemia",
      "血红蛋白等低于适当范围的情况，原因需要评估。",
      "A condition involving measures such as haemoglobin below an appropriate range, requiring evaluation of cause.",
    ),
    term(
      "menstruation",
      "月经",
      "Menstruation",
      "子宫内膜周期性脱落并伴随出血的生理过程。",
      "Periodic shedding of the uterine lining with blood loss.",
    ),
    term(
      "regular-eating",
      "规律进食",
      "Regular eating",
      "安排足够进食机会、减少非计划长时间漏餐的模式。",
      "Providing adequate eating opportunities and reducing unplanned long gaps.",
    ),
    term(
      "food-environment",
      "食物环境",
      "Food environment",
      "影响食物是否可取得、可负担和可接受的条件。",
      "Conditions affecting whether food is accessible, affordable and acceptable.",
    ),
    term(
      "body-image",
      "身体形象",
      "Body image",
      "对自己身体的想法与感受，不等于健康测量。",
      "Thoughts and feelings about one’s body, not equivalent to a health measurement.",
    ),
    term(
      "restriction",
      "限制饮食",
      "Restrictive eating",
      "限制数量或种类的模式；是否有害需结合原因与程度。",
      "Limiting food amounts or variety; harm depends on purpose, severity and context.",
    ),
    term(
      "eating-disorder",
      "饮食失调",
      "Eating disorder",
      "涉及进食行为与相关心理困难、需要专业支持的健康问题。",
      "A health condition involving eating behaviour and related psychological difficulties that needs professional support.",
    ),
  ],
  questions: [
    q(
      "needs",
      l(
        "同龄青少年的饭量必须相同吗？",
        "Must same-age teenagers eat identical amounts?",
      ),
      [
        l("必须", "Yes"),
        l("不，成长与活动等不同", "No; growth and activity differ"),
      ],
      1,
      l(
        "年龄只是影响需求的因素之一，不能直接复制别人或成人的限制。",
        "Age is only one factor; copying another person’s intake or adult restrictions is inappropriate.",
      ),
    ),
    q(
      "calcium",
      l(
        "选择植物饮料时还应看什么？",
        "What else matters when selecting a plant drink?",
      ),
      [
        l("包装是否写天然", "Whether the package says natural"),
        l("蛋白质、钙和强化内容", "Protein, calcium and fortification"),
        l("颜色是否像牛奶", "Whether it looks like milk"),
      ],
      1,
      l(
        "植物饮料的营养成分有差异，需看标签和个人适用性。",
        "Plant drinks differ in nutrients; check the label and suitability.",
      ),
    ),
    q(
      "iron",
      l("疲倦能直接证明缺铁吗？", "Does fatigue prove iron deficiency?"),
      [
        l("不能，原因需要评估", "No; causes need assessment"),
        l("能，马上补铁", "Yes; start iron immediately"),
      ],
      0,
      l(
        "疲倦有多种原因，缺铁和贫血也不是同一个判断。",
        "Fatigue has several causes, and iron deficiency and anaemia are not identical conclusions.",
      ),
    ),
    q(
      "support",
      l(
        "哪种回应更支持担心身材的青少年？",
        "Which response supports a teenager worried about body shape?",
      ),
      [
        l("先评论是否胖瘦", "Start by judging size"),
        l("要求严格控制食物", "Demand strict food control"),
        l(
          "倾听感受并在需要时一起求助",
          "Listen and seek support together when needed",
        ),
      ],
      2,
      l(
        "支持与及早求助比体型评价更有帮助，任何体型都可能有饮食困难。",
        "Support and early help are more useful than appearance judgements; eating difficulties can occur at any size.",
      ),
    ),
  ],
  practicalTask: l(
    "与一位虚构青少年共同设计上学日时间线。安排可行的三餐、需要时的点心与饮水，标出蛋白质、钙、铁来源及保存方法，并写两句不评论体型的支持性语言。",
    "Co-design a school-day timetable for a fictional teenager. Include feasible meals, snacks when needed and drinks; identify protein, calcium and iron foods and safe storage, then write two supportive statements without body commentary.",
  ),
  summary: l(
    [
      "青春期需要支持成长，不是复制成人限制。",
      "蛋白质、钙、维生素 D 和铁值得留意。",
      "标签帮助判断强化替代品。",
      "规律与可取得的食物比完美菜单更实际。",
      "身体形象困扰与限制饮食值得认真倾听和求助。",
    ],
    [
      "Adolescent growth needs support rather than adult restrictions.",
      "Protein, calcium, vitamin D and iron deserve attention.",
      "Labels help assess fortified alternatives.",
      "Routine and accessible food matter more than a perfect menu.",
      "Body distress and restrictive eating deserve listening and support.",
    ],
  ),
  sourceIds: ["teen-niddk", "teen-kent", "eating-disorders"],
});
