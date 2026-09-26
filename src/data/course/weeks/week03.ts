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
export const week03Lesson = lesson({
  introduction: l(
    "蛋白质不只是健身的人关心的东西。皮肤修复、酶的工作、身体组织的更新，都离不开蛋白质。本周先认识身体如何把食物中的蛋白质拆开再利用，再把这些知识放进普通家庭的早餐。",
    "Protein is not only a concern for people who train at a gym. Skin repair, enzyme activity and renewal of body tissues all involve protein. This week follows how the body takes food proteins apart and reuses their components, then brings that understanding into an ordinary family breakfast.",
  ),
  objectives: l(
    [
      "解释蛋白质与氨基酸的关系。",
      "区分必需与非必需氨基酸。",
      "正确理解完全与不完全蛋白质。",
      "比较动物和植物来源的整体食物。",
      "根据家庭情况设计早餐，而不是追求最大克数。",
    ],
    [
      "Explain how proteins relate to amino acids.",
      "Distinguish essential and non-essential amino acids.",
      "Interpret complete and incomplete protein accurately.",
      "Compare whole foods from animal and plant sources.",
      "Plan a family breakfast without chasing the largest gram count.",
    ],
  ),
  sections: [
    section(
      "protein-building",
      l(
        "3.1 身体不断拆建的材料",
        "3.1 Materials for an active rebuilding system",
      ),
      [
        p(
          "蛋白质由氨基酸连接成长链，再折叠成不同形状。形状与功能有关：有些蛋白形成组织结构，有些作为酶帮助反应发生，还有些参与运输或免疫。把蛋白质只理解成肌肉，会漏掉它的大部分角色。",
          "Proteins are chains of amino acids folded into different shapes. Shape helps determine function: some form structures, some are enzymes that assist reactions, and others help with transport or immune functions. Thinking only of muscle misses much of what protein does.",
        ),
        p(
          "身体里的蛋白质不是一次建好就永久不变。许多组织不断更新，需要合适的原料与能量。吃下鱼肉并不是让那块鱼肉直接变成你的肌肉；它先要经过消化，身体再按自己的需要重新组装。",
          "Body proteins are not built once and left unchanged forever. Tissues are continually renewed, requiring suitable materials and energy. Eating fish does not move a piece of fish directly into your muscle. It must first be digested, and the body then assembles proteins according to its own needs.",
        ),
        example(
          "像字母组成不同词语",
          "Like letters forming different words",
          "同样一组字母可以组成不同词语。氨基酸的顺序与组合也能形成不同蛋白质。这是帮助理解的比喻，不表示所有氨基酸可以随意互相替代。",
          "A set of letters can form many words. Different amino-acid sequences similarly form different proteins. The analogy is useful, but it does not mean every amino acid can freely substitute for another.",
        ),
        call(
          "蛋白质也能供能",
          "Protein can also provide energy",
          "供能是蛋白质的用途之一，但足够能量与整体饮食同样重要，不是只加蛋白就能解决一切。",
          "Providing energy is one role, but adequate energy and the whole diet matter too. Adding protein alone does not solve every nutritional problem.",
        ),
      ],
      ["protein", "amino", "enzyme"],
      ["protein-guide", "nutrition-terms"],
    ),
    section(
      "essential-amino",
      l(
        "3.2 “必需”不等于“更重要”",
        "3.2 Essential does not mean more important",
      ),
      [
        p(
          "必需氨基酸是身体不能自行制造足够数量、必须由饮食提供的氨基酸。成年人有九种。非必需氨基酸并不是身体不需要，而是一般情况下身体能够合成。某些疾病或生长情境会改变合成是否足够，叫作条件性必需。",
          "Essential amino acids cannot be made by the body in sufficient amounts and must come from the diet. Adults have nine. Non-essential does not mean unnecessary: it means the body can normally make them. Some illness or growth situations can alter whether synthesis is sufficient; this is called conditional essentiality.",
        ),
        p(
          "这些词描述来源要求，不是营养价值排行榜。你不需要购买九种单独的产品，也不必每天背诵名称。对普通家庭而言，更有用的是识别经常吃的蛋白质食物，注意份量、多样性与食物获取是否稳定。",
          "These words describe supply requirements, not a ranking of worth. You do not need nine separate products or a daily memory test of their names. For a family, it is more useful to identify regular protein foods and consider amounts, variety and reliable access to them.",
        ),
        example(
          "看见术语时怎样解释",
          "How to explain the terminology",
          "如果孩子问“非必需是不是可以不吃”，可以回答：身体仍然要用这些氨基酸，只是通常可以自己制造。必需的则要从日常食物得到。",
          "If a child asks whether non-essential means dispensable, explain that the body still uses those amino acids but can usually make them. Essential ones must be supplied through everyday food.",
        ),
        call(
          "不把术语变成购物清单",
          "Do not turn vocabulary into a shopping list",
          "氨基酸补充剂不是本周目标。医学情境下的特殊营养安排需要专业评估。",
          "Amino-acid supplements are not the objective of this week. Special nutrition arrangements for medical situations need professional assessment.",
        ),
      ],
      ["essential", "nonessential", "conditional"],
      ["protein-guide"],
    ),
    section(
      "protein-digestion",
      l("3.3 从鸡蛋到可吸收的单位", "3.3 From an egg to absorbable units"),
      [
        p(
          "胃酸帮助蛋白质展开，胃中的蛋白酶开始切开长链。进入小肠后，胰腺释放的酶和肠壁上的酶继续分解。小肠吸收氨基酸以及一些很短的肽；进入身体后，它们参与新的合成与其他代谢过程。",
          "Stomach acid helps unfold proteins, and stomach proteases begin cutting their chains. In the small intestine, pancreatic and intestinal enzymes continue the breakdown. Amino acids and some very short peptides are absorbed, then used in new synthesis and other metabolic processes.",
        ),
        p(
          "消化是分解，吸收是跨过肠壁，两者并不相同。食物结构、加工和个人胃肠情况影响利用程度，但这不意味着普通人需要用粉末取代食物。标签上的蛋白质克数是摄入信息，不是某块肌肉会增加多少的预测。",
          "Digestion is breakdown; absorption is movement across the intestinal lining. Structure, processing and a person’s digestive health influence utilisation, but this does not mean ordinary people need powders instead of food. A label’s protein grams describe intake, not how much a particular muscle will grow.",
        ),
        example(
          "熟食与实际选择",
          "Cooking and practical choices",
          "鸡蛋、鱼和豆腐可用不同安全烹调方式准备。选择容易咀嚼、家人接受的做法，有时比追求一个抽象的“吸收率冠军”更实际。吞咽或持续消化困难要寻求帮助。",
          "Eggs, fish and tofu can be prepared safely in many ways. Choosing a texture that is easy to chew and acceptable to the family may be more practical than seeking an abstract absorption champion. Persistent digestive or swallowing difficulties warrant help.",
        ),
        call(
          "补充剂不能代替基本照顾",
          "Supplements do not replace basic care",
          "持续食欲下降、体重无意下降或吞咽困难，不应只靠增加蛋白粉处理。",
          "Persistent poor appetite, unintentional weight loss or swallowing difficulty should not be managed merely by adding protein powder.",
          "warning",
        ),
      ],
      ["peptide", "protease", "absorption"],
      ["digestion"],
    ),
    section(
      "complete-protein",
      l(
        "3.4 完全蛋白质与饮食组合",
        "3.4 Complete proteins and dietary variety",
      ),
      [
        p(
          "“完全蛋白质”通常表示食物提供所有必需氨基酸，且比例足以支持需要。“不完全”常指一种或多种必需氨基酸相对较少，并不是完全没有蛋白质，更不是有害。食物不是只有“合格”和“不合格”两格。",
          "Complete protein usually means a food provides all essential amino acids in adequate proportions. Incomplete often means one or more essential amino acids are relatively limited, not that the food has no protein or is harmful. Foods do not fit into only pass and fail boxes.",
        ),
        p(
          "鱼、蛋和奶类通常提供较完整的氨基酸组合。大豆也是重要植物例子，不能简单地说所有植物蛋白都不完全。谷物与豆类的氨基酸特点不同，日常多样搭配有帮助。一般健康成年人不必把互补食物精确安排在同一口或同一餐。",
          "Fish, eggs and dairy foods generally provide a complete amino-acid pattern. Soy is an important plant example, so not all plant proteins are incomplete. Grains and legumes have different amino-acid patterns and variety helps. Generally healthy adults do not have to combine complementary foods in the same mouthful or exact meal.",
        ),
        compare([
          {
            title: l("看单一食物", "Look at one food"),
            items: [
              l(
                "关注蛋白质含量与氨基酸特点。",
                "Consider protein amount and amino-acid pattern.",
              ),
              l(
                "不能只靠“完全”判断全部营养。",
                "Complete does not describe all nutritional qualities.",
              ),
            ],
          },
          {
            title: l("看一整天", "Look across the day"),
            items: [
              l(
                "谷物、豆类、豆制品与其他来源互相补充。",
                "Grains, legumes, soy foods and other sources contribute together.",
              ),
              l(
                "总量、能量与多样性也重要。",
                "Overall amount, energy and variety matter too.",
              ),
            ],
          },
        ]),
        example(
          "马来西亚家常组合",
          "A familiar Malaysian combination",
          "早餐有全麦面包和豆浆，午餐有米饭和豆腐，晚餐再有鱼或豆类，都能对一天的组合有贡献。饮料是否加糖、实际豆含量与份量仍要看清。",
          "Wholemeal bread with soy drink at breakfast, rice with tofu at lunch, and fish or beans at dinner all contribute across the day. Check added sugar, actual soy content and amounts rather than assuming every drink is equivalent.",
        ),
      ],
      ["complete", "complementary"],
      ["protein-guide"],
    ),
    section(
      "protein-package",
      l("3.5 比较的是食物，不只有克数", "3.5 Compare foods, not just grams"),
      [
        p(
          "蛋白质食物同时带来其他成分。豆类可以提供纤维，鱼的脂肪组成与加工肉不同；腌制、酱汁和调味会影响钠。只比较蛋白质克数，就像买一套餐具却只数汤匙，忽略其他东西。",
          "Protein foods come with other components. Beans can supply fibre, fish has a different fat profile from processed meat, and curing or sauces affect sodium. Comparing protein grams alone is like buying a set of dishes while counting only the spoons.",
        ),
        p(
          "需要量受年龄、体型、活动、成长、怀孕和健康情况影响。日常参考值针对特定人群，不能直接当作每个人的处方。对有肾病等疾病的人，自行大幅提高蛋白质可能不适合；对进食不足的人也需要找出原因，而不只计算一个数字。",
          "Requirements vary with age, body size, activity, growth, pregnancy and health. Reference values apply to specified populations, not as prescriptions for everyone. Large self-directed increases may be unsuitable for someone with kidney disease. Poor intake also calls for understanding the cause, not merely calculating a number.",
        ),
        example(
          "同样方便，不同组合",
          "Convenient foods can differ",
          "比较鸡蛋、豆腐与香肠时，除了蛋白质还看看钠、脂肪、价格、准备时间和家人偏好。适合的选择可能是轮换来源，不一定把其中一种永久排除。",
          "When comparing eggs, tofu and sausages, also consider sodium, fat, price, preparation time and family preferences. A useful plan might rotate sources rather than permanently banning one item.",
        ),
        call(
          "家庭餐桌，不是增肌竞赛",
          "A family table, not a muscle contest",
          "本周不设最大化蛋白质目标，也不推荐个别补充剂。",
          "This week sets no protein-maximisation target and recommends no individual supplement.",
        ),
      ],
      ["requirements", "food-package"],
      ["protein-guide", "who"],
    ),
    section(
      "protein-breakfast",
      l(
        "3.6 设计能够执行的早餐",
        "3.6 Build a breakfast that can actually happen",
      ),
      [
        p(
          "先确定情境：谁吃、几点出门、有多少准备时间、是否有过敏或特别医疗需要。再选一种主食、一种容易获得的蛋白质食物，加上合适的蔬果和饮料。不是每餐都要完美，但可以避免只剩甜饮料撑到午餐。",
          "Begin with context: who is eating, departure time, preparation time, allergies and any medical needs. Then choose a staple, an accessible protein food, suitable fruit or vegetables and a drink. No meal has to be perfect, but planning can help when breakfast otherwise becomes only a sweet drink.",
        ),
        example(
          "三个可调整的方向",
          "Three adaptable starting points",
          "全麦面包配鸡蛋与木瓜；燕麦配奶或合适的强化豆饮和水果；家常粥加鱼或豆腐，再配蔬菜。它们是组合示例，份量、过敏与文化偏好需要调整，不是固定处方。",
          "Try wholemeal bread with egg and papaya; oats with milk or an appropriate fortified soy drink and fruit; or porridge with fish or tofu and vegetables. These are starting combinations. Amounts, allergies and cultural preferences need adjustment, not a fixed prescription.",
        ),
        p(
          "写下为什么选这份早餐：蛋白来源是什么，其他食物补充了什么，预算和准备步骤是否合理。再设一个备用方案，例如忙碌时使用前晚准备好的食材。能重复执行的计划，比只在周末做一次的复杂菜单更有价值。",
          "Explain why your breakfast works: identify its protein source, what the other foods add, and whether cost and preparation are realistic. Create a backup for rushed mornings, such as ingredients prepared the night before. A repeatable plan is more useful than an elaborate menu possible only once.",
        ),
        call(
          "用理由结束，而不是用标签",
          "Finish with reasons, not labels",
          "在笔记里写一个可执行的早餐和一个替代方案。无需猜测没有标签食物的精确蛋白克数。",
          "Record one feasible breakfast and one alternative. You do not need to guess exact protein grams for unlabelled foods.",
        ),
      ],
      ["food-package"],
      ["protein-guide", "plate"],
    ),
  ],
  keyTerms: [
    term(
      "protein",
      "蛋白质",
      "Protein",
      "由氨基酸构成，参与结构、运输和多种功能的营养素。",
      "A nutrient made of amino acids with structural, transport and many other functions.",
    ),
    term(
      "amino",
      "氨基酸",
      "Amino acid",
      "组成蛋白质的小分子单位。",
      "A small molecular unit used to build proteins.",
    ),
    term(
      "enzyme",
      "酶",
      "Enzyme",
      "帮助身体化学反应发生的物质，许多酶是蛋白质。",
      "A substance helping chemical reactions occur; many enzymes are proteins.",
    ),
    term(
      "essential",
      "必需氨基酸",
      "Essential amino acid",
      "身体不能制造足够数量、需要饮食提供的氨基酸。",
      "An amino acid the body cannot make sufficiently and must obtain through diet.",
    ),
    term(
      "nonessential",
      "非必需氨基酸",
      "Non-essential amino acid",
      "身体通常可合成、但仍然需要的氨基酸。",
      "An amino acid the body normally synthesises but still needs.",
    ),
    term(
      "conditional",
      "条件性必需",
      "Conditionally essential",
      "某些生长或疾病情境使身体合成不足的情况。",
      "A situation where synthesis becomes insufficient under particular growth or illness conditions.",
    ),
    term(
      "peptide",
      "肽",
      "Peptide",
      "由少量氨基酸连接形成的短链。",
      "A short chain of linked amino acids.",
    ),
    term(
      "protease",
      "蛋白酶",
      "Protease",
      "帮助分解蛋白质链的酶。",
      "An enzyme that helps break down protein chains.",
    ),
    term(
      "absorption",
      "吸收",
      "Absorption",
      "分解后的物质穿过肠壁进入体内。",
      "Movement of digested substances across the intestinal lining.",
    ),
    term(
      "complete",
      "完全蛋白质",
      "Complete protein",
      "提供所有必需氨基酸且比例合适的蛋白质来源。",
      "A protein source supplying all essential amino acids in suitable proportions.",
    ),
    term(
      "complementary",
      "互补蛋白来源",
      "Complementary protein sources",
      "氨基酸特点不同、能在饮食中互相补充的来源。",
      "Sources with differing amino-acid patterns that contribute together in a diet.",
    ),
    term(
      "requirements",
      "需要量",
      "Requirements",
      "为支持身体功能所需的量，会因人群和情况而异。",
      "Amounts needed to support function, varying by population and circumstances.",
    ),
    term(
      "food-package",
      "整体食物组合",
      "Food package",
      "一种食物连同蛋白质一起提供的脂肪、纤维、钠等成分。",
      "The fats, fibre, sodium and other components accompanying protein in a food.",
    ),
  ],
  questions: [
    q(
      "essential",
      l("“非必需”表示什么？", "What does non-essential mean?"),
      [
        l("身体完全不需要。", "The body does not need it."),
        l(
          "身体通常可以合成，但仍需要它。",
          "The body can usually make it but still needs it.",
        ),
      ],
      1,
      l(
        "这个词描述来源要求，不是重要程度。",
        "The term concerns supply, not importance.",
      ),
    ),
    q(
      "complete",
      l(
        "“不完全”蛋白质食物一定没有用吗？",
        "Is an incomplete protein food useless?",
      ),
      [
        l(
          "不是，可以通过多样饮食获得合适组合。",
          "No, variety can provide a suitable overall pattern.",
        ),
        l("是，必须完全避免。", "Yes, it must be avoided."),
      ],
      0,
      l(
        "相对有限的一种氨基酸不等于没有营养。",
        "A relatively limited amino acid does not make a food nutritionally empty.",
      ),
    ),
    q(
      "same-meal",
      l(
        "一般健康成年人必须同一餐吃所有互补来源吗？",
        "Must generally healthy adults combine all complementary sources in one meal?",
      ),
      [
        l("必须精确同餐。", "Always in exactly the same meal."),
        l(
          "通常不必，更关注整天的多样与足够摄入。",
          "Usually not; variety and adequate intake across the day matter.",
        ),
      ],
      1,
      l(
        "无需把日常吃饭变成精密的氨基酸配对游戏。",
        "Everyday eating need not become a precise amino-acid matching game.",
      ),
    ),
    q(
      "breakfast",
      l(
        "选早餐时，蛋白质克数之外还应看什么？",
        "What matters beyond breakfast protein grams?",
      ),
      [
        l("只有包装宣传。", "Only packaging claims."),
        l(
          "其他营养、时间、预算与家庭需要。",
          "Other nutrients, time, cost and family needs.",
        ),
      ],
      1,
      l(
        "可执行的整体搭配才是实践重点。",
        "A feasible overall combination is the practical goal.",
      ),
    ),
  ],
  practicalTask: l(
    "为普通马来西亚家庭设计一份早餐与一个替代方案。写下主食、蛋白质来源、蔬果和饮料，解释时间、预算与营养方面的理由。",
    "Design a breakfast and an alternative for an ordinary Malaysian family. Identify the staple, protein source, fruit or vegetables and drink, explaining time, cost and nutritional reasoning.",
  ),
  summary: l(
    [
      "蛋白质由氨基酸构成，功能不只有肌肉。",
      "必需和非必需描述身体能否合成。",
      "消化先分解，再吸收和重新利用。",
      "多样来源帮助形成合适的氨基酸组合。",
      "早餐要看整体搭配与现实限制。",
    ],
    [
      "Protein consists of amino acids and does more than build muscle.",
      "Essentiality concerns the ability to synthesise enough.",
      "Digestion precedes absorption and reuse.",
      "Varied sources contribute to an appropriate amino-acid pattern.",
      "Breakfast planning considers the whole meal and practical constraints.",
    ],
  ),
  sourceIds: ["protein-guide", "digestion", "who", "plate"],
});
