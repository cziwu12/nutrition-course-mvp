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
export const week23Lesson = lesson({
  videoNote: l(
    "本周通过观察、提问和书面推理整合已有知识。没有额外安排视频，避免用通用建议替代你对案例的分析。",
    "This week integrates prior learning through observation, questions and written reasoning. No extra video is assigned, so a generic recommendation does not replace your own case analysis.",
  ),
  introduction: l(
    "案例：一位 40 岁女性，早餐咖啡加面包，午餐饭加菜加肉，下午奶茶，晚餐面，几乎没有运动。资料很短，正好练习一个关键能力：知道能说什么，也知道不能说什么。目标是提出三个现实改善，不诊断疾病。",
    "Case: a 40-year-old woman has coffee and bread for breakfast, rice with vegetables and meat for lunch, milk tea in the afternoon and noodles for dinner, with almost no exercise. This brief record is ideal for practising what we can and cannot conclude. Propose three realistic improvements without diagnosing disease.",
  ),
  objectives: l(
    [
      "区分案例事实、可能模式与未知信息。",
      "提出有用且不带评判的问题。",
      "选择三个可执行、理由清楚的改变。",
      "说明如何复盘与何时寻求专业支持。",
    ],
    [
      "Separate facts, possible patterns and unknowns.",
      "Ask useful, non-judgemental questions.",
      "Choose three feasible changes with clear reasons.",
      "Explain review and when professional support is needed.",
    ],
  ),
  sections: [
    section(
      "case-facts",
      l("23.1 先照原样观察", "23.1 Begin with the stated facts"),
      [
        p(
          "已知的是几个餐食名称与活动很少。我们不知道面包是不是全麦、咖啡是否加糖、午餐菜量、奶茶杯量、晚餐有没有蛋和菜，或其他饮水。也不知道这是典型一天还是偶尔一天。食物名称不是完整营养数据。",
          "We know meal names and limited activity. We do not know bread type, coffee additions, vegetable quantity at lunch, milk-tea size, egg or vegetables in dinner noodles, or other drinks. Nor do we know whether this day is typical. Food names are not complete nutrient data.",
        ),
        p(
          "观察是直接来自资料的描述；推测是可能解释；诊断是需要合适评估的健康判断。把三者分开，能避免把“几乎没有运动”写成“已经有胰岛素阻抗”，或把吃面等同营养很差。",
          "An observation comes directly from the record; an inference is a possible interpretation; a diagnosis requires appropriate assessment. Separate them to avoid turning little exercise into established insulin resistance or treating noodles as proof of poor nutrition.",
        ),
        example(
          "准确的第一句话",
          "An accurate first sentence",
          "“这份简短记录包含三餐和下午饮料，但份量、配料和其他日子未知。”这句话不夸大，也为进一步询问留下空间。",
          "“This brief record includes three meals and an afternoon drink, but quantities, ingredients and other days are unknown.” It avoids overstatement and creates space for questions.",
        ),
        call(
          "先找已有优点",
          "Notice existing strengths",
          "午餐已经有饭、蔬菜和肉的组合；有规律餐次也可作为调整基础。分析不必先把所有原习惯否定。",
          "Lunch already combines rice, vegetables and meat, and existing meal occasions can support changes. Analysis does not require dismissing everything about the current routine.",
        ),
      ],
      ["observation", "inference", "diagnosis", "uncertainty"],
      ["diary-method", "who", "plate"],
    ),
    section(
      "case-questions",
      l("23.2 用问题补足背景", "23.2 Fill context with questions"),
      [
        p(
          "优先问会改变建议的问题：实际份量和配料是什么？是否常这样吃？哪些食物喜欢、预算多少、能花多少时间？是否有过敏、疾病、用药或医疗建议？不要一次要求对方交出所有隐私，而是说明问题用途。",
          "Prioritise questions that would change advice: quantities and ingredients, how typical the pattern is, preferences, budget and preparation time, and relevant allergies, conditions, medicines or care guidance. Explain why you ask instead of demanding every private detail.",
        ),
        p(
          "开放式问题让对方描述真实困难，例如“下午那杯奶茶通常在什么情况下买？”比“为什么又喝不健康的东西？”更有信息。答案可能涉及饥饿、社交、疲倦或工作限制，对应的调整也不同。",
          "Open questions reveal practical barriers. “What usually leads to that afternoon milk tea?” is more informative than “why drink something unhealthy again?” The answer may involve hunger, social life, fatigue or work constraints, each suggesting a different response.",
        ),
        compare([
          {
            title: l("帮助理解", "Helps understanding"),
            items: [
              l(
                "晚餐的面里通常有什么？",
                "What usually goes into the dinner noodles?",
              ),
              l(
                "你最想先改善哪一餐？",
                "Which meal would you like to improve first?",
              ),
            ],
          },
          {
            title: l("先入为主", "Assumes the answer"),
            items: [
              l(
                "吃面是不是因为没有自制力？",
                "Are noodles a sign of weak self-control?",
              ),
              l("你一定吃太多了吧？", "You must be eating too much, right?"),
            ],
          },
        ]),
        call(
          "这仍是学习案例",
          "This remains a learning case",
          "真实家人的健康问题需要取得同意后讨论。若出现持续症状或需要调整药物相关饮食，交给专业人员，不用问卷替代诊疗。",
          "Discuss a real relative’s health with consent. Persistent symptoms or medication-related dietary changes need professional input rather than a questionnaire replacing care.",
          "important",
        ),
      ],
      ["open-question", "context", "consent"],
      ["food-diary-guide", "online-evidence"],
    ),
    section(
      "case-patterns",
      l(
        "23.3 提出可能模式，保留“可能”",
        "23.3 Suggest possible patterns, keeping the uncertainty",
      ),
      [
        p(
          "早餐可能缺少明显的蛋白质来源，但若面包已有蛋或咖啡含合适奶类，解释会改变。晚餐蔬菜可能较少，但面里也可能有很多菜。用“值得确认”代替“肯定缺乏”，才能让建议与资料相称。",
          "Breakfast may lack an obvious protein food, but egg in the bread or suitable milk in coffee could change that interpretation. Dinner vegetables may be limited, yet the noodles might contain plenty. “Worth checking” is more accurate than definite deficiency.",
        ),
        p(
          "奶茶可能是添加糖来源，实际情况取决于杯量、甜度和频率。饭和面是主食，不自动等于需要删除。几乎没有运动提示可以讨论日常活动机会，但不能凭此评估身体能力或开高强度计划。",
          "Milk tea may contribute added sugar depending on size, sweetness and frequency. Rice and noodles are staples, not automatic deletion targets. Little exercise invites discussion of activity opportunities without establishing physical capacity or justifying an intense programme.",
        ),
        example(
          "三个待核实方向",
          "Three directions to check",
          "早餐是否有足够食物与蛋白质？蔬果在整周是否经常出现？下午饮料与点心是否符合饥饿、预算和偏好？这些是营养观察方向，不是检验报告。",
          "Does breakfast provide enough food and protein? Does produce appear regularly across the week? Do afternoon food and drinks fit hunger, cost and preferences? These are observation directions, not laboratory results.",
        ),
        call(
          "缺乏不能由菜单名称确诊",
          "Meal names cannot diagnose deficiency",
          "营养不足、糖尿病或血脂问题都需要适当资料与评估。建议增加某类食物，也不意味着我们已经证明某种缺乏。",
          "Nutritional deficiency, diabetes or lipid disorders need appropriate information and assessment. Suggesting a food category does not mean a deficiency has been proven.",
        ),
      ],
      ["pattern", "protein", "added-sugar", "staple"],
      ["protein-guide", "who", "who-activity", "diary-method"],
    ),
    section(
      "case-priorities",
      l(
        "23.4 选三个小改变并解释理由",
        "23.4 Choose three small changes with reasons",
      ),
      [
        p(
          "下面是一组可能答案，需按询问结果调整。第一，若早餐确实缺少蛋白质，可在原面包旁加蛋或合适的原味酸奶；保留熟悉早餐，增加营养组成。第二，若晚餐菜少，可给面加青菜和豆腐或蛋，而不是把面全部禁止。",
          "One possible answer follows, adjusted after questions. First, if breakfast lacks protein, add egg or suitable plain yoghurt beside the existing bread, preserving familiarity while adding a component. Second, if dinner vegetables are limited, add greens and tofu or egg to noodles rather than banning noodles.",
        ),
        p(
          "第三，和本人讨论下午饮料：选择较小杯或较少糖的版本，部分日子换水或无糖茶；如果真的饿，同时安排合适点心。改变必须说明频率与可行条件，不能只写一句“健康饮食”。",
          "Third, discuss the afternoon drink: a smaller or less-sweet version, or water or unsweetened tea on some days. If hunger is present, plan suitable food too. Specify frequency and practical conditions rather than writing only “eat healthily”.",
        ),
        example(
          "也可以选择活动",
          "Activity can be another priority",
          "若本人最想改善活动，可以用按能力安排的短时间日常走动替代以上其中一项。并非必须同时改所有习惯；活动不是为吃饭赎罪，有健康限制先咨询。",
          "If activity is the person’s preferred priority, an ability-appropriate short walk can replace one of these choices. Everything need not change at once. Movement is not compensation for eating, and health limitations call for guidance.",
        ),
        call(
          "不是唯一标准答案",
          "Not the only correct answer",
          "合理建议必须与观察相关、对本人可接受、可执行，并说明边界。只列三种昂贵食材或三条禁止规则，并没有完成推理。",
          "Reasonable suggestions relate to observations, are acceptable and feasible, and state boundaries. Three expensive ingredients or prohibitions alone do not complete the reasoning.",
        ),
      ],
      ["priority", "substitution", "feasibility"],
      ["plate", "protein-guide", "hydration-guide", "who-activity"],
    ),
    section(
      "case-implementation",
      l(
        "23.5 从建议到能做到的行动",
        "23.5 Turn suggestions into doable actions",
      ),
      [
        p(
          "每个改变写何时、在哪里、谁准备，以及遇到障碍怎么办。例如“周一和周四早餐加家里已有的蛋；如果没时间煮，前晚按安全方式准备”。具体行动能帮助发现计划需要的采购和保存条件。",
          "For each change state when, where, who prepares it and what happens if there is a barrier. For example: add an existing egg option at Monday and Thursday breakfast, using safe preparation the evening before if rushed. Specific actions reveal shopping and storage requirements.",
        ),
        p(
          "复盘指标可以是是否完成、是否喜欢、是否更方便，以及有没有不适。不是用一周体重或一张自拍证明健康改善。遇到困难，先问准备、价格或接受度，再调整计划；无需把失败归结于个人品格。",
          "Review completion, acceptability, convenience and any discomfort. One week’s weight or a photograph cannot prove better health. If a plan is difficult, examine preparation, cost or acceptance before changing it rather than blaming character.",
        ),
        example(
          "加菜太贵的情况",
          "When extra vegetables cost too much",
          "可以比较其他食堂组合、在另一餐安排本地蔬菜，或选家里能安全准备的方案。目标是找可持续机会，不是让家庭为了某个理想配方超支。",
          "Compare another canteen combination, add local vegetables at another meal or use a safely prepared home option. The aim is sustainable opportunity rather than overspending on an ideal formula.",
        ),
        call(
          "保留本人选择权",
          "Preserve the person’s choices",
          "提出两个合理备选，请本人选愿意尝试的一个。营养学习应帮助沟通，不变成监督家人每一口的理由。",
          "Offer two reasonable alternatives and let the person choose one to try. Nutrition learning should support communication, not justify policing a relative’s eating.",
        ),
      ],
      ["implementation", "review", "consent"],
      ["food-safety", "who", "food-diary-guide"],
    ),
    section(
      "case-writeup",
      l("23.6 写一份有边界的案例分析", "23.6 Write a bounded case analysis"),
      [
        p(
          "用下方工作区分四部分：已知观察、需要询问的问题、三个改变及理由、实施与复盘。每条建议可回链到本课前面的原则或可信来源；不能把来源中针对不同疾病的建议直接移植到这个没有诊断的案例。",
          "Use four worksheet areas: observations, questions, three changes with reasons, and implementation with review. Connect suggestions to earlier principles or reliable sources. Do not transplant disease-specific advice into this undiagnosed case merely because a source mentions it.",
        ),
        p(
          "最后找出自己写的绝对词，例如一定、治好、必须和永远，检查是否有证据。把无法确定的结论改成待询问问题，同时保留清楚可行的建议。谨慎不等于什么都不能做，而是知道什么程度的行动有依据。",
          "Review absolute wording such as definitely, cure, must and always. Turn unsupported conclusions into questions while retaining clear feasible suggestions. Caution does not mean doing nothing; it means matching the action to its justification.",
        ),
        example(
          "合适的结尾",
          "An appropriate closing statement",
          "“这三项是根据有限资料提出的尝试，需确认份量、偏好与健康背景。一周后评估可行性，不用它们判断是否有病。”",
          "“These are three possible trials based on limited information, pending quantities, preferences and health context. Review feasibility after a week; do not use them to determine whether disease is present.”",
        ),
        call(
          "完成标准",
          "Completion standard",
          "三个改变各有观察依据、营养理由和现实安排，并列至少三项未知。能解释为什么没有诊断，也是本周的重要成果。",
          "Give each change an observation, nutritional reason and practical arrangement, and list at least three unknowns. Explaining why you have not diagnosed is also an important outcome.",
        ),
      ],
      ["case-study", "uncertainty", "diagnosis"],
      ["diary-method", "plate", "online-evidence"],
    ),
  ],
  keyTerms: [
    term(
      "observation",
      "观察",
      "Observation",
      "直接由给定资料支持的描述，不包含未经证实推断。",
      "A description directly supported by the supplied information.",
    ),
    term(
      "inference",
      "推测",
      "Inference",
      "根据资料提出的可能解释，需保留不确定性。",
      "A possible interpretation of information that retains uncertainty.",
    ),
    term(
      "diagnosis",
      "诊断",
      "Diagnosis",
      "通过适当专业评估识别健康问题的判断。",
      "Identification of a health condition through appropriate professional assessment.",
    ),
    term(
      "uncertainty",
      "不确定性",
      "Uncertainty",
      "现有资料不足以确定的部分，应明确说明。",
      "What the available information cannot establish and should state explicitly.",
    ),
    term(
      "open-question",
      "开放式问题",
      "Open question",
      "允许对方描述背景而不是只回答是或否的问题。",
      "A question inviting explanation rather than only a yes-or-no answer.",
    ),
    term(
      "context",
      "背景情境",
      "Context",
      "时间、预算、偏好和健康等影响选择的条件。",
      "Conditions such as time, cost, preferences and health shaping choices.",
    ),
    term(
      "consent",
      "同意",
      "Consent",
      "当事人了解用途并愿意参与讨论或提供资料。",
      "A person’s informed willingness to participate or share information.",
    ),
    term(
      "pattern",
      "饮食模式",
      "Eating pattern",
      "在多次进食或日子中反复出现的安排。",
      "A recurring arrangement across eating occasions or days.",
    ),
    term(
      "protein",
      "蛋白质",
      "Protein",
      "由氨基酸组成、支持组织和身体功能的营养素。",
      "An amino-acid-based nutrient supporting tissues and body functions.",
    ),
    term(
      "added-sugar",
      "添加糖",
      "Added sugar",
      "准备或制造饮食时额外加入的糖。",
      "Sugar added during manufacture or preparation of food or drink.",
    ),
    term(
      "staple",
      "主食",
      "Staple",
      "经常作为餐食能量基础的饭、面、面包等食物。",
      "A regular meal energy base such as rice, noodles or bread.",
    ),
    term(
      "priority",
      "优先事项",
      "Priority",
      "按需要与可行性选择先处理的一项改变。",
      "A change selected for earlier attention based on need and feasibility.",
    ),
    term(
      "substitution",
      "替代",
      "Substitution",
      "用合适选择替换原有食物或安排的某一部分。",
      "Replacing a part of an existing food choice or arrangement with a suitable option.",
    ),
    term(
      "feasibility",
      "可行性",
      "Feasibility",
      "在实际时间、预算与能力下能否执行。",
      "Whether an action can be carried out with real time, resources and ability.",
    ),
    term(
      "implementation",
      "实施",
      "Implementation",
      "把建议落实为何时、怎样、由谁做的行动。",
      "Turning a suggestion into actions specifying when, how and by whom.",
    ),
    term(
      "review",
      "复盘",
      "Review",
      "观察执行与体验并据此调整计划的过程。",
      "Examining implementation and experience to revise a plan.",
    ),
    term(
      "case-study",
      "案例分析",
      "Case study",
      "用一个具体但有限的情境练习有依据的推理。",
      "Reasoning from a specific but limited scenario for learning.",
    ),
  ],
  questions: [
    q(
      "fact",
      l("以下哪项是案例事实？", "Which statement is a case fact?"),
      [
        l("她患有糖尿病", "She has diabetes"),
        l("她下午喝奶茶", "She has afternoon milk tea"),
        l("她一定缺蛋白质", "She definitely lacks protein"),
      ],
      1,
      l(
        "奶茶来自原记录，疾病和缺乏不能由短菜单确认。",
        "Milk tea appears in the record; disease and deficiency cannot be established from it.",
      ),
    ),
    q(
      "ask",
      l("哪一个问题更有帮助？", "Which question is more useful?"),
      [
        l(
          "晚餐面里通常有哪些配料？",
          "What usually goes into the dinner noodles?",
        ),
        l("为什么这么不自律？", "Why are you so undisciplined?"),
      ],
      0,
      l(
        "配料问题能改变分析，评判性问题增加压力但不提供信息。",
        "Ingredient details can change the analysis; judgement adds pressure without useful information.",
      ),
    ),
    q(
      "change",
      l(
        "哪种建议保留熟悉食物并改善组合？",
        "Which suggestion preserves familiar food while changing the combination?",
      ),
      [
        l("永远不能吃面", "Never eat noodles"),
        l("只能买进口沙拉", "Buy only imported salads"),
        l(
          "按实际情况给面加蔬菜与蛋白质食物",
          "Add vegetables and protein foods as appropriate",
        ),
      ],
      2,
      l(
        "调整组成通常比禁止整类主食更具体可行，也需考虑份量与个人情况。",
        "Changing components can be more practical than banning staples, while quantities and context still matter.",
      ),
    ),
    q(
      "review",
      l(
        "一周后主要评估什么？",
        "What should mainly be reviewed after one week?",
      ),
      [
        l("是否治好了疾病", "Whether disease was cured"),
        l(
          "可行性、接受度与需要调整的地方",
          "Feasibility, acceptance and adjustments",
        ),
      ],
      1,
      l(
        "这是生活安排练习，不是诊断或治疗试验。",
        "This is a routine-planning exercise, not a diagnostic or treatment trial.",
      ),
    ),
  ],
  practicalTask: l(
    "完成案例工作区：列已知与至少三项未知，提出三个现实改善，每项写观察依据、营养理由、执行方式和复盘办法。不要诊断。",
    "Complete the worksheet with known facts and at least three unknowns. Propose three realistic improvements, each with observation, nutritional reason, implementation and review. Do not diagnose.",
  ),
  summary: l(
    [
      "从事实开始，分开推测。",
      "用问题理解背景与偏好。",
      "三个改变需要理由与实际安排。",
      "保留主食与原有可用习惯。",
      "复盘可行性，并尊重个人与专业边界。",
    ],
    [
      "Begin with facts and separate inferences.",
      "Use questions to understand context and preferences.",
      "Three changes need reasons and arrangements.",
      "Retain staples and useful existing routines.",
      "Review feasibility and respect personal and professional boundaries.",
    ],
  ),
  sourceIds: ["diary-method", "plate", "who", "food-diary-guide"],
});
