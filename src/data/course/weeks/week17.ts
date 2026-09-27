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
export const week17Lesson = lesson({
  videoNote: l(
    "本周以记录和反思为主，本站工作区与示例足以完成练习，因此未额外安排视频。",
    "This week centres on recording and reflection. The worksheet and worked examples cover the task, so no additional video is assigned.",
  ),
  introduction: l(
    "饮食日记是观察工具，不是成绩单。它把平常容易忘记的饮料、点心、份量与情境放在一起，帮助我们提出更好的问题。本周练习如实记录和谨慎解释，不要求计算热量，也不凭日记诊断疾病。",
    "A food diary is an observation tool, not a report card. It brings together easily forgotten drinks, snacks, quantities and context so we can ask better questions. This week practises honest recording and cautious interpretation without requiring calorie counting or diagnosing disease.",
  ),
  objectives: l(
    [
      "记录三餐、点心和饮料的必要细节。",
      "用家庭单位描述份量并标记不确定性。",
      "从几天记录寻找可改善的模式。",
      "理解记录偏差、隐私与过度追踪的风险。",
    ],
    [
      "Record useful details for meals, snacks and drinks.",
      "Describe quantities with household measures and flag uncertainty.",
      "Look for workable changes across several days.",
      "Understand recording bias, privacy and risks of excessive tracking.",
    ],
  ),
  sections: [
    section(
      "diary-purpose",
      l("17.1 先决定你想了解什么", "17.1 Decide what you want to learn"),
      [
        p(
          "如果问题是“为什么下午总没东西吃”，时间和食物取得条件比精确热量更有用。如果问题是“蔬菜在哪些餐出现”，记录食物组成即可。先确定目的，才能避免写很多数字却回答不了真正的问题。",
          "If the question is why food is unavailable every afternoon, timing and access matter more than exact calories. If the question is where vegetables appear, food components may be enough. Define the purpose first rather than collecting numbers that do not answer the actual question.",
        ),
        p(
          "饮食记录可以帮助回忆与讨论，也会改变行为。有人因为正在记录而吃得不同，或漏写觉得不好意思的食物；这称为记录反应或报告偏差。它不是人格问题，而是解释数据时必须考虑的限制。",
          "Recording can support recall and discussion but can also change behaviour. People may eat differently because they are recording or omit foods they feel embarrassed about. Reactivity and reporting bias are limitations to consider, rather than character faults.",
        ),
        example(
          "把目标写窄一点",
          "Make the question narrower",
          "“观察三个普通日子里午餐到晚餐之间吃喝了什么，以及是否因为工作没时间吃。”这个目的比“证明我饮食很差”更可用，也比较不会诱导自责。",
          "“Observe food and drink between lunch and dinner on three ordinary days, including whether work prevents eating.” This is more useful and less blaming than trying to prove that the diet is bad.",
        ),
        call(
          "记录日不必表演完美",
          "Do not perform a perfect recording day",
          "在安全和个人医疗建议范围内，记录平常情况即可。若某天特别不同，例如聚餐或生病，写明背景，而不是偷偷删掉。",
          "Within safety and individual care guidance, record ordinary circumstances. Mark an unusual celebration or illness rather than silently deleting the day.",
        ),
      ],
      ["food-diary", "reactivity", "reporting-bias"],
      ["food-diary-guide", "diary-method"],
    ),
    section(
      "diary-details",
      l(
        "17.2 记录什么：食物、时间与做法",
        "17.2 Record foods, timing and preparation",
      ),
      [
        p(
          "每次进食写时间、食物或饮料、实际份量和有用的制作信息。早餐、午餐、晚餐、点心与饮料都包括；吃饭时的酱料、烹调油或饮料添加物若知道也可注明，不知道就写未知。",
          "For each occasion record time, foods or drinks, actual quantity and useful preparation details. Include meals, snacks and drinks. Note sauces, cooking oil or drink additions when known, and explicitly mark unknown information.",
        ),
        p(
          "混合菜可以拆成主要组成，而不必精确称出每一片。比如“汤面一碗，面、鸡肉、青菜，喝约半碗汤”。品牌或包装资料在比较营养标签时有用，但家庭观察不需要为了记录去搜出一个看似精确却不匹配的数据库条目。",
          "Break mixed dishes into their main components without weighing every piece. For example: one bowl of noodle soup with noodles, chicken and greens, about half the broth consumed. Brand details help label comparisons, but avoid selecting a poorly matched database item simply to create apparent precision.",
        ),
        example(
          "从模糊到可讨论",
          "From vague to discussable",
          "“咖啡”可以补成“上午九点，一杯约 250 ml 咖啡，加两茶匙糖；奶量不记得”。后者明确了已知与未知，也让下一次观察有方向。",
          "“Coffee” can become “9 am, approximately 250 ml coffee with two teaspoons of sugar; milk quantity not recalled”. This separates known and unknown details and gives the next observation a direction.",
        ),
        call(
          "症状记录不能自动证明原因",
          "A symptom record cannot prove a cause",
          "症状与某食物先后出现只是线索。持续不适请寻求评估，不根据一页日记自行排除多个食物类别。",
          "A symptom occurring after a food is a clue, not proof. Seek assessment for persistent symptoms rather than excluding several food groups from one page of notes.",
          "warning",
        ),
      ],
      ["mixed-dish", "preparation", "uncertainty"],
      ["food-diary-guide", "diary-method"],
    ),
    section(
      "diary-portions",
      l(
        "17.3 份量：够用的描述胜过假精确",
        "17.3 Quantities: useful descriptions beat false precision",
      ),
      [
        p(
          "实际份量是吃下的数量，标签一份是厂家采用的计算单位，两者不一定相同。家庭记录可用碗、杯、汤匙、片或约占包装多少，再注明大小。家里的碗和餐厅的碗可能不同，所以“半碗”也有不确定性。",
          "A portion is the amount actually consumed; a label serving is a calculation unit and may differ. Household records can use bowls, cups, tablespoons, slices or fractions of a package, with size noted. Home and restaurant bowls differ, so half a bowl still carries uncertainty.",
        ),
        p(
          "如果已经有包装重量，写吃了多少比例即可，不必为了每餐称重。食物照片可辅助回忆，但难以看出油、糖或被遮住的材料。数量不确定时保留约数，比把猜测写成小数点后一位更诚实。",
          "If package weight is known, note the fraction consumed rather than weighing every meal. Photographs can aid recall but may hide oil, sugar or ingredients. Approximate amounts are more honest than giving a guess to one decimal place.",
        ),
        compare([
          {
            title: l("实用记录", "Useful record"),
            items: [
              l(
                "两片面包，品牌与标签可查。",
                "Two bread slices, with brand and label available.",
              ),
              l(
                "一中碗杂菜饭，饭量估计。",
                "One medium bowl of mixed rice; rice amount estimated.",
              ),
            ],
          },
          {
            title: l("过度精确的表象", "False precision"),
            items: [
              l(
                "看照片就断言精确热量。",
                "Claim exact calories from a photograph.",
              ),
              l(
                "不知道汤量却写精确钠毫克数。",
                "State precise sodium without knowing broth quantity.",
              ),
            ],
          },
        ]),
        call(
          "比例与单位要保留",
          "Keep units and denominators",
          "数字必须带单位：200 ml 饮料、两片或半包。不要把每 100 g 的营养值直接当成整包摄入，第 18 周会继续练习。",
          "Keep units: 200 ml, two slices or half a packet. Do not treat per-100 g nutrition as whole-package intake; Week 18 practises this distinction.",
        ),
      ],
      ["portion", "serving-size", "household-measure", "uncertainty"],
      ["diary-method", "fda-label"],
    ),
    section(
      "diary-context",
      l(
        "17.4 情境：为什么那时吃那样的东西",
        "17.4 Context: why that food at that time",
      ),
      [
        p(
          "情境包括地点、时间压力、可取得的食物、饥饿感和社交情况。这些信息帮助解释选择，不是为选择找借口。晚餐经常很晚，可能与下班交通有关；解决方式可能是准备点心，而不是要求更有意志力。",
          "Context includes location, time pressure, available food, hunger and social circumstances. It explains choices without excusing or blaming them. Repeated late dinners may reflect a commute; preparing a snack may be more useful than demanding greater willpower.",
        ),
        p(
          "饥饿与饱腹可以用自己的词描述，例如饿、舒服、很撑，不一定需要数字评分。如果记录情绪有帮助，可以简短写压力或赶时间；不想记录私密感受也可以。信息的用途应由记录者掌握。",
          "Hunger and fullness can be described in ordinary words such as hungry, comfortable or very full, without numerical scores. Briefly noting stress or rushing may help, but private feelings need not be recorded. The person keeping the diary should control its purpose.",
        ),
        example(
          "下午奶茶背后的条件",
          "The setting behind afternoon milk tea",
          "记录显示午餐很早、下午没休息时间，奶茶是唯一容易买到的选择。可讨论便携点心、休息机会或不同饮料，而不只写“戒掉奶茶”。",
          "The diary shows an early lunch, no afternoon break and milk tea as the only easily purchased option. Discuss portable food, breaks or another drink rather than simply writing “quit milk tea”.",
        ),
        call(
          "这不是别人监督你的工具",
          "This is not a surveillance tool",
          "未经同意不检查家人的记录，也不把日记用于批评。本站记录保存在当前浏览器，共用设备上需留意隐私。",
          "Do not inspect a relative’s record without consent or use it for criticism. This site saves records in the current browser, so consider privacy on a shared device.",
        ),
      ],
      ["context", "hunger", "satiety"],
      ["food-diary-guide", "eating-disorders"],
    ),
    section(
      "diary-patterns",
      l(
        "17.5 从记录到问题，不跳到诊断",
        "17.5 Move from records to questions, not diagnoses",
      ),
      [
        p(
          "先描述看见的事实，再提出可能的模式。例如三个记录日的晚餐都没记到蔬菜，这是对记录的描述；“一定缺维生素”则超出证据。询问是否漏记、其他天如何，以及能否加入可接受来源。",
          "Describe recorded facts before suggesting a pattern. No vegetables documented at dinner on three days is an observation; definite vitamin deficiency goes beyond it. Ask whether anything was omitted, what other days look like and whether an acceptable source could be included.",
        ),
        p(
          "几个日子不能代表所有季节、周末或特殊情况，也不足以精确估计长期营养。选择一个可行改变并说明依据，保留不知道的部分。改变后记录体验，可以帮助调整方法，但不是临床试验。",
          "A few days do not represent every season, weekend or special situation and cannot precisely estimate long-term intake. Choose one feasible change with a reason and retain uncertainties. Recording the experience afterwards helps refine a routine without turning it into a clinical trial.",
        ),
        example(
          "观察、问题、行动",
          "Observation, question, action",
          "观察：两天没记录早餐。问题：没吃、来不及还是忘记写？行动：若确实来不及，准备可携带早餐并试两次。没有必要从这条记录推断血糖异常。",
          "Observation: breakfast is missing on two days. Question: skipped, rushed or forgotten in the record? Action: if rushed, prepare a portable breakfast and try it twice. This does not justify inferring abnormal blood glucose.",
        ),
        call(
          "出现焦虑时可以停止追踪",
          "Pause tracking if it increases distress",
          "若记录让你反复检查、内疚或限制进食，可以停用并寻求支持。学习营养不需要永久记录每一口，照片、简单回顾或专业陪伴也可能更合适。",
          "If recording creates repeated checking, guilt or restriction, pause and seek support. Nutrition learning does not require permanent tracking of every bite; a brief review or supported approach may be more suitable.",
          "warning",
        ),
      ],
      ["pattern", "uncertainty", "reporting-bias"],
      ["diary-method", "eating-disorders"],
    ),
    section(
      "diary-practice",
      l("17.6 用本站练习页做一次记录", "17.6 Practise with the worksheet"),
      [
        p(
          "下方提供可编辑的饮食日记工作区。选择一个普通日子，按早餐、午餐、晚餐、点心和饮料写记录；每栏可写时间、食物、份量、做法和情境。没有吃或不知道时直接写明，不需要填出看似漂亮的菜单。",
          "Use the editable diary below for an ordinary day. Record breakfast, lunch, dinner, snacks and drinks, including timing, foods, quantities, preparation and context. State when something was not eaten or is unknown rather than filling the page with an attractive invented menu.",
        ),
        p(
          "工作区自动保存在当前浏览器，切换语言不会翻译或覆盖你的文字。不要写身份证号或其他不必要的敏感资料。若想记录多天，可以在各栏注明日期，或把后续观察写在本周笔记中。",
          "The worksheet saves in this browser; switching language does not translate or overwrite your writing. Avoid identity numbers or unnecessary sensitive details. For several days, label dates within fields or add observations in the weekly notes.",
        ),
        example(
          "一个完整的反思",
          "A complete reflection",
          "“两天午餐蔬菜较少；不知道周末是否相同。下周两次外食时问能否加一份菜，并看价格是否可接受。”包含观察、限制、行动和现实条件，比一句“我要吃健康”更具体。",
          "“Vegetables were limited at two lunches; weekends are unknown. At two lunches next week, ask about an extra vegetable portion and check affordability.” This includes an observation, limit, action and real-world condition rather than a vague intention.",
        ),
        call(
          "本周交付",
          "What to finish this week",
          "完成一个日子的记录，写两项观察、一项不确定之处和一个可行调整。若记录不适合你，可用课程的虚构示例完成同样分析。",
          "Complete one day, then write two observations, one uncertainty and one feasible adjustment. If personal recording is unsuitable, analyse a fictional course example instead.",
        ),
      ],
      ["food-diary", "pattern", "uncertainty"],
      ["food-diary-guide", "diary-method"],
    ),
  ],
  keyTerms: [
    term(
      "food-diary",
      "饮食日记",
      "Food diary",
      "按时间记录吃喝内容及相关情境的观察工具。",
      "A chronological record of food, drinks and relevant circumstances.",
    ),
    term(
      "reactivity",
      "记录反应",
      "Reactivity",
      "因为知道正在被记录而改变行为的现象。",
      "A change in behaviour caused by awareness that it is being recorded.",
    ),
    term(
      "reporting-bias",
      "报告偏差",
      "Reporting bias",
      "记录与实际情况出现系统差异，例如漏记某些食物。",
      "Systematic differences between a record and reality, such as omitted foods.",
    ),
    term(
      "mixed-dish",
      "混合菜",
      "Mixed dish",
      "包含多种食材、需要按组成理解的餐食。",
      "A dish containing several ingredients that can be considered by component.",
    ),
    term(
      "preparation",
      "制作方法",
      "Preparation method",
      "烹调及添加材料的方式，会影响食物组成。",
      "Cooking and additions that can influence the composition of a food.",
    ),
    term(
      "uncertainty",
      "不确定性",
      "Uncertainty",
      "现有资料不能精确说明的部分，应明确保留。",
      "What available information cannot establish precisely and should be acknowledged.",
    ),
    term(
      "portion",
      "实际份量",
      "Portion",
      "实际吃下的数量，可能不等于标签的一份。",
      "The quantity actually consumed, which may differ from a label serving.",
    ),
    term(
      "serving-size",
      "标签份量",
      "Serving size",
      "标签营养数据采用的规定计算单位。",
      "The stated reference amount used for nutrition information on a label.",
    ),
    term(
      "household-measure",
      "家庭量度单位",
      "Household measure",
      "杯、碗、匙等日常估量单位，需要注明大小。",
      "Everyday quantity units such as cups, bowls or spoons, with size specified.",
    ),
    term(
      "context",
      "情境",
      "Context",
      "进食时的时间、地点、条件和体验等背景。",
      "The timing, location, conditions and experiences surrounding eating.",
    ),
    term(
      "hunger",
      "饥饿感",
      "Hunger",
      "身体对进食的需求感受，受多种信号影响。",
      "The perceived need to eat, influenced by multiple signals.",
    ),
    term(
      "satiety",
      "饱腹感",
      "Satiety",
      "进食后继续吃的需求下降的感受。",
      "Reduced drive to eat after consuming food.",
    ),
    term(
      "pattern",
      "饮食规律",
      "Eating pattern",
      "在多次记录中反复出现的组合或情境。",
      "A recurring combination or circumstance across eating occasions.",
    ),
  ],
  questions: [
    q(
      "purpose",
      l("饮食日记首先是什么？", "What is a food diary primarily?"),
      [
        l("观察与讨论工具", "An observation and discussion tool"),
        l("营养诊断证明", "Proof of a nutritional diagnosis"),
        l("自律排名", "A willpower ranking"),
      ],
      0,
      l(
        "记录帮助提问，但不能独自诊断或评价人格。",
        "A record supports questions, not diagnosis or judgement of character.",
      ),
    ),
    q(
      "unknown",
      l(
        "不记得奶量时应如何写？",
        "What if the milk quantity is not remembered?",
      ),
      [
        l("猜一个精确数值", "Invent a precise value"),
        l("明确写不知道", "State that it is unknown"),
      ],
      1,
      l(
        "标记不确定性比假精确更有助于解释。",
        "Acknowledging uncertainty is more useful than false precision.",
      ),
    ),
    q(
      "pattern",
      l(
        "三天晚餐没记到蔬菜说明什么？",
        "What do three dinners without recorded vegetables establish?",
      ),
      [
        l("一定缺乏维生素", "Definite vitamin deficiency"),
        l("一定完全不吃蔬菜", "Never eating vegetables"),
        l(
          "记录中有一个需要进一步询问的模式",
          "A recorded pattern worth further questions",
        ),
      ],
      2,
      l(
        "需考虑漏记、其他日子与实际份量，不跳到疾病或缺乏判断。",
        "Consider omissions, other days and quantities without jumping to disease or deficiency.",
      ),
    ),
    q(
      "distress",
      l(
        "记录增加焦虑与限制时怎么办？",
        "What if recording increases anxiety and restriction?",
      ),
      [
        l("必须坚持", "Continue at all costs"),
        l(
          "暂停并寻求支持或换学习方式",
          "Pause and seek support or another learning approach",
        ),
      ],
      1,
      l(
        "工具应服务学习与健康，不需要永久追踪每一口。",
        "The tool should serve learning and wellbeing; permanent bite-by-bite tracking is unnecessary.",
      ),
    ),
  ],
  practicalTask: l(
    "完成下方一个日子的饮食日记，写两项观察、一项不确定性与一个实际调整。可以使用虚构记录；无需热量或体重目标。",
    "Complete one day in the diary below, with two observations, one uncertainty and one practical adjustment. Fictional records are welcome; no calorie or weight target is required.",
  ),
  summary: l(
    [
      "先确定记录的目的。",
      "包括饮料、点心与已知添加物。",
      "保留单位与不确定性。",
      "情境帮助解释选择。",
      "日记用于提问，不用于诊断或自责。",
    ],
    [
      "Define the purpose first.",
      "Include drinks, snacks and known additions.",
      "Keep units and uncertainty visible.",
      "Context helps explain choices.",
      "Use a diary for questions, not diagnosis or blame.",
    ],
  ),
  sourceIds: ["food-diary-guide", "diary-method", "fda-label"],
});
