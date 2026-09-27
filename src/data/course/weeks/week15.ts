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
export const week15Lesson = lesson({
  introduction: l(
    "成年人的饮食常被工作、照顾家人、预算与外食影响。本周把营养素知识组合成可重复的饮食模式。目标是找到适合现实生活的基础安排，而不是每天追求零失误或依靠一种超级食物。",
    "Adult eating is shaped by work, caring responsibilities, budgets and meals away from home. This week combines nutrient knowledge into repeatable patterns. The aim is a practical foundation, rather than flawless days or dependence on a superfood.",
  ),
  objectives: l(
    [
      "用整日与整周模式评价饮食。",
      "把纤维、蛋白质与脂肪质量落实到家庭餐。",
      "识别常见钠与含糖饮料来源。",
      "制定考虑时间、预算、饮水与活动的小习惯。",
    ],
    [
      "Evaluate eating over days and weeks.",
      "Apply fibre, protein and fat quality to family meals.",
      "Recognise common sodium and sweet-drink sources.",
      "Build a small habit that accounts for time, cost, fluids and movement.",
    ],
  ),
  sections: [
    section(
      "adult-pattern",
      l(
        "15.1 饮食模式比单一食品更有信息",
        "15.1 Patterns tell more than individual foods",
      ),
      [
        p(
          "饮食模式是反复出现的食物组合、份量与频率。一顿外食不代表整周失败，一顿沙拉也不能抵消长期缺少多样性。观察模式能找到较大机会，例如每天都有蔬菜来源，而不是为每一种食物贴好坏标签。",
          "A dietary pattern is the recurring combination, quantity and frequency of foods. One meal out does not make a week a failure, and one salad does not erase a long-term lack of variety. Patterns reveal meaningful opportunities, such as dependable vegetable access, without assigning every food a moral label.",
        ),
        p(
          "餐盘框架能提醒主食、蛋白质食物与蔬果的搭配，但不是每餐都要照图摆放。粥、汤面和家庭共享菜也可以拆解来看。全天或一周里逐渐获得平衡，比为了比例把普通家常饭变成难做的工程更合理。",
          "A plate framework prompts consideration of staples, protein foods and produce, without requiring every meal to match a picture. Porridge, noodle soup and shared dishes can be considered by their components. Balance across a day or week is more workable than turning every family meal into a construction project.",
        ),
        example(
          "从汤面看到组成",
          "See the components in noodle soup",
          "面提供主食，蛋或豆腐提供蛋白质，青菜增加蔬菜。汤底与酱料可能提供较多钠。这样分析后，可以保留喜欢的食物，并选择加菜或把酱料另放。",
          "Noodles provide a staple, egg or tofu contributes protein, and greens add vegetables. Broth and sauces may contribute sodium. This analysis preserves an enjoyable dish while identifying options such as extra vegetables or sauce served separately.",
        ),
        call(
          "框架不是个人处方",
          "A framework is not a prescription",
          "疾病、怀孕、药物或吞咽困难可能改变需要。本课程的家庭例子不能替代个人医疗与营养计划。",
          "Illness, pregnancy, medication or swallowing difficulties may change needs. Family examples here do not replace individual clinical or dietetic plans.",
          "important",
        ),
      ],
      ["dietary-pattern", "food-group"],
      ["who", "plate", "eatwell"],
    ),
    section(
      "adult-fibre",
      l(
        "15.2 纤维与蔬果：安排机会，不靠补救",
        "15.2 Fibre and produce: create opportunities",
      ),
      [
        p(
          "膳食纤维是人体消化酶不能完全消化的一类碳水化合物，来源包括豆类、全谷物、蔬果、坚果与种子。不同食物带来不同纤维与其他成分。只吃一种高纤产品，不等于整个饮食已多样。",
          "Dietary fibre comprises carbohydrates not fully broken down by human digestive enzymes. Sources include pulses, whole grains, produce, nuts and seeds. Foods supply different fibres and other constituents; using one high-fibre product does not establish overall variety.",
        ),
        p(
          "可以从现有餐食增加来源，例如白饭中逐渐加入适口的全谷物，面汤加蔬菜，午餐加入豆类。纤维增加太快可能不舒服，适应速度因人而异。饮水和既有消化问题也要考虑，不把腹胀理解为必须忍耐的排毒。",
          "Build from existing meals: gradually mix acceptable whole grains into rice, add vegetables to noodles or include pulses at lunch. A rapid increase in fibre may be uncomfortable, and adaptation varies. Consider fluids and existing digestive issues; bloating is not a detox process that must be endured.",
        ),
        example(
          "不需要每天买昂贵沙拉",
          "Expensive daily salads are unnecessary",
          "本地青菜、南瓜、番石榴与冷冻蔬菜都可安排。选择家庭会吃、买得到且能安全保存的品种，常比买一盒最终丢掉的昂贵叶菜更有用。",
          "Local greens, pumpkin, guava and frozen vegetables can all be planned. Foods the family will eat, can obtain and can store safely are often more useful than an expensive box that ends up discarded.",
        ),
        call(
          "整果与果汁不同",
          "Whole fruit differs from juice",
          "果汁可能含有营养素，但纤维与饮用份量不同。把整果作为常见选择，饮料另外记录，不因写了水果就忽略其糖与份量。",
          "Juice may contain nutrients but differs in fibre and usual consumption. Make whole fruit a regular option and record drinks separately; a fruit label does not remove the need to consider sugar and quantity.",
        ),
      ],
      ["fibre", "whole-grain", "variety"],
      ["fibre-guide", "whole-grains", "who", "gut-foods"],
    ),
    section(
      "adult-protein-fat",
      l(
        "15.3 蛋白质来源与脂肪替换",
        "15.3 Protein sources and fat substitutions",
      ),
      [
        p(
          "蛋白质食物不只是肉。豆腐、豆类、蛋、鱼、奶类与肉类提供不同组合的营养素。安排多种来源有助于兼顾预算和口味；植物餐也需要考虑足够能量与整体营养，不能仅把肉删掉而不补上其他食物。",
          "Protein foods include more than meat. Tofu, pulses, eggs, fish, dairy and meat supply different nutrient combinations. Several sources offer options for budget and taste. Plant-based meals still need enough energy and overall nutrition; simply deleting meat may leave an incomplete meal.",
        ),
        p(
          "脂肪质量要看替换关系。用含不饱和脂肪的食物替换部分饱和脂肪来源，与只把所有油去掉不同。坚果、鱼或某些植物油可以进入日常饮食；油仍有能量，不需要为了“健康”不断额外添加。",
          "Fat quality involves what replaces what. Replacing some saturated-fat sources with unsaturated-fat foods differs from removing all oil. Nuts, fish and suitable plant oils can fit daily eating. Oil still supplies energy, so a health label is not a reason for unlimited additions.",
        ),
        compare([
          {
            title: l("有信息的改变", "An informative change"),
            items: [
              l(
                "部分肉菜轮换为豆类、豆腐或鱼。",
                "Rotate some meat dishes with pulses, tofu or fish.",
              ),
              l(
                "选择适合烹调的不饱和脂肪来源。",
                "Choose suitable unsaturated-fat sources for cooking.",
              ),
            ],
          },
          {
            title: l("信息不足的口号", "An incomplete slogan"),
            items: [
              l("所有脂肪都不能吃。", "All fat must be avoided."),
              l(
                "只要加蛋白粉就营养均衡。",
                "Protein powder alone makes eating balanced.",
              ),
            ],
          },
        ]),
        example(
          "一锅豆腐菜",
          "A tofu dish for the family",
          "豆腐与蔬菜一起烹调，搭配饭，并按口味加入香菇或少量肉。这里的重点是有足够主食与蛋白质、菜量和合理调味，不是把某种菜命名为减脂神器。",
          "Cook tofu with vegetables, serve with rice and add mushrooms or a little meat if liked. The point is adequate staples and protein, vegetables and workable seasoning, rather than declaring one dish a fat-burning solution.",
        ),
      ],
      ["protein", "saturated-fat", "unsaturated-fat", "substitution"],
      ["protein-guide", "fats-guide", "who"],
    ),
    section(
      "adult-sodium",
      l(
        "15.4 钠与饮料：先找重复来源",
        "15.4 Sodium and drinks: find recurring sources",
      ),
      [
        p(
          "钠来自盐，也来自多种酱料、汤底和加工食品。吃起来不很咸不代表没有钠；实际摄入还取决于吃了多少。外食难以得到精确数据时，可以先观察酱料、汤和加工配料出现的频率，而不虚构毫克数。",
          "Sodium comes from salt and also sauces, broths and processed foods. A mild taste does not prove absence, and intake depends on quantity. Where eating-out data are unavailable, observe repeated sauces, soups and processed ingredients rather than inventing milligram estimates.",
        ),
        p(
          "饮料也属于饮食记录。咖啡或茶的营养组成取决于加了什么：糖、糖浆、炼乳与奶不是同一件事。把每天自动购买改成有意识选择份量、甜度或替代饮料，比认为所有咖啡都不健康更准确。",
          "Drinks belong in dietary records. Coffee or tea composition depends on additions: sugar, syrup, condensed milk and milk are not interchangeable. Choosing size, sweetness or an alternative deliberately is more precise than labelling all coffee unhealthy.",
        ),
        example(
          "保留外食，调整一个环节",
          "Keep eating out, adjust one element",
          "常吃汤面时，试着把酱料分开、增加可接受的蔬菜，并选择水。少喝一些高盐汤可能减少来源之一，但不能假定其余配料的钠已经消失。",
          "With frequent noodle soup, try sauce separately, acceptable extra vegetables and water. Consuming less salty broth may reduce one source, but does not remove sodium already present in other ingredients.",
        ),
        call(
          "低钠盐不适合随意替换",
          "Salt substitutes need context",
          "一些低钠盐含钾。肾病、某些药物或既有医疗建议可能影响适用性，不应在全家不知情时直接替换。",
          "Some salt substitutes contain potassium. Kidney disease, certain medicines or existing advice may affect suitability; do not make an unconsidered household-wide substitution.",
          "warning",
        ),
      ],
      ["sodium", "added-sugar", "portion"],
      ["sodium", "potassium", "who"],
    ),
    section(
      "adult-water-movement",
      l(
        "15.5 饮水、活动与睡眠是背景的一部分",
        "15.5 Fluids, movement and sleep provide context",
      ),
      [
        p(
          "水参与运输与体温调节等功能。饮料和食物都能贡献水分；热环境、活动与身体情况影响需要。随手可取的水杯和适当休息机会，比把某个统一升数当成所有人的考试更有用。已有液体限制者应遵循个人建议。",
          "Water supports transport and temperature regulation. Both drinks and foods contribute fluid, and heat, activity and health influence needs. An accessible cup and breaks can be more useful than treating one fixed volume as a universal test. People with prescribed fluid limits should follow their own advice.",
        ),
        p(
          "身体活动包括走路、家务、出行与运动，不只是健身房。久坐是醒着时坐着或躺靠、能量消耗较低的行为。日常增加可行的活动与减少长时间连续坐着值得考虑，但不把运动当作吃饭的惩罚。",
          "Physical activity includes walking, chores, travel and exercise, not only the gym. Sedentary behaviour involves low-energy sitting or reclining while awake. Feasible activity and breaking up prolonged sitting are worth considering, without using movement as punishment for eating.",
        ),
        example(
          "办公日的小安排",
          "A small workday arrangement",
          "把水放在容易看到的位置，午休安排可行的短走动，前晚准备第二天能吃到的午餐。三个条件互相配合，但一次只选最容易做到的一项开始。",
          "Keep water visible, plan a feasible brief walk at lunch and prepare an accessible meal the evening before. These conditions support one another, but start with whichever one is easiest.",
        ),
        call(
          "根据能力调整",
          "Adapt to ability",
          "疼痛、疾病、怀孕或活动受限时，需要适合个人的建议。健康习惯不应以无法做到的强度或完美作息为前提。",
          "Pain, illness, pregnancy or limited mobility may require individual guidance. Healthy habits should not depend on an unattainable exercise intensity or perfect schedule.",
        ),
      ],
      ["hydration", "physical-activity", "sedentary"],
      ["hydration-guide", "who-activity", "weight-factors"],
    ),
    section(
      "adult-habits",
      l("15.6 让习惯经过现实检验", "15.6 Test a habit against real life"),
      [
        p(
          "把模糊目标变成有时间、地点与准备条件的行动。例如“多吃蔬菜”可以改成“星期日购物时买两种家人爱吃的菜，安排在周一和周三晚餐”。同时写替代方案，避免忙一天就完全中断。",
          "Turn a vague intention into an action with timing, place and preparation. “Eat more vegetables” can become “buy two accepted vegetables on Sunday and plan them for Monday and Wednesday dinners”. Include a fallback so one busy day does not end the effort.",
        ),
        p(
          "评价时看执行难度、口味、成本与是否解决原问题。没做到常提示环境有障碍，不等于缺乏自律。可以缩小行动、换更便宜的食材，或请家人分担；可持续性是营养合理之外的必要条件。",
          "Review effort, taste, cost and whether the change addresses the original issue. A missed action often reveals a barrier rather than poor character. Reduce the task, choose a cheaper ingredient or share preparation. Sustainability is necessary alongside nutritional reasoning.",
        ),
        example(
          "给忙碌日留后路",
          "Leave a busy-day fallback",
          "计划做鱼和菜，但加班后可用家中豆腐、冷冻蔬菜与饭组成简单晚餐。替代不必完全相同，只要仍满足基本搭配并安全处理食物。",
          "If overtime prevents a planned fish meal, tofu, frozen vegetables and rice can make a simple alternative. It need not be identical; retain the basic combination and handle food safely.",
        ),
        call(
          "本周只选一个改动",
          "Choose one change this week",
          "写下具体行动、原因、障碍与备选，七天后回看。不要同时重写全家所有饮食，也不要因一餐不同就判定失败。",
          "Record one action, its reason, a barrier and a fallback, then review after seven days. Avoid rewriting every family meal at once or declaring failure after one different meal.",
        ),
      ],
      ["dietary-pattern", "substitution", "food-environment"],
      ["who", "eatwell", "plate"],
    ),
  ],
  keyTerms: [
    term(
      "dietary-pattern",
      "饮食模式",
      "Dietary pattern",
      "长期反复出现的食物组合、份量与频率。",
      "The recurring combination, quantities and frequency of foods over time.",
    ),
    term(
      "food-group",
      "食物类别",
      "Food group",
      "按营养或烹调用途归类的食物，类别之间可有重叠。",
      "A grouping by nutritional or culinary role; categories can overlap.",
    ),
    term(
      "fibre",
      "膳食纤维",
      "Dietary fibre",
      "人体消化酶不能完全分解、常见于植物食物的碳水化合物。",
      "Carbohydrates not fully broken down by human digestive enzymes, commonly in plant foods.",
    ),
    term(
      "whole-grain",
      "全谷物",
      "Whole grain",
      "保留谷粒麸皮、胚芽与胚乳组成的谷物。",
      "Grain retaining its bran, germ and endosperm components.",
    ),
    term(
      "variety",
      "多样性",
      "Variety",
      "在不同类别及同类食物之间轮换选择。",
      "Choosing across food categories and rotating foods within them.",
    ),
    term(
      "protein",
      "蛋白质",
      "Protein",
      "由氨基酸组成并参与组织与多种身体功能的营养素。",
      "An amino-acid-based nutrient used in tissues and many body functions.",
    ),
    term(
      "saturated-fat",
      "饱和脂肪",
      "Saturated fat",
      "含较多饱和脂肪酸的一类脂肪，健康影响需考虑替代物。",
      "Fat rich in saturated fatty acids, whose dietary effects depend partly on replacement.",
    ),
    term(
      "unsaturated-fat",
      "不饱和脂肪",
      "Unsaturated fat",
      "含有一个或多个双键的脂肪酸组成的脂肪类别。",
      "Fat containing fatty acids with one or more double bonds.",
    ),
    term(
      "substitution",
      "替换",
      "Substitution",
      "用一种食物或成分替代另一种，而不是只额外添加。",
      "Replacing one food or component with another rather than merely adding it.",
    ),
    term(
      "sodium",
      "钠",
      "Sodium",
      "盐和多种食物中存在、参与体液等功能的矿物质。",
      "A mineral in salt and many foods, involved in fluid and other functions.",
    ),
    term(
      "added-sugar",
      "添加糖",
      "Added sugar",
      "准备或制造时加入的糖，不涵盖食物中所有天然糖。",
      "Sugar added in preparation or manufacture, not all naturally present sugar.",
    ),
    term(
      "portion",
      "实际份量",
      "Portion",
      "一次实际吃或喝的数量，可能不同于标签的一份。",
      "The amount actually eaten or drunk, which may differ from a label serving.",
    ),
    term(
      "hydration",
      "水分平衡",
      "Hydration",
      "身体获得并维持足够水分以支持正常功能的状态。",
      "Maintaining sufficient body water to support normal functions.",
    ),
    term(
      "physical-activity",
      "身体活动",
      "Physical activity",
      "由身体运动产生能量消耗的活动，包括生活与运动。",
      "Movement requiring energy expenditure, including daily tasks and exercise.",
    ),
    term(
      "sedentary",
      "久坐行为",
      "Sedentary behaviour",
      "醒着时坐着或躺靠、消耗较少能量的行为。",
      "Low-energy sitting or reclining behaviour while awake.",
    ),
    term(
      "food-environment",
      "食物环境",
      "Food environment",
      "影响食物取得、准备与选择的实际条件。",
      "Practical conditions shaping food access, preparation and choices.",
    ),
  ],
  questions: [
    q(
      "pattern",
      l(
        "一顿外食是否代表整周饮食失败？",
        "Does one meal out mean the week has failed?",
      ),
      [
        l("是", "Yes"),
        l("否，要看长期模式", "No; consider the broader pattern"),
      ],
      1,
      l(
        "饮食模式包含频率、组合和数量，单一餐不能概括全部。",
        "A pattern includes frequency, combinations and quantities; one meal cannot summarise it.",
      ),
    ),
    q(
      "fat",
      l(
        "评价脂肪改变时应问什么？",
        "What should you ask about a change in fat intake?",
      ),
      [
        l("用什么替换了什么？", "What replaced what?"),
        l("是否完全无油？", "Is it entirely oil-free?"),
        l("是否最贵？", "Is it the most expensive?"),
      ],
      0,
      l(
        "替换关系影响解释，用不饱和脂肪替换部分饱和脂肪与无限加油不同。",
        "Replacement affects interpretation; replacing some saturated fat differs from unlimited added oil.",
      ),
    ),
    q(
      "sodium",
      l(
        "外食缺乏营养数据时怎么办？",
        "What if a meal out has no nutrition data?",
      ),
      [
        l("编一个精确钠数值", "Invent a precise sodium value"),
        l("认为没有钠", "Assume no sodium"),
        l("观察汤、酱料和配料等来源", "Observe broth, sauces and ingredients"),
      ],
      2,
      l(
        "可以做定性观察，避免把不知道的数量说成确定事实。",
        "Qualitative observation is useful without presenting unknown quantities as facts.",
      ),
    ),
    q(
      "habit",
      l("哪个目标更容易检验？", "Which goal is easier to review?"),
      [
        l("永远吃完美", "Eat perfectly forever"),
        l(
          "周一和周三晚餐安排已买的两种菜",
          "Use two purchased vegetables at Monday and Wednesday dinners",
        ),
      ],
      1,
      l(
        "具体时间、准备与替代方案让行动可执行，也更容易找出障碍。",
        "Timing, preparation and a fallback make action workable and barriers easier to identify.",
      ),
    ),
  ],
  practicalTask: l(
    "选择一个成人日常饮食问题，写一周行动计划：具体行动、营养理由、采购或准备、一个障碍及备用方案。评估可行性与体验，不要求计算热量。",
    "Choose one adult eating issue and write a one-week plan: action, nutritional reason, shopping or preparation, one barrier and a fallback. Review feasibility and experience without requiring calorie counting.",
  ),
  summary: l(
    [
      "观察反复出现的饮食模式。",
      "在现有餐食中安排纤维与多样性。",
      "比较蛋白质来源与脂肪替换。",
      "把钠、饮料和实际份量纳入思考。",
      "可持续的小习惯包含现实的备用方案。",
    ],
    [
      "Look for recurring dietary patterns.",
      "Build fibre and variety into existing meals.",
      "Compare protein sources and fat replacements.",
      "Include sodium, drinks and actual quantities.",
      "A sustainable small habit includes a realistic fallback.",
    ],
  ),
  sourceIds: ["who", "eatwell", "plate", "hydration-guide", "who-activity"],
});
