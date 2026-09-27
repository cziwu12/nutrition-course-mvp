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
export const week24Lesson = lesson({
  videoNote: l(
    "毕业周的重点是完成并解释你自己的家庭指南。前面课程的视频已覆盖相关概念；此处不增加视频，把时间留给写作、核查与家庭讨论。",
    "Graduation week is for completing and explaining your own family guide. Earlier videos cover the relevant concepts; no new video is added so time can go to writing, checking and discussion.",
  ),
  introduction: l(
    "毕业项目不是证明你知道所有营养答案，而是把六个月学到的知识变成家人看得懂、用得上、知道边界的指南。你将整合饮食观察、简单菜单、标签阅读和可信来源，完成一份可以继续修改的家庭文件。",
    "The final project does not prove that you know every nutrition answer. It turns six months of learning into a guide your family can understand, use and recognise the limits of. Combine observations, simple menus, label reading and reliable sources into a document that can keep evolving.",
  ),
  objectives: l(
    [
      "完成家庭营养指南的十三个部分。",
      "用日常语言解释基础概念与选择理由。",
      "检查资料、现实可行性与健康边界。",
      "保存副本并制定后续更新方式。",
    ],
    [
      "Complete thirteen sections of a family nutrition guide.",
      "Explain foundations and choices in everyday language.",
      "Check sources, feasibility and health boundaries.",
      "Save a copy and plan future updates.",
    ],
  ),
  sections: [
    section(
      "project-purpose",
      l("24.1 确定读者与指南范围", "24.1 Define the reader and scope"),
      [
        p(
          "先写这份指南给谁看、希望解决什么实际问题。例如给负责买菜和煮饭的家人，帮助准备简单早餐、选择饮料和安排一周菜单。明确读者能帮助决定语言、篇幅与例子，不需要写成专业教材。",
          "State who will use the guide and what practical problems it addresses. It might help family shoppers and cooks prepare simple breakfasts, choose drinks and plan a week. A defined reader guides language, length and examples; this need not become a professional textbook.",
        ),
        p(
          "范围说明应写清：这是一份一般教育与家庭安排指南，不提供诊断、疾病治疗或个人补充剂剂量。已有医疗建议、过敏和特殊需要优先与专业人员讨论。尊重家人隐私，可使用匿名或虚构例子。",
          "Include a scope statement: general education and household planning, without diagnosis, disease treatment or personal supplement doses. Discuss existing care advice, allergies and special needs with professionals. Respect privacy by using anonymous or fictional examples if appropriate.",
        ),
        example(
          "开头示范",
          "An example opening",
          "“这份指南帮助我们在忙碌工作日安排普通家常饭。它记录可行选择和来源，不要求全家吃一样多，也不替代个人医疗建议。我们每月看看哪些方法值得保留。”",
          "“This guide helps us organise ordinary meals on busy workdays. It records workable choices and sources, does not require equal portions, and does not replace personal medical advice. We will review what is useful each month.”",
        ),
        call(
          "完成课程不等于专业资格",
          "Course completion is not a professional qualification",
          "你获得的是自学成果与家庭沟通工具，不是营养师、医生或治疗资格。能知道何时需要求助，本身就是重要能力。",
          "The outcome is learning and a family communication tool, not dietetic, medical or treatment credentials. Recognising when help is needed is part of the skill.",
          "important",
        ),
      ],
      ["scope", "audience", "professional-boundary"],
      ["who", "online-evidence", "supplements-guide"],
    ),
    section(
      "project-foundation",
      l(
        "24.2 第 1–3 节：习惯、问题与基础",
        "24.2 Sections 1–3: habits, challenges and foundations",
      ),
      [
        p(
          "第 1 节记录家庭饮食习惯：常见三餐、外食、饮料、采购和烹调分工。第 2 节选择两三个常见挑战，例如晚归时没备餐、蔬菜买了却坏掉或早餐常匆忙。用观察说明，不把家人描述成不自律。",
          "Section 1 records usual meals, eating out, drinks, shopping and cooking roles. Section 2 chooses two or three recurring challenges, such as late evenings without food, wasted vegetables or rushed breakfasts. Use observations rather than describing relatives as undisciplined.",
        ),
        p(
          "第 3 节用自己的话解释碳水、蛋白质、脂肪、维生素、矿物质、纤维与水的基本角色，再说明我们吃的是食物组合。保留足够与多样的概念，不把某一营养素设为敌人，也不要求记住所有数字。",
          "Section 3 explains the basic roles of carbohydrate, protein, fat, vitamins, minerals, fibre and water in your own words, then returns to combinations of foods. Retain adequacy and variety without making a nutrient the enemy or requiring memorisation of every number.",
        ),
        example(
          "基础解释示范",
          "A foundation explanation",
          "“饭和面主要提供能量，蛋、豆腐和鱼提供蛋白质等营养，蔬果带来纤维与多种成分。每种食物不只有一种营养，所以我们看整餐和整周。”",
          "“Rice and noodles contribute energy; egg, tofu and fish supply protein and other nutrients; produce provides fibre and diverse constituents. A food contains more than one nutrient, so we consider meals and weeks.”",
        ),
        call(
          "把未知写出来",
          "Keep unknowns visible",
          "短期记录不能确认营养缺乏。若没记录周末或不知道份量，写明限制；不要为了让指南完整而补出假数据。",
          "A short record cannot establish deficiency. Note missing weekends or unknown quantities rather than inventing data for a complete-looking guide.",
        ),
      ],
      ["observation", "adequacy", "variety", "uncertainty"],
      ["who", "diary-method", "protein-guide", "fibre-guide"],
    ),
    section(
      "project-meals",
      l(
        "24.3 第 4–8 节：把建议变成食物选择",
        "24.3 Sections 4–8: turn ideas into food choices",
      ),
      [
        p(
          "早餐、午餐和晚餐三节各给两种可行组合，写为什么适合家里，以及忙碌时怎么替换。可借用第 19 周的方法，但按家庭口味、预算与时间修改。菜名旁写组成与理由，不只列一串所谓健康食物。",
          "Give two feasible combinations each for breakfast, lunch and dinner, explaining suitability and a busy-day alternative. Adapt Week 19’s method to household taste, cost and time. Write components and reasons alongside dish names rather than listing supposed health foods.",
        ),
        p(
          "零食节说明点心在需要时如何补上长间隔，考虑口味、过敏与安全保存。饮料节写常见选择、添加糖与份量的观察，以及可接受替代。不要用完全禁止某食物来代替理解实际习惯。",
          "The snack section explains when food between meals helps bridge gaps, with taste, allergies and safe storage considered. The drinks section records common choices, additions and quantities with acceptable alternatives. A total ban is not a substitute for understanding routines.",
        ),
        example(
          "每个建议的三句话",
          "Three sentences for each idea",
          "“早餐可用面包、蛋和水果。保留熟悉主食，增加蛋白质与多样性。若早上来不及，前晚按安全方式准备或选择合适的原味酸奶替代蛋。”",
          "“Breakfast can include bread, egg and fruit. This retains a familiar staple and adds protein and variety. If rushed, prepare safely the night before or use a suitable plain yoghurt alternative.”",
        ),
        call(
          "不要声称一份菜单满足所有需要",
          "Do not claim universal nutritional adequacy",
          "没有个人资料与可靠份量分析，就不能保证菜单满足所有需要。将组合标为示例，并提醒按个人情况调整。",
          "Without personal information and reliable quantity analysis, a menu cannot guarantee all needs. Label combinations as examples and allow individual adaptation.",
        ),
      ],
      ["substitution", "feasibility", "portion"],
      ["plate", "kkm-plate", "hydration-guide", "food-safety"],
    ),
    section(
      "project-label-menu",
      l(
        "24.4 第 9–10 节：标签方法与一周菜单",
        "24.4 Sections 9–10: labels and the weekly menu",
      ),
      [
        p(
          "标签节用一件家中真实包装或明确虚构例子说明：先看参考量，再看实际量、营养表和配料。展示一个简单换算，并解释未列出不等于零。若使用进口包装，说明来源地区，不混淆不同制度的颜色或每日参考值。",
          "Use a real household label or explicitly fictional example to explain reference quantity, actual portion, panel and ingredients. Show one simple calculation and explain that undeclared is not zero. Identify the region for imported packaging rather than mixing colour or daily-value systems.",
        ),
        p(
          "一周菜单节从第 20 周工作区整理七天安排，同时写采购、分工、忙碌日备选和安全保存。家人共同吃的菜不代表每个人份量相同。允许重复、外食与替代，让菜单经得起真实生活。",
          "Bring the seven-day plan from Week 20 into the menu section with shopping, shared work, busy-day fallbacks and safe storage. Shared dishes do not mean identical quantities for everyone. Allow repetition, meals out and substitutions so the plan survives real life.",
        ),
        compare([
          {
            title: l("可用的指南", "A usable guide"),
            items: [
              l(
                "显示怎么算，并说明限制。",
                "Shows calculations and limitations.",
              ),
              l(
                "写采购和时间，允许替代。",
                "Includes shopping and timing with alternatives.",
              ),
            ],
          },
          {
            title: l("需要修订", "Needs revision"),
            items: [
              l(
                "只说选绿色标签但不说明地区。",
                "Says choose green labels without regional context.",
              ),
              l(
                "七天全是复杂新菜，没有保存计划。",
                "Lists seven complicated new dishes without storage plans.",
              ),
            ],
          },
        ]),
        example(
          "标签换算检查",
          "Check a label calculation",
          "若每 100 ml 含糖 6 g，实际喝 250 ml，则按标签为 15 g 总糖。说明这是总糖，不自动等于添加糖；若用虚构数字，标题必须写教学示例。",
          "If total sugars are 6 g per 100 ml, a 250 ml drink contains 15 g by the label. State total sugars rather than automatically calling them added sugar; label invented numbers as a teaching example.",
        ),
      ],
      ["serving-size", "portion", "meal-plan", "food-safety"],
      ["kkm-label", "fda-label", "food-safety", "rice-safety"],
    ),
    section(
      "project-family-sources",
      l(
        "24.5 第 11–13 节：家人需要与资料来源",
        "24.5 Sections 11–13: family needs and sources",
      ),
      [
        p(
          "儿童节回顾足够能量、适龄口感、食物多样与不强迫的进餐环境，明确严重进食或成长担忧需要求助。40+ 女性节回顾骨骼、蛋白质、铁与生理阶段差异，不把所有人设为同一种状态或开补充剂剂量。",
          "The children’s section covers enough energy, suitable textures, variety and low-pressure meals, with referral for substantial feeding or growth concerns. The section for women over 40 covers bones, protein, iron and differing physiological stages, without assigning one state or supplement dose to everyone.",
        ),
        p(
          "来源节记录机构、文章标题、直接链接、查阅日期和支持了指南哪一点。可从课程来源区选择 WHO、KKM、NIH 或合适医疗机构资料。来源真实还不够，必须确实支持所写内容；临床建议的适用人群也要一致。",
          "For each source record organisation, title, direct link, date checked and the point it supports. Choose suitable WHO, KKM, NIH or healthcare material from the course library. A real source must actually support the statement, with the relevant audience for clinical guidance.",
        ),
        example(
          "来源条目写法",
          "How to record a source",
          "“KKM 营养部门；马来西亚健康餐盘；直接链接；查阅日期；用于说明餐食组合，不用来开个人热量目标。”这样的记录方便以后核查，也清楚限制用途。",
          "“KKM Nutrition Division; Malaysian Healthy Plate; direct link; date checked; used for meal combinations, not a personal calorie target.” This makes later checking easier and keeps the scope explicit.",
        ),
        call(
          "知道何时更新",
          "Know when to update",
          "网页可能改变，个人情况也会改变。遇到新病史、怀孕、药物或过敏问题时，不只是修改菜单；应确认是否需要专业意见。",
          "Pages and personal circumstances can change. New conditions, pregnancy, medicines or allergies may require professional advice rather than only a menu revision.",
        ),
      ],
      ["citation", "applicability", "professional-boundary"],
      ["child-food", "child-fussy", "menopause-care", "online-evidence"],
    ),
    section(
      "project-finish",
      l("24.6 校对、分享与毕业", "24.6 Review, share and graduate"),
      [
        p(
          "下方工作区有十三个标题，会在当前浏览器自动保存。先完成草稿，再用五个问题校对：读者看得懂吗？建议做得到吗？来源支持吗？有没有未经依据的诊断或治病承诺？未知与求助边界清楚吗？",
          "The worksheet below contains all thirteen headings and saves in this browser. Draft first, then check: is it understandable, feasible, supported by sources, free from unjustified diagnoses or cure promises, and clear about uncertainty and referral?",
        ),
        p(
          "请一位愿意参与的家人读其中一节，让他用自己的话说出一个可做的选择。若解释不清，缩短句子、补定义或换成本地例子。下载文字副本保存在合适位置；浏览器数据清除或换设备时，本站不会自动同步。",
          "Invite a willing family member to read one section and describe a possible action in their own words. If unclear, shorten sentences, define terms or use a local example. Download a text copy somewhere appropriate; this site does not sync when browser data are cleared or devices change.",
        ),
        example(
          "毕业前最后一次修改",
          "One final revision before completion",
          "把“我们必须永远不喝奶茶”改成“我们先试每周两个下午选择水或无糖茶，想吃东西时安排合适点心，一个月后一起复盘”。它有具体行动，也保留选择与调整。",
          "Replace “we must never drink milk tea” with “we will try water or unsweetened tea on two afternoons weekly, provide suitable food when hungry, and review together in a month”. It gives an action while preserving choice and revision.",
        ),
        call(
          "如何完成毕业周",
          "How to complete the final week",
          "完成指南与核查后，勾选本周的阅读、实践与复习，页面会显示毕业项目完成。它记录你自己确认的学习进度，不代表外部认证；其他周仍可继续复习。",
          "After writing and checking the guide, mark reading, practice and review. The page will show project completion. This records your self-reported learning, not external accreditation; other weeks remain available for review.",
          "important",
        ),
      ],
      ["review", "teach-back", "version", "scope"],
      ["online-evidence", "who", "plate"],
    ),
  ],
  keyTerms: [
    term(
      "scope",
      "范围",
      "Scope",
      "指南适用的问题与不负责处理的边界。",
      "The questions a guide addresses and the boundaries of its responsibility.",
    ),
    term(
      "audience",
      "读者",
      "Audience",
      "指南希望服务的人群及其语言和实际需要。",
      "The intended readers and their language and practical needs.",
    ),
    term(
      "professional-boundary",
      "专业边界",
      "Professional boundary",
      "区分家庭教育与需要合适专业评估或治疗的情况。",
      "The distinction between family education and matters requiring professional assessment or treatment.",
    ),
    term(
      "observation",
      "观察",
      "Observation",
      "直接来自记录或已知情况、未额外加入诊断的描述。",
      "A description grounded in records or known circumstances without added diagnosis.",
    ),
    term(
      "adequacy",
      "营养充足",
      "Adequacy",
      "获得足够能量和所需营养，不只是限制食物。",
      "Obtaining sufficient energy and needed nutrients rather than simply restricting food.",
    ),
    term(
      "variety",
      "多样性",
      "Variety",
      "在一段时间里包含不同类别与来源的食物。",
      "Including different food categories and sources across time.",
    ),
    term(
      "uncertainty",
      "不确定性",
      "Uncertainty",
      "资料不完整或证据有限时不能确认的部分。",
      "What incomplete information or limited evidence cannot establish.",
    ),
    term(
      "substitution",
      "替代",
      "Substitution",
      "按用途选择可行食物替换，而非保证营养完全一致。",
      "A feasible food replacement by role, without assuming identical nutrients.",
    ),
    term(
      "feasibility",
      "可行性",
      "Feasibility",
      "在家庭时间、预算、能力与偏好下能否实施。",
      "Whether an action fits household time, resources, ability and preferences.",
    ),
    term(
      "portion",
      "实际份量",
      "Portion",
      "一个人一次实际吃或喝下的数量。",
      "The amount one person actually eats or drinks on an occasion.",
    ),
    term(
      "serving-size",
      "标签份量",
      "Serving size",
      "营养表使用的参考数量，不一定是实际摄入。",
      "The reference quantity used on a nutrition label, not necessarily actual intake.",
    ),
    term(
      "meal-plan",
      "菜单计划",
      "Meal plan",
      "把餐食与采购、时间、准备和备选连起来的安排。",
      "An arrangement connecting meals with shopping, timing, preparation and alternatives.",
    ),
    term(
      "food-safety",
      "食品安全",
      "Food safety",
      "减少食物伤害风险的选择、处理与保存方法。",
      "Selection, handling and storage practices reducing food-related harm.",
    ),
    term(
      "citation",
      "来源记录",
      "Citation",
      "可查到的机构、标题、链接与日期等资料信息。",
      "Traceable source information such as organisation, title, link and date.",
    ),
    term(
      "applicability",
      "适用性",
      "Applicability",
      "资料的人群、目的与情境是否符合当前问题。",
      "Whether the source population, purpose and context fit the present question.",
    ),
    term(
      "review",
      "复盘与核查",
      "Review",
      "检查准确性、可行性与使用体验并修改的过程。",
      "Checking accuracy, feasibility and experience and making revisions.",
    ),
    term(
      "teach-back",
      "用自己的话复述",
      "Teach-back",
      "请读者用自己的话解释，以检查表达是否清楚。",
      "Inviting a reader to explain in their own words to check clarity.",
    ),
    term(
      "version",
      "版本",
      "Version",
      "文件在某个日期的状态，方便记录后续修订。",
      "The state of a document at a particular date, supporting later revisions.",
    ),
  ],
  questions: [
    q(
      "scope",
      l(
        "家庭指南可以代表专业营养资格吗？",
        "Does the family guide confer professional nutrition credentials?",
      ),
      [
        l(
          "不能，它是教育与家庭沟通工具",
          "No; it is an educational family tool",
        ),
        l("可以，完成 24 周即可开处方", "Yes; 24 weeks allows prescribing"),
      ],
      0,
      l(
        "课程完成记录自学成果，不提供诊断或治疗资格。",
        "Completion records learning without conferring diagnostic or treatment authority.",
      ),
    ),
    q(
      "sources",
      l("一个来源条目最好包括什么？", "What belongs in a useful source entry?"),
      [
        l("只写网上看到", "Only “seen online”"),
        l(
          "机构、标题、链接、日期和支持的观点",
          "Organisation, title, link, date and supported point",
        ),
      ],
      1,
      l(
        "可追溯且与主张匹配的来源，方便核查和更新。",
        "Traceable sources matched to claims support checking and updating.",
      ),
    ),
    q(
      "example",
      l(
        "虚构标签数字该怎么呈现？",
        "How should fictional label numbers be presented?",
      ),
      [
        l("假装是真实品牌", "As if from a real brand"),
        l("不用说明", "Without explanation"),
        l(
          "清楚写教学示例并保留单位",
          "Clearly as a teaching example with units",
        ),
      ],
      2,
      l(
        "透明说明避免读者把练习数据当成真实产品或法规。",
        "Transparency prevents practice data being mistaken for a real product or rule.",
      ),
    ),
    q(
      "finish",
      l("完成草稿后哪个步骤最有帮助？", "What is useful after drafting?"),
      [
        l("只检查字数是否够多", "Only check word count"),
        l(
          "检查准确性、可行性、边界并保存副本",
          "Check accuracy, feasibility and boundaries, then save a copy",
        ),
      ],
      1,
      l(
        "指南要能用、能查、知道限制，也要防止浏览器数据丢失。",
        "The guide should be usable, traceable and bounded, with a copy protected from browser data loss.",
      ),
    ),
  ],
  practicalTask: l(
    "完成下方十三节《我的家庭营养指南》。核查来源、计算与健康边界，请一位愿意的家人试读，下载副本，再完成本周实践与复习勾选。",
    "Complete all thirteen sections of My Family Nutrition Guide below. Check sources, calculations and health boundaries, invite a willing reader to try it, download a copy, then mark practice and review complete.",
  ),
  summary: l(
    [
      "指南服务真实家庭，不追求完美饮食。",
      "十三节把观察、基础、菜单与来源连起来。",
      "示例、未知与医疗边界要清楚。",
      "用读者复述检查是否容易理解。",
      "保存副本，持续复盘，并在需要时寻求专业支持。",
    ],
    [
      "Serve a real family rather than a perfect diet.",
      "Thirteen sections connect observations, foundations, menus and sources.",
      "Keep examples, uncertainty and clinical boundaries clear.",
      "Use reader explanations to check understanding.",
      "Save a copy, keep reviewing and seek professional support when needed.",
    ],
  ),
  sourceIds: [
    "who",
    "plate",
    "kkm-plate",
    "kkm-label",
    "online-evidence",
    "child-food",
    "menopause-care",
  ],
});
