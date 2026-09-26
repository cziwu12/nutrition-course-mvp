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
export const week02Lesson = lesson({
  introduction: l(
    "碳水化合物不是白饭的另一个名字。水果、奶、豆类、面条与含糖饮料都可能提供碳水，但它们带来的其他营养成分与进食体验很不一样。本周从“糖分子怎样连接”走到“在家如何比较包装”，让你理解主食，而不是害怕它。",
    "Carbohydrate is not another name for white rice. Fruit, milk, beans, noodles and sweetened drinks can all provide it, with very different accompanying nutrients and eating experiences. This week connects sugar molecules to real food labels so you can understand staple foods rather than fear them.",
  ),
  objectives: l(
    [
      "区分葡萄糖、糖、淀粉与纤维。",
      "描述碳水的消化与吸收。",
      "比较全谷与精制谷物。",
      "解释 GI 的用途与局限。",
      "按相同基准比较五种食品。",
    ],
    [
      "Distinguish glucose, sugars, starch and fibre.",
      "Trace carbohydrate digestion and absorption.",
      "Compare whole and refined grains.",
      "Explain what GI can and cannot tell you.",
      "Compare five foods on a consistent basis.",
    ],
  ),
  sections: [
    section(
      "carbohydrate-family",
      l("2.1 一家人，不是一种食物", "2.1 A family of substances, not one food"),
      [
        p(
          "碳水化合物由糖的基本单位组成。葡萄糖是一种单糖，可作为细胞的重要燃料。果糖也是单糖；蔗糖则由葡萄糖和果糖连接而成。日常说的“糖”包括这些较小分子，而不是所有碳水化合物。",
          "Carbohydrates are built from sugar units. Glucose is a single sugar unit that cells can use as fuel. Fructose is another; sucrose joins glucose and fructose together. Everyday “sugars” refers to these smaller molecules, not to every carbohydrate.",
        ),
        p(
          "淀粉由许多葡萄糖单位连成链，是植物储存能量的一种方式。米饭、马铃薯、面包和米粉都含淀粉。单糖和双糖常称简单碳水，长链常称复杂碳水。这描述结构，不能直接用来判断一种食品是否值得选择。",
          "Starch consists of many glucose units linked into chains and is one way plants store energy. Rice, potatoes, bread and rice noodles contain starch. Single and double sugars are often called simple carbohydrates; longer chains are called complex carbohydrates. This describes structure, not a complete judgement of a food.",
        ),
        example(
          "不甜也可能有碳水",
          "Not sweet does not mean carbohydrate-free",
          "白饭味道不太甜，却有很多淀粉。鲜奶有天然乳糖，完整水果有糖、纤维和水。不能因为水果含简单糖就说它等于含糖汽水，也不能因为饼干含淀粉就自动称它营养丰富。",
          "Rice is not very sweet but contains plenty of starch. Milk contains naturally occurring lactose, while whole fruit provides sugars, fibre and water. Simple sugars do not make fruit equivalent to a sugary soft drink, and starch does not automatically make biscuits nutritious.",
        ),
        call(
          "看成分，也看整种食物",
          "Look at the molecule and the food",
          "“简单”和“复杂”是起点，不是最终评分。营养标签与配料表帮助补充其他信息。",
          "Simple and complex are starting descriptions, not final ratings. Nutrition labels and ingredient lists add the context missing from those words.",
        ),
      ],
      ["glucose", "sugar", "starch", "simple-complex"],
      ["carbs", "who"],
    ),
    section(
      "carbohydrate-digestion",
      l("2.2 从一口饭到葡萄糖", "2.2 From a mouthful of rice to glucose"),
      [
        p(
          "咀嚼把饭粒变小，唾液中的淀粉酶开始分解淀粉。进入小肠后，来自胰腺和肠壁的酶继续工作。酶像专用工具，协助把可消化的碳水拆成能吸收的单糖。食物不会以完整饭粒的形式进入血液。",
          "Chewing makes rice particles smaller, and salivary amylase starts breaking down starch. In the small intestine, enzymes from the pancreas and intestinal lining continue the work. Enzymes act like specialised tools, helping turn digestible carbohydrate into absorbable single sugars. Whole grains of rice do not enter your bloodstream.",
        ),
        p(
          "吸收是这些小分子穿过肠壁进入体内的过程。餐后血液中的葡萄糖通常会上升，胰岛素帮助身体协调葡萄糖的利用和储存。这种变化本来就是正常生理过程；不能把每一次上升都叫作伤害，也不能只凭饭后感觉判断糖尿病。",
          "Absorption means these small molecules cross the intestinal lining into the body. Blood glucose usually rises after a meal, and insulin helps coordinate its use and storage. This is a normal physiological response. Not every rise is damage, and how you feel after eating cannot diagnose diabetes.",
        ),
        example(
          "米粉与一顿米粉餐",
          "Noodles versus a noodle meal",
          "单独一份米粉与加入豆腐、青菜和鸡蛋的一碗米粉，消化情境不完全相同。食物结构、份量、烹调与同餐其他食物都会影响进食后的反应。",
          "Plain rice noodles and noodles served with tofu, vegetables and egg are different meal contexts. Structure, portion size, cooking and the other foods eaten alongside them all influence the response.",
        ),
        call(
          "本周先理解路线",
          "Learn the pathway first",
          "碳水 → 消化成小分子 → 吸收 → 利用或储存。第9周会更仔细讨论胰岛素与血糖调节。",
          "Carbohydrate → digestion into smaller molecules → absorption → use or storage. Week 9 examines insulin and blood-glucose regulation in more detail.",
        ),
      ],
      ["digestion", "absorption", "blood-glucose", "insulin"],
      ["carbs", "digestion"],
    ),
    section(
      "fibre",
      l("2.3 纤维不是“没用的碳水”", "2.3 Fibre is not useless carbohydrate"),
      [
        p(
          "膳食纤维包括不能被人体小肠消化酶像淀粉那样分解的碳水。部分纤维进入大肠后会被微生物发酵，另一些增加粪便体积或改变肠道内容物的性质。不同纤维的作用不同，不能把它们都当作同一种材料。",
          "Dietary fibre includes carbohydrates that human small-intestinal enzymes cannot break down like starch. Some reach the large intestine and are fermented by microbes; others add bulk or change the properties of intestinal contents. Fibres differ, so they should not be treated as one identical material.",
        ),
        p(
          "可溶性纤维能在水中溶解，有些形成黏稠物；不溶性纤维通常不溶于水。许多植物食物两者都有。燕麦、豆类、蔬菜、水果和全谷物能提供不同种类。讨论纤维时，也要注意饮水、进食规律与个人耐受情况。",
          "Soluble fibre dissolves in water and some types form viscous mixtures; insoluble fibre generally does not dissolve. Many plant foods contain both. Oats, beans, vegetables, fruit and whole grains offer different types. Water intake, regular eating and individual tolerance also matter.",
        ),
        example(
          "完整水果与果汁",
          "Whole fruit and juice",
          "橙子的果肉和结构与过滤后的橙汁不同。榨汁不会神奇地消除糖；过滤还可能去掉不少纤维。比较饮料时，不只看“天然”两个字，也看份量与纤维信息。",
          "The pulp and structure of an orange differ from strained juice. Juicing does not magically remove sugar, and straining may remove much of the fibre. When comparing drinks, look beyond the word natural to the amount and fibre information.",
        ),
        call(
          "慢慢改变",
          "Change gradually",
          "从很少纤维突然增加很多，可能造成腹胀。逐步尝试；持续或严重肠道症状需要专业评估，而不是不断加纤维。",
          "A sudden large increase from a low-fibre diet may cause bloating. Try gradual changes. Persistent or severe bowel symptoms need assessment rather than endless increases in fibre.",
          "warning",
        ),
      ],
      ["fibre", "fermentation"],
      ["fibre-guide"],
    ),
    section(
      "whole-grains",
      l("2.4 全谷与精制：看保留了什么", "2.4 Whole and refined: what remains?"),
      [
        p(
          "完整谷粒包括外层麸皮、胚芽与胚乳。麸皮含纤维，胚芽含多种成分，胚乳主要提供淀粉和一些蛋白质。全谷食品保留这些部分；精制加工通常去掉部分麸皮和胚芽，因此营养组成会改变。",
          "An intact grain has bran, germ and endosperm. Bran contributes fibre, germ contains several nutrients, and endosperm provides mainly starch and some protein. Whole-grain foods retain these parts. Refining commonly removes some bran and germ, changing the nutrient mixture.",
        ),
        compare([
          {
            title: l("全谷例子", "Whole-grain examples"),
            items: [
              l(
                "糙米、燕麦、全麦食品。",
                "Brown rice, oats and whole-wheat foods.",
              ),
              l(
                "看配料是否明确写全谷。",
                "Look for clearly identified whole-grain ingredients.",
              ),
            ],
          },
          {
            title: l("精制例子", "Refined examples"),
            items: [
              l(
                "白米、许多白面包与米粉。",
                "White rice, many white breads and rice noodles.",
              ),
              l(
                "并不等于完全没有营养。",
                "Refined does not mean nutritionally empty.",
              ),
            ],
          },
        ]),
        example(
          "家庭换米，不需要一次全部改变",
          "A practical rice change",
          "家人不习惯糙米口感，可以先混合少量，调整水量与烹调时间。白饭也能与豆类、蔬菜和蛋白质食物一起组成有意义的一餐。方法应考虑口味、预算与可获得性。",
          "If the family dislikes brown-rice texture, try a small proportion mixed into familiar rice and adjust cooking time and water. White rice can still be part of a useful meal with beans, vegetables and protein foods. Taste, budget and availability matter.",
        ),
        call(
          "颜色不是证明",
          "Colour is not proof",
          "褐色面包不一定就是全麦；包装上的谷粒图片也不能代替配料表。",
          "Brown bread is not necessarily wholemeal, and grain pictures cannot replace reading the ingredient list.",
        ),
      ],
      ["whole-grain", "refined"],
      ["whole-grains"],
    ),
    section(
      "gi",
      l(
        "2.5 GI 回答什么，不回答什么",
        "2.5 What GI tells you—and what it does not",
      ),
      [
        p(
          "升糖指数 GI 比较含相同量可利用碳水的食物，在标准测试中引起血糖反应的相对程度，通常以葡萄糖为参考。它不是某食物里有多少糖，也不是这份食物会让每个人升高多少血糖的预测器。",
          "Glycaemic index, or GI, compares the blood-glucose response to foods containing the same amount of available carbohydrate under standard testing, usually against glucose. It is not the amount of sugar in a food and does not predict exactly how much your own glucose will rise from your serving.",
        ),
        p(
          "份量、成熟度、加工、烹调方式，以及同餐的脂肪、蛋白质和纤维都可能改变实际反应。低 GI 不保证富含维生素或低能量；高 GI 也不表示一口都不能吃。几乎不含碳水的食物通常不适合用 GI 来比较，不要把它们直接排成“最低 GI 最健康”。",
          "Portion size, ripeness, processing, cooking, and the fat, protein and fibre in the meal can change the real response. A low GI does not guarantee many vitamins or little energy; a higher GI does not forbid a food. Foods with almost no carbohydrate are generally not meaningful GI comparisons, so ranking them as healthiest because their GI is lowest is misleading.",
        ),
        example(
          "两个问题一起问",
          "Ask two questions",
          "先问“每份吃多少碳水”，再问“食物的结构、纤维和整体搭配怎样”。一大份低 GI 食物仍可能提供很多碳水；一小份较高 GI 食物也不等于整餐质量差。",
          "Ask how much carbohydrate the actual portion provides, then ask about structure, fibre and the whole meal. A large serving of a lower-GI food can still supply substantial carbohydrate. A small higher-GI item does not define the quality of the entire meal.",
        ),
        call(
          "一个数字不够",
          "One number is not enough",
          "糖尿病的个人饮食与药物安排应由合格专业人士协助。不要用 GI 替代监测、诊断或治疗。",
          "Personal diabetes meal planning and medicines belong with qualified professionals. GI does not replace monitoring, diagnosis or treatment.",
          "warning",
        ),
      ],
      ["gi", "portion"],
      ["gi-guide"],
    ),
    section(
      "label-practice",
      l("2.6 用标签把知识连起来", "2.6 Connect the ideas using labels"),
      [
        p(
          "比较五种家中食品时，先抄下每份大小、每100克或100毫升的数据，以及实际吃喝多少。不同品牌的“每份”不一定一样；必须先统一基准，否则较小的份量会看起来什么都比较少。",
          "For five foods at home, first record the stated serving size, the per-100-g or per-100-ml figures, and how much you actually eat or drink. A serving is not standard across brands. Without a common basis, a smaller listed portion can make every nutrient look lower.",
        ),
        p(
          "糖通常包含在碳水化合物之内，不要把两项再相加当成总碳水。纤维的标示方式与碳水定义可能随地区变化；如果标签没写纤维，应记录“未标示”，不要写成零。含糖少也不能独自说明全谷含量或其他营养。",
          "Sugars are generally part of carbohydrate; do not add the two figures together to invent a new total. Fibre labelling and carbohydrate definitions can vary by jurisdiction. If fibre is absent from the label, record not listed rather than zero. Less sugar alone does not establish whole-grain content or other nutritional qualities.",
        ),
        example(
          "计算示例，不是品牌数据",
          "Worked example, not a brand claim",
          "假设一款谷物每100克有60克碳水、12克糖和8克纤维，一份30克就是18克、3.6克和2.4克。若实际吃60克，上述每份数字需要乘二。比较后写出一个有理由的选择，而不是宣布某食品永远不好。",
          "Suppose an illustrative cereal has 60 g carbohydrate, 12 g sugars and 8 g fibre per 100 g. A 30 g portion has 18 g, 3.6 g and 2.4 g respectively. If you eat 60 g, double those portion figures. Finish with one reasoned choice rather than declaring a food permanently bad.",
        ),
        call(
          "保留未知信息",
          "Keep uncertainty visible",
          "没有完整标签的家常饭可描述食材，不必猜测精确营养数字。下一步把五项比较写进本周笔记。",
          "For home-cooked food without a full label, describe ingredients instead of guessing precise numbers. Record the five-item comparison in your notes.",
        ),
      ],
      ["portion"],
      ["carbs", "who"],
    ),
  ],
  keyTerms: [
    term(
      "glucose",
      "葡萄糖",
      "Glucose",
      "可被细胞利用的一种单糖，也是血液中的主要糖。",
      "A single sugar used by cells and the main sugar measured in blood.",
    ),
    term(
      "sugar",
      "糖",
      "Sugars",
      "单糖和双糖等较小的碳水分子，包括葡萄糖、果糖与蔗糖。",
      "Small carbohydrate molecules, including glucose, fructose and sucrose.",
    ),
    term(
      "starch",
      "淀粉",
      "Starch",
      "植物中由许多葡萄糖单位连接而成的储能碳水。",
      "A plant storage carbohydrate made from many linked glucose units.",
    ),
    term(
      "simple-complex",
      "简单与复杂碳水",
      "Simple and complex carbohydrates",
      "按糖单位数量进行的结构分类，并非整体健康评分。",
      "Structural categories based on linked sugar units, not overall health ratings.",
    ),
    term(
      "digestion",
      "消化",
      "Digestion",
      "把食物机械或化学分解成较小部分的过程。",
      "Mechanical and chemical breakdown of food into smaller parts.",
    ),
    term(
      "absorption",
      "吸收",
      "Absorption",
      "物质穿过肠壁进入体内的过程。",
      "Movement of substances across the intestinal lining into the body.",
    ),
    term(
      "blood-glucose",
      "血糖",
      "Blood glucose",
      "血液中的葡萄糖浓度，会随进食与调节而变化。",
      "The concentration of glucose in blood, changing with eating and regulation.",
    ),
    term(
      "insulin",
      "胰岛素",
      "Insulin",
      "胰腺产生、帮助协调葡萄糖利用与储存的激素。",
      "A pancreatic hormone coordinating glucose use and storage.",
    ),
    term(
      "fibre",
      "膳食纤维",
      "Dietary fibre",
      "不能像淀粉那样被小肠消化酶分解的一组碳水。",
      "Carbohydrates not broken down like starch by human small-intestinal enzymes.",
    ),
    term(
      "fermentation",
      "发酵",
      "Fermentation",
      "微生物分解物质并形成其他产物的过程。",
      "Microbial breakdown of substances into other products.",
    ),
    term(
      "whole-grain",
      "全谷物",
      "Whole grain",
      "保留麸皮、胚芽和胚乳的谷物。",
      "Grain retaining bran, germ and endosperm.",
    ),
    term(
      "refined",
      "精制谷物",
      "Refined grain",
      "经加工去掉部分麸皮和胚芽的谷物。",
      "Grain processed to remove some bran and germ.",
    ),
    term(
      "gi",
      "升糖指数",
      "Glycaemic index",
      "在标准测试中比较相同可利用碳水量所引起血糖反应的指标。",
      "A standardised comparison of glucose response to equal available-carbohydrate amounts.",
    ),
    term(
      "portion",
      "实际份量",
      "Portion",
      "你实际吃的量，不一定等于包装规定的一份。",
      "The amount you actually eat, not necessarily the label serving.",
    ),
  ],
  questions: [
    q(
      "rice-sugar",
      l(
        "白饭不太甜，是否说明没有碳水？",
        "Does rice lacking sweetness mean it has no carbohydrate?",
      ),
      [
        l("是，碳水一定很甜。", "Yes, all carbohydrate tastes sweet."),
        l("不是，米饭含很多淀粉。", "No, rice contains substantial starch."),
      ],
      1,
      l(
        "淀粉是由葡萄糖单位连接成的碳水，不必尝起来很甜。",
        "Starch is carbohydrate built from glucose units and need not taste sweet.",
      ),
    ),
    q(
      "gi-limit",
      l("低 GI 能证明什么？", "What can a lower GI establish?"),
      [
        l(
          "在标准测试中的相对反应较低。",
          "A lower relative response under standard testing.",
        ),
        l("任何份量都适合任何人。", "Any amount suits everyone."),
        l("食物没有糖。", "The food contains no sugars."),
      ],
      0,
      l(
        "GI 不是个人反应、份量或食物整体质量的完整说明。",
        "GI does not fully describe individual responses, portions or food quality.",
      ),
    ),
    q(
      "sugars-total",
      l(
        "碳水20克、糖5克，总碳水是？",
        "A label says 20 g carbohydrate and 5 g sugars. Total carbohydrate is?",
      ),
      [
        l("25克。", "25 g."),
        l(
          "仍为20克，糖通常是其中一部分。",
          "Still 20 g; sugars are generally included.",
        ),
      ],
      1,
      l(
        "不要把其中的糖重复计算；阅读标签定义与份量。",
        "Do not count the sugars twice. Read the label definitions and portion.",
      ),
    ),
    q(
      "missing-fibre",
      l(
        "标签没有列纤维，你应记录什么？",
        "What should you record when fibre is absent from a label?",
      ),
      [
        l("零。", "Zero."),
        l(
          "未标示，不能据此确定含量。",
          "Not listed; the amount cannot be established from this.",
        ),
      ],
      1,
      l(
        "缺少信息与营养素不存在是两回事。",
        "Missing information is different from a nutrient being absent.",
      ),
    ),
  ],
  practicalTask: l(
    "选择家中的面包、饼干、米粉、早餐谷物和饮料。记录每份大小、碳水、糖和纤维；先按每100克或100毫升比较，再算实际份量。未标示的信息写“未知”，并解释一个适合家庭的小调整。",
    "Choose bread, biscuits, rice noodles, cereal and a drink at home. Record serving size, carbohydrate, sugars and fibre. Compare per 100 g or 100 ml, then calculate your actual portions. Mark missing information unknown and explain one small family adjustment.",
  ),
  summary: l(
    [
      "碳水包括糖、淀粉与纤维。",
      "消化与吸收是不同步骤。",
      "全谷与精制描述谷物保留部分。",
      "GI 不等于食物健康评分。",
      "比较标签要统一基准并保留未知。",
    ],
    [
      "Carbohydrates include sugars, starch and fibre.",
      "Digestion and absorption are different steps.",
      "Whole and refined describe retained grain parts.",
      "GI is not a food-health score.",
      "Compare labels on the same basis and retain uncertainty.",
    ],
  ),
  sourceIds: [
    "carbs",
    "fibre-guide",
    "whole-grains",
    "gi-guide",
    "digestion",
    "who",
  ],
});
