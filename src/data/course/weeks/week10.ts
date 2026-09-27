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
export const week10Lesson = lesson({
  introduction: l(
    "心血管健康涉及血管里的压力、运输脂质的颗粒，以及长期生活方式。本周把血压、胆固醇和甘油三酯分开理解，再把钠、纤维和脂肪种类放回普通家庭餐桌。目标是看懂概念并支持可持续习惯，不是凭菜单诊断心脏病。",
    "Cardiovascular health involves pressure in blood vessels, particles transporting lipids and long-term habits. Separate blood pressure, cholesterol and triglycerides, then connect sodium, fibre and fat types with ordinary meals. The goal is understanding and sustainable habits, not diagnosing heart disease from a menu.",
  ),
  objectives: l(
    [
      "区分收缩压和舒张压。",
      "说明胆固醇、LDL、HDL 和甘油三酯之间的区别。",
      "解释风险因素不是单次饮食的判决。",
      "把钠、纤维和饱和脂肪放在整体饮食中考虑。",
      "提出适合家庭执行的一项改变。",
    ],
    [
      "Distinguish systolic and diastolic pressure.",
      "Explain differences among cholesterol, LDL, HDL and triglycerides.",
      "Recognise that risk factors are not judgments on one meal.",
      "Consider sodium, fibre and saturated fat within a whole eating pattern.",
      "Propose one feasible household change.",
    ],
  ),
  sections: [
    section(
      "blood-pressure",
      l(
        "10.1 血压：血液对血管壁的压力",
        "10.1 Blood pressure: force against artery walls",
      ),
      [
        p(
          "心脏把血液泵入动脉，血液对血管壁产生压力。收缩压是心脏收缩泵血时的压力；舒张压是两次心跳之间的压力。报告写两个数字，不是两个不同器官的分数。单位常见为 mmHg，即毫米汞柱。",
          "The heart pumps blood into arteries, producing pressure against their walls. Systolic pressure is measured during pumping; diastolic pressure is between beats. The two numbers are not scores for two different organs. The usual unit, mmHg, means millimetres of mercury.",
        ),
        p(
          "血压随活动、紧张、测量环境及其他因素变化。持续高血压会增加心脏、脑、肾脏等问题的风险，但往往没有明显症状。感觉很好不能代替适当检查，一次紧张时的读数也不能独自说明长期情况。",
          "Pressure changes with activity, stress, measurement circumstances and other factors. Persistently high pressure increases risks involving the heart, brain and kidneys, often without obvious symptoms. Feeling well does not replace appropriate checks; a single anxious reading does not describe the whole long-term picture.",
        ),
        example(
          "同一个人，不同测量情境",
          "One person, different measurement conditions",
          "刚爬楼、边说话或袖带不合适，都可能影响读数解释。若专业人员建议家庭测量，应学习正确方法并按计划记录，而不是反复测到出现自己喜欢的数字。",
          "Recent stair climbing, talking or an unsuitable cuff can affect interpretation. If a professional recommends home monitoring, learn the correct method and follow the recording plan rather than measuring repeatedly until a preferred number appears.",
        ),
        call(
          "指南与个人目标需要分开",
          "Guidelines and individual targets differ",
          "不同指南的分类和个人治疗目标可能不同。本课不提供自动诊断或调整药物的工具；把记录带给医疗团队讨论。",
          "Classification systems and individual treatment targets can differ. This lesson does not provide an automatic diagnostic or medication-adjustment tool; discuss recorded measurements with the care team.",
        ),
      ],
      ["blood-pressure", "systolic", "diastolic", "hypertension"],
      ["blood-pressure", "bhf-pressure"],
    ),
    section(
      "lipid-transport",
      l("10.2 胆固醇如何在血液中运输", "10.2 How cholesterol travels in blood"),
      [
        p(
          "胆固醇是身体需要的脂质，用于细胞膜及某些物质的制造。身体可以制造胆固醇，食物也可能提供。由于脂质不能简单溶在水样血液里，它们需要脂蛋白颗粒运输。LDL 和 HDL 指不同类别的脂蛋白。",
          "Cholesterol is a lipid used in cell membranes and the production of certain substances. The body makes it, and foods can provide it. Lipids do not simply dissolve in watery blood, so lipoprotein particles transport them. LDL and HDL refer to different classes of these particles.",
        ),
        p(
          "LDL-C 和 HDL-C 通常指各类颗粒携带的胆固醇量，并不是两种完全不同的胆固醇分子。常听到“坏”和“好”的简称，是为了提醒风险联系，不表示只要 HDL 高，就可以忽略所有其他风险。",
          "LDL-C and HDL-C usually describe cholesterol carried in those particle classes, not two completely different cholesterol molecules. Good and bad are shorthand for risk relationships; a higher HDL value does not justify ignoring every other risk.",
        ),
        p(
          "较高 LDL 水平可促进动脉壁斑块形成。斑块不是昨天吃的油直接粘在血管里，而是涉及脂质、细胞和长期生物过程。遗传、饮食、疾病和药物等都可能影响血脂。",
          "Higher LDL levels can contribute to plaque formation in artery walls. Plaque is not yesterday’s cooking oil sticking directly inside a pipe; it involves lipids, cells and biological processes over time. Genetics, diet, conditions and medicines can all affect blood lipids.",
        ),
        example(
          "“零胆固醇”标签能告诉你多少？",
          "What does a zero-cholesterol label tell you?",
          "植物油可以没有胆固醇，却含不同比例的饱和和不饱和脂肪。“零胆固醇”不能替代查看脂肪类型、份量和整餐搭配，也不保证血液 LDL 不受影响。",
          "A plant oil may contain no cholesterol while having a particular mixture of saturated and unsaturated fats. Zero cholesterol does not replace checking fat type, portion and the whole meal, or guarantee no effect on blood LDL.",
        ),
      ],
      ["cholesterol", "lipoprotein", "ldl", "hdl", "plaque"],
      ["heart-lipids", "fats-guide", "cholesterol-nhlbi"],
    ),
    section(
      "triglycerides-risk",
      l("10.3 甘油三酯与整体风险", "10.3 Triglycerides and overall risk"),
      [
        p(
          "甘油三酯是一种脂肪，也是身体储存能量的重要形式。验血中的甘油三酯与胆固醇是不同指标，不能把两者都叫作同一个“胆固醇数字”。餐前餐后、酒精、代谢情况及其他因素都可能影响解释。",
          "Triglycerides are a type of fat and an important energy-storage form. Blood triglycerides and cholesterol are distinct measures, not one cholesterol number. Meal timing, alcohol, metabolic conditions and other factors can affect interpretation.",
        ),
        p(
          "看心血管风险需要综合信息，例如年龄、吸烟、血压、血脂、糖尿病、家族史和既往疾病。一个正常指标不能取消其他异常，一个偏高数字也不能让初学者自行预测某人会在哪天发病。",
          "Cardiovascular risk assessment combines information such as age, smoking, pressure, lipids, diabetes, family history and existing disease. One normal result does not cancel other concerns, and one high result does not let a beginner predict when someone will have an event.",
        ),
        compare([
          {
            title: l("可以说", "A reasonable statement"),
            items: [
              l(
                "“这个指标值得与医生一起解读。”",
                "“This result is worth discussing with a clinician.”",
              ),
              l(
                "“我们可以改善日常习惯，并遵循治疗计划。”",
                "“We can improve daily habits while following the care plan.”",
              ),
            ],
          },
          {
            title: l("不能据此说", "An unsupported statement"),
            items: [
              l(
                "“昨天吃油炸食物，所以今天一定有心脏病。”",
                "“Yesterday’s fried food means heart disease today.”",
              ),
              l(
                "“HDL 好看，所以所有药都可以停。”",
                "“HDL looks good, so all medicines can stop.”",
              ),
            ],
          },
        ]),
        call(
          "风险不是命运，也不是责备",
          "Risk is neither destiny nor blame",
          "减少风险通常是长期努力，需要考虑能做到什么、经济与文化习惯以及专业照护。对家人使用支持性的语言，比评价谁“吃得不够自律”更有帮助。",
          "Risk reduction is usually a long-term effort shaped by feasibility, finances, cultural habits and professional care. Supportive language helps more than judging a relative’s dietary discipline.",
        ),
      ],
      ["triglycerides", "risk"],
      ["heart-lipids", "cholesterol-nhlbi", "heart-living"],
    ),
    section(
      "sodium-pattern",
      l("10.4 钠：不只来自盐罐", "10.4 Sodium: beyond the salt shaker"),
      [
        p(
          "第 6 周说明盐与钠的换算。这里更关心重复出现的来源：汤底、酱油、调味酱、加工肉及部分包装主食都可能贡献钠。没有在桌上加盐，不等于整天摄入低钠。味道也不能精确告诉我们钠含量。",
          "Week 6 explained converting sodium to salt equivalent. Here focus on recurring sources: soup bases, soy sauce, sauces, processed meats and some packaged staples. Not adding table salt does not establish a low-sodium day, and taste cannot precisely measure sodium.",
        ),
        p(
          "减少钠可以支持血压管理，但个人反应与完整治疗情况不同。选较少钠的同类产品、先尝再加、把酱料另放，都是可以讨论的做法。不要把更换一种盐说成能治疗所有高血压。",
          "Reducing sodium can support pressure management, though individual responses and treatment context differ. Comparing similar products, tasting before adding seasoning and serving sauce separately are practical options. Changing one salt is not a treatment for every case of hypertension.",
        ),
        example(
          "一碗面如何调整",
          "How to adapt a bowl of noodles",
          "可以保留喜欢的面，增加蔬菜与合适蛋白质来源，要求酱料另放，并考虑少喝很咸的汤。因为配方未知，不能精确声称这样减少了多少毫克钠。",
          "Keep an enjoyed noodle dish, add vegetables and a suitable protein source, ask for sauce separately and consider drinking less salty broth. Without the recipe, do not claim an exact milligram reduction.",
        ),
        call(
          "钾代盐不是人人适合",
          "Potassium salt substitutes are not for everyone",
          "肾病或某些用药可能影响血钾。不要因为“低钠”就给全家统一换成含钾代盐；需要时先向专业人员询问。",
          "Kidney disease and certain medicines can affect blood potassium. Do not automatically switch the whole household to a potassium substitute just because it says low sodium; seek advice where relevant.",
          "warning",
        ),
      ],
      ["sodium", "salt-substitute"],
      ["sodium", "potassium", "blood-pressure"],
    ),
    section(
      "fibre-fat-pattern",
      l("10.5 纤维、脂肪与饮食模式", "10.5 Fibre, fats and eating patterns"),
      [
        p(
          "某些可溶性纤维有助于降低 LDL，燕麦、大麦和豆类是可以考虑的来源。但只在低纤维饮食上额外加一小撮燕麦，不代表整套饮食已经改变。纤维也应来自多样食物，并按耐受逐渐增加。",
          "Some soluble fibres can help lower LDL, with oats, barley and pulses among useful sources. Adding a tiny amount of oats to an otherwise low-fibre pattern does not transform the whole diet. Seek varied fibre sources and increase gradually according to tolerance.",
        ),
        p(
          "减少饱和脂肪时要问用什么替代。用适量不饱和脂肪来源替代，与用精制甜点替代不是同一件事。坚果、鱼、豆类与植物油各有食物情境，并不是给所有菜额外淋很多油。",
          "When reducing saturated fat, ask what replaces it. Appropriate unsaturated-fat sources and refined sweets are not equivalent replacements. Nuts, fish, pulses and plant oils each have a place; this does not mean adding large amounts of oil to every dish.",
        ),
        p(
          "DASH 是一种支持心血管健康、尤其关注血压的饮食模式，强调蔬果、全谷物、豆类、坚果等普通食物及适当的奶类、鱼禽等选择，并注意钠与饱和脂肪。它不是一份必须照搬美国食物的固定菜单。",
          "DASH is a pattern supporting cardiovascular health, especially pressure, using ordinary vegetables, fruit, whole grains, pulses and nuts alongside suitable dairy, fish or poultry choices, with attention to sodium and saturated fat. It is not a fixed menu requiring American foods.",
        ),
        example(
          "把模式翻译成家庭习惯",
          "Translate a pattern into household habits",
          "例如部分主食选全谷物，轮流用豆腐、豆类、鱼或肉，常备蔬菜，把甜饮改为常用水。变化要能融入家人的口味和预算，而不是额外购买一套“护心食品”。",
          "For example, choose some whole-grain staples, rotate tofu, pulses, fish or meat, keep vegetables available and make water the usual drink. Fit changes to taste and budget rather than buying a separate range of heart-health products.",
        ),
      ],
      ["soluble-fibre", "saturated-fat", "dietary-pattern", "dash"],
      ["fibre-guide", "fats-guide", "dash", "heart-living"],
    ),
    section(
      "heart-practice",
      l("10.6 做一份家庭行动计划", "10.6 Build a household action plan"),
      [
        p(
          "先观察三顿常见餐：外食午餐、家庭晚餐、忙碌时的备用餐。每顿记录主要钠来源、纤维来源与脂肪来源，再找一个重复出现且可以调整的环节。不要根据外观给每餐贴“会得病”的标签。",
          "Observe three familiar meals: a bought lunch, a home dinner and a busy-day backup. Record likely sodium, fibre and fat sources, then identify one repeated, adjustable feature. Avoid labelling a meal as disease-causing from appearance alone.",
        ),
        p(
          "生活方式还包括活动、睡眠、吸烟和压力等。饮食计划能支持健康，但不替代血压或血脂治疗。家人已经有医疗计划时，实用的支持可以是一起采购、提醒复诊或准备符合计划的普通餐食。",
          "Activity, sleep, smoking and stress also matter. Food planning supports health without replacing treatment for pressure or lipids. Practical help for a relative with a care plan can include shopping together, supporting appointments or preparing suitable ordinary meals.",
        ),
        example(
          "一个具体而温和的目标",
          "A specific, modest goal",
          "“本周三次晚餐把酱料另放，先尝再加”比“从今以后绝不吃钠”更合理。约好一周后问是否方便、味道是否接受，再决定下一步；不以自己猜测的化验变化来宣告成功。",
          "“Serve sauce separately at three dinners this week and taste before adding” is more reasonable than never eating sodium again. Review convenience and taste after a week before choosing the next step; do not declare success from imagined blood-test changes.",
        ),
        call(
          "学习概念不能延误紧急处理",
          "Learning must not delay urgent care",
          "出现疑似心脏病或中风的急性症状，应立即联系当地急救服务，不等待饮食改变见效。本课是日常教育，不是急症判断工具。",
          "Suspected acute heart attack or stroke symptoms require local emergency services immediately, not waiting for food changes to work. This is everyday education, not an emergency assessment tool.",
          "warning",
        ),
      ],
      ["dietary-pattern", "risk"],
      ["heart-living", "blood-pressure"],
    ),
  ],
  keyTerms: [
    term(
      "blood-pressure",
      "血压",
      "Blood pressure",
      "血液对动脉壁施加的压力，随心脏活动和多种因素变化。",
      "The force of blood against artery walls, varying with heart activity and other factors.",
    ),
    term(
      "systolic",
      "收缩压",
      "Systolic pressure",
      "心脏收缩泵血时的压力，通常写在血压读数前面。",
      "Pressure when the heart contracts and pumps, usually the first blood-pressure number.",
    ),
    term(
      "diastolic",
      "舒张压",
      "Diastolic pressure",
      "两次心跳之间的压力，通常写在血压读数后面。",
      "Pressure between heartbeats, usually the second blood-pressure number.",
    ),
    term(
      "hypertension",
      "高血压",
      "Hypertension",
      "血压持续偏高的状况，诊断需要合适测量和专业解释。",
      "Persistently high blood pressure, requiring suitable measurement and professional interpretation.",
    ),
    term(
      "cholesterol",
      "胆固醇",
      "Cholesterol",
      "参与细胞膜等正常功能的脂质，身体可制造，食物也可提供。",
      "A lipid used in normal functions including cell membranes, made by the body and also found in food.",
    ),
    term(
      "lipoprotein",
      "脂蛋白",
      "Lipoprotein",
      "在血液中运输胆固醇及其他脂质的颗粒。",
      "A particle transporting cholesterol and other lipids through blood.",
    ),
    term(
      "ldl",
      "低密度脂蛋白",
      "LDL",
      "运输脂质的一类颗粒，较高 LDL 胆固醇与动脉粥样硬化风险有关。",
      "A lipoprotein class whose higher cholesterol levels are linked to atherosclerotic risk.",
    ),
    term(
      "hdl",
      "高密度脂蛋白",
      "HDL",
      "参与胆固醇运输的一类颗粒，其指标不能单独概括全部风险。",
      "A lipoprotein class involved in cholesterol transport, whose measurement cannot summarise overall risk alone.",
    ),
    term(
      "plaque",
      "动脉斑块",
      "Arterial plaque",
      "动脉壁中涉及脂质、细胞等形成的积聚，不是食用油直接粘附。",
      "A buildup involving lipids and cells in an artery wall, not cooking oil directly sticking to it.",
    ),
    term(
      "triglycerides",
      "甘油三酯",
      "Triglycerides",
      "一种用于能量储存和运输的脂肪，与胆固醇是不同指标。",
      "A form of fat involved in energy storage and transport, distinct from cholesterol.",
    ),
    term(
      "risk",
      "风险",
      "Risk",
      "某种结果发生的可能性，需要综合多个因素而非单一食物判断。",
      "The likelihood of an outcome, assessed through multiple factors rather than one food.",
    ),
    term(
      "sodium",
      "钠",
      "Sodium",
      "食盐及多种食品中存在的必需矿物质，过量摄入与血压风险有关。",
      "An essential mineral in salt and many foods, with excessive intake linked to blood-pressure risk.",
    ),
    term(
      "salt-substitute",
      "代盐",
      "Salt substitute",
      "替代部分普通盐的产品，可能含钾，适用性要考虑肾脏和药物。",
      "A product replacing some regular salt, possibly containing potassium, with suitability affected by kidneys and medicines.",
    ),
    term(
      "soluble-fibre",
      "可溶性纤维",
      "Soluble fibre",
      "可在水中溶解或分散的一类纤维，部分形式有助于降低 LDL。",
      "Fibre that dissolves or disperses in water, some forms of which can help lower LDL.",
    ),
    term(
      "saturated-fat",
      "饱和脂肪",
      "Saturated fat",
      "富含无碳碳双键脂肪酸的一类脂肪，讨论减少时要看替代品。",
      "Fat rich in fatty acids without carbon–carbon double bonds; reducing it requires considering the replacement.",
    ),
    term(
      "dietary-pattern",
      "饮食模式",
      "Dietary pattern",
      "一段时间内反复出现的食物搭配、分量与习惯。",
      "Recurring food combinations, quantities and habits across time.",
    ),
    term(
      "dash",
      "DASH 饮食模式",
      "DASH",
      "强调普通食物搭配并关注钠和饱和脂肪、支持血压健康的饮食模式。",
      "An eating pattern supporting blood-pressure health through ordinary food choices and attention to sodium and saturated fat.",
    ),
  ],
  questions: [
    q(
      "pressure",
      l("收缩压描述什么？", "What does systolic pressure describe?"),
      [
        l("心脏泵血时的压力。", "Pressure while the heart pumps."),
        l("血液里的胆固醇量。", "The amount of cholesterol in blood."),
      ],
      0,
      l(
        "血压与血脂是不同概念，不能用同一个数字代替。",
        "Pressure and blood lipids are different concepts and cannot substitute for one another.",
      ),
    ),
    q(
      "hdl",
      l(
        "HDL 数值较高就可以忽略其他风险吗？",
        "Does higher HDL mean other risks can be ignored?",
      ),
      [
        l("可以，只看“好胆固醇”。", "Yes, only good cholesterol matters."),
        l(
          "不可以，需要综合血压、LDL 等情况。",
          "No, consider pressure, LDL and other factors together.",
        ),
      ],
      1,
      l(
        "单一指标不能提供完整的风险评估。",
        "One measure cannot provide a complete risk assessment.",
      ),
    ),
    q(
      "replacement",
      l(
        "减少饱和脂肪时还应问什么？",
        "What else matters when reducing saturated fat?",
      ),
      [
        l(
          "用什么替代，以及整体饮食如何变化。",
          "What replaces it and how the overall diet changes.",
        ),
        l(
          "不用再看，只要少一种成分即可。",
          "Nothing else; removing one component is enough.",
        ),
      ],
      0,
      l(
        "用不饱和脂肪来源与用精制甜点替代，不是相同变化。",
        "Replacing it with unsaturated-fat sources and with refined sweets are different changes.",
      ),
    ),
    q(
      "salt",
      l(
        "没有在餐桌加盐，能确定摄入低钠吗？",
        "Does not adding table salt establish low sodium intake?",
      ),
      [
        l(
          "不能，还要看酱料、汤底与食品。",
          "No, sauces, broths and foods also matter.",
        ),
        l("能，钠只来自盐罐。", "Yes, sodium only comes from the shaker."),
      ],
      0,
      l(
        "钠来源常分散在多种日常食品中。",
        "Sodium sources are often spread across everyday foods.",
      ),
    ),
  ],
  practicalTask: l(
    "检查三顿常见餐的钠、纤维和脂肪来源，提出一个能执行一周的小变化。写下购买或烹调步骤、家人接受程度，以及何时复查可行性。不要从食物记录推断疾病，不自行调整药物。",
    "Review sodium, fibre and fat sources in three usual meals. Propose one small change for a week, including shopping or cooking steps, family acceptability and a feasibility review date. Do not infer disease from the food record or adjust medication.",
  ),
  summary: l(
    [
      "血压反映压力，血脂反映不同脂质运输指标。",
      "LDL、HDL 与甘油三酯需要分开理解。",
      "风险来自多因素，不由单餐决定。",
      "钠、纤维与脂肪替代应放在整体饮食里考虑。",
      "现实习惯改变可以支持但不能替代专业治疗。",
    ],
    [
      "Pressure and blood lipids describe different aspects of circulation.",
      "LDL, HDL and triglycerides require separate understanding.",
      "Risk involves multiple factors, not one meal.",
      "Consider sodium, fibre and fat replacement within the overall diet.",
      "Realistic habits support, but do not replace, professional treatment.",
    ],
  ),
  sourceIds: [
    "blood-pressure",
    "bhf-pressure",
    "heart-lipids",
    "cholesterol-nhlbi",
    "heart-living",
    "sodium",
    "potassium",
    "fibre-guide",
    "fats-guide",
    "dash",
  ],
});
