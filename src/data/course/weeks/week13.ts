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
export const week13Lesson = lesson({
  introduction: l(
    "孩子不是缩小版的成人。本周把前几个月的营养知识放回成长、家庭餐桌与学习吃饭的过程。重点是提供足够、适龄、多样的食物，以及轻松可持续的进餐环境；不以体型给孩子评分。",
    "Children are not miniature adults. This week places nutrition within growth, family meals and the process of learning to eat. The aim is sufficient, age-appropriate variety and a manageable mealtime environment, rather than judging a child by body shape.",
  ),
  objectives: l(
    [
      "解释成长为什么需要能量与多种营养素。",
      "为家庭餐加入适龄的蛋白质、含铁和含钙食物。",
      "用不强迫的方法回应常见挑食。",
      "识别需要专业评估的进食困难。",
    ],
    [
      "Explain why growth needs energy and several nutrients.",
      "Include age-appropriate protein, iron and calcium sources in family meals.",
      "Respond to ordinary food selectivity without pressure.",
      "Recognise feeding concerns that need professional assessment.",
    ],
  ),
  sections: [
    section(
      "child-growth",
      l(
        "13.1 成长：看长期轨迹，不看一顿饭",
        "13.1 Growth: look at a trajectory, not one meal",
      ),
      [
        p(
          "成长包括身高、组织和能力的变化。能量支持日常活动与新组织形成；蛋白质提供原料，维生素和矿物质参与各种过程。没有一种“长高食物”可以独自完成这些工作，遗传、睡眠与健康情况也重要。",
          "Growth includes changes in height, tissues and abilities. Energy supports daily activity and new tissue, protein supplies building material, and vitamins and minerals support many processes. No single height-promoting food performs all these jobs; genetics, sleep and health also matter.",
        ),
        p(
          "胃口会随活动、成长阶段和身体状况变化。比较同龄孩子的一餐，不能判断谁得到的营养更好。成长曲线是在一段时间内记录身高、体重等测量并由专业人员结合背景解释的工具，不是家庭竞赛排行榜。",
          "Appetite varies with activity, developmental stage and health. Comparing two children at one meal cannot establish who is better nourished. A growth chart records measurements over time for professional interpretation in context; it is not a family league table.",
        ),
        example(
          "运动日和安静日",
          "An active day and a quiet day",
          "一个孩子游泳后想多吃饭，另一天午餐只吃较少，可能只是正常变化。先看规律、精神状态和成长记录，不立即以零食奖励吃完，也不因体型开始限制主食。",
          "A child may want more rice after swimming and eat less lunch on another day. Start with the broader pattern, wellbeing and growth record, rather than rewarding a clean plate with sweets or restricting staples because of appearance.",
        ),
        call(
          "本周范围",
          "Scope of this week",
          "这里讨论一般家庭儿童饮食。婴儿喂养、过敏、吞咽问题或成长异常需要年龄和个人情况相应的专业建议。成人减重菜单不能直接给孩子使用。",
          "This lesson concerns general family eating. Infant feeding, allergies, swallowing difficulties or growth concerns need age- and person-specific advice. Adult weight-loss menus should not simply be given to children.",
          "important",
        ),
      ],
      ["growth", "energy", "growth-chart"],
      ["child-parents", "child-food"],
    ),
    section(
      "child-building",
      l(
        "13.2 在普通食物里找到成长材料",
        "13.2 Find building materials in ordinary food",
      ),
      [
        p(
          "蛋、鱼、鸡肉、豆腐和豆类可提供蛋白质，但它们的其他营养并不完全相同。轮换来源比每天只依赖一种昂贵产品更有弹性。主食也有作用：米饭、面、燕麦和薯类提供能量，让餐食不只剩下一小块肉和蔬菜。",
          "Eggs, fish, chicken, tofu and pulses can supply protein, but their other nutrients differ. Rotating sources offers more flexibility than depending on one expensive product. Staples matter too: rice, noodles, oats and tubers provide energy, so a meal is more than a little meat and vegetables.",
        ),
        p(
          "铁参与携带氧的血红蛋白形成；钙与维生素 D 支持骨骼。肉、豆类与部分强化谷物可提供铁，植物铁可与含维生素 C 的食物搭配。奶类、合适的强化替代品或某些含钙豆腐可提供钙，但要查看标签，不能只凭白色外观判断。",
          "Iron contributes to haemoglobin, which carries oxygen; calcium and vitamin D support bones. Meat, pulses and some fortified cereals provide iron, and plant iron can be paired with vitamin C foods. Dairy, suitable fortified alternatives and some calcium-set tofu provide calcium; check labels rather than assuming every white drink is equivalent.",
        ),
        compare([
          {
            title: l("看搭配", "Look at combinations"),
            items: [
              l(
                "饭、蒸蛋、切得适龄的蔬菜，再轮换水果。",
                "Rice, steamed egg, age-appropriate vegetables, and rotating fruit.",
              ),
              l(
                "豆类配番茄，增加食物多样性。",
                "Pulses with tomato add variety.",
              ),
            ],
          },
          {
            title: l("避免单一解法", "Avoid one-product solutions"),
            items: [
              l(
                "一瓶“成长饮品”不保证覆盖所有需要。",
                "One growth drink does not guarantee all needs are met.",
              ),
              l(
                "自行补铁不能替代对疑似不足的评估。",
                "Unsupervised iron does not replace assessment of suspected deficiency.",
              ),
            ],
          },
        ]),
        call(
          "不足与过量都要考虑",
          "Consider both inadequacy and excess",
          "持续不吃某类食物时，可请营养师评估替代选择。补充剂的年龄、剂量与用途需专业指导，尤其不要把成人铁剂随手给孩子吃。",
          "When a food group is persistently absent, a dietitian can assess alternatives. Supplement age, dose and purpose require appropriate guidance; do not casually give adult iron tablets to a child.",
          "warning",
        ),
      ],
      ["protein", "iron", "calcium", "fortification"],
      ["iron", "calcium", "vitamin-d", "child-food"],
    ),
    section(
      "child-variety",
      l(
        "13.3 多样性也包括口感与安全",
        "13.3 Variety includes texture and safety",
      ),
      [
        p(
          "膳食多样性指在不同食物类别和同类食物内有一定变化。它不要求每天购买十种食材，而是逐渐轮换，例如本周青菜与南瓜，下周加入胡萝卜或豆类。冷冻蔬菜和普通本地水果也能进入菜单。",
          "Dietary variety means some variation across and within food groups. It does not require buying ten ingredients every day. Rotate gradually: leafy greens and pumpkin this week, carrots or pulses next week. Frozen vegetables and ordinary local fruit can belong in the plan.",
        ),
        p(
          "适龄口感是指食物的软硬、大小与形状适合孩子的咀嚼和吞咽能力。营养合适不等于形状安全。整颗坚果不适合五岁以下儿童；坐好并由成人看顾，按年龄处理坚硬或圆形食物，不能边跑边吃。",
          "Age-appropriate texture means hardness, size and shape suit a child’s chewing and swallowing abilities. Nutritious does not automatically mean safe in that form. Whole nuts are unsuitable below age five. Children should sit with adult supervision; adapt hard or round foods to age and avoid eating while running.",
        ),
        example(
          "共享菜单，调整呈现",
          "Share the menu, adapt its presentation",
          "家里吃鱼、饭和蔬菜时，可以去净鱼骨，按孩子能力处理蔬菜与份量。无需做完全不同的“儿童食品”，但也不能认为成人盘中的每样食物原状都适合幼儿。",
          "For a family meal of fish, rice and vegetables, remove bones carefully and adapt texture and quantity. A separate range of children’s products is unnecessary, but adult foods are not automatically suitable unchanged for a toddler.",
        ),
        call(
          "少一点开始，可以再添",
          "Start with less and allow more",
          "先提供容易处理的小份，允许再添。小份是减少压力和浪费的方法，不是严格限制需要；孩子的饥饿与饱腹线索仍值得尊重。",
          "Offer manageable amounts and allow more. Starting small reduces pressure and waste; it is not a strict intake ceiling. Hunger and fullness signals still deserve respect.",
        ),
      ],
      ["variety", "texture", "portion"],
      ["child-food", "child-fussy", "child-parents"],
    ),
    section(
      "child-selectivity",
      l(
        "13.4 挑食：练习熟悉，不是意志比赛",
        "13.4 Selectivity: building familiarity, not winning a contest",
      ),
      [
        p(
          "挑食可能涉及陌生感、气味、口感或对变化的担心。拒绝一次不表示永久不喜欢。把新食物与熟悉食物一起提供，让孩子逐渐接触；触摸、闻一闻或看见家人吃，也可以是熟悉过程的一部分。",
          "Selectivity can involve unfamiliarity, smell, texture or uncertainty about change. One refusal is not a permanent verdict. Offer new foods alongside familiar ones and allow gradual contact. Touching, smelling or seeing a family member eat can be part of becoming familiar.",
        ),
        p(
          "回应式喂养是观察并回应孩子的饥饿、饱腹与发展能力，同时由成人提供规律、适当的选择。它不是让零食无限替代正餐，也不是强迫吃完。成人安排吃什么、何时和在哪里；给孩子空间表达是否以及吃多少。",
          "Responsive feeding attends to hunger, fullness and developmental ability while adults provide structure and suitable choices. It means neither unlimited snack replacement nor forced plate clearing. Adults organise what, when and where food is offered, while children have room to express whether and how much to eat.",
        ),
        example(
          "换一句话",
          "Change the invitation",
          "把“吃完青菜才是乖孩子”换成“今天有你熟悉的饭和蛋，也有一小份新菜，可以慢慢认识”。这把食物从奖惩中拿出来，也避免以好坏评价孩子。",
          "Replace “good children finish their vegetables” with “there is familiar rice and egg, plus a little new vegetable you can get to know”. This separates food from rewards and moral judgements about the child.",
        ),
        call(
          "不是所有困难都会自行消失",
          "Some difficulties need help",
          "如果食物范围极窄或持续缩小、吃饭很痛苦、经常呛咳、体重下降或成长令人担心，应求助儿科或儿童营养专业人员，不只反复要求再试一口。",
          "Seek paediatric or dietetic help for a very narrow or shrinking food range, marked distress, frequent choking or coughing, weight loss or growth concerns. Repeatedly insisting on one more bite is not an adequate response.",
          "warning",
        ),
      ],
      ["selectivity", "responsive-feeding", "satiety"],
      ["child-fussy", "child-feeding-service"],
    ),
    section(
      "child-environment",
      l("13.5 饮料与家庭环境", "13.5 Drinks and the family environment"),
      [
        p(
          "含糖饮料容易成为不太注意的一部分，例如甜茶、汽水和果味饮料。水可成为日常容易取得的选择；合适的奶类有营养用途，但不能让饮料不断挤掉多样食物。整果与果汁的纤维和进食体验不同。",
          "Sweetened tea, fizzy drinks and fruit-flavoured drinks can become unnoticed routines. Make water easy to access. Suitable milk has a nutritional role, but drinks should not continually displace varied foods. Whole fruit and juice differ in fibre and eating experience.",
        ),
        p(
          "家庭环境包括谁买菜、食物放在哪里、用餐时间和餐桌对话。若成人总在喝甜饮，却要求孩子只喝水，改变会更困难。共同做小调整比单独监督孩子更有一致性，也不需要把某种食物描述成危险或罪恶。",
          "The family environment includes shopping, food placement, meal timing and conversation. Change is harder if adults constantly drink sweet beverages while policing a child’s water intake. Small shared changes are more consistent than singling out a child, without describing a food as sinful.",
        ),
        example(
          "放学后的选择",
          "An after-school choice",
          "预先准备水和一份合适点心，例如水果配原味酸奶，考虑过敏与年龄。这样孩子不用在非常饿的时候只面对饼干或甜饮；点心也可以安排在不紧贴晚餐的时间。",
          "Prepare water and a suitable snack, such as fruit with plain yoghurt, accounting for age and allergies. The child then has an option beyond biscuits and sweet drinks when very hungry. Timing can leave room for dinner.",
        ),
        call(
          "餐桌也有社交功能",
          "Meals also serve a social purpose",
          "可以聊学校和当天的事，减少屏幕干扰。不要把整餐变成计算克数、评论体型或与兄弟姐妹比较的时间。",
          "Talk about school or the day and reduce screen distractions. Avoid turning every meal into gram counting, body commentary or comparison with siblings.",
        ),
      ],
      ["added-sugar", "food-environment"],
      ["child-parents", "child-food"],
    ),
    section(
      "child-practice",
      l(
        "13.6 把原则变成一个家庭小实验",
        "13.6 Turn principles into a small family experiment",
      ),
      [
        p(
          "先选择一个容易改的环节：早餐缺少可接受的蛋白质、放学后饮料太多，或餐桌经常争执。一次只改一个环节，更容易知道什么可行。观察目标可以是是否愿意接触新食物，而不是是否吃完指定数量。",
          "Choose one manageable issue: an acceptable protein food missing at breakfast, drinks crowding out an after-school snack, or frequent mealtime arguments. Changing one element makes feasibility easier to judge. A useful observation may be willingness to encounter a food, rather than finishing a required quantity.",
        ),
        p(
          "记录三天的安排与感受，不给孩子的进食打分。写下成人能控制的条件、孩子的反应，以及下次调整。对涉及过敏、症状或生长的疑问，记录为咨询问题，不在家庭实验里自行处理。",
          "Record three days of arrangements and experiences without scoring the child’s eating. Note conditions adults can change, the response and a possible adjustment. Questions involving allergy, symptoms or growth belong on a consultation list, rather than being tested independently at home.",
        ),
        example(
          "可评估的计划",
          "An assessable plan",
          "“本周两次晚餐和孩子一起坐下，提供熟悉食物旁的一小份新菜，不要求吃完；记录气氛与接受程度。”即使没吃新菜，气氛更轻松也提供有用信息。",
          "“At two dinners this week, sit together and offer a little new vegetable beside familiar food, without demanding completion; note comfort and willingness.” Even if the vegetable is not eaten, a calmer experience provides useful information.",
        ),
        call(
          "成功的定义",
          "Define success",
          "成功是建立更可靠、尊重孩子且能持续的环境。成长与饮食能力需要时间，不以一周内体重或身高变化评估这个练习。",
          "Success means a more reliable, respectful and sustainable setting. Growth and eating skills take time; changes in weight or height over one week are not the outcome of this exercise.",
        ),
      ],
      ["responsive-feeding", "food-environment", "variety"],
      ["child-parents", "child-fussy"],
    ),
  ],
  keyTerms: [
    term(
      "growth",
      "成长",
      "Growth",
      "身体大小、组织和能力随时间发展的过程。",
      "The development of body size, tissues and abilities over time.",
    ),
    term(
      "energy",
      "能量",
      "Energy",
      "支持身体活动、维持与成长的燃料量，常以千卡表示。",
      "Fuel for activity, maintenance and growth, commonly expressed in kilocalories.",
    ),
    term(
      "growth-chart",
      "成长曲线",
      "Growth chart",
      "按时间记录测量并结合年龄等解释的工具，不是体型评分。",
      "Measurements plotted over time and interpreted in age-related context, not a body score.",
    ),
    term(
      "protein",
      "蛋白质",
      "Protein",
      "由氨基酸组成、参与组织和身体功能的营养素。",
      "A nutrient made of amino acids used in tissues and many body functions.",
    ),
    term(
      "iron",
      "铁",
      "Iron",
      "参与血红蛋白携氧等功能的必需矿物质。",
      "An essential mineral involved in haemoglobin oxygen transport and other functions.",
    ),
    term(
      "calcium",
      "钙",
      "Calcium",
      "参与骨骼结构、肌肉与神经功能的矿物质。",
      "A mineral involved in bone structure, muscle and nerve functions.",
    ),
    term(
      "fortification",
      "营养强化",
      "Fortification",
      "制造时加入某些营养素的做法，需看具体标签。",
      "Adding selected nutrients during manufacture; the label identifies what was added.",
    ),
    term(
      "variety",
      "膳食多样性",
      "Dietary variety",
      "在食物类别之间及同类食物中作不同选择。",
      "Variation across food groups and among foods within those groups.",
    ),
    term(
      "texture",
      "口感与质地",
      "Texture",
      "食物的软硬、黏稠和形状等影响进食体验的性质。",
      "Properties such as hardness, consistency and form that affect eating.",
    ),
    term(
      "portion",
      "实际份量",
      "Portion",
      "一次提供或吃下的食物量，需要结合年龄和情况。",
      "The amount offered or eaten at one time, interpreted for age and circumstances.",
    ),
    term(
      "selectivity",
      "选择性进食",
      "Food selectivity",
      "对可接受食物范围有限的描述，程度和原因各异。",
      "A limited range of accepted foods, with varying severity and causes.",
    ),
    term(
      "responsive-feeding",
      "回应式喂养",
      "Responsive feeding",
      "成人提供结构与适当食物，同时回应孩子的线索。",
      "Providing structure and suitable food while responding to a child’s cues.",
    ),
    term(
      "satiety",
      "饱腹感",
      "Satiety",
      "进食后对继续吃东西需求减少的感受。",
      "A reduced drive to continue eating after food has been consumed.",
    ),
    term(
      "added-sugar",
      "添加糖",
      "Added sugar",
      "制造或准备食物时加入的糖，不等于所有食物中的糖。",
      "Sugar added during manufacturing or preparation, rather than all sugar in food.",
    ),
    term(
      "food-environment",
      "食物环境",
      "Food environment",
      "购买、提供、取得食物及进食氛围的周围条件。",
      "The surrounding conditions of buying, offering, accessing and experiencing food.",
    ),
  ],
  questions: [
    q(
      "growth",
      l(
        "哪种信息更适合判断成长？",
        "What better informs assessment of growth?",
      ),
      [
        l("与表哥比较今天的饭量", "Compare today’s lunch with a cousin’s"),
        l(
          "由专业人员结合背景解释长期记录",
          "Professional interpretation of records over time",
        ),
        l("最贵的奶粉品牌", "The most expensive milk brand"),
      ],
      1,
      l(
        "成长需要看长期轨迹及健康背景，一顿饭不能说明营养状况。",
        "Growth needs a trajectory and health context; one meal cannot establish nutritional status.",
      ),
    ),
    q(
      "selective",
      l(
        "孩子拒绝新菜时，哪种回应更合适？",
        "Which response better supports a child refusing a new vegetable?",
      ),
      [
        l("强迫吃完", "Force completion"),
        l("用甜食交换", "Exchange it for sweets"),
        l(
          "与熟悉食物一起少量提供，下次再接触",
          "Offer a little beside familiar food and revisit later",
        ),
      ],
      2,
      l(
        "没有压力的反复接触可帮助熟悉；若困难严重或有症状，应寻求评估。",
        "Repeated low-pressure contact can build familiarity; marked difficulties or symptoms need assessment.",
      ),
    ),
    q(
      "safety",
      l(
        "整颗坚果营养丰富，因此适合所有幼儿？",
        "Whole nuts are nutritious, so are they suitable for every toddler?",
      ),
      [
        l("是", "Yes"),
        l("否，形状和年龄也影响安全", "No; form and age also affect safety"),
      ],
      1,
      l(
        "营养价值不代表原形安全，五岁以下不应给予整颗坚果。",
        "Nutrient value does not establish safety in that form; whole nuts are unsuitable below age five.",
      ),
    ),
    q(
      "plan",
      l(
        "家庭练习应主要记录什么？",
        "What should the family exercise mainly record?",
      ),
      [
        l("安排、气氛和孩子的反应", "Arrangements, atmosphere and response"),
        l("是否比同学瘦", "Whether the child is thinner than classmates"),
        l("一周长高多少", "Height gained in one week"),
      ],
      0,
      l(
        "可控环境与可持续性是本次练习的目标，不是体型竞赛或短期生长测验。",
        "The exercise targets a workable environment and sustainability, not a body competition or short-term growth test.",
      ),
    ),
  ],
  practicalTask: l(
    "选择一个家庭进餐环节，设计三天的小调整。写下适龄食物搭配、成人如何回应、观察什么，以及何时需要专业协助。不要计算孩子的减重目标。",
    "Choose one family mealtime issue and design a three-day adjustment. Record age-appropriate foods, the adult response, what you will observe and when professional support is needed. Do not calculate a child’s weight-loss target.",
  ),
  summary: l(
    [
      "成长需要足够能量及多种营养素。",
      "普通家庭食物可以提供多样来源。",
      "食物的形状与口感必须适龄。",
      "回应式喂养结合结构与尊重。",
      "严重限制、症状或成长担忧需要专业评估。",
    ],
    [
      "Growth needs enough energy and multiple nutrients.",
      "Ordinary family foods can provide varied sources.",
      "Food form and texture must suit age and ability.",
      "Responsive feeding combines structure with respect.",
      "Marked restriction, symptoms or growth concerns need assessment.",
    ],
  ),
  sourceIds: ["child-parents", "child-food", "child-fussy"],
});
