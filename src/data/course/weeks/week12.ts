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
export const week12Lesson = lesson({
  introduction: l(
    "“抗炎”“抗氧化”常出现在食品宣传中，但它们先是生物学概念。本周区分炎症、氧化压力和实验结果，学习一句关键问题：“人体证据在哪里？”理解机制可以帮助提出假设，不能自动证明某食品预防或治疗疾病。",
    "Anti-inflammatory and antioxidant appear frequently in food marketing, but first they are biological concepts. Separate inflammation, oxidative stress and laboratory findings, and practise asking: where is the human evidence? Mechanisms help generate hypotheses; they do not automatically prove that a food prevents or treats disease.",
  ),
  objectives: l(
    [
      "区分急性与慢性炎症的基本概念。",
      "解释自由基、氧化压力和抗氧化物。",
      "认识植物化学物与多酚。",
      "说明实验室指标为什么不等于人体获益。",
      "用几个具体问题检查“抗炎食品”宣传。",
    ],
    [
      "Distinguish basic concepts of acute and chronic inflammation.",
      "Explain free radicals, oxidative stress and antioxidants.",
      "Recognise phytochemicals and polyphenols.",
      "Explain why laboratory measures are not identical to human benefit.",
      "Assess anti-inflammatory food claims with specific questions.",
    ],
  ),
  sections: [
    section(
      "inflammation",
      l(
        "12.1 炎症有正常的防御工作",
        "12.1 Inflammation has normal defensive jobs",
      ),
      [
        p(
          "炎症是身体对损伤、感染或其他刺激的一组反应，涉及免疫细胞和信号分子。局部红、热、肿、痛可在一些急性反应中出现。它并不等于感染本身，也不是身体里所有不舒服的统一名称。",
          "Inflammation is a collection of responses to injury, infection or other stimuli, involving immune cells and signalling molecules. Redness, warmth, swelling and pain can accompany some acute responses. Inflammation is not identical to infection and is not a universal name for every discomfort.",
        ),
        compare([
          {
            title: l("急性炎症", "Acute inflammation"),
            items: [
              l(
                "通常较快发生，参与应对刺激与修复。",
                "Usually develops relatively quickly and contributes to defence and repair.",
              ),
              l(
                "适当启动并结束是正常调节的一部分。",
                "Appropriate initiation and resolution are part of normal regulation.",
              ),
            ],
          },
          {
            title: l("慢性炎症", "Chronic inflammation"),
            items: [
              l(
                "持续较久，可能与不同疾病过程有关。",
                "Persists longer and can be involved in different disease processes.",
              ),
              l(
                "不能仅凭饮食或主观感觉确定原因。",
                "Its cause cannot be established from food choices or feelings alone.",
              ),
            ],
          },
        ]),
        example(
          "小伤口不是一场饮食失败",
          "A small wound is not a dietary failure",
          "轻微伤口附近的短期反应可参与修复。由此不能得出“所有炎症都应被食物消除”。同样，长期关节痛也不能仅凭“吃了会发炎的东西”来解释。",
          "A short-term response around a minor wound can contribute to repair. It does not follow that all inflammation should be eliminated by food. Persistent joint pain likewise cannot be explained simply by claiming an inflammatory food was eaten.",
        ),
        call(
          "正常功能与疾病状态要分开",
          "Separate normal function from disease",
          "免疫系统需要适当反应，而不是永远越强越好。视频帮助理解防御过程；它不是评估你是否有慢性炎症的诊断工具。",
          "The immune system needs appropriate responses, not permanently stronger responses. The video explains defence mechanisms; it does not diagnose chronic inflammation in you.",
        ),
      ],
      ["inflammation", "acute", "chronic", "immune-system"],
      ["inflammation-guide", "immune-video-source"],
    ),
    section(
      "oxidative-stress",
      l(
        "12.2 自由基与氧化压力不是“毒素清单”",
        "12.2 Free radicals and oxidative stress are not a toxin list",
      ),
      [
        p(
          "自由基是具有未配对电子、可能较活泼的化学物种。身体正常代谢会产生一些，环境暴露也可影响它们。相关活性分子不仅会造成损伤，也参与信号和防御；不是越少到零越好。",
          "Free radicals are chemical species with an unpaired electron that can be reactive. Normal metabolism produces some, and environmental exposures can influence them. Related reactive molecules participate in signalling and defence as well as damage; reducing everything to zero is not the goal.",
        ),
        p(
          "氧化压力指氧化作用与身体防御、修复等能力失衡的状态，可能影响细胞成分。它与炎症可以互相联系，但不是同一个词。一个食品在实验中表现出抗氧化能力，不表示它能在人体里修复所有这种失衡。",
          "Oxidative stress describes an imbalance involving oxidation and protective or repair processes that may affect cellular components. It can interact with inflammation but is not the same term. A food showing antioxidant capacity in an experiment does not establish that it corrects every such imbalance in humans.",
        ),
        example(
          "比喻的用途与边界",
          "The use and limits of an analogy",
          "可以把反应比作火花、防御比作管理火花的系统，但身体不是一台生锈机器。把“抗氧化”说成吃进一种清洁剂就能清空所有有害物，会把复杂生理说错。",
          "You might compare reactions to sparks and defences to systems that manage them, but the body is not a rusting machine. Eating an antioxidant is not like swallowing a cleaner that removes every harmful substance.",
        ),
        call(
          "无法凭感觉测量氧化压力",
          "Feelings do not measure oxidative stress",
          "疲倦、皮肤状态或一次饮食选择不能告诉你体内自由基的数量。对健康问题应做适当评估，而不是根据广告词自行诊断“氧化太多”。",
          "Fatigue, skin appearance or one food choice cannot tell you the number of free radicals in your body. Health concerns need appropriate assessment rather than an advertising-based diagnosis of too much oxidation.",
        ),
      ],
      ["free-radical", "oxidative-stress"],
      ["antioxidants-nccih", "antioxidants-nci"],
    ),
    section(
      "antioxidant-network",
      l(
        "12.3 抗氧化是一类作用，不是一种万能药",
        "12.3 Antioxidant describes activity, not a universal medicine",
      ),
      [
        p(
          "抗氧化物能在某些条件下限制氧化反应或相关损伤。身体有自己制造的保护系统，食物也提供相关成分，例如维生素 C、E。不同物质在不同组织、剂量和化学环境中的作用并不相同，不能随意互换。",
          "Antioxidants can limit oxidation or associated damage under certain conditions. The body produces its own protective systems, and foods supply relevant substances such as vitamins C and E. Effects differ by substance, tissue, amount and chemical environment; these substances are not interchangeable.",
        ),
        p(
          "“有正常作用”和“额外补充有好处”是两个需要分开的判断。营养不足时补足，与本来充足时增加到高剂量，研究问题不同。第 5 周的脂溶性维生素提醒我们：包装上写抗氧化也不能绕过安全性。",
          "Having a normal role and benefiting from extra supplementation are separate questions. Correcting inadequate nutrition is different from adding high doses when intake is already adequate. Week 5’s fat-soluble vitamins remind us that an antioxidant label does not bypass safety considerations.",
        ),
        example(
          "从餐盘到浓缩胶囊",
          "From a meal to a concentrated capsule",
          "蔬果同时带来水、纤维、多种营养素与其他成分。把其中一种物质提取出来，不能假定胶囊复制整份食物或整个饮食模式的效果；剂量和吸收也可能不同。",
          "Produce supplies water, fibre, nutrients and other constituents together. Extracting one substance does not establish that a capsule reproduces the food or the whole eating pattern. Dose and absorption can also differ.",
        ),
        call(
          "补充剂可能有害或影响治疗",
          "Supplements can cause harm or affect treatment",
          "一些高剂量抗氧化补充剂研究未显示期待的获益，特定人群还可能受害。尤其癌症治疗期间，不自行加入补充剂；让治疗团队知道正在使用的所有产品。",
          "Some high-dose antioxidant trials have not shown the hoped-for benefits, and particular groups may be harmed. Especially during cancer treatment, do not add supplements independently; tell the treatment team about all products being used.",
          "warning",
        ),
      ],
      ["antioxidant", "supplement", "dose"],
      ["antioxidants-nccih", "antioxidants-nci", "vitamin-e"],
    ),
    section(
      "plant-compounds",
      l("12.4 植物化学物与多酚", "12.4 Phytochemicals and polyphenols"),
      [
        p(
          "植物化学物指植物制造的多种化学成分，一些参与颜色、气味或植物防御。“化学物”不自动表示人工或有害；天然也不自动保证安全。这个名称描述来源或类别，不是一项治疗许可。",
          "Phytochemicals are diverse compounds made by plants, some contributing to colour, flavour or plant defence. Chemical does not automatically mean artificial or harmful, and natural does not guarantee safety. The term describes origin or category, not permission to claim a treatment.",
        ),
        p(
          "多酚是一大类具有特定化学结构的植物成分，存在于茶、豆类、部分水果等食物中。人们研究它们的多种作用，但某种多酚在试管里的活性，不能直接代表喝一杯茶后在所有组织里的效果。",
          "Polyphenols are a broad family of plant compounds with particular chemical structures, found in foods including tea, pulses and some fruits. They are studied for several effects, but activity in a test tube does not directly describe what one cup of tea does in every human tissue.",
        ),
        compare([
          {
            title: l("合理的食物选择", "A reasonable food choice"),
            items: [
              l(
                "用买得到的不同蔬果、豆类和全谷物增加多样性。",
                "Increase variety with accessible produce, pulses and whole grains.",
              ),
              l(
                "考虑口味、预算及整餐搭配。",
                "Consider taste, budget and meal composition.",
              ),
            ],
          },
          {
            title: l("超出证据的宣传", "A claim beyond the evidence"),
            items: [
              l(
                "某一种颜色或成分能够治病。",
                "One colour or compound cures disease.",
              ),
              l(
                "进口高价粉末一定胜过普通食物。",
                "An expensive imported powder must outperform ordinary foods.",
              ),
            ],
          },
        ]),
        example(
          "颜色只是一个提示",
          "Colour is only a cue",
          "南瓜、绿叶菜、豆类与番石榴可以让菜单多样。颜色能提醒我们轮换，却不是实验室含量表，也不能证明每一种颜色恰好对应一个器官的治疗。",
          "Pumpkin, leafy vegetables, pulses and guava can add variety. Colour can remind us to rotate choices, but it is not a laboratory nutrient table or evidence that each colour treats a particular organ.",
        ),
      ],
      ["phytochemical", "polyphenol"],
      ["phytochemical", "polyphenol", "antioxidants-harvard", "who"],
    ),
    section(
      "human-evidence",
      l(
        "12.5 实验室抗氧化结果离人体有多远",
        "12.5 The distance from a laboratory result to human benefit",
      ),
      [
        p(
          "体外研究在试管、培养细胞等环境中进行，可以探索机制。动物研究帮助提出进一步问题。人体研究还要考虑食物如何被消化、吸收、代谢，是否能达到实验浓度，以及有没有不良影响。每一步都有需要验证的条件。",
          "In vitro studies use settings such as test tubes or cultured cells to explore mechanisms. Animal studies can raise further questions. Human research must consider digestion, absorption, metabolism, whether experimental concentrations are reached and possible harms. Each step contains assumptions that need testing.",
        ),
        p(
          "生物标志物是反映某些生物过程的测量值；临床结果更直接关系到人的健康，例如症状、疾病事件或生活质量。某项标志物改变值得研究，但不能直接宣告所有长期结果改善。",
          "A biomarker is a measured indicator of a biological process. Clinical outcomes concern health more directly, such as symptoms, disease events or quality of life. A biomarker change may deserve further study without establishing improvement in every long-term outcome.",
        ),
        example(
          "假设研究：浆果提取物与细胞",
          "Hypothetical study: berry extract and cells",
          "实验让细胞接触高浓度提取物后，某氧化指标下降。准确表述应保留“细胞、浓度、指标”。把标题改成“每天喝果汁预防癌症”，添加了实验根本没检验的人体、剂量与疾病结论。",
          "Cells exposed to a concentrated extract show a lower oxidation marker. An accurate description retains cells, concentration and marker. Changing the headline to daily juice prevents cancer adds human, dose and disease conclusions that the experiment never tested.",
        ),
        call(
          "一串问题比一个营销分数更有用",
          "Questions are more useful than a marketing score",
          "研究是人体吗？有比较组吗？人数与时间多少？测的是什么？结果有多大、不确定性多大？谁资助？这些问题比“抗氧化排名第一”更能帮助判断。",
          "Was it in humans? Was there a comparison group? How many people and for how long? What was measured? How large and uncertain was the effect? Who funded it? These questions help more than a top antioxidant ranking.",
        ),
      ],
      ["in-vitro", "biomarker", "clinical-outcome", "bioavailability"],
      ["antioxidants-nccih", "antioxidants-nci", "antioxidants-harvard"],
    ),
    section(
      "claim-review",
      l(
        "12.6 实践：检查一句“抗炎”宣传",
        "12.6 Practise examining an anti-inflammatory claim",
      ),
      [
        p(
          "把宣传原句抄下来，区分它说的是含有成分、改变指标、减轻症状，还是治疗疾病。这些是不同强度的主张，不能用同一份试管研究支持全部。若找不到来源，应记录“来源未提供”，不要代替商家补证据。",
          "Write down the exact claim and distinguish containing an ingredient, changing a marker, improving symptoms and treating disease. These differ in strength and cannot all be supported by one test-tube study. If no source is provided, record that fact instead of supplying evidence on the seller’s behalf.",
        ),
        p(
          "查到研究后，看产品、用量、人群与研究是否一致，也看是否只选了一个有利结果。不能因为文章列出参考文献就默认解释正确；原研究可能非常有限，或结论比广告谨慎得多。",
          "If you find a study, compare the product, amount and population, and look for selection of only favourable findings. References alone do not guarantee a correct interpretation. The original study may be limited or much more cautious than the advertisement.",
        ),
        example(
          "更准确的改写",
          "A more accurate rewrite",
          "把“这杯饮料能治慢性炎症”改成“含有某些植物成分；现有这项实验只测了细胞指标，尚不能说明本产品在人体中治疗疾病”。这不是说所有研究没用，而是让结论与证据相称。",
          "Replace “this drink cures chronic inflammation” with “it contains certain plant compounds; this experiment measured a cellular marker and does not establish disease treatment by this product in humans”. The point is matching conclusions to evidence, not dismissing research.",
        ),
        call(
          "回到可以做的事",
          "Return to practical choices",
          "采用多样、可持续的饮食，不需要先把每一口命名为抗炎。持续症状应求助，已有治疗不因食品宣传而中断。",
          "A varied, sustainable diet does not require labelling every mouthful anti-inflammatory. Seek help for persistent symptoms and do not interrupt treatment because of food marketing.",
          "important",
        ),
      ],
      ["clinical-outcome", "dose", "biomarker"],
      ["antioxidants-nccih", "antioxidants-nci", "who"],
    ),
  ],
  keyTerms: [
    term(
      "inflammation",
      "炎症",
      "Inflammation",
      "身体对损伤、感染等刺激的反应，涉及免疫细胞与信号。",
      "A response to stimuli such as injury or infection involving immune cells and signals.",
    ),
    term(
      "acute",
      "急性",
      "Acute",
      "较快发生、通常时间较短的过程描述，不自动表示严重程度。",
      "A description of relatively rapid onset and usually shorter duration, not automatically severity.",
    ),
    term(
      "chronic",
      "慢性",
      "Chronic",
      "持续较久的过程描述，需要结合原因与具体健康情况理解。",
      "A description of a longer-lasting process that needs interpretation in context.",
    ),
    term(
      "immune-system",
      "免疫系统",
      "Immune system",
      "由细胞、组织和信号组成、参与防御与调节的系统。",
      "A system of cells, tissues and signals involved in defence and regulation.",
    ),
    term(
      "free-radical",
      "自由基",
      "Free radical",
      "具有未配对电子、可发生较活泼反应的化学物种。",
      "A chemical species with an unpaired electron that can be reactive.",
    ),
    term(
      "oxidative-stress",
      "氧化压力",
      "Oxidative stress",
      "氧化作用与保护、修复等过程失衡，可能影响细胞成分的状态。",
      "An imbalance involving oxidation and protective or repair processes that can affect cellular components.",
    ),
    term(
      "antioxidant",
      "抗氧化物",
      "Antioxidant",
      "在一定条件下限制氧化反应或相关损伤的物质，不是统一治疗类别。",
      "A substance limiting oxidation or associated damage under particular conditions, not a universal treatment category.",
    ),
    term(
      "supplement",
      "补充剂",
      "Supplement",
      "额外提供特定成分的产品，效果与风险需看用途、剂量和个人情况。",
      "A product providing additional ingredients, with effects and risks dependent on purpose, amount and context.",
    ),
    term(
      "dose",
      "剂量",
      "Dose",
      "使用某种成分的数量，常与频率和持续时间一起考虑。",
      "The quantity of a substance used, considered alongside frequency and duration.",
    ),
    term(
      "phytochemical",
      "植物化学物",
      "Phytochemical",
      "植物制造的化学成分，类别名称本身不代表安全或治疗效果。",
      "A chemical compound made by plants; the category alone does not establish safety or treatment benefit.",
    ),
    term(
      "polyphenol",
      "多酚",
      "Polyphenol",
      "具有特定化学结构的一大类植物成分，存在于多种食物中。",
      "A broad family of plant compounds with particular chemical structures found in various foods.",
    ),
    term(
      "in-vitro",
      "体外研究",
      "In vitro study",
      "在细胞或试管等身体之外的环境进行的实验，不能直接代表人体结果。",
      "An experiment outside the body, such as in cells or test tubes, not directly equivalent to a human outcome.",
    ),
    term(
      "biomarker",
      "生物标志物",
      "Biomarker",
      "反映某种生物过程的测量指标，不一定等同实际健康获益。",
      "A measured indicator of a biological process, not necessarily identical to meaningful health benefit.",
    ),
    term(
      "clinical-outcome",
      "临床结果",
      "Clinical outcome",
      "与人的症状、疾病事件或生活质量等健康状态有关的结果。",
      "An outcome concerning health such as symptoms, disease events or quality of life.",
    ),
    term(
      "bioavailability",
      "生物利用度",
      "Bioavailability",
      "摄入成分到达身体可利用状态的程度，影响实验结果能否外推。",
      "The extent to which an ingested substance becomes available for use, affecting translation from experiments.",
    ),
  ],
  questions: [
    q(
      "inflammation",
      l(
        "所有炎症都没有正常作用吗？",
        "Does all inflammation lack a normal role?",
      ),
      [
        l(
          "不是，适当的急性反应可参与防御修复。",
          "No, appropriate acute responses can support defence and repair.",
        ),
        l("是，应该永远消除。", "Yes, it should always be eliminated."),
      ],
      0,
      l(
        "关键是适当调节与具体情境，不是把炎症归为单一坏事。",
        "Appropriate regulation and context matter, rather than treating inflammation as uniformly bad.",
      ),
    ),
    q(
      "lab",
      l(
        "细胞实验指标改善能证明果汁治病吗？",
        "Does an improved cell-study marker prove juice treats disease?",
      ),
      [
        l("能，机制等于疗效。", "Yes, a mechanism equals treatment benefit."),
        l("不能，还需相关人体证据。", "No, relevant human evidence is needed."),
      ],
      1,
      l(
        "人群、剂量、吸收和实际结果尚未得到这个实验验证。",
        "Population, amount, absorption and meaningful outcomes remain untested by that experiment.",
      ),
    ),
    q(
      "natural",
      l(
        "天然植物提取物一定安全无害吗？",
        "Is a natural plant extract necessarily harmless?",
      ),
      [
        l(
          "不是，剂量、成分和相互作用都重要。",
          "No, amount, ingredients and interactions matter.",
        ),
        l("是，天然就不用研究。", "Yes, natural products need no research."),
      ],
      0,
      l(
        "天然描述来源，不是安全性证明。",
        "Natural describes origin, not proof of safety.",
      ),
    ),
    q(
      "evidence",
      l(
        "看到“抗氧化第一名”时先问什么？",
        "What should you ask about a top antioxidant ranking?",
      ),
      [
        l(
          "排名怎样测得，是否与人体健康结果有关。",
          "How it was measured and whether it relates to human health outcomes.",
        ),
        l("哪里能买到最多。", "Where to buy the largest quantity."),
      ],
      0,
      l(
        "测量方法与结果意义比营销名次更重要。",
        "Measurement method and outcome meaning matter more than a marketing rank.",
      ),
    ),
  ],
  practicalTask: l(
    "找一句公开的“抗炎”或“抗氧化”食品宣传，记录原句、来源、声称结果和给出的证据。区分人体、动物、细胞或未提供研究，再写两句与证据相称的改写。可以用本课假设例子，不需要购买产品或自行试用补充剂。",
    "Choose a public anti-inflammatory or antioxidant food claim and record its wording, source, promised outcome and evidence. Identify human, animal, cell or missing research, then rewrite it in two evidence-proportionate sentences. You may use this lesson’s hypothetical example; no purchase or supplement trial is required.",
  ),
  summary: l(
    [
      "炎症可参与正常防御，慢性问题需要具体理解。",
      "自由基与氧化压力不是可以凭感觉诊断的毒素清单。",
      "抗氧化作用不等于额外补充必然有益。",
      "植物化学物、多酚和天然标签都不能自动证明疗效。",
      "先问人体证据、剂量与结果，再判断宣传。",
    ],
    [
      "Inflammation can support normal defence; chronic problems need context.",
      "Free radicals and oxidative stress are not a toxin list diagnosed by feelings.",
      "Antioxidant activity does not guarantee benefit from extra supplementation.",
      "Phytochemicals, polyphenols and natural labels do not automatically establish treatment effects.",
      "Ask about human evidence, amount and outcomes before accepting a claim.",
    ],
  ),
  sourceIds: [
    "inflammation-guide",
    "immune-video-source",
    "antioxidants-nccih",
    "antioxidants-nci",
    "vitamin-e",
    "phytochemical",
    "polyphenol",
    "antioxidants-harvard",
    "who",
  ],
});
