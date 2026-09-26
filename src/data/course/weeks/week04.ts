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
export const week04Lesson = lesson({
  introduction: l(
    "“少油”听起来很简单，但脂肪的种类、替代方式和整餐搭配都重要。本周把食物里的脂肪、食物里的胆固醇，以及验血报告上的脂蛋白分开。理解这些区别，才能不被“零胆固醇”或“低脂”的字眼带着走。",
    "“Use less oil” sounds simple, but fat types, replacements and the whole meal matter. This week separates dietary fat, dietary cholesterol and the lipoproteins measured in blood tests. Understanding those differences helps you look beyond zero-cholesterol or low-fat marketing.",
  ),
  objectives: l(
    [
      "说明脂肪的基本作用。",
      "区分饱和、不饱和与反式脂肪。",
      "认识 omega-3 与 omega-6。",
      "区分食物胆固醇、LDL、HDL 和甘油三酯。",
      "用替代思维讨论家庭用油。",
    ],
    [
      "Explain the basic roles of fat.",
      "Distinguish saturated, unsaturated and trans fats.",
      "Recognise omega-3 and omega-6.",
      "Separate dietary cholesterol, LDL, HDL and triglycerides.",
      "Use replacement thinking for family cooking.",
    ],
  ),
  sections: [
    section(
      "why-fat",
      l("4.1 脂肪有工作要做", "4.1 Fat has useful jobs"),
      [
        p(
          "脂肪提供能量，是细胞结构的一部分，也帮助吸收维生素 A、D、E、K。身体还能储存脂肪供以后利用。食物中的脂肪不仅存在于看得到的食用油，也存在于坚果、鱼、蛋、奶和许多加工食品中。",
          "Fat supplies energy, contributes to cell structures and helps absorption of vitamins A, D, E and K. The body can also store fat for later use. Dietary fat includes more than visible cooking oil: it occurs in nuts, fish, eggs, dairy foods and many processed foods.",
        ),
        p(
          "多数食物脂肪以甘油三酯形式存在，可想成一个骨架连接三条脂肪酸。脂肪酸结构不同，性质也不同。同一瓶油通常含多种脂肪酸，称某油“富含不饱和脂肪”并不表示它完全没有饱和脂肪。",
          "Most food fat is in triglycerides: a backbone joined to three fatty acids. Different fatty-acid structures have different properties. One oil usually contains several kinds, so being rich in unsaturated fat does not mean it contains no saturated fat.",
        ),
        example(
          "餐桌上看不见的油",
          "Fat you cannot see as oil",
          "蒸鱼不一定零脂肪；鱼本身可能含脂肪。烤饼干没有一层明显油，也可能有较多脂肪。观察烹调方法有用，但还要看食材和配料。",
          "Steamed fish is not necessarily fat-free: the fish itself may contain fat. Biscuits may contain substantial fat without a visible oily layer. Cooking methods help you understand a meal, but ingredients also matter.",
        ),
        call(
          "不是越少越好",
          "Less is not always better",
          "脂肪不是应当消灭的营养素。适合的量与种类要放在整个人的饮食和需要中讨论。",
          "Fat is not a nutrient to eliminate. Suitable amounts and types belong in the context of the whole diet and individual needs.",
        ),
      ],
      ["fatty-acid", "triglyceride"],
      ["fats-guide", "who"],
    ),
    section(
      "fat-types",
      l("4.2 三类名称，先理解结构", "4.2 Three names: start with structure"),
      [
        p(
          "饱和脂肪酸的碳链没有碳碳双键；不饱和脂肪酸有一个或多个双键。你不必画化学式，但这些结构有助于理解为什么不同油脂的性质不同。许多富含饱和脂肪的油脂室温较硬，不过室温状态不是可靠的完整鉴别法。",
          "Saturated fatty-acid chains have no carbon–carbon double bonds; unsaturated chains have one or more. You need not draw chemical structures, but they help explain differing properties. Many saturated-fat-rich fats are firmer at room temperature, although room-temperature texture is not a reliable complete identification method.",
        ),
        compare([
          {
            title: l("饱和脂肪", "Saturated fat"),
            items: [
              l(
                "常见于牛油、肥肉、棕榈油和椰子油。",
                "Found in butter, fatty meat, palm and coconut oils.",
              ),
              l(
                "植物来源不保证饱和脂肪低。",
                "Plant origin does not guarantee little saturated fat.",
              ),
            ],
          },
          {
            title: l("不饱和脂肪", "Unsaturated fat"),
            items: [
              l(
                "分单不饱和与多不饱和。",
                "Includes monounsaturated and polyunsaturated types.",
              ),
              l(
                "许多植物油、坚果和鱼可提供。",
                "Many vegetable oils, nuts and fish provide these.",
              ),
            ],
          },
          {
            title: l("反式脂肪", "Trans fat"),
            items: [
              l(
                "一种具有特定双键空间形状的不饱和脂肪。",
                "Unsaturated fat with a particular double-bond arrangement.",
              ),
              l(
                "工业部分氢化油曾是重要来源。",
                "Industrially partially hydrogenated oil has been an important source.",
              ),
            ],
          },
        ]),
        p(
          "“不饱和”并不意味着可以忽略反式结构。工业反式脂肪与较高心血管风险相关，应尽量避免。不同地区法规和食品配方会改变来源，旧视频里的具体包装例子不一定反映今天的产品。",
          "The word unsaturated does not remove the importance of trans structure. Industrial trans fats are associated with greater cardiovascular risk and should be avoided as far as possible. Regulations and reformulation change sources, so old video packaging examples may not describe current products.",
        ),
        call(
          "看实际标签",
          "Read the current label",
          "视频帮助理解结构；购买判断仍以当前配料与营养标签为准。",
          "Use the video to understand structure; use current ingredients and nutrition labels for shopping decisions.",
        ),
      ],
      ["saturated", "unsaturated", "trans"],
      ["fats-guide", "who"],
    ),
    section(
      "omega",
      l("4.3 Omega 不是产品等级", "4.3 Omega is not a product quality grade"),
      [
        p(
          "Omega-3 和 omega-6 是多不饱和脂肪酸家族，名称与双键位置有关。ALA 属于 omega-3，亚油酸属于 omega-6，都是身体需要从饮食得到的必需脂肪酸。它们不是互相敌对的“好”和“坏”阵营。",
          "Omega-3 and omega-6 are families of polyunsaturated fatty acids named for double-bond position. ALA is an omega-3 and linoleic acid is an omega-6; both are essential fatty acids obtained from food. These families are not opposing good and bad teams.",
        ),
        p(
          "鱼类可提供 EPA 和 DHA 这两种 omega-3；一些坚果、种子和植物油提供 ALA。身体把 ALA 转成 EPA、DHA 的能力有限，所以这些名称不是完全可以互换。知道来源差异，并不等于每个人都需要鱼油补充剂。",
          "Fish can provide the omega-3s EPA and DHA, while some nuts, seeds and plant oils provide ALA. Conversion of ALA to EPA and DHA is limited, so the names are not fully interchangeable. Knowing this difference does not mean everyone needs a fish-oil supplement.",
        ),
        example(
          "日常选择先于神奇比例",
          "Food choices before a magic ratio",
          "家庭可以轮换鱼、豆类、坚果与合适的烹调用油，不必为了追一个网上的 omega 比例购买昂贵产品。鱼类选择还要考虑当地可得性、食物安全与个人情况。",
          "A family can rotate fish, beans, nuts and suitable cooking oils without buying expensive products to chase an online omega ratio. Fish choices also involve availability, food safety and personal circumstances.",
        ),
        call(
          "不自行开补充剂处方",
          "Do not prescribe supplements to yourself",
          "鱼油等产品的剂量、药物相互作用和适用性需要专业判断；本周学习食物与概念。",
          "Supplement doses, medicine interactions and suitability require professional judgement. This week teaches food and concepts.",
          "warning",
        ),
      ],
      ["omega3", "omega6", "essential-fat"],
      ["omega-guide"],
    ),
    section(
      "cholesterol",
      l("4.4 三件常被混在一起的事", "4.4 Three things often mixed together"),
      [
        p(
          "胆固醇是一种身体使用的脂类物质，参与细胞膜等结构。身体本身能够制造它，部分动物性食物也含胆固醇。膳食胆固醇不是总脂肪的同义词；植物油可能不含胆固醇，但仍含脂肪和能量。",
          "Cholesterol is a lipid substance used in structures such as cell membranes. The body makes it, and some animal foods contain it. Dietary cholesterol is not another word for total fat. A plant oil can contain no cholesterol while still containing fat and energy.",
        ),
        p(
          "胆固醇不能独自在血液中顺畅运输，需要脂蛋白颗粒携带。LDL 和 HDL 是不同颗粒类别；验血报告的 LDL-C、HDL-C 指这些颗粒携带的胆固醇量。称“坏”和“好”只是简写，不表示身体完全不需要 LDL，或 HDL 数字越高就一定越安全。",
          "Cholesterol travels in blood within lipoprotein particles. LDL and HDL are different particle classes; LDL-C and HDL-C refer to the cholesterol carried within them. Bad and good are shorthand, not a statement that the body needs no LDL or that ever-higher HDL always guarantees safety.",
        ),
        example(
          "零胆固醇的椰子油",
          "Cholesterol-free coconut oil",
          "植物油可以标零胆固醇，但椰子油仍富含饱和脂肪。这个例子说明包装上的一个真实信息，不能概括产品所有特点。",
          "A plant oil may truthfully be cholesterol-free while coconut oil remains rich in saturated fat. One true fact on packaging cannot summarise all of a product’s properties.",
        ),
        call(
          "报告要整体解释",
          "Interpret a blood report in context",
          "血脂结果涉及多个指标与个人风险，不能凭一个食物记录诊断。医生会结合病史等信息评估。",
          "Blood lipids involve several measures and personal risk. A food diary cannot diagnose a lipid disorder; clinicians interpret results with history and other information.",
          "warning",
        ),
      ],
      ["cholesterol", "lipoprotein", "ldl", "hdl"],
      ["heart-lipids"],
    ),
    section(
      "replacement",
      l(
        "4.5 减少以后，用什么替代？",
        "4.5 If you reduce something, what replaces it?",
      ),
      [
        p(
          "讨论脂肪时，替代对象很关键。把部分饱和脂肪换成不饱和脂肪，与把它换成大量精制淀粉和糖，不是相同的改变。单说“少脂肪”没有说明总饮食发生了什么变化。",
          "Replacement matters. Replacing some saturated fat with unsaturated fat is not the same change as replacing it with large amounts of refined starch and sugar. “Less fat” alone does not describe what happened to the overall diet.",
        ),
        p(
          "用油的类型与用量可以一起考虑。合适植物油也不是无限量添加的理由。蒸、煮、炖和炒可以轮换，但不能靠一种烹调方式掩盖整餐缺少蔬菜、纤维或蛋白质的问题。",
          "Oil type and amount can be considered together. A suitable vegetable oil is not a reason to add unlimited quantities. Rotate steaming, boiling, stewing and stir-frying, but do not use one cooking method to overlook a meal lacking vegetables, fibre or protein.",
        ),
        example(
          "一顿普通晚饭的小调整",
          "A small dinner adjustment",
          "与其把所有带油的菜撤掉，可以讨论少一些肥肉，加入豆腐或鱼，并调整酱汁和用油。家人愿意吃、做饭者做得到，比一个难以执行的“零油菜单”更实际。",
          "Rather than removing every dish containing oil, discuss somewhat less fatty meat, adding tofu or fish, and adjusting sauces and cooking oil. Acceptance and feasibility are more useful than an impractical zero-oil menu.",
        ),
        call(
          "反思问题",
          "Reflection",
          "“脂肪是不是越少越健康？”回答时至少提到功能、种类、替代食物与个人需要。",
          "Is less fat always healthier? Include roles, types, replacement foods and individual needs in your answer.",
        ),
      ],
      ["replacement"],
      ["fats-guide", "who"],
    ),
    section(
      "fat-labels",
      l("4.6 在厨房里做一次比较", "4.6 Compare what is in your kitchen"),
      [
        p(
          "拿两种食用油和一种包装食品，记录每100克的总脂肪与饱和脂肪，查看是否列出反式脂肪及配料。不同地区标示规则可能不同；没有列出某项不能自动写成零。用同一单位比较，不要把一汤匙与100克直接并排。",
          "Take two cooking oils and one packaged food. Record total and saturated fat per 100 g, and look for trans fat and ingredients. Labelling rules vary, so absence of a listed nutrient is not automatically zero. Compare equal units, not one tablespoon against 100 g.",
        ),
        p(
          "然后回到实际使用量。即使两种油脂含量相似，每次用多少、频率多高和整餐搭配仍然不同。写下一个你能解释的调整，以及还不知道的部分，例如餐馆用了什么油。不确定的信息可以诚实保留。",
          "Then return to actual use. Even if two oils have similar total fat, the amount used, frequency and rest of the meal differ. Record one change you can explain and what remains unknown, such as a restaurant’s cooking oil. Uncertainty can be recorded honestly.",
        ),
        example(
          "避免一个常见算错",
          "Avoid a common counting mistake",
          "标签写总脂肪10克、饱和脂肪3克，并不是总共13克。饱和脂肪通常已经包含在总脂肪之中。每100克与每份的数字也不要混用。",
          "Total fat of 10 g with 3 g saturated fat does not mean 13 g altogether. Saturated fat is generally included in total fat. Keep per-100-g and per-serving figures separate.",
        ),
        call(
          "实践的成果",
          "What the activity should produce",
          "一张比较表、一项现实调整，以及一段不把脂肪简单妖魔化的解释。",
          "Produce a comparison, one realistic adjustment and an explanation that does not treat all fat as harmful.",
        ),
      ],
      ["saturated", "portion"],
      ["fats-guide"],
    ),
  ],
  keyTerms: [
    term(
      "fatty-acid",
      "脂肪酸",
      "Fatty acid",
      "组成许多脂肪分子的链状成分，其结构影响性质。",
      "A chain-like component of many fats whose structure affects its properties.",
    ),
    term(
      "triglyceride",
      "甘油三酯",
      "Triglyceride",
      "由一个甘油骨架和三条脂肪酸组成，也是血脂指标之一。",
      "A glycerol backbone with three fatty acids; triglycerides are also measured in blood.",
    ),
    term(
      "saturated",
      "饱和脂肪",
      "Saturated fat",
      "脂肪酸链没有碳碳双键的一类脂肪。",
      "Fat with fatty-acid chains containing no carbon–carbon double bonds.",
    ),
    term(
      "unsaturated",
      "不饱和脂肪",
      "Unsaturated fat",
      "含一个或多个碳碳双键的脂肪酸构成的脂肪。",
      "Fat containing fatty acids with one or more carbon–carbon double bonds.",
    ),
    term(
      "trans",
      "反式脂肪",
      "Trans fat",
      "双键周围具有特定空间排列的不饱和脂肪。",
      "Unsaturated fat with a particular spatial arrangement around a double bond.",
    ),
    term(
      "omega3",
      "欧米伽3",
      "Omega-3",
      "按双键位置命名的多不饱和脂肪酸家族，包括 ALA、EPA、DHA。",
      "A polyunsaturated fatty-acid family named for double-bond position, including ALA, EPA and DHA.",
    ),
    term(
      "omega6",
      "欧米伽6",
      "Omega-6",
      "包括必需脂肪酸亚油酸的多不饱和脂肪酸家族。",
      "A polyunsaturated family including the essential fatty acid linoleic acid.",
    ),
    term(
      "essential-fat",
      "必需脂肪酸",
      "Essential fatty acid",
      "身体不能自行制造足够、需要从饮食获得的脂肪酸。",
      "A fatty acid the body cannot make sufficiently and must obtain from food.",
    ),
    term(
      "cholesterol",
      "胆固醇",
      "Cholesterol",
      "身体制造并使用、也存在于某些食物中的脂类物质。",
      "A lipid substance made and used by the body and found in some foods.",
    ),
    term(
      "lipoprotein",
      "脂蛋白",
      "Lipoprotein",
      "帮助脂类在血液中运输的颗粒。",
      "A particle transporting lipids through blood.",
    ),
    term(
      "ldl",
      "低密度脂蛋白",
      "LDL",
      "运输胆固醇的一类颗粒；较高 LDL-C 是重要心血管风险因素。",
      "A class of cholesterol-carrying particles; elevated LDL-C is an important cardiovascular risk factor.",
    ),
    term(
      "hdl",
      "高密度脂蛋白",
      "HDL",
      "参与胆固醇运输与回收的一类颗粒，不是无限保护的保证。",
      "Particles involved in cholesterol transport and removal, not a guarantee of unlimited protection.",
    ),
    term(
      "replacement",
      "替代",
      "Replacement",
      "减少一种食物后，实际增加或使用另一种的改变。",
      "The food or nutrient used in place of something reduced.",
    ),
    term(
      "portion",
      "份量",
      "Portion",
      "实际吃或使用的量，可能与标签的一份不同。",
      "The amount actually eaten or used, which may differ from a label serving.",
    ),
  ],
  questions: [
    q(
      "zero-chol",
      l("零胆固醇等于零脂肪吗？", "Does zero cholesterol mean zero fat?"),
      [
        l("是。", "Yes."),
        l("不是，两者不是同一种指标。", "No, they are different measures."),
      ],
      1,
      l(
        "植物油可以没有胆固醇，但仍有脂肪与能量。",
        "Plant oil can contain no cholesterol while supplying fat and energy.",
      ),
    ),
    q(
      "omega",
      l("Omega-6 一定是有害脂肪吗？", "Is omega-6 necessarily harmful?"),
      [
        l(
          "不是，其中有身体必需的脂肪酸。",
          "No, the family includes an essential fatty acid.",
        ),
        l("是，应全部消除。", "Yes, eliminate it completely."),
      ],
      0,
      l(
        "类别名称不能代替整体饮食和证据判断。",
        "The family name cannot replace assessment of the whole diet and evidence.",
      ),
    ),
    q(
      "total",
      l(
        "总脂肪10克，其中饱和3克，合计多少？",
        "Total fat is 10 g including 3 g saturated fat. What is the total?",
      ),
      [l("13克。", "13 g."), l("10克。", "10 g.")],
      1,
      l(
        "饱和脂肪已包含在总脂肪内。",
        "Saturated fat is included in total fat.",
      ),
    ),
    q(
      "replacement",
      l(
        "减少饱和脂肪后还应问什么？",
        "What else should you ask after reducing saturated fat?",
      ),
      [
        l(
          "用什么替代，以及整餐怎样变化。",
          "What replaces it and how the meal changes.",
        ),
        l(
          "只要总脂肪更少就不用再看。",
          "Nothing, as long as total fat is lower.",
        ),
      ],
      0,
      l(
        "不饱和脂肪和精制糖淀粉不是相同的替代。",
        "Unsaturated fats and refined sugars or starches are not identical replacements.",
      ),
    ),
  ],
  practicalTask: l(
    "比较家中两种食用油和一种包装食品的总脂肪、饱和脂肪与配料。按相同基准记录，再考虑实际用量。提出一个可行调整，并回答“脂肪是不是越少越健康？”",
    "Compare total fat, saturated fat and ingredients in two cooking oils and one packaged food. Use the same basis, then consider actual amounts. Suggest one feasible change and answer: is less fat always healthier?",
  ),
  summary: l(
    [
      "脂肪参与供能、结构与维生素吸收。",
      "脂肪种类比单独的“有油没油”更有信息。",
      "Omega-3 和 omega-6 都不是营销等级。",
      "膳食胆固醇、脂肪和血脂指标要分开。",
      "减少以后用什么替代，是关键问题。",
    ],
    [
      "Fat supports energy, structures and vitamin absorption.",
      "Fat type is more informative than simply oily or not.",
      "Omega-3 and omega-6 are not marketing grades.",
      "Separate dietary cholesterol, fat and blood lipid measures.",
      "What replaces a reduced food is a key question.",
    ],
  ),
  sourceIds: ["fats-guide", "heart-lipids", "omega-guide", "who"],
});
