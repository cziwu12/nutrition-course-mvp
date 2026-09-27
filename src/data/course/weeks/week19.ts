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
export const week19Lesson = lesson({
  videoNote: l(
    "本周练习为案例说明选择理由；额外通用饮食视频会重复前面内容，因此不安排视频。",
    "This week practises explaining choices for a case. A generic diet video would repeat earlier material, so no video is assigned.",
  ),
  introduction: l(
    "本周把知识变成一日饮食的推理。案例是一位 43 岁、久坐、吃普通马来西亚华人家庭食物、不喜欢复杂烹调的女性。案例没有提供病史、体格或个人能量需要，因此我们设计可讨论的示例，不开立减重或医疗菜单。",
    "This week turns knowledge into reasoning about a day of eating. The fictional case is a 43-year-old sedentary woman eating ordinary Chinese Malaysian family food who prefers simple cooking. Without medical history, body measurements or individual needs, we can design examples for discussion, not a weight-loss or medical prescription.",
  ),
  objectives: l(
    [
      "把生活条件转化为菜单设计要求。",
      "为早餐、午餐、点心与晚餐说明选择理由。",
      "保留主食与多样性，并考虑蛋白质、纤维和饮料。",
      "提供替代方案与个人化前需要补充的问题。",
    ],
    [
      "Translate life circumstances into planning requirements.",
      "Explain choices for breakfast, lunch, snack and dinner.",
      "Retain staples and variety while considering protein, fibre and drinks.",
      "Offer alternatives and identify questions needed before personalisation.",
    ],
  ),
  sections: [
    section(
      "day-brief",
      l(
        "19.1 先读案例，不自行补上诊断",
        "19.1 Read the brief without adding a diagnosis",
      ),
      [
        p(
          "43 岁不等于已经绝经，久坐也不等于一定有糖尿病。我们知道的是她偏好简单家庭食物、活动较少；不知道的是过敏、疾病、用药、预算、食欲和作息。菜单设计应把未知写出来，而不是用年龄推算一个精确热量上限。",
          "Age 43 does not establish menopause, and sedentary living does not establish diabetes. We know the preference for simple family food and limited activity; allergies, conditions, medicines, budget, appetite and schedule remain unknown. Record those gaps instead of deriving a precise calorie ceiling from age.",
        ),
        p(
          "设计约束是计划必须面对的条件，例如只有一个炉头、午餐外买或下班晚。把条件视为设计资料，能避免提出无法持续的方案。营养合理还包括足够食物，不因为久坐就只安排少量蔬菜。",
          "Constraints are conditions the plan must address, such as one hob, bought lunches or late work. Treat them as design information to avoid an unsustainable proposal. Nutritional adequacy includes enough food; sedentary living does not justify a menu of only small vegetable portions.",
        ),
        example(
          "三个开始前的问题",
          "Three starting questions",
          "问：平常几点吃饭？哪些食物喜欢且买得到？是否有需要遵循的医疗或过敏建议？这些答案可能比知道体重更直接决定明天的早餐能否做到。",
          "Ask when meals usually happen, which foods are liked and available, and whether medical or allergy guidance applies. These answers may determine tomorrow’s feasible breakfast more directly than knowing weight.",
        ),
        call(
          "案例边界",
          "Case boundaries",
          "以下份量用可调整的家庭描述，不是个人处方。若有疾病、怀孕、肾病或药物相关需求，应让合适的专业人员协助。",
          "Amounts below are adaptable household descriptions, not a prescription. Illness, pregnancy, kidney disease or medication-related needs require suitable professional input.",
          "important",
        ),
      ],
      ["case-study", "constraint", "individualisation"],
      ["who", "plate", "menopause-overview"],
    ),
    section(
      "day-breakfast",
      l(
        "19.2 早餐：在熟悉食物上加一个支点",
        "19.2 Breakfast: build on familiar food",
      ),
      [
        p(
          "一个简单示例是全麦面包配蛋，再加一份水果与无糖茶或水。主食提供能量，蛋提供蛋白质，水果增加多样性。这不是唯一组合，也不需要为了早餐去买昂贵进口材料；重点是每个组成的功能。",
          "One simple example is wholemeal bread with egg, fruit and unsweetened tea or water. The staple provides energy, egg contributes protein and fruit adds variety. This is one combination, not a requirement for expensive imported ingredients. Understand each component’s role.",
        ),
        p(
          "若习惯燕麦，可配原味奶或合适的强化豆奶；若喜欢粥，可考虑蛋、豆腐或鱼与蔬菜。不同组合的钙、蛋白质和纤维不完全相同。查看常用饮料标签，可帮助判断是否有强化钙，而不是凭名称假定等同。",
          "Oats can be paired with plain milk or a suitable fortified soy drink. Porridge can include egg, tofu or fish and vegetables. Combinations differ in calcium, protein and fibre. Reading the usual drink’s label can establish fortification instead of assuming equivalent nutrition from its name.",
        ),
        example(
          "赶时间的备选",
          "A rushed-morning fallback",
          "前晚准备可安全冷藏的蛋类食物，早上搭配面包与水果；或选择不需烹调的合适酸奶。需要冷藏的食物不能长时间留在炎热环境。",
          "Prepare an egg-based option with safe refrigeration the night before, then pair with bread and fruit, or use suitable yoghurt needing no cooking. Perishable food should not remain in a hot environment for prolonged periods.",
        ),
        call(
          "加法也可以是改善",
          "Addition can be an improvement",
          "如果原早餐只有咖啡，不一定先想删掉什么。增加可行的食物与蛋白质来源，可能更直接解决漏餐问题。",
          "If breakfast is only coffee, removal need not be the first step. Adding feasible food and a protein source may address the missed meal more directly.",
        ),
      ],
      ["staple", "protein", "fortification", "fibre"],
      ["protein-guide", "whole-grains", "calcium", "food-safety"],
    ),
    section(
      "day-lunch",
      l(
        "19.3 午餐：在杂菜饭里看组合",
        "19.3 Lunch: find balance in mixed rice",
      ),
      [
        p(
          "杂菜饭可以从饭、蔬菜与蛋白质菜的组成思考，例如饭配两种可接受的蔬菜和鱼、鸡肉或豆腐。菜的数量、做法与酱汁都影响结果。餐盘框架提醒比例，不要求每个食堂都有完全一样的选择。",
          "Mixed rice can be considered as rice, vegetables and a protein dish, such as two accepted vegetables with fish, chicken or tofu. Quantities, preparation and sauces affect the result. A plate framework prompts proportions without requiring every canteen to offer identical choices.",
        ),
        p(
          "若没有全谷饭，不代表整餐毫无价值。可以保留普通米饭，关注其他组成，在另一餐安排全谷物。外食选择受价格和供应影响，菜单应允许替代，而不是只有某种特定谷物才算成功。",
          "If whole-grain rice is unavailable, the meal is not worthless. Retain ordinary rice, consider the other components and include whole grains elsewhere. Price and availability shape eating out, so a plan needs alternatives rather than requiring one particular grain.",
        ),
        example(
          "一道菜卖完时",
          "When a dish sells out",
          "原计划鱼卖完了，可以改豆腐或鸡肉，并看菜量和调味是否合适。替换目的是保留蛋白质角色，不要求营养数值完全一模一样。",
          "If the planned fish is sold out, tofu or chicken may preserve the protein role, with vegetables and seasoning considered. A practical substitution need not have identical nutrient numbers.",
        ),
        call(
          "不要从菜名猜精确数据",
          "Do not infer exact values from a dish name",
          "同名杂菜饭可有不同份量与烹调方式。没有可靠数据时，说明观察与推理，不编造整餐热量、钠或蛋白质。",
          "Dishes with the same name vary in quantity and preparation. Without reliable data, explain the observation and reasoning rather than inventing meal calories, sodium or protein.",
        ),
      ],
      ["plate-framework", "substitution", "uncertainty"],
      ["kkm-plate", "plate", "sodium"],
    ),
    section(
      "day-snack",
      l(
        "19.4 下午点心与饮料：看需要和间隔",
        "19.4 Afternoon food and drinks: consider need and timing",
      ),
      [
        p(
          "点心不是人人必须，也不必被视为坏习惯。若午晚餐间隔长或饥饿，可选择适合的食物，例如水果配原味酸奶，或一小份坚果配水果，结合过敏与个人需要。目的是让日程更容易维持，而不是压抑饥饿直到很晚。",
          "A snack is neither compulsory nor automatically a bad habit. A long gap or hunger may call for suitable food, such as fruit with plain yoghurt or some nuts with fruit, accounting for allergies and individual needs. The purpose is a manageable day rather than suppressing hunger until late.",
        ),
        p(
          "如果喜欢奶茶，可以考虑频率、杯量、甜度和是否同时需要点心，不必用“永远不能喝”代替分析。茶本身与加入糖浆、炼乳后的饮料不同。水可作为常见饮料，同时保留社交场景的弹性。",
          "For someone who enjoys milk tea, consider frequency, cup size, sweetness and whether food is also needed. “Never drink it” is not an analysis. Tea differs from a drink with syrup and condensed milk. Water can be a regular choice while allowing social flexibility.",
        ),
        compare([
          {
            title: l("需要时的点心", "A snack when useful"),
            items: [
              l("回应较长间隔或饥饿。", "Addresses a long gap or hunger."),
              l(
                "选择喜欢、可保存且合适的食物。",
                "Uses acceptable, safely stored, suitable food.",
              ),
            ],
          },
          {
            title: l("只看营销", "Relying on marketing"),
            items: [
              l("买任何写“瘦身”的点心。", "Buy anything labelled slimming."),
              l(
                "把无糖字样当成整份营养评价。",
                "Treat sugar-free wording as a complete nutritional assessment.",
              ),
            ],
          },
        ]),
        call(
          "观察体验",
          "Observe the experience",
          "点心后是否更舒服、晚餐是否仍有胃口，都可帮助调整。不要把正常饥饿视为缺乏自制力，也不把每次想吃东西都简化成单一营养问题。",
          "Comfort afterwards and appetite for dinner can guide adjustments. Normal hunger is not weak self-control, and wanting food need not have one simple nutritional cause.",
        ),
      ],
      ["snack", "satiety", "added-sugar"],
      ["hydration-guide", "who", "protein-guide"],
    ),
    section(
      "day-dinner",
      l(
        "19.5 晚餐：用少量步骤完成搭配",
        "19.5 Dinner: build a meal with few steps",
      ),
      [
        p(
          "示例晚餐可以是饭、蒸鱼或豆腐、炒青菜与番茄。也可把蛋白质食物和蔬菜放进同一锅，再搭配主食。简单烹调是减少步骤，而不是让菜单缺少必要组成；家庭口味也值得保留。",
          "An example dinner is rice, steamed fish or tofu, greens and tomato. Alternatively combine protein foods and vegetables in one pot with a staple alongside. Simplicity means fewer steps rather than missing components, while preserving family preferences.",
        ),
        p(
          "采购时让同一种食材在不同餐有不同用途，例如豆腐用于午餐替代或晚餐汤菜，但保存要安全。提前处理生食与熟食时避免交叉污染，剩菜及时妥善保存；闻起来正常不能保证食物安全。",
          "Let an ingredient serve several roles, such as tofu at lunch or in a dinner dish, while storing it safely. Avoid cross-contamination between raw and cooked foods and store leftovers promptly and appropriately. Normal smell does not guarantee safety.",
        ),
        example(
          "不用复杂食谱的晚餐",
          "Dinner without a complicated recipe",
          "饭配豆腐青菜蛋花汤，按喜欢的口味调味但留意盐和汤料；饭与配料数量按个人需要调整。汤里只有几片菜时，不能只因菜名有青菜就认为菜量足够。",
          "Rice with tofu, greens and egg soup can use familiar seasoning while considering salt and stock. Adjust rice and ingredients to needs. A few leaves do not automatically make a vegetable-rich meal merely because greens appear in the name.",
        ),
        call(
          "留一个忙碌日版本",
          "Keep a busy-day version",
          "备好可快速处理的蛋、豆腐、冷冻蔬菜或其他合适食物。备用方案能维持基本搭配，不要求每次做出同样完整的菜式。",
          "Keep suitable quick options such as eggs, tofu or frozen vegetables. A fallback preserves the basic combination without requiring the same elaborate dish every time.",
        ),
      ],
      ["food-safety", "cross-contamination", "substitution"],
      ["food-safety", "kkm-plate", "plate"],
    ),
    section(
      "day-review",
      l(
        "19.6 解释选择，比交出完美菜单重要",
        "19.6 Explain the choices, not a perfect menu",
      ),
      [
        p(
          "回看一天是否有多样来源、可行的蛋白质、蔬果、主食与饮水机会，再看是否符合预算、烹调时间和口味。没有精确份量与成分资料，不能宣称已满足全部营养需要。说明哪些方面是合理方向、哪些仍需了解。",
          "Review variety, feasible protein, produce, staples and fluids, then cost, preparation time and taste. Without quantities and composition data, do not claim every nutrient requirement is met. Distinguish reasonable directions from details still needing clarification.",
        ),
        p(
          "每餐写一句营养理由和一句实际理由，再提供一个替代。个人化前应询问疾病、药物、过敏、怀孕可能、食欲和生活安排。讨论活动时可以提出按能力增加日常走动，但不把吃饭与消耗热量绑定。",
          "For each meal write a nutritional reason, a practical reason and an alternative. Before personalising, ask about health, medicines, allergies, possible pregnancy, appetite and routine. Movement can be discussed according to ability without making eating something that must be earned through expenditure.",
        ),
        example(
          "怎样表达适当的把握",
          "Express appropriate confidence",
          "“这份示例增加了早餐蛋白质和两餐蔬菜机会，步骤较少；实际份量、钙来源与个人健康需要还要确认。”这比“这是她最健康的一天”更准确。",
          "“This example adds breakfast protein and vegetables at two meals with few steps; actual portions, calcium sources and personal needs still need checking.” This is more accurate than declaring it the healthiest possible day for her.",
        ),
        call(
          "多种合理答案",
          "Several reasonable answers",
          "如果你的菜单不同，但能说明营养与现实理由，并保留不确定性，同样可以完成本周。学习目标是推理，不是照抄。",
          "A different menu can meet the task when it explains nutritional and practical reasons and acknowledges uncertainty. The goal is reasoning rather than copying.",
        ),
      ],
      ["individualisation", "uncertainty", "constraint"],
      ["who", "plate", "who-activity"],
    ),
  ],
  keyTerms: [
    term(
      "case-study",
      "案例分析",
      "Case study",
      "使用有限背景资料练习分析与推理，不自动是个人建议。",
      "Analysis using a limited scenario for learning, not automatically personal advice.",
    ),
    term(
      "constraint",
      "设计条件",
      "Constraint",
      "影响计划可行性的时间、预算、设备或偏好等条件。",
      "A condition such as time, budget, equipment or preference affecting feasibility.",
    ),
    term(
      "individualisation",
      "个人化",
      "Individualisation",
      "按个人健康、需要和生活背景调整建议的过程。",
      "Adapting guidance to an individual’s health, needs and circumstances.",
    ),
    term(
      "staple",
      "主食",
      "Staple",
      "餐食中常见的能量基础，如饭、面、面包或薯类。",
      "A regular meal energy base such as rice, noodles, bread or tubers.",
    ),
    term(
      "protein",
      "蛋白质",
      "Protein",
      "由氨基酸组成、支持组织与多种功能的营养素。",
      "An amino-acid-based nutrient supporting tissues and many functions.",
    ),
    term(
      "fortification",
      "营养强化",
      "Fortification",
      "制造时加入指定营养素，需从标签确认。",
      "Adding specified nutrients during manufacture, confirmed from the label.",
    ),
    term(
      "fibre",
      "膳食纤维",
      "Dietary fibre",
      "人体消化酶不能完全消化的碳水化合物成分。",
      "Carbohydrate components not fully digested by human digestive enzymes.",
    ),
    term(
      "plate-framework",
      "餐盘框架",
      "Plate framework",
      "帮助考虑食物组合与相对比例的视觉提示。",
      "A visual prompt for food combinations and approximate proportions.",
    ),
    term(
      "substitution",
      "替代选择",
      "Substitution",
      "在保留某种用途时，用另一个合适食物替换。",
      "Using another suitable food while retaining a relevant meal role.",
    ),
    term(
      "uncertainty",
      "不确定性",
      "Uncertainty",
      "现有案例资料不足以确认的部分。",
      "What the information in the case cannot establish.",
    ),
    term(
      "snack",
      "点心",
      "Snack",
      "正餐之间的食物机会，是否需要取决于情况。",
      "Food between meals, whose usefulness depends on circumstances.",
    ),
    term(
      "satiety",
      "饱腹感",
      "Satiety",
      "进食后继续吃的需求减少的感受。",
      "A reduced drive to eat after consuming food.",
    ),
    term(
      "added-sugar",
      "添加糖",
      "Added sugar",
      "制造或准备饮食时额外加入的糖。",
      "Sugar added during food or drink manufacture or preparation.",
    ),
    term(
      "food-safety",
      "食品安全",
      "Food safety",
      "减少食物造成伤害风险的准备、烹调和保存方式。",
      "Preparation, cooking and storage practices that reduce food-related harm.",
    ),
    term(
      "cross-contamination",
      "交叉污染",
      "Cross-contamination",
      "有害微生物等从一种食物或表面转移到另一处。",
      "Transfer of harmful microbes or other contaminants between foods or surfaces.",
    ),
  ],
  questions: [
    q(
      "assumption",
      l("案例明确告诉我们什么？", "What does the case actually establish?"),
      [
        l("她有糖尿病", "She has diabetes"),
        l(
          "她喜欢简单烹调且活动较少",
          "She prefers simple cooking and has limited activity",
        ),
        l("她必须减重", "She must lose weight"),
      ],
      1,
      l(
        "不能从年龄与久坐推断疾病或减重需要。",
        "Age and sedentary living do not establish disease or a need for weight loss.",
      ),
    ),
    q(
      "breakfast",
      l(
        "给只有咖啡的早餐增加食物有什么理由？",
        "Why add food to a coffee-only breakfast?",
      ),
      [
        l(
          "增加取得能量和营养的机会",
          "Provide an opportunity for energy and nutrients",
        ),
        l("保证治好疲倦", "Guarantee treatment of fatigue"),
      ],
      0,
      l(
        "这是改善餐食机会的理由，不是症状治疗承诺。",
        "This is a reason to improve nourishment opportunities, not a promise to treat symptoms.",
      ),
    ),
    q(
      "rice",
      l(
        "外食没有糙米时应如何看？",
        "How should you respond when brown rice is unavailable?",
      ),
      [
        l("整餐失败", "The meal has failed"),
        l("完全不吃主食", "Avoid all staples"),
        l(
          "看整餐组合并在其他机会安排全谷物",
          "Consider the whole meal and whole grains at other opportunities",
        ),
      ],
      2,
      l(
        "实际供应与整体模式都重要，不由一种食材决定全部。",
        "Availability and overall patterns matter; one ingredient does not determine everything.",
      ),
    ),
    q(
      "review",
      l("菜单交付时最应包含什么？", "What should accompany the menu?"),
      [
        l("保证满足所有需要", "A guarantee of all nutrient needs"),
        l(
          "理由、备选与尚需了解的信息",
          "Reasons, alternatives and information still needed",
        ),
      ],
      1,
      l(
        "解释推理与边界比宣称一个完美答案更有用。",
        "Reasoning and boundaries are more useful than claiming a perfect answer.",
      ),
    ),
  ],
  practicalTask: l(
    "为案例设计早餐、午餐、下午点心与晚餐。每餐写营养理由、实际理由和一个替代；再列三项个人化前需要询问的信息。使用下方工作区保存。",
    "Plan breakfast, lunch, an afternoon snack option and dinner for the case. Give a nutritional reason, practical reason and alternative for each, plus three questions needed before personalisation. Save your work in the worksheet below.",
  ),
  summary: l(
    [
      "先辨认已知与未知。",
      "在熟悉食物上改善搭配。",
      "保留主食、蛋白质、蔬果与饮水机会。",
      "菜单需要预算、时间与安全保存支持。",
      "合理答案可以不同，但要说明理由与边界。",
    ],
    [
      "Separate known from unknown information.",
      "Improve combinations using familiar foods.",
      "Retain staples, protein, produce and fluids.",
      "Plans need budget, time and safe storage.",
      "Reasonable answers can differ when reasons and limits are clear.",
    ],
  ),
  sourceIds: ["plate", "kkm-plate", "who", "food-safety"],
});
