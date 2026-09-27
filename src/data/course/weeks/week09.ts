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
export const week09Lesson = lesson({
  introduction: l(
    "先理解调节系统，再判断食物宣传。本周沿着“碳水消化—葡萄糖进入血液—胰岛素参与调节”的过程，认识血糖、胰岛素阻抗与 HbA1c。你会学习提出合理问题，而不是给家人诊断或背一张“降糖食物”清单。",
    "Understand the regulation system before judging food claims. Follow carbohydrate digestion, glucose entering the blood and insulin’s part in regulation. Learn what blood glucose, insulin resistance and HbA1c mean, and how to ask useful questions without diagnosing relatives or memorising a list of glucose-lowering foods.",
  ),
  objectives: l(
    [
      "解释碳水、葡萄糖与胰岛素之间的关系。",
      "区分正常餐后变化与持续调节异常。",
      "认识胰岛素阻抗、糖尿病前期与2型糖尿病。",
      "解释 HbA1c 反映什么及其局限。",
      "用整餐、分量与生活情境评价常见饮食说法。",
    ],
    [
      "Explain the relationship among carbohydrate, glucose and insulin.",
      "Distinguish normal changes after meals from persistent dysregulation.",
      "Recognise insulin resistance, prediabetes and type 2 diabetes.",
      "Explain what HbA1c reflects and its limitations.",
      "Assess food claims using the whole meal, portions and personal context.",
    ],
  ),
  sections: [
    section(
      "glucose-route",
      l("9.1 葡萄糖怎样进入血液", "9.1 How glucose reaches the blood"),
      [
        p(
          "血糖通常指血液中葡萄糖的浓度。第 2 周学过，米饭、面条和面包中的淀粉会被分解成较小的糖，最终形成可吸收的成分。小肠吸收葡萄糖后，它进入循环，成为身体可利用的燃料之一。",
          "Blood glucose means the concentration of glucose in the blood. As in Week 2, starch in rice, noodles and bread is broken into smaller sugars and absorbable components. Glucose absorbed by the small intestine enters circulation and becomes one fuel the body can use.",
        ),
        p(
          "葡萄糖不是只在吃糖时出现。肝脏会储存葡萄糖形成糖原，并在两餐之间按需要释放；身体也能制造葡萄糖。因此“没有吃甜食”不能证明血糖一定正常，“血液有葡萄糖”本身也不是疾病。",
          "Glucose is not present only when you eat sweets. The liver stores glucose as glycogen and releases it between meals as needed; the body can also make glucose. Avoiding sweet foods does not prove glucose regulation is normal, and the presence of glucose in blood is not itself disease.",
        ),
        example(
          "白饭与甜饮都有问题要问",
          "Questions apply to rice and sweet drinks",
          "白饭不甜，但有淀粉；甜饮可能有较多游离糖，且容易快速喝下。两者的食物结构、份量和其他营养不同，不能只按味道判断碳水含量，也不能说它们在所有方面完全一样。",
          "Rice is not sweet but contains starch. Sweet drinks may supply substantial free sugars and be consumed quickly. Structure, portion and other nutrients differ, so sweetness alone does not measure carbohydrate, and the two foods are not identical in every respect.",
        ),
        call(
          "餐后上升并非自动“伤身体”",
          "A rise after eating is not automatically harmful",
          "进餐后血糖改变是正常生理的一部分。要判断异常，需要考虑幅度、持续时间、测量条件及专业评估；不能把任何一次上升都称为糖尿病。",
          "Blood glucose changes after eating are part of normal physiology. Assessing an abnormality involves magnitude, duration, measurement conditions and professional interpretation. A rise alone does not establish diabetes.",
        ),
      ],
      ["blood-glucose", "glucose", "glycogen"],
      ["diabetes-basics", "gi-guide"],
    ),
    section(
      "insulin-signal",
      l("9.2 胰岛素是一种信号", "9.2 Insulin is a signal"),
      [
        p(
          "胰岛素是胰腺 β 细胞制造的激素。激素通过信号帮助协调器官工作。血糖升高时，胰岛素参与促进肌肉、脂肪等组织摄取葡萄糖，并影响肝脏的储存与释放，让血糖调节配合身体需要。",
          "Insulin is a hormone made by pancreatic beta cells. Hormones signal to coordinate organs. When glucose rises, insulin helps tissues such as muscle and fat take up glucose and influences liver storage and release, coordinating blood glucose with the body’s needs.",
        ),
        p(
          "常见比喻把胰岛素说成“钥匙”，细胞像“门”。这个比喻方便入门，但不是所有细胞都用同一把钥匙：葡萄糖运输和肝脏调节更复杂。保留关键意思——胰岛素让一些组织更好地响应葡萄糖供应。",
          "The key-and-door analogy is useful, but not every cell relies on the same key. Glucose transport and liver regulation are more complex. Keep the core idea: insulin helps some tissues respond appropriately to glucose availability.",
        ),
        compare([
          {
            title: l("激素功能", "Hormonal function"),
            items: [
              l(
                "胰岛素是正常身体调节的一部分。",
                "Insulin is part of normal regulation.",
              ),
              l(
                "参与摄取、储存和肝脏释放等过程。",
                "It participates in uptake, storage and liver-release processes.",
              ),
            ],
          },
          {
            title: l("不合理推论", "An unsupported leap"),
            items: [
              l("“任何胰岛素分泌都不好”。", "“Any insulin release is bad.”"),
              l(
                "“只要不吃碳水，身体就完全不需要胰岛素”。",
                "“Avoiding carbohydrate removes all need for insulin.”",
              ),
            ],
          },
        ]),
        example(
          "调节不是道德判断",
          "Regulation is not a moral judgment",
          "把胰岛素叫“让人变胖的坏激素”，会掩盖它维持正常功能的作用。我们关注系统是否能适当工作，而不是让某个激素永远为零。",
          "Calling insulin a bad fattening hormone hides its essential normal functions. The question is whether the system responds appropriately, not whether a hormone can be kept permanently at zero.",
        ),
      ],
      ["insulin", "hormone", "beta-cell"],
      ["insulin-resistance", "diabetes-basics"],
    ),
    section(
      "insulin-resistance",
      l(
        "9.3 胰岛素阻抗怎样影响调节",
        "9.3 How insulin resistance affects regulation",
      ),
      [
        p(
          "胰岛素阻抗指肌肉、脂肪和肝脏等组织对胰岛素反应减弱。胰腺起初可能分泌更多胰岛素来维持血糖，因此一个人可以已有阻抗而血糖还没有明显升高。不能把阻抗与高血糖简单画上等号。",
          "Insulin resistance means tissues such as muscle, fat and liver respond less effectively to insulin. Initially, the pancreas may produce more insulin to keep glucose within range. Resistance can therefore exist before obvious glucose elevation; resistance and high glucose are not identical concepts.",
        ),
        p(
          "若这种补偿不能持续满足需要，血糖可能逐渐升高。2型糖尿病通常涉及胰岛素反应不足和胰岛素供应相对不足。它不是某一天吃了一块蛋糕后突然由单一食物造成的，也不能仅凭体型判断有没有。",
          "If compensation no longer meets needs, glucose may rise. Type 2 diabetes generally involves reduced insulin responsiveness and an inadequate insulin supply relative to need. It is not caused by one cake on one day, and appearance alone cannot identify who has it.",
        ),
        p(
          "遗传、年龄、身体脂肪分布、活动水平及其他健康因素都可能相关。有些因素可以改变，有些不能。讨论风险是为了安排支持和筛查，不是责怪患者懒惰，也不是承诺只靠意志就能解决所有情况。",
          "Genetics, age, fat distribution, activity and other health factors can contribute. Some can be changed; others cannot. Discussing risk should support appropriate help and screening, not blame people for laziness or promise that willpower alone resolves every case.",
        ),
        call(
          "症状与风险问卷不是确诊",
          "Symptoms and risk questionnaires are not a diagnosis",
          "胰岛素阻抗或糖尿病前期可能没有明显症状。有担忧或风险因素，应讨论适合的检查；不要根据餐后困倦或网上计算器自行给家人贴标签。",
          "Insulin resistance or prediabetes may have no obvious symptoms. Concerns or risk factors warrant a discussion about appropriate testing, not labelling a relative based on sleepiness after meals or an online calculator.",
        ),
      ],
      ["insulin-resistance", "type2", "risk-factor"],
      ["insulin-resistance", "diabetes-basics", "cdc-type2"],
    ),
    section(
      "a1c",
      l(
        "9.4 HbA1c 与一次血糖测量有什么不同",
        "9.4 HbA1c versus a single glucose reading",
      ),
      [
        p(
          "HbA1c 又叫糖化血红蛋白。葡萄糖会与红细胞中的血红蛋白结合；HbA1c 测量这种结合的比例，帮助反映过去约三个月的平均血糖情况。它不是今天早餐的即时分数。",
          "HbA1c is glycated haemoglobin. Glucose attaches to haemoglobin in red blood cells, and the test measures the proportion affected. It helps reflect average glucose over roughly three months; it is not an instant score for this morning’s breakfast.",
        ),
        compare([
          {
            title: l("一次血糖值", "A single glucose reading"),
            items: [
              l(
                "描述某个时间点的浓度。",
                "Describes concentration at a particular time.",
              ),
              l(
                "需考虑空腹、餐后时间、测量方式等。",
                "Interpret alongside fasting status, time after food and measurement method.",
              ),
            ],
          },
          {
            title: l("HbA1c", "HbA1c"),
            items: [
              l(
                "帮助观察较长时期的平均情况。",
                "Helps assess a longer-term average.",
              ),
              l(
                "不能显示所有高低波动，也不适合所有情境。",
                "Does not show every high and low and is not suitable in every situation.",
              ),
            ],
          },
        ]),
        p(
          "影响红细胞寿命或血红蛋白的情况可能干扰结果，例如某些贫血或血红蛋白变异。妊娠等情境也有特别考虑。诊断糖尿病前期或糖尿病，需要专业人员选择合适检查、判断是否需复查，并结合完整情况。",
          "Conditions affecting red-cell lifespan or haemoglobin can alter results, including some anaemias and haemoglobin variants. Pregnancy also requires particular consideration. Diagnosing prediabetes or diabetes involves selecting suitable tests, deciding whether confirmation is needed and interpreting the full context.",
        ),
        example(
          "平均值可能隐藏差异",
          "An average can hide differences",
          "两个人的平均值接近，不代表每天或每一餐的波动相同。就像平均气温不能告诉你某天是否暴雨，HbA1c 很有用，但不能替代所有其他信息。",
          "Similar averages do not mean identical daily or after-meal fluctuations. Just as average temperature cannot tell you whether one day had a storm, HbA1c is useful without replacing every other piece of information.",
        ),
      ],
      ["hba1c", "prediabetes", "glycation"],
      ["a1c", "diabetes-tests"],
    ),
    section(
      "food-context",
      l(
        "9.5 食物选择：看整餐，不找神奇降糖食物",
        "9.5 Food choices: meals rather than miracle foods",
      ),
      [
        p(
          "评估一餐可以先看碳水来源、实际分量、纤维、蛋白质与饮料。全谷物、豆类、蔬菜及其他普通食物可以帮助形成多样饮食，但它们不是把血糖自动拉到正常范围的药物。适合的份量与进餐时间因人而异。",
          "Start with carbohydrate sources, actual portions, fibre, protein and drinks. Whole grains, pulses, vegetables and other ordinary foods can support a varied pattern, but they are not medicines that automatically bring glucose into range. Suitable portions and meal timing vary between people.",
        ),
        p(
          "第 2 周的 GI 是特定条件下对含碳水食物的比较工具，不预测一个人的混合餐反应。低 GI 不等于可以无限吃，也不表示一份食物在所有营养方面更好。总量、搭配、烹调和个人情况都要考虑。",
          "Week 2’s GI compares carbohydrate-containing foods under specified conditions; it does not predict one person’s mixed-meal response. Low GI does not permit unlimited quantities or establish overall nutritional superiority. Amount, meal composition, preparation and personal context all matter.",
        ),
        example(
          "普通马来西亚家庭的一餐",
          "An ordinary Malaysian family meal",
          "饭、鱼或豆腐、两种蔬菜配水，可以作为讨论搭配的起点。若原本每餐都喝甜饮，改为水或无糖茶是可讨论的小变化。不是要求所有人立刻把饭完全删除，也不是给糖尿病患者开统一餐单。",
          "Rice with fish or tofu, two vegetables and water is a starting point for discussing composition. If every meal previously included a sweet drink, water or unsweetened tea is one possible small change. This neither requires everyone to eliminate rice nor prescribes one menu for all people with diabetes.",
        ),
        call(
          "服药者改变饮食需要配合治疗计划",
          "Diet changes must fit medication plans",
          "使用胰岛素或某些降糖药的人，突然少吃、跳餐或改变活动可能出现低血糖。不要因课程内容自行停药、减药或进行极端禁食；与医疗及营养团队制定个人安排。",
          "For people using insulin or some glucose-lowering medicines, suddenly eating less, skipping meals or changing activity can cause low glucose. Do not stop or reduce medicines or begin extreme fasting because of this lesson; coordinate an individual plan with the care team.",
          "warning",
        ),
      ],
      ["gi", "hypoglycaemia", "portion"],
      ["diabetes-living", "gi-guide", "plate"],
    ),
    section(
      "glucose-practice",
      l("9.6 把机制讲给家人听", "9.6 Explain the mechanism to a relative"),
      [
        p(
          "先讲正常过程，再讲哪里可能出问题。一个好解释包括：食物中的部分碳水分解为葡萄糖；小肠吸收；胰岛素和肝脏等共同调节；反应与供应长期不匹配时可能出现高血糖。不要把复杂系统压缩成“吃甜就得病”。",
          "Explain normal function before describing possible problems. A useful account includes carbohydrate breakdown into glucose, small-intestine absorption, regulation involving insulin and the liver, and possible high glucose when response and supply do not match needs over time. Avoid reducing the system to sweets causing disease.",
        ),
        p(
          "糖尿病前期是某些血糖检查高于正常但尚未达到糖尿病范围的状态，表示风险增加，不等于每个人必然进展。2型糖尿病也不只是“严重一点的糖尿病前期”，需要完整评估和长期管理。",
          "Prediabetes refers to glucose test results above normal but below the diabetes range. It signals increased risk, not inevitable progression in every person. Type 2 diabetes requires full assessment and ongoing management, rather than being treated merely as slightly worse prediabetes.",
        ),
        example(
          "遇到“这个食物降糖”的说法",
          "When a food is claimed to lower glucose",
          "问：研究对象是谁？比较什么？看的是一次餐后值、HbA1c，还是长期健康结果？它是替代了甜饮，还是在原饮食上额外添加？是否有人同时在卖产品？这些问题会在科学思维阶段继续练习。",
          "Ask who was studied, what was compared, and whether the outcome was one after-meal reading, HbA1c or long-term health. Did the food replace sweet drinks or get added to the existing diet? Is someone selling it? Later scientific-thinking lessons will develop these questions.",
        ),
        call(
          "本周的成功标准",
          "This week’s success criterion",
          "能说明调节过程、承认未知并提出一个现实的家庭习惯改善，就达到了学习目的。不需要购买血糖仪给健康家人做课程实验，也不根据本课给任何人确诊。",
          "Success means explaining regulation, recognising uncertainty and proposing one realistic household habit change. You do not need to buy a glucose meter to experiment on healthy relatives, and this lesson does not diagnose anyone.",
          "important",
        ),
      ],
      ["prediabetes", "type2", "blood-glucose"],
      ["insulin-resistance", "diabetes-tests", "diabetes-living"],
    ),
  ],
  keyTerms: [
    term(
      "blood-glucose",
      "血糖",
      "Blood glucose",
      "血液中葡萄糖的浓度，会随进餐、身体调节及其他因素变化。",
      "The concentration of glucose in blood, varying with meals, body regulation and other factors.",
    ),
    term(
      "glucose",
      "葡萄糖",
      "Glucose",
      "一种简单糖，也是身体可以利用的燃料，不等于所有膳食碳水。",
      "A simple sugar used as a fuel by the body, not a synonym for all dietary carbohydrate.",
    ),
    term(
      "glycogen",
      "糖原",
      "Glycogen",
      "人体储存葡萄糖的一种形式，肝脏和肌肉是主要储存部位。",
      "A form in which the body stores glucose, principally in liver and muscle.",
    ),
    term(
      "insulin",
      "胰岛素",
      "Insulin",
      "由胰腺制造、参与葡萄糖摄取储存与肝脏调节的激素。",
      "A pancreatic hormone involved in glucose uptake, storage and liver regulation.",
    ),
    term(
      "hormone",
      "激素",
      "Hormone",
      "身体制造并用于协调细胞或器官活动的信号物质。",
      "A signalling substance made by the body to coordinate cellular or organ activity.",
    ),
    term(
      "beta-cell",
      "β 细胞",
      "Beta cell",
      "胰腺中负责制造和释放胰岛素的一类细胞。",
      "A type of pancreatic cell responsible for making and releasing insulin.",
    ),
    term(
      "insulin-resistance",
      "胰岛素阻抗",
      "Insulin resistance",
      "部分组织对胰岛素反应减弱的状态，可先于明显高血糖出现。",
      "Reduced tissue responsiveness to insulin, which can precede obvious high blood glucose.",
    ),
    term(
      "prediabetes",
      "糖尿病前期",
      "Prediabetes",
      "血糖相关检查处于正常与糖尿病范围之间、提示风险增加的状态。",
      "Glucose-related test results between normal and diabetes ranges, indicating increased risk.",
    ),
    term(
      "type2",
      "2型糖尿病",
      "Type 2 diabetes",
      "涉及胰岛素作用及相对供应不足、造成持续血糖调节问题的疾病。",
      "A condition involving reduced insulin action and inadequate relative supply, causing persistent glucose-regulation problems.",
    ),
    term(
      "risk-factor",
      "风险因素",
      "Risk factor",
      "与某种健康问题发生机会增加有关的特征，不等于确定诊断。",
      "A characteristic associated with greater likelihood of a health problem, not a definite diagnosis.",
    ),
    term(
      "hba1c",
      "糖化血红蛋白",
      "HbA1c",
      "帮助反映过去约三个月平均血糖的指标，受红细胞等因素影响。",
      "A measure helping reflect average glucose over roughly three months, affected by factors including red cells.",
    ),
    term(
      "glycation",
      "糖化",
      "Glycation",
      "糖与蛋白质等分子非酶促结合的过程，HbA1c 是相关测量之一。",
      "Non-enzymatic attachment of sugars to molecules such as proteins; HbA1c is one related measure.",
    ),
    term(
      "gi",
      "升糖指数",
      "Glycaemic index",
      "特定条件下比较含碳水食物血糖反应的指标，不是个人混合餐预测。",
      "A comparison of glucose responses to carbohydrate foods under specified conditions, not a personal mixed-meal prediction.",
    ),
    term(
      "hypoglycaemia",
      "低血糖",
      "Hypoglycaemia",
      "血糖过低的状态，与部分药物和进餐活动变化有关时需特别注意。",
      "A state of abnormally low glucose, particularly relevant with some medicines and changes to meals or activity.",
    ),
    term(
      "portion",
      "实际分量",
      "Portion",
      "一个人实际吃下的食物数量，不一定等于包装标示的一份。",
      "The actual amount eaten, which may differ from a labelled serving.",
    ),
  ],
  questions: [
    q(
      "normal",
      l(
        "任何一次餐后血糖上升都代表糖尿病吗？",
        "Does any glucose rise after a meal mean diabetes?",
      ),
      [
        l("是，正常人不会上升。", "Yes, it never rises in healthy people."),
        l(
          "不是，要看调节情况与适当检查。",
          "No, regulation and appropriate assessment matter.",
        ),
      ],
      1,
      l(
        "正常进餐也会有变化，不能仅凭上升二字判断疾病。",
        "Normal meals cause changes; the word rise alone does not establish disease.",
      ),
    ),
    q(
      "resistance",
      l(
        "胰岛素阻抗等于身体完全不制造胰岛素吗？",
        "Does resistance mean the body makes no insulin?",
      ),
      [
        l(
          "不是，初期可能制造更多来补偿。",
          "No, production may initially increase to compensate.",
        ),
        l("是，两者完全一样。", "Yes, they are identical."),
      ],
      0,
      l(
        "组织反应与激素供应是相关但不同的问题。",
        "Tissue response and hormone supply are related but distinct issues.",
      ),
    ),
    q(
      "a1c",
      l("HbA1c 主要帮助了解什么？", "What does HbA1c mainly help assess?"),
      [
        l("今天早餐后的精确峰值。", "Today’s exact after-breakfast peak."),
        l(
          "过去约三个月的平均血糖情况。",
          "Average glucose over roughly three months.",
        ),
      ],
      1,
      l(
        "平均指标不能显示每次高低波动，并需考虑干扰因素。",
        "An average does not show every high or low and needs interpretation of possible interference.",
      ),
    ),
    q(
      "food",
      l(
        "听见“低 GI，所以可以无限吃”时，应如何判断？",
        "How should you assess “low GI means unlimited portions”?",
      ),
      [
        l(
          "不成立，分量和整餐也重要。",
          "It does not follow; portions and the whole meal matter.",
        ),
        l(
          "成立，GI 包含一切信息。",
          "It follows; GI contains all relevant information.",
        ),
      ],
      0,
      l(
        "GI 不是全方位健康评分，也不是个人治疗餐单。",
        "GI is neither an overall health score nor a personalised treatment plan.",
      ),
    ),
  ],
  practicalTask: l(
    "用五句话和一张箭头图向家人解释碳水、葡萄糖、胰岛素与胰岛素阻抗的关系。再选一顿平常餐，记录主食、蔬菜、蛋白质来源、饮料与分量，提出一个可行调整及理由。不要测量家人来做自我诊断，不改变任何处方药。",
    "Explain carbohydrate, glucose, insulin and insulin resistance in five sentences and one arrow diagram. Then review an ordinary meal’s staple, vegetables, protein source, drinks and portions. Propose one feasible adjustment with a reason. Do not test relatives for self-diagnosis or alter prescriptions.",
  ),
  summary: l(
    [
      "血糖调节涉及食物、肝脏、胰腺和组织反应。",
      "胰岛素是正常激素，阻抗不等于完全没有胰岛素。",
      "糖尿病前期提示风险，不代表必然进展。",
      "HbA1c 反映较长时期平均情况，有其局限。",
      "看整餐、分量和个人情况，不把食物当药物。",
    ],
    [
      "Regulation involves food, liver, pancreas and tissue responses.",
      "Insulin is a normal hormone; resistance does not mean no insulin.",
      "Prediabetes signals risk, not inevitable progression.",
      "HbA1c reflects a longer-term average and has limitations.",
      "Consider meals, portions and personal circumstances instead of treating foods as medicines.",
    ],
  ),
  sourceIds: [
    "diabetes-basics",
    "insulin-resistance",
    "cdc-type2",
    "a1c",
    "diabetes-tests",
    "diabetes-living",
    "gi-guide",
    "plate",
  ],
});
