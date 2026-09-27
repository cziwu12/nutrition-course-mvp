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
export const week22Lesson = lesson({
  introduction: l(
    "营养误导常把一个真实概念接到一个没有被证明的承诺：身体会处理废物，因此需要排毒茶；细胞需要葡萄糖，因此不吃糖能治癌。本周练习检查这个推理跳跃，同时用尊重的方式讨论家人关心的健康信息。",
    "Nutrition misinformation often connects a real concept to an unsupported promise: the body processes waste, therefore a detox tea is needed; cells use glucose, therefore avoiding sugar cures cancer. This week examines those leaps while discussing family health concerns respectfully.",
  ),
  objectives: l(
    [
      "识别排毒、燃脂与治病宣传中的证据缺口。",
      "区分营养支持、风险因素与治疗。",
      "检查见证、商业利益和单篇研究宣传。",
      "写出准确而尊重的家庭回应。",
    ],
    [
      "Identify evidence gaps in detox, fat-burning and cure claims.",
      "Distinguish nutritional support, risk factors and treatment.",
      "Assess testimonials, commercial interests and single-study hype.",
      "Write an accurate, respectful response for family discussion.",
    ],
  ),
  sections: [
    section(
      "myth-claims",
      l("22.1 先问它到底承诺什么", "22.1 Identify the actual promise"),
      [
        p(
          "“含有维生素”“帮助满足需要”“降低某种风险”和“治愈疾病”是不同强度的主张。产品含有某成分，只能直接说明成分信息；不能自动证明使用该产品会产生特定健康结果。先把宣传改写成可以检验的问题。",
          "Containing a vitamin, helping meet needs, reducing a risk and curing disease are claims of different strength. An ingredient’s presence directly establishes only composition, not a particular outcome from using the product. Rewrite the promise as a testable question first.",
        ),
        p(
          "营养支持是帮助身体获得需要的食物与营养；治疗则针对具体健康问题并需要相应证据。一个饮食模式与较低风险有关，不等于某食物能治好已经发生的病。人群长期观察也不能替代个人诊疗。",
          "Nutritional support helps provide needed food and nutrients; treatment addresses a specific health problem and needs appropriate evidence. A pattern associated with lower risk does not make a food a cure for existing disease. Long-term population observations do not replace individual care.",
        ),
        example(
          "从包装到研究问题",
          "From packaging to a research question",
          "“这款粉末增强免疫力”需要进一步问：对哪些人？比较什么？测感冒次数、某项血液指标还是仅成分含量？用多少、多久、有什么风险？如果这些都没有，就还不是明确证据。",
          "For “this powder strengthens immunity”, ask which people, compared with what, and whether the outcome is infections, a blood marker or merely ingredient content. What amount, duration and harms? Without this, the evidence question remains undefined.",
        ),
        call(
          "强承诺需要相称证据",
          "Strong promises need matching evidence",
          "保证、百分之百、人人适用、完全没有副作用等词值得停下来核查。可信信息通常会说明条件、限制和可能风险。",
          "Guaranteed, 100%, for everyone and no side effects warrant scrutiny. Reliable information usually describes conditions, limitations and potential harms.",
        ),
      ],
      ["claim", "nutritional-support", "treatment", "risk-factor"],
      ["online-evidence", "health-news", "cancer-diets"],
    ),
    section(
      "myth-detox",
      l(
        "22.2 排毒：先定义“毒”与测量方式",
        "22.2 Detox: define the substance and measurement",
      ),
      [
        p(
          "排毒营销常没有说明要清除什么物质、怎样测量或什么结果算改善。身体本来有处理与排出物质的器官与过程，但这不证明某种茶、果汁或清肠方案能额外改善它们。医疗处理中针对特定中毒的治疗，与商业排毒不是同一回事。",
          "Detox marketing often leaves the substance, measurement and meaningful improvement undefined. The body has organs and processes that handle and remove substances, but this does not establish added benefit from a tea, juice or cleanse. Medical treatment for a specific poisoning is different from a commercial detox programme.",
        ),
        p(
          "只喝果汁或大量限制食物可能改变短期体重，却不能证明排出了某种毒素。泻药造成排便或腹泻也不等于燃烧脂肪。脱水、电解质失衡和营养不足是需要考虑的风险，不能把不舒服一概解释成正在起效。",
          "Juice-only or restrictive eating can alter short-term weight without proving removal of a toxin. Laxative-related bowel movements or diarrhoea do not establish fat burning. Dehydration, electrolyte imbalance and inadequate nutrition are risks, not symptoms to automatically reinterpret as effectiveness.",
        ),
        example(
          "虚构排毒茶广告",
          "A fictional detox-tea advertisement",
          "“三天掉重，证明清走毒素”缺少毒素名称、可靠测量、比较组与长期结果。体重变化还可能涉及水分和食物残余；照片不能补足这些缺口。",
          "“Weight falls in three days, proving toxins are gone” lacks a named substance, reliable measurement, comparator and long-term outcome. Weight changes can involve water and gut contents; photographs cannot fill those gaps.",
        ),
        call(
          "不要用排毒替代照护",
          "Do not replace care with a cleanse",
          "持续不适、疑似中毒或药物相关问题应求助专业人员。已有糖尿病、肾病等情况时，极端饮食和大量草药饮料尤其不能随意尝试。",
          "Persistent symptoms, possible poisoning or medication concerns need professional help. Extreme diets and large herbal-drink intakes are particularly inappropriate to try casually with conditions such as diabetes or kidney disease.",
          "warning",
        ),
      ],
      ["detox", "toxin", "dehydration", "electrolyte"],
      ["detox-guide", "supplements-guide"],
    ),
    section(
      "myth-miracle",
      l("22.3 神奇食物与燃脂宣传", "22.3 Miracle foods and fat-burning claims"),
      [
        p(
          "某食物有营养价值，不代表能抵消其他饮食或独自改变体脂。代谢是身体各种化学过程的总称；广告把“促进代谢”说得像一个开关，但研究需要说明具体过程、变化幅度和实际结果。短期指标不等于长期有意义的改变。",
          "A nutritious food does not cancel the rest of a diet or independently determine body fat. Metabolism refers to the body’s chemical processes, while advertising often presents boosting it as a switch. Evidence needs the process, magnitude and actual outcome; a short-term marker is not automatically meaningful long-term change.",
        ),
        p(
          "提取物、胶囊与普通食物的剂量和吸收可能不同。即使某成分有人体研究，也要问研究产品是否等同广告产品、比较组是什么，以及副作用是否报告。把一种茶或香料升级为保证燃脂食物，通常省略了这些条件。",
          "Extracts, capsules and ordinary foods may differ in dose and absorption. Even when an ingredient has human research, check whether the tested product matches the advertised one, the comparator and adverse-effect reporting. Declaring a tea or spice a guaranteed fat burner skips these conditions.",
        ),
        compare([
          {
            title: l("可接受的食物理由", "A reasonable food rationale"),
            items: [
              l(
                "喜欢味道、买得到，并贡献营养。",
                "It is enjoyable, available and contributes nutrients.",
              ),
              l(
                "在整体饮食中有合适用途。",
                "It has a suitable role in the broader diet.",
              ),
            ],
          },
          {
            title: l("需要质疑的承诺", "A promise to question"),
            items: [
              l(
                "不用考虑其他条件就消除脂肪。",
                "Eliminates fat regardless of other conditions.",
              ),
              l(
                "一项细胞研究证明所有人有效。",
                "One cell study proves effectiveness for everyone.",
              ),
            ],
          },
        ]),
        call(
          "补充剂不是低风险捷径",
          "Supplements are not risk-free shortcuts",
          "减重产品可能有不良作用、药物相互作用或成分问题。不要把天然、明星推荐或网上热卖当作安全证据。",
          "Weight-loss products can involve adverse effects, interactions or ingredient problems. Natural wording, celebrity promotion or online popularity is not safety evidence.",
          "warning",
        ),
      ],
      ["metabolism", "extract", "dose", "adverse-effect"],
      ["weight-supplements", "antioxidants-nccih", "who"],
    ),
    section(
      "myth-cancer",
      l(
        "22.4 碱性饮食与癌症：别把机制当治疗",
        "22.4 Alkaline diets and cancer: mechanisms are not cures",
      ),
      [
        p(
          "pH 描述酸碱程度。身体会调节血液酸碱平衡，尿液变化不能直接代表全身或肿瘤环境。多吃合适蔬果可以有营养理由，但“改变全身酸碱来治癌”是另一个没有因此被证明的主张。",
          "pH describes acidity and alkalinity. The body regulates blood acid-base balance, and changes in urine do not directly describe the whole body or a tumour environment. Eating suitable produce can have nutritional reasons without establishing a claim to cure cancer by changing whole-body pH.",
        ),
        p(
          "癌细胞使用葡萄糖，不代表把所有糖或碳水去掉就能只饿死癌细胞。正常细胞也需要能量，身体会调节葡萄糖供应。癌症治疗期间营养需要可能改变，严重限制饮食可能增加困难，不能根据网上机制故事停药或节食。",
          "Cancer cells use glucose, but removing sugars or carbohydrates does not selectively starve only cancer cells. Normal cells also need energy and the body regulates glucose supply. Cancer care can change nutritional needs; severe restriction may add difficulty and is not a reason to stop treatment based on an online mechanism story.",
        ),
        example(
          "保留合理部分，拒绝过度结论",
          "Keep the useful part, reject the leap",
          "“蔬菜可增加多样性”可以是合理建议；“所以只吃碱性蔬菜能治癌”并不成立。一个主张里面有真话，不会让后面所有推论都变真。",
          "“Vegetables can add variety” may be reasonable; “therefore eating only alkaline vegetables cures cancer” does not follow. One true statement does not validate every conclusion attached to it.",
        ),
        call(
          "治疗中的食物与补充剂要讨论",
          "Discuss foods and supplements during treatment",
          "癌症或其他严重疾病的饮食调整应与治疗团队和营养专业人员讨论。补充剂可能影响治疗，不能因为是食物提取物就假定安全。",
          "Discuss dietary changes during cancer or other serious illness with the treatment team and dietetic professionals. Supplements may affect treatment and are not automatically safe because they are food extracts.",
          "warning",
        ),
      ],
      ["ph", "acid-base", "mechanism", "treatment"],
      ["alkaline-diet", "cancer-myths", "cancer-diets", "kidney-acid"],
    ),
    section(
      "myth-evidence",
      l(
        "22.5 见证、卖货与单篇研究",
        "22.5 Testimonials, sales and single studies",
      ),
      [
        p(
          "个人见证可以描述感受，但缺少可靠比较，可能同时改变了睡眠、饮食、药物或活动。前后照片还受光线、姿势与时间影响。不能因为体验真诚，就把原因确定为卖方的产品。",
          "A testimonial describes experience without a reliable comparison; sleep, diet, medicines or activity may have changed simultaneously. Before-and-after photos also depend on lighting, pose and timing. Sincerity does not establish that the seller’s product caused the result.",
        ),
        p(
          "商业利益是可能影响信息呈现的关系，例如销售、赞助或佣金。它值得公开和检查，但不是自动判假的理由。真正要看完整证据、独立重复、风险与原研究是否支持广告；学术标题或白袍也不能替代这些。",
          "Commercial interests may shape presentation through sales, sponsorship or commission. They deserve disclosure and scrutiny without automatically proving a claim false. Examine the full evidence, independent replication, risks and whether the original study supports the advertisement; credentials or a white coat do not replace this.",
        ),
        example(
          "给一项引用做核对",
          "Check a cited reference",
          "广告说“研究证明本饮品防病”，原文却是另一种浓缩提取物在细胞中的实验。引用是真的，但人群、产品和结果对不上，依然不能支持广告结论。",
          "An advertisement claims a drink prevents disease, but its cited paper tested another concentrated extract in cells. The citation is real, yet the population, product and outcome do not match the claim.",
        ),
        call(
          "不是每次都要马上给答案",
          "An immediate answer is not required",
          "可以说“我还没看到足够证据，暂不购买或转发”。不确定比编一个支持或反对的理由更诚实。",
          "You can say that sufficient evidence has not been found and defer buying or sharing. Uncertainty is more honest than inventing a reason for either side.",
        ),
      ],
      ["testimonial", "conflict", "replication", "association"],
      ["online-evidence", "health-news", "cochrane-bias"],
    ),
    section(
      "myth-practice",
      l("22.6 用尊重的语言检查一则宣传", "22.6 Examine a claim respectfully"),
      [
        p(
          "先承认家人想照顾健康的动机，再一起看具体承诺。例如“我知道你想让妈妈舒服一点，我们看看这项研究有没有真正测试这个产品”。讨论对象是证据与行动，不是对方是否聪明。",
          "Acknowledge the intention to help before examining the promise. For example: “I know you want Mum to feel better; let us check whether the study actually tested this product.” Focus on evidence and decisions rather than another person’s intelligence.",
        ),
        p(
          "练习记录原句、来源、产品、证据类型、缺少的信息与可能风险。给出谨慎的结论，例如尚未证实、证据不适用或应先问治疗团队。可选择本课虚构广告，不必寻找并传播真实的误导内容。",
          "Record the wording, source, product, evidence type, missing details and possible risks. Use a restrained conclusion such as unverified, not applicable or discuss with the care team first. A fictional advertisement from this lesson is enough; there is no need to spread a real misleading claim.",
        ),
        example(
          "回应范例",
          "An example response",
          "“这篇文章只谈细胞指标，没有说明这款产品对人的疾病有效。我们先不把它当治疗，也不停止原来的照护；若仍感兴趣，可以带资料问专业人员。”",
          "“This article measures a cell marker and does not establish that this product treats disease in people. Let us not treat it as therapy or stop existing care; we can bring the information to a professional if still interested.”",
        ),
        call(
          "最后检查行动后果",
          "Consider the consequence of acting",
          "花多少钱、是否排除食物、是否延误治疗、是否有相互作用，都比广告点击率重要。证据检查应帮助做更稳妥的决定。",
          "Cost, food exclusions, treatment delay and interactions matter more than view counts. Evidence checking should support better decisions.",
        ),
      ],
      ["claim", "testimonial", "adverse-effect"],
      ["online-evidence", "detox-guide", "cancer-diets"],
    ),
  ],
  keyTerms: [
    term(
      "claim",
      "健康主张",
      "Health claim",
      "关于产品或行为会产生某种健康结果的表述。",
      "A statement that a product or behaviour produces a health outcome.",
    ),
    term(
      "nutritional-support",
      "营养支持",
      "Nutritional support",
      "帮助满足食物与营养需要，不自动等同治疗疾病。",
      "Helping meet food and nutrient needs, not automatically treating disease.",
    ),
    term(
      "treatment",
      "治疗",
      "Treatment",
      "针对具体健康问题的干预，需要相应证据与专业判断。",
      "An intervention for a specific health problem requiring appropriate evidence and judgement.",
    ),
    term(
      "risk-factor",
      "风险因素",
      "Risk factor",
      "与某结果发生机会有关的因素，不代表确定命运。",
      "A factor related to the chance of an outcome, not a certain destiny.",
    ),
    term(
      "detox",
      "商业排毒",
      "Commercial detox",
      "声称清除体内有害物的商业方案，需要具体证据。",
      "A marketed programme claiming to remove harmful substances, requiring specific evidence.",
    ),
    term(
      "toxin",
      "有害物质",
      "Toxin or toxic substance",
      "在特定暴露条件下可造成伤害的物质，不能只作模糊营销词。",
      "A substance capable of harm under particular exposure conditions, not merely a vague marketing term.",
    ),
    term(
      "dehydration",
      "脱水",
      "Dehydration",
      "身体失去的水分超过补充、影响水分平衡的状态。",
      "A state in which water loss exceeds replacement, disrupting hydration.",
    ),
    term(
      "electrolyte",
      "电解质",
      "Electrolyte",
      "在体液中以离子形式参与水分与神经肌肉等功能的成分。",
      "An ion in body fluids involved in fluid, nerve, muscle and other functions.",
    ),
    term(
      "metabolism",
      "代谢",
      "Metabolism",
      "身体维持和活动涉及的多种化学过程的总称。",
      "The collection of chemical processes supporting body maintenance and activity.",
    ),
    term(
      "extract",
      "提取物",
      "Extract",
      "从原材料中分离或浓缩部分成分的制品。",
      "A preparation separating or concentrating constituents from a source material.",
    ),
    term(
      "dose",
      "剂量",
      "Dose",
      "使用成分的数量，需结合频率、时间和形式。",
      "The quantity used, interpreted with frequency, duration and formulation.",
    ),
    term(
      "adverse-effect",
      "不良作用",
      "Adverse effect",
      "干预或产品使用后可能出现的不希望的有害影响。",
      "An unwanted harmful effect associated with an intervention or product.",
    ),
    term(
      "ph",
      "酸碱度",
      "pH",
      "描述溶液酸性或碱性的尺度，不是食品健康评分。",
      "A scale describing acidity or alkalinity, not a food health score.",
    ),
    term(
      "acid-base",
      "酸碱平衡",
      "Acid-base balance",
      "身体调节体液酸碱状态的过程，不等同尿液一次读数。",
      "Body regulation of fluid acidity and alkalinity, not equivalent to one urine reading.",
    ),
    term(
      "mechanism",
      "作用机制",
      "Mechanism",
      "解释某过程可能怎样发生，不独自证明临床效果。",
      "An explanation of how a process may occur, not alone proof of clinical benefit.",
    ),
    term(
      "testimonial",
      "个人见证",
      "Testimonial",
      "个人使用经验的叙述，通常缺少可靠比较组。",
      "An account of personal experience, generally without a reliable comparison group.",
    ),
    term(
      "conflict",
      "利益冲突",
      "Conflict of interest",
      "可能影响判断或呈现的利益关系，需公开与审视。",
      "An interest that may influence judgement or presentation and deserves disclosure and scrutiny.",
    ),
    term(
      "replication",
      "重复验证",
      "Replication",
      "其他研究再次检验相关结果以了解是否一致。",
      "Further research testing a finding to examine consistency.",
    ),
    term(
      "association",
      "关联",
      "Association",
      "现象共同变化的联系，本身不能确定原因。",
      "A relationship between varying phenomena that does not itself establish cause.",
    ),
  ],
  questions: [
    q(
      "detox",
      l("排毒宣传首先应说清什么？", "What should a detox claim first specify?"),
      [
        l("包装颜色", "Package colour"),
        l(
          "清除什么、如何测量、有何证据",
          "What is removed, how measured and with what evidence",
        ),
      ],
      1,
      l(
        "没有明确物质和结果，无法检验宣传是否成立。",
        "Without a defined substance and outcome, the promise cannot be properly tested.",
      ),
    ),
    q(
      "testimony",
      l(
        "真诚的个人见证能独自证明产品效果吗？",
        "Can a sincere testimonial alone prove product effectiveness?",
      ),
      [
        l(
          "不能，可能有其他变化与偏差",
          "No; other changes and biases may explain it",
        ),
        l("可以，只要有照片", "Yes, with a photograph"),
      ],
      0,
      l(
        "体验可以真实，但缺少比较不能确定原因。",
        "An experience can be real without a comparison establishing its cause.",
      ),
    ),
    q(
      "alkaline",
      l(
        "蔬菜有营养能证明碱性饮食治癌吗？",
        "Does nutritional value of vegetables prove an alkaline diet cures cancer?",
      ),
      [
        l("能", "Yes"),
        l("不能，这是不同主张", "No; these are different claims"),
      ],
      1,
      l(
        "营养价值不等于疾病治疗证据，癌症饮食应与治疗团队讨论。",
        "Nutrient value is not treatment evidence; discuss cancer nutrition with the care team.",
      ),
    ),
    q(
      "response",
      l(
        "证据不足时哪种回应合适？",
        "What is appropriate when evidence is insufficient?",
      ),
      [
        l("马上转发试试看", "Share it immediately"),
        l("嘲笑相信的人", "Mock the person who believes it"),
        l(
          "说明缺口，暂缓行动并按需要求助",
          "Explain the gap, defer action and seek guidance as needed",
        ),
      ],
      2,
      l(
        "尊重地检查证据与行动后果，比争论谁聪明更有用。",
        "Respectful assessment of evidence and consequences is more useful than judging intelligence.",
      ),
    ),
  ],
  practicalTask: l(
    "选一个本课虚构主张或遇到的宣传，写原句、来源、证据类型、三项缺失信息、可能风险和一段尊重的回应。不购买或尝试产品来完成练习。",
    "Choose a fictional course claim or an encountered advertisement. Record wording, source, evidence type, three missing details, risks and a respectful response. Buying or trying the product is unnecessary.",
  ),
  summary: l(
    [
      "把成分、营养支持与治疗分开。",
      "排毒和燃脂必须有可检验的具体证据。",
      "机制故事与个人见证不证明治疗。",
      "引用真实也可能被错误解读。",
      "尊重讨论，并优先考虑安全的行动后果。",
    ],
    [
      "Separate ingredients, nutritional support and treatment.",
      "Detox and fat-burning claims need specific testable evidence.",
      "Mechanisms and testimonials do not prove treatment.",
      "Real citations can still be misinterpreted.",
      "Discuss respectfully and consider consequences of acting.",
    ],
  ),
  sourceIds: [
    "detox-guide",
    "cancer-myths",
    "cancer-diets",
    "online-evidence",
    "weight-supplements",
  ],
});
