export type Study = {
  age: string
  startAge: { value: number; unit: "days" | "weeks" | "months" }
  endAge?: { value: number; unit: "days" | "weeks" | "months" }
  name: string
  experiment: string
  findings: string
  concept: string
  source: string
  sourceUrl?: string
}

export const studies: Study[] = [
  {
    age: "24 weeks gestation–birth",
    startAge: { value: -16, unit: "weeks" },
    endAge: { value: 0, unit: "days" },
    name: "Prenatal auditory observations",
    experiment:
      "Fetal heart rate measured in response to parental speech. Inner ear fully developed by 24 weeks.",
    findings:
      "Fetuses hear speech, particularly the mother's voice, and respond to speech melody and rhythm.",
    concept:
      "Prenatal Auditory Learning — Speech rhythm attunement begins before birth.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "12 hours",
    startAge: { value: 0.5, unit: "days" },
    name: "Janet Werker & Tracy Burns",
    experiment:
      "Pacifier sucking experiment comparing filtered English and Tagalog speech.",
    findings:
      "Newborns increase sucking frequency when hearing familiar native-language rhythms.",
    concept:
      "Native Language Rhythm Preference — Recognition of language rhythms heard prenatally.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "Under 24 hours",
    startAge: { value: 0, unit: "days" },
    endAge: { value: 1, unit: "days" },
    name: "Rushen Shi's Lab",
    experiment:
      "Pacifier sucking responses to function words versus content words.",
    findings:
      "Newborns respond more strongly to content words (nouns and verbs) than function words (articles and prepositions).",
    concept:
      "Semantic Word Discrimination — Early sensitivity to different word categories.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "6 weeks",
    startAge: { value: 6, unit: "weeks" },
    name: "Auditory observations",
    experiment:
      "Infants turn toward their mother's voice and listen to environmental sounds.",
    findings: "Begin differentiating human speech from background noises.",
    concept: "Auditory Sound Categorisation",
    source: "The Baby Human: To Talk",
  },
  {
    age: "3 months",
    startAge: { value: 3, unit: "months" },
    name: "Anatomical development",
    experiment: "Larynx lowers in the throat.",
    findings:
      "Increased vocal capacity supports early communicative exchanges.",
    concept: "Vocal Tract Development",
    source: "The Baby Human: To Talk",
  },
  {
    age: "3–6 months",
    startAge: { value: 3, unit: "months" },
    endAge: { value: 6, unit: "months" },
    name: "Disrupted Eye Gaze",
    experiment:
      "Mother speaks while deliberately looking away from the infant.",
    findings:
      "Infants attempt to regain eye contact and become upset when unsuccessful.",
    concept: "Social Interaction Attunement — Eye gaze supports communication.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "5 months",
    startAge: { value: 5, unit: "months" },
    name: "Still-Face Procedure",
    experiment:
      "Mother interacts normally, then suddenly becomes expressionless.",
    findings:
      "Infants attempt to re-engage through smiles and vocalisations, then become distressed.",
    concept:
      "Conversational Reciprocity — Expectation of responsive social interaction.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "5 months",
    startAge: { value: 5, unit: "months" },
    name: "Motherese / Parentese Observation",
    experiment:
      "Caregivers use exaggerated pitch, vowels, rhythm and repeated words.",
    findings:
      "Exaggerated speech sounds help infants identify patterns in their native language.",
    concept: "Phonetic Acoustic Mapping",
    source: "The Baby Human: To Talk",
  },
  {
    age: "5–6 months",
    startAge: { value: 5, unit: "months" },
    endAge: { value: 6, unit: "months" },
    name: "Cross-Modal Emotion Matching",
    experiment:
      "Happy and sad faces paired with matching or mismatching vocal tones.",
    findings:
      "Infants show confusion or reduced interest when facial and vocal emotions conflict.",
    concept:
      "Cross-Modal Consistency — Integration of facial and vocal emotional cues.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "6 months",
    startAge: { value: 6, unit: "months" },
    name: "Inverted Television Display",
    experiment: "Infant views an upside-down image of their mother.",
    findings:
      "Infants stop smiling and become restless when facial information is inverted.",
    concept: "Face Processing and Social Communication",
    source: "The Baby Human: To Talk",
  },
  {
    age: "6 months",
    startAge: { value: 6, unit: "months" },
    name: "Head-Turn Phoneme Conditioning",
    experiment:
      "Infants trained to turn toward a toy when subtle Hindi phonemes change.",
    findings:
      "Six-month-olds successfully distinguish non-native Hindi sounds.",
    concept: "Universal Listener Stage— Broad speech-sound discrimination.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "8 months",
    startAge: { value: 8, unit: "months" },
    name: "Pointing Habituation Test",
    experiment:
      "Researcher points toward toys; toy positions are then switched.",
    findings:
      "Infants look longer when a new object is pointed to, suggesting understanding of the gesture's target.",
    concept: "Referential Pointing Comprehension",
    source: "The Baby Human: To Talk",
  },
  {
    age: "9 months",
    startAge: { value: 9, unit: "months" },
    name: "Vocal Babbling Observation",
    experiment: "Infants babble and listen to their own vocalisations.",
    findings:
      "Babbling increasingly reflects the sound patterns of their native language.",
    concept: "Mouth Sound Mapping and Vocal Motor Control",
    source: "The Baby Human: To Talk",
  },
  {
    age: "9–10.5 months",
    startAge: { value: 9, unit: "months" },
    endAge: { value: 10.5, unit: "months" },
    name: "Mandarin Exposure Study",
    experiment:
      "English-reared infants receive 12 live Mandarin play/story sessions; EEG measures phoneme responses.",
    findings:
      "Live second-language exposure supports discrimination of unfamiliar speech sounds.",
    concept: "Sensitive Period for Multilingual Phonetic Acquisition",
    source: "The Baby Human: To Talk",
  },
  {
    age: "10 months",
    startAge: { value: 10, unit: "months" },
    name: "Head-Turn Phoneme Conditioning",
    experiment:
      "Same Hindi phoneme discrimination task used with six-month-olds.",
    findings:
      "English-reared infants no longer reliably distinguish the unfamiliar Hindi contrast.",
    concept:
      "Perceptual Narrowing— Transition toward native-language specialisation.",
    source: "The Baby Human: To Talk",
  },
  {
    age: "10 months",
    startAge: { value: 10, unit: "months" },
    name: "Sign Language Studies",
    experiment:
      "Deaf infants exposed to sign language produce rhythmic manual gestures; hearing infants imitate gestures.",
    findings: "Manual babbling and gestural communication emerge early.",
    concept: "Gestural Communication and Early Hand Control",
    source: "The Baby Human: To Talk",
  },
  {
    age: "12–18 months",
    startAge: { value: 12, unit: "months" },
    endAge: { value: 18, unit: "months" },
    name: "Early Lexicon Observations",
    experiment:
      "Vocabulary expands; early words predominantly name objects, food and body parts.",
    findings:
      'Source reports 50–100 spoken words, approximately 70% nouns, with expressions such as "more" and "all gone".',
    concept: "Early Noun Bias and Functional Holophrases",
    source: "The Baby Human: To Talk",
  },
  {
    age: "13 months",
    startAge: { value: 13, unit: "months" },
    name: "Joint Attention Word Learning",
    experiment:
      'Novel objects named "Toma" and "Dax"; researchers manipulate pointing and eye gaze.',
    findings:
      "Infants learn words more successfully when pointing and speaker gaze align.",
    concept: "Joint Attention in Word Learning",
    source: "The Baby Human: To Talk",
  },
  {
    age: "14 months",
    startAge: { value: 14, unit: "months" },
    name: "Green Puppet Study",
    experiment:
      "Infant observes a researcher conversing with a puppet, then interacts with it.",
    findings:
      "Infants treat the puppet as communicative when it follows conversational timing.",
    concept: "Attribution of Communicative Agency",
    source: "The Baby Human: To Talk",
  },
  {
    age: "17 months",
    startAge: { value: 17, unit: "months" },
    name: "Shape Bias Training",
    experiment:
      "Eight weekly sessions using novel objects with invented names, matching shapes and differing colours/materials.",
    findings: "Toddlers learn to attend to object shape as a basis for naming.",
    concept: "Shape Bias and Object Categorisation",
    source: "The Baby Human: To Talk",
  },
  {
    age: "18 months",
    startAge: { value: 18, unit: "months" },
    name: "Deferred Imitation Test",
    experiment:
      "Researcher demonstrates unusual actions on toys; child reproduces them after a one-hour delay.",
    findings: "Toddlers remember and imitate previously observed actions.",
    concept: "Deferred Imitation, Memory and Turn-Taking",
    source: "The Baby Human: To Talk",
  },
  {
    age: "18–24 months",
    startAge: { value: 18, unit: "months" },
    endAge: { value: 24, unit: "months" },
    name: "Language Development Observations",
    experiment:
      'Toddlers begin combining words into short phrases, such as "green eggs".',
    findings:
      "Shift from isolated words toward two-word utterances and more complex communication.",
    concept: "Two-Word Speech and Early Syntax",
    source: "The Baby Human: To Talk",
  },
  {
    age: "18–24 months",
    startAge: { value: 18, unit: "months" },
    endAge: { value: 24, unit: "months" },
    name: "Vocabulary Explosion Observations",
    experiment: "Rapid vocabulary acquisition and bedtime speech rehearsal.",
    findings:
      "Source describes learning approximately one new word every 90 minutes and practising words and syntax before sleep.",
    concept: "Language Explosion and Early Symbolic Thought",
    source: "The Baby Human: To Talk",
  },
  {
    age: "20 months",
    startAge: { value: 20, unit: "months" },
    name: "Sign Language Studies",
    experiment: "Deaf children demonstrate expanding signing vocabularies.",
    findings:
      'Children use meaningful signs to communicate concepts such as "dog".',
    concept: "Symbolic Gestural Language Development",
    source: "The Baby Human: To Talk",
  },
  {
    age: "24 months",
    startAge: { value: 24, unit: "months" },
    name: "Shape Bias Follow-Up",
    experiment:
      "Children tested on whether they generalise novel object names by shape.",
    findings:
      "Shape-trained children generalise labels by shape; source reports vocabulary growth over three times faster than untrained peers.",
    concept: "Shape Bias and Vocabulary Acceleration",
    source: "The Baby Human: To Talk",
  },
  {
    age: "24 months",
    startAge: { value: 24, unit: "months" },
    name: "Vocabulary Development Milestone",
    experiment: "Assessment of expressive and receptive vocabulary.",
    findings:
      "Source reports more than 300 spoken words and approximately 1,000 understood words.",
    concept: "Rapid Vocabulary Growth and Symbolic Language",
    source: "The Baby Human: To Talk",
  },
  {
    age: "3 months (originally 12 weeks)",
    startAge: { value: 3, unit: "months" },
    name: "EEG Mother-Infant Synchronicity Study (McMaster University, Louis Schmidt's Lab)",
    experiment:
      "Electroencephalogram (EEG) machines measure the brain electrocortical activity and heart rates of mothers and their 12-week-old infants while playing joyful (Vivaldi) and fearful (Peter and the Wolf) music passages.",
    findings:
      "Below conscious awareness, the infant mirrors the mother's emotional intensity and physiological responses. Synchronicity is established as a reliable predictor of secure attachment.",
    concept: "Physiological Synchronicity & Secure Attachment",
    source: "Baby Human To Belong Attachment",
  },
  {
    age: "24 to 36 months",
    startAge: { value: 24, unit: "months" },
    endAge: { value: 36, unit: "months" },
    name: "Delay of Gratification Study (Rutgers University, Michael Lewis's Lab) & Intentional Cooperation Task (Max Planck Institute, Michael Tomasello's Lab)",
    experiment:
      "1) Children are instructed not to peek at a hidden present or eat a cake while an adult leaves the room. 2) 24-month-olds participate in cooperative cylinder-lifting and block-dropping games requiring partner coordination.",
    findings:
      "Self-control improves with age and individual maturity, with girls demonstrating earlier self-control than boys. By 24 months, toddlers understand intentional cooperation, role reversal, and taking turns.",
    concept: "Impulse Self-Control & Shared Intentional Cooperation",
    source: "Baby Human To Belong Cooperation",
  },
  {
    age: "6 to 36 months",
    startAge: { value: 6, unit: "months" },
    endAge: { value: 36, unit: "months" },
    name: "Development of Play (NYU Infant Action Lab, Catherine Thomas-Lamanda) & Peer Collaboration/Sharing (University of Maryland, Nathan Fox's Lab)",
    experiment:
      "1) Play behaviors are observed with pretend food items across ages. 2) Pairs of 2-year-olds versus 3-year-olds are given tasks requiring joint assembly of a toy or sharing a single tricycle.",
    findings:
      "Play transitions from sensorimotor noise-making at 6 months to symbolic action play at 14–24 months, and rich narrative play with feelings by 36 months. 2-year-olds struggle with unguided collaboration and sharing, whereas 3-year-olds collaborate effectively.",
    concept: "Symbolic Narrative Play & Peer Collaboration / Sharing",
    source: "Baby Human To Belong Pretending",
  },
  {
    age: "14 to 30 months",
    startAge: { value: 14, unit: "months" },
    endAge: { value: 30, unit: "months" },
    name: "Shopping Cart Body Awareness Study (Dalhousie University, Chris Moore's Lab) & Scale Errors Study (University of Virginia, Judy DeLoache's Lab)",
    experiment:
      "1) Toddlers attempt to push a shopping cart anchored to a mat they stand on. 2) 2.5-year-olds play with life-sized toys, which are then swapped with exact miniature replicas.",
    findings:
      "Children under 18 months do not realize their body is the obstacle; by 18 months, toddlers step off or roll up the mat to move the cart. 2.5-year-olds commit scale errors by attempting to sit in miniature cars when emotion overrides size perception.",
    concept: "Physical Self-Awareness & Scale Perception",
    source: "Baby Human To Belong Sense of Self",
  },
  {
    age: "8 to 18 months",
    startAge: { value: 8, unit: "months" },
    endAge: { value: 18, unit: "months" },
    name: "Strange Situation Attachment Test (University of Illinois, Sarah Mangelsdorf's Lab) & Slope Social Referencing (NYU, Karen Adolph's Lab)",
    experiment:
      "1) 14-month and 17-month-olds undergo stranger introduction, parental separation, and reunion. 2) 18-month-olds encounter safe, steep, and impossible slopes while receiving motherly encouragement or caution.",
    findings:
      "Separation anxiety emerges around 8 months, peaking between 10 and 18 months, with securely attached toddlers easily comforted upon reunion. Toddlers seek parental guidance only when uncertain of their abilities, relying on personal perception when slopes are clearly safe or impossible.",
    concept: "Separation Anxiety & Autonomous Social Referencing",
    source: "Baby Human To Belong Separation",
  },
  {
    age: "9 to 18 months",
    startAge: { value: 9, unit: "months" },
    endAge: { value: 18, unit: "months" },
    name: "Goal Tracking (University of Illinois, Renée Baillargeon's Lab), Unwilling vs. Unable Test (Max Planck Institute, Michael Tomasello's Lab), & Intentional vs. Accidental Action (Concordia University, Diane Poulin-Dubois' Lab)",
    experiment:
      '1) 14-month-olds watch researchers select specific toys across position changes. 2) 18-month-olds and chimps interact with a researcher who either clumsily drops a ball (unable) or deliberately teases (unwilling). 3) 14-month-olds observe button presses performed intentionally versus accidentally ("oops").',
    findings:
      "14-month-olds track unique individual goals. By 9 to 18 months, infants and chimps distinguish unwilling from unable behaviors, showing patience for unable but frustration for unwilling. 14-month-olds selectively replicate intentional actions over accidental ones.",
    concept: "Theory of Mind & Goal/Intentionality Perception",
    source: "Baby Human To Relate Understanding",
  },
  {
    age: "11 months",
    startAge: { value: 11, unit: "months" },
    name: "Cruising Decision-Making & Support Dependencies (NYU, Karen Adolph's Lab)",
    experiment:
      "11-month-old cruising infants navigate walkways with expanding floor gaps under two conditions: without handrails and with solid handrails.",
    findings:
      "Cruisers rely heavily on hand support to make safety decisions. When solid handrails are provided, cruisers fail to notice foot gaps and fall into holes, showing foot perception has not yet integrated with hand guidance.",
    concept: "Cruising Motor Control & Postural Support Perception",
    source: "Baby Human To Walk Cruising",
  },
  {
    age: "6 to 9 months",
    startAge: { value: 6, unit: "months" },
    endAge: { value: 9, unit: "months" },
    name: "Visual Cliff & Joystick Motorized Car Experience (UC Berkeley, Joseph Campos & David Anderson's Lab)",
    experiment:
      "1) Novice crawlers versus experienced crawlers are placed on the Visual Cliff. 2) Pre-crawlers receive 8 training sessions in a joystick-operated toy car before being tested on the Visual Cliff.",
    findings:
      "Novice crawlers cross the deep cliff without fear, whereas experienced crawlers avoid it due to sensitivity gained from peripheral vision during crawling. Powered mobility training grants pre-crawlers peripheral vision experience, causing them to avoid the deep cliff upon crawling.",
    concept: "Depth Perception & Self-Produced Locomotor Experience",
    source: "Baby Human To Walk Depth Perception",
  },
  {
    age: "2 to 5 months",
    startAge: { value: 2, unit: "months" },
    endAge: { value: 5, unit: "months" },
    name: "Motor Pattern Reaching & Limb Coordination (Esther Thelen's Infant Action Lab)",
    experiment:
      "4-month and 5-month infants are attached to motion sensors while presented with enticing toys; testing arm reaching versus foot reaching, and cross-body reaching with one hand restrained.",
    findings:
      "At 4 months, infants cannot coordinate arm muscle patterns to reach with hands, but can reach successfully with their feet. By 5 months, arm muscle patterns mature, allowing coordinated arm reaching, cross-body reaching, and rolling over.",
    concept: "Motor Pattern Discovery & Limb Coordination",
    source: "Baby Human To Walk Rolling Reaching",
  },
  {
    age: "0 to 6 months",
    startAge: { value: 0, unit: "months" },
    endAge: { value: 6, unit: "months" },
    name: "Stepping Reflex Water Buoyancy & Mobile Reinforcement (Esther Thelen's Lab)",
    experiment:
      "1) The stepping reflex is tested in air, submerged in water, and on a treadmill at 6 months. 2) A 3-month-old's leg is connected to an overhead mobile via a ribbon.",
    findings:
      "The stepping neural pattern is never lost; heavy fat legs mask it in air, but water buoyancy or treadmill motion restores it. 3-month-olds quickly learn that leg kicking controls the mobile, proving contingency agency.",
    concept: "Dynamic Systems Theory & Contingency Agency",
    source: "Baby Human To Walk Stepping Pattern 1",
  },
  {
    age: "14 months",
    startAge: { value: 14, unit: "months" },
    name: "Slope Navigation & Weight Load Carrying (NYU, Karen Adolph's Lab)",
    experiment:
      "14-month-old novice walkers descend increasingly steep inclines, with some carrying an additional weight load equal to 25% of their body weight.",
    findings:
      "Novice walkers evaluate slope steepness; when slopes are too steep or weighted loads shift center of gravity, they adapt by sliding down or requesting adult assistance.",
    concept: "Postural Adaptation & Dynamic Risk Assessment",
    source: "Baby Human To Walk Walking",
  },
  {
    age: "8, 18, and 36 months",
    startAge: { value: 8, unit: "months" },
    endAge: { value: 36, unit: "months" },
    name: "California Infant/Toddler Social-Emotional Learning Foundations",
    experiment:
      "Observational assessment of social-emotional milestones across three developmental age benchmarks (8m, 18m, 36m).",
    findings:
      "8m: interest in others and basic emotion expression; 18m: using trusted adults as secure bases and peer interaction; 36m: forming friendships, impulse control, and empathy.",
    concept: "Social-Emotional Competence & Empathy",
    source: "Baby Human To Walk Stepping Pattern 1 / General Foundation",
  },
  {
    age: "8, 18, and 36 months",
    startAge: { value: 8, unit: "months" },
    endAge: { value: 36, unit: "months" },
    name: "Adult Relationship Foundations Framework",
    experiment:
      "Observational assessment of child-caregiver interactions during drop-off, routine play, and distress across age groups.",
    findings:
      "8m infants seek proximity when distressed; 18m toddlers use familiar adults as secure bases for exploration; 36m children reconnect periodically while maintaining independent play.",
    concept: "Secure Base & Relational Attachment Growth",
    source: "CA IT Relationships with Adults",
  },
  {
    age: "0 to 2 months",
    startAge: { value: 0, unit: "months" },
    endAge: { value: 2, unit: "months" },
    name: "Neonatal Primitive Reflex Assessment",
    experiment:
      "Clinical elicitation of primitive reflexes in newborns up to 2 months (rooting, sucking, swallowing, stepping, Babinski, palmar grasp, Moro).",
    findings:
      "Primitive reflexes are involuntary survival mechanisms; palmar grasp supports nearly full body weight, Babinski causes toe fanning, and Moro responds to sudden drops.",
    concept: "Primitive Survival Reflexes & Cortical Control",
    source: "CDE 110 Infant Reflexes",
  },
  {
    age: "Toddler (~12 to 18 months)",
    startAge: { value: 12, unit: "months" },
    endAge: { value: 18, unit: "months" },
    name: "Open-ended Chair Exploration Observation",
    experiment:
      "Observational study of toddlers engaging with two chairs under passive, non-interfering caregiver supervision.",
    findings:
      "Toddlers demonstrate high persistence, physical problem-solving, and unprompted cooperative play when caregivers maintain an unhurried pace.",
    concept: "Self-Directed Persistence & Autonomous Play",
    source: "CDE 119 Infant Toddler Observation Pushing Chairs",
  },
  {
    age: "9 to 24 months",
    startAge: { value: 9, unit: "months" },
    endAge: { value: 24, unit: "months" },
    name: "Manual Babbling & Sign Language Acquisition (McGill University, Laura-Ann Petito's Lab)",
    experiment:
      "Micro-analysis of manual movements in deaf infants (Remy, Vance, Isabelle) exposed to sign language versus hearing infants, and tracking a bilingual sign/speech toddler (Simone).",
    findings:
      "Deaf infants display manual babbling with structured sign handshapes and syllabic rhythms identical to vocal babbling. Bilingual sign/speech infants reach language milestones simultaneously in both modalities.",
    concept: "Amodal Brain Language Capacity & Manual Babbling",
    source: "CDE 119 Infant Toddler Talking Babies",
  },
  {
    age: "1 to 2 years",
    startAge: { value: 12, unit: "months" },
    endAge: { value: 24, unit: "months" },
    name: "Fine Motor Persistence & Adult Praise Observation",
    experiment:
      "Observational assessment of toddlers performing fine motor tasks (balancing a ball on a tube, pretend cooking, shape sorting with praise).",
    findings:
      'Children self-select challenging motor tasks to practice eye-hand coordination; adult verbal praise ("good boy") influences toddler task engagement.',
    concept: "Intrinsic Fine Motor Mastery & Extrinsic Reinforcement",
    source: "CDE 119 Persistance One Two Year Old",
  },
  {
    age: "7 to 20 months",
    startAge: { value: 7, unit: "months" },
    endAge: { value: 20, unit: "months" },
    name: "Gaze Following & Pointing Comprehension in Humans vs. Chimps (Chris Moore, Michael Tomasello, Diane Poulin-Dubois)",
    experiment:
      "1) 7m, 10m, and 12m infants tested on head-turn gaze following around solid barriers. 2) Hidden toy pointing task comparing human infants and chimps. 3) 14m and 20m toddlers matching human versus animal activities with toys.",
    findings:
      "Gaze following emerges between 9 and 12 months, leading toddlers to look behind barriers. Chimps follow gaze but fail to comprehend pointing as communicative. By 14 months, infants categorize human-specific actions (e.g., phone calls) versus animal actions.",
    concept:
      "Joint Attention, Shared Intentionality, & Activity Categorization",
    source: "CDE Baby Human To Relate 3 Gazing",
  },
  {
    age: "6 to 11 months",
    startAge: { value: 6, unit: "months" },
    endAge: { value: 11, unit: "months" },
    name: "Biological Motion Perception & Action Parsing (Renée Baillargeon & University of Oregon)",
    experiment:
      "1) 7.5-month-olds view a self-moving box versus a human girl floating in mid-air. 2) 11-month-olds watch light-point displays of household routines paused at natural boundaries versus mid-action.",
    findings:
      "7.5-month-olds accept a floating box but show surprise when a human floats, demonstrating knowledge of biological motion constraints. 10- to 11-month-olds perceive natural start and stop boundaries in human action streams.",
    concept: "Biological Motion Physics & Action Parsing",
    source: "CDE Baby Human To Relate 1 Motion",
  },
  {
    age: "5 to 10 months",
    startAge: { value: 5, unit: "months" },
    endAge: { value: 10, unit: "months" },
    name: "Statistical Probability in Action Sequences (University of Oregon Infant Studies Lab)",
    experiment:
      "10-month-olds watch repeated 3-step action sequences (blow, feel, rattle), followed by test trials presenting expected versus scrambled action orders.",
    findings:
      "Infants track statistical regularities in human motion and show surprise/increased attention when action sequence probabilities are violated.",
    concept: "Statistical Action Learning & Expectancy Formation",
    source: "CDE Baby Human To Relate 2 Statistical Prob",
  },
  {
    age: "1 to 3 months",
    startAge: { value: 1, unit: "months" },
    endAge: { value: 3, unit: "months" },
    name: "Emergence of Social Smile & Arm-String Agency (Michael Lewis's Lab, Rutgers)",
    experiment:
      "3-month-olds pull a wrist string to activate a monitor image; researchers then disconnect the string or randomize activation.",
    findings:
      "Social smiles emerge around 2–3 months. When contingent control over the monitor is lost, 3-month-olds display bodily expressions of anger and frustration.",
    concept: "Primary Emotions (Joy, Frustration, Anger) & Personal Agency",
    source: "CDE Baby Human to Feel 1 Facial Reactions",
  },
  {
    age: "3 months to 18 weeks (originally 12–18 weeks)",
    startAge: { value: 3, unit: "months" },
    endAge: { value: 18, unit: "weeks" },
    name: "Intermodal Emotion Matching (Albert Einstein College of Medicine) & Temperament Stimulation Response (Nathan Fox's Lab)",
    experiment:
      "1) 12–18 week olds view happy/sad faces of mother, father, or stranger paired with happy/sad audio. 2) 4-month-olds are exposed to a Jack-in-the-Box stimulus.",
    findings:
      "Infants match mother's emotion at 12 weeks, stranger female at 15 weeks, and father's emotion at 18 weeks. Highly reactive infants cry at Jack-in-the-Box stimulation, whereas low-reactive infants stay calm.",
    concept: "Intermodal Affect Perception & Temperamental Reactivity",
    source: "CDE Baby Human to Feel 2 Stimulation",
  },
  {
    age: "9 to 35 months",
    startAge: { value: 9, unit: "months" },
    endAge: { value: 35, unit: "months" },
    name: "Longitudinal Frontal EEG & Risk Room Assessment (Nathan Fox's Lab & Peter Marshall)",
    experiment:
      "1) 9-month-olds undergo barrier frustration, puppet joy, and scary mask trials during EEG recording. 2) 24–35 month-olds enter a Risk Room with a stranger, Toby the Robot, and jumping stairs.",
    findings:
      "Subdued infants exhibit right frontal lobe EEG dominance, while exuberant infants show left frontal dominance. Temperament extremes at 4 months remain highly stable at 9 and 24 months in unpredictable situations.",
    concept: "Frontal EEG Asymmetry & Behavioral Inhibition Stability",
    source: "CDE Baby Human to Feel 3 Temperament",
  },
  {
    age: "9 to 10 months",
    startAge: { value: 9, unit: "months" },
    endAge: { value: 10, unit: "months" },
    name: "Parenting Compliance Interaction (Amy Hayne / Maryland Lab) & Visual Cliff Social Referencing (Joe Campos' Lab)",
    experiment:
      "1) 9-month-olds are forbidden from touching a dangerous plant. 2) 10-month-olds on a visual cliff read mother's facial expression (fear vs. smile).",
    findings:
      "High-reactivity infants struggle to refrain from touching forbidden objects despite warnings, whereas easygoing infants comply instantly. 10-month-olds use parental facial expressions to resolve visual uncertainty.",
    concept: "Goodness of Fit & Parental Social Referencing",
    source: "CDE Baby Human to Feel 4 Responses",
  },
  {
    age: "6 to 30 months",
    startAge: { value: 6, unit: "months" },
    endAge: { value: 30, unit: "months" },
    name: "Infant Arm Restraint Self-Comfort (University of Pennsylvania) & Toddler Stress Coping (Sarah Mangelsdorf's Lab)",
    experiment:
      "1) 6m and 9m infants have arms restrained. 2) 2-year-olds face a moving tarantula toy while father ignores them. 3) 2.5-year-olds try opening a sealed cracker bag while mother reads.",
    findings:
      'Infants soothe stress via self-distraction and thumb/chewing sucking. 2-year-olds manage fear using verbal self-talk like singing spider songs. 2.5-year-olds use language ("Mama help") and methodical strategies to handle frustration.',
    concept: "Self-Regulation Coping & Verbal Emotional Mediation",
    source: "CDE Baby Human to Feel 5 Coping",
  },
  {
    age: "14 to 36 months",
    startAge: { value: 14, unit: "months" },
    endAge: { value: 36, unit: "months" },
    name: "Mirror Rouge Test & Rigged Task Pride/Shame (Michael Lewis's Lab, Rutgers)",
    experiment:
      "1) Mirror rouge test conducted on 14m, 17m, 22m, and 24m toddlers. 2) Pointing/praising to elicit embarrassment. 3) 3-year-olds complete timed puzzles rigged to succeed or fail before timer rings.",
    findings:
      "Mirror self-recognition emerges around 18–24 months. Embarrassment occurs only after self-recognition is attained. Completing tasks before the timer yields pride (upright posture), while failure produces shame (downcast eyes, slumped posture).",
    concept: "Self-Conscious Evaluative Emotions (Pride, Shame, Embarrassment)",
    source: "CDE Baby Human to Feel 6 Self Conscions",
  },
  {
    age: "3 to 5 years",
    startAge: { value: 36, unit: "months" },
    endAge: { value: 60, unit: "months" },
    name: "Creative Curriculum for Preschool Implementation Study",
    experiment:
      "Qualitative classroom observation of 11 interest areas, intentional teaching strategies, interest-area setup, and integrated assessment.",
    findings:
      "Structured physical environments, intentional teaching, guided interest play, and positive teacher-child partnerships foster social skills, literacy, math, and confidence.",
    concept: "Intentional Early Pedagogy & Guided Interest Learning",
    source: "In Action The CC for Preshool",
  },
  {
    age: "0 to 24 months",
    startAge: { value: 0, unit: "months" },
    endAge: { value: 24, unit: "months" },
    name: "Locomotor Posture Specificity (Karen Adolph), Object Permanence A-not-B Error (Piagetian Tasks), & Universal Grammar (Chomsky)",
    experiment:
      "1) Reaching over precipices in sitting versus crawling versus walking postures. 2) Hiding toys under cloths (A-not-B search error at 10m). 3) Tracking Piaget's 6 sensorimotor substages.",
    findings:
      "Perceptual learning does not transfer across postures (sitting to crawling to walking). 10-month-olds make the A-not-B search error. Sensorimotor stage culminates around 24 months with symbolic thought and telegraphic speech.",
    concept:
      "Postural Specificity, Piagetian Sensorimotor Substages, & Universal Grammar",
    source: "Infant Cognitive Development CDE",
  },
  {
    age: "3 to 6 years",
    startAge: { value: 36, unit: "months" },
    endAge: { value: 72, unit: "months" },
    name: "Egocentric Space Station Task, Piagetian Conservation of Liquid, & Guided Participation in Mayan Community (Barbara Rogoff)",
    experiment:
      "1) 4-year-olds in separate rooms describe tools to fix a space station. 2) Liquid volume conservation in tall versus wide glasses. 3) Comparing Mayan versus American guided participation.",
    findings:
      "Preschoolers display egocentrism (struggling to take another's visual perspective). Preschoolers fail conservation tasks due to centration on height. Mayan children learn through keen observation of community work, whereas US children experience adult segregation and verbal instruction.",
    concept: "Egocentrism, Preoperational Conservation, & Guided Participation",
    source: "Preschool Cognitive Development CDE",
  },
  {
    age: "2 to 6 years",
    startAge: { value: 24, unit: "months" },
    endAge: { value: 72, unit: "months" },
    name: "Body Proportion Slimming & Myelination Assessment",
    experiment:
      "1) Reaching arm over head to touch opposite ear. 2) Observational assessment of fine motor drawing/painting across preschool ages.",
    findings:
      "Changing body proportions allow children to touch their opposite ear over their head by age 3. Incomplete nervous system myelination causes younger preschoolers' fine motor attempts to produce random squiggles, whereas older preschoolers gain smooth control.",
    concept: "Body Proportion Proportionality & Neural Myelination",
    source: "Preschool Physical Development CDE",
  },
  {
    age: "2 to 6 years",
    startAge: { value: 24, unit: "months" },
    endAge: { value: 72, unit: "months" },
    name: "Parenting Styles Model (Baumrind), Gender Role Development Interview, & Play Typology (Parten)",
    experiment:
      "1) Evaluation of authoritative, authoritarian, and permissive parenting. 2) Interviewing preschoolers on gender stereotypes (doctors vs. nurses). 3) Observing parallel, mastery, and sociodramatic play.",
    findings:
      "Authoritative parenting is most effective in North America, while cultural context dictates appropriate guidance styles. Preschoolers maintain rigid gender stereotypes. Play progresses from parallel play at ages 2–3 to complex sociodramatic role-play.",
    concept: "Parenting Styles, Gender Role Identity, & Parten's Play Typology",
    source: "Preschool Social Development CDE",
  },
  {
    age: "10 days to 3 months",
    startAge: { value: 10, unit: "days" },
    endAge: { value: 3, unit: "months" },
    name: "Visual Face Tracking & Contrast Perception (Daphne Maurer's Lab, Terry Lewis)",
    experiment:
      "10-day-old (Dylan) versus 6-week-old (Devon) are shown cards featuring face-like versus inverted blobs and blurry faces versus high-contrast patterns.",
    findings:
      "10-day-olds track high-contrast visual patterns rather than face features. By 6 weeks, higher brain visual centers direct attention specifically to face configurations. By 2–3 months, infants integrate sight and sound.",
    concept: "Subcortical vs. Cortical Visual Processing & Face Preference",
    source: "To Think 1 Face Recognition",
  },
  {
    age: "2.5 to 8 months",
    startAge: { value: 2.5, unit: "months" },
    endAge: { value: 8, unit: "months" },
    name: "Violation of Expectation Object Permanence (Renée Baillargeon, Andrea Aguiar, Andrew Meltzoff)",
    experiment:
      "1) 2.5m and 3.5m infants watch tall/short dolls/rabbits pass behind solid versus cut-out screens. 2) 6m versus 8m infants tested on retrieving hidden objects under blankets. 3) 18m infants tested on hand-displacement shell games.",
    findings:
      "2.5- to 3.5-month-olds possess mental representations of hidden objects and understand physical size constraints. 6-month-olds fail to retrieve hidden objects due to motor planning demands, whereas 8-month-olds succeed.",
    concept: "Object Permanence & Violation of Expectation Paradigm",
    source: "To Think 2 Objects",
  },
  {
    age: "6 to 9 months",
    startAge: { value: 6, unit: "months" },
    endAge: { value: 9, unit: "months" },
    name: "Multi-Law Physics Integration (Rachel Clifton/Keane's Lab) & Infant Addition/Subtraction (Karen Wynn's Lab)",
    experiment:
      "1) 9-month-olds track a ball rolling down a ramp behind a screen with a solid barrier wall. 2) 6-month-olds watch 1+1=2 versus 1+1=1 and 2-1=1 versus 2-1=2 doll stage events.",
    findings:
      "9-month-olds track hidden objects and know solid walls block objects, but fail when combining both physical laws simultaneously. 6-month-olds look significantly longer at mathematically impossible addition and subtraction outcomes.",
    concept: "Multi-Law Physics Integration & Innate Number Sense",
    source: "To Think 3 Laws",
  },
  {
    age: "6 months to 2.5 years",
    startAge: { value: 6, unit: "months" },
    endAge: { value: 30, unit: "months" },
    name: "Numerical Ratio Discrimination, Counting Comprehension, & Cloth-as-Tool Retrieval (Amanda Woodward's Lab)",
    experiment:
      "1) 6-month-olds compare visual quantities/lines of objects. 2) 2.5-year-olds are asked to count and pass 3 crackers. 3) 8m versus 11m infants tested on pulling a cloth tool to retrieve a toy.",
    findings:
      "6-month-olds require a 2:1 ratio to visually discriminate quantity differences. 2.5-year-olds recite numbers sequentially without cardinal understanding. 8-month-olds fail cloth-tool retrieval unless demonstrated, while 11-month-olds spontaneously use cloth as a tool.",
    concept: "Approximate Number System & Tool-Mediated Problem Solving",
    source: "To Think 4 Perception",
  },
  {
    age: "9 to 19 months",
    startAge: { value: 9, unit: "months" },
    endAge: { value: 19, unit: "months" },
    name: "Spoon Handle Orientation Problem Solving (Rachel Keane's Lab) & Handrail Support Assessment (Karen Adolph's Lab)",
    experiment:
      "1) 9m, 14m, and 19m infants are offered food on spoons with handles alternating left/right. 2) 16m toddlers cross narrow bridges using solid wooden versus squishy rubber handrails.",
    findings:
      "9m and 14m infants stick to dominant hands even when awkward; 19m infants flexibly switch hands based on spoon handle orientation. 16m toddlers test handrails and refuse untrustworthy rubber rails, demonstrating deep mechanical understanding.",
    concept: "Motor Planning Flexibility & Mechanical Tool Properties",
    source: "To Think 5 Tools",
  },
  {
    age: "5 to 18 months",
    startAge: { value: 5, unit: "months" },
    endAge: { value: 18, unit: "months" },
    name: "Intention Attribution from Partial Gestures (Amanda Woodward) & Diversity of Desires Study (Betty Repacholi & Alison Gopnik's Lab)",
    experiment:
      "1) 11-month-olds watch a researcher touch a cloth to pick a toy. 2) 14-month-olds versus 18-month-olds are offered food choice (crackers vs. broccoli) after a researcher expresses delight for broccoli.",
    findings:
      "11-month-olds infer goal intention from partial cloth-pulling gestures. 14-month-olds egocentrically offer crackers (their own preference), whereas 18-month-olds offer broccoli matching the researcher's expressed desire.",
    concept:
      "Desire Attribution, Non-Egocentric Understanding, & Goal Intentionality",
    source: "To Think 6 Understanding",
  },
  {
    age: "2 to 7.25 months",
    startAge: { value: 2, unit: "months" },
    endAge: { value: 7.25, unit: "months" },
    name: "Mobile Memory and Reminders (Rovee-Collier, Hartshorn & DiRubbo, 1999)",
    experiment: "The same infants learned to move a mobile by kicking. In one experiment, researchers gave reminders every three weeks and tested retention over subsequent months.",
    findings: "With reminders, infants showed evidence of retaining the association for several months. This extends the mobile-contingency task to memory over time.",
    concept: "Longitudinal learning and memory",
    source: "Rovee-Collier et al. (1999), Long-term maintenance of infant memory",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/10461123/",
  },
  {
    age: "3 to 4 months",
    startAge: { value: 3, unit: "months" },
    endAge: { value: 4, unit: "months" },
    name: "Sticky Mittens and Object Exploration (Needham and colleagues, 2002)",
    experiment: "Pre-reaching infants played over 10–14 sessions wearing mittens that attached to specially prepared toys. Researchers compared their exploration with that of infants without the sessions.",
    findings: "The experienced group showed more object engagement and exploration in the original study. Later studies reported mixed findings about motor benefits.",
    concept: "Early reaching experience and object exploration",
    source: "Needham et al. (2002), A pick-me-up for infants’ exploratory skills",
    sourceUrl: "https://doi.org/10.1016/S0163-6383(02)00097-8",
  },
  {
    age: "4 months",
    startAge: { value: 4, unit: "months" },
    name: "Partly Hidden Rod (Kellman & Spelke, 1983)",
    experiment: "Infants watched a rod move behind a block, then viewed a complete rod and two separated pieces. Researchers compared looking times.",
    findings: "Responses suggested that infants perceived the moving ends as parts of a single object under these experimental conditions.",
    concept: "Perception of partly occluded objects",
    source: "Kellman & Spelke (1983), Perception of partly occluded objects in infancy",
    sourceUrl: "https://doi.org/10.1016/0010-0285(83)90017-8",
  },
  {
    age: "5 months",
    startAge: { value: 5, unit: "months" },
    name: "Rhythm Across Sight and Sound (Bahrick & Lickliter, 2000)",
    experiment: "Infants experienced a hammer tapping a rhythm through sight, sound, or both. Researchers then presented a different rhythm and measured looking.",
    findings: "Infants detected a rhythm change in synchronous audiovisual presentations more readily than in the unimodal conditions tested.",
    concept: "Multisensory perception of rhythm",
    source: "Bahrick & Lickliter (2000), Intersensory redundancy guides attentional selectivity and perceptual learning in infancy",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/10749076/",
  },
  {
    age: "6 and 9 months",
    startAge: { value: 6, unit: "months" },
    endAge: { value: 9, unit: "months" },
    name: "Human and Monkey Face Discrimination (Pascalis, de Haan & Nelson, 2002)",
    experiment: "Different age groups were familiarised with human or monkey faces, then shown a familiar face alongside a new one.",
    findings: "Six-month-olds discriminated individual faces of both species in this study; nine-month-olds showed stronger discrimination of human faces.",
    concept: "Face perception and experience",
    source: "Pascalis et al. (2002), Is face processing species-specific during the first year of life?",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/12016317/",
  },
  {
    age: "8 months",
    startAge: { value: 8, unit: "months" },
    name: "Statistical Learning of Speech (Saffran, Aslin & Newport, 1996)",
    experiment: "Infants listened to a continuous stream of made-up syllables for about two minutes, then heard sequences that either had or had not appeared consistently together.",
    findings: "Listening responses indicated that infants learned regularities between adjacent syllables, a potential cue to word boundaries.",
    concept: "Statistical learning and early language",
    source: "Saffran et al. (1996), Statistical learning by 8-month-old infants",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/8943209/",
  },
  {
    age: "9 to 15 months",
    startAge: { value: 9, unit: "months" },
    endAge: { value: 15, unit: "months" },
    name: "Joint Attention and Communication (Carpenter, Nagell & Tomasello, 1998)",
    experiment: "Longitudinal studies observed infants and mothers over time, including shared engagement, caregiver language, gestures, and early communication.",
    findings: "Time spent jointly engaged and caregiver language following the infant’s attention predicted early gestural and linguistic skills; these associations do not by themselves prove causation.",
    concept: "Longitudinal joint attention and communication",
    source: "Carpenter et al. (1998), Social cognition, joint attention, and communicative competence from 9 to 15 months of age",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/9835078/",
  },
  {
    age: "14 months",
    startAge: { value: 14, unit: "months" },
    name: "Selective Head-Touch Imitation (Gergely, Bekkering & Király, 2002)",
    experiment: "An adult activated a light-box with their head, either with hands free or while holding a blanket. Infants were tested one week later.",
    findings: "Infants were more likely to reproduce the head action when the adult’s hands had been free. Researchers proposed an interpretation based on action constraints; alternatives have been proposed.",
    concept: "Selective imitation and action context",
    source: "Gergely et al. (2002), Rational imitation in preverbal infants",
    sourceUrl: "https://doi.org/10.1038/415755a",
  },
  {
    age: "15 months",
    startAge: { value: 15, unit: "months" },
    name: "False-Belief Looking Task (Onishi & Baillargeon, 2005)",
    experiment: "Infants watched an actor hide a toy; its location then changed with or without the actor knowing. Researchers measured looking as the actor searched.",
    findings: "Looking patterns were consistent with expectations based on the actor’s information about the toy. The interpretation of infant looking-time evidence remains debated.",
    concept: "Social cognition and belief attribution",
    source: "Onishi & Baillargeon (2005), Do 15-month-old infants understand false beliefs?",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/15821091/",
  },
  {
    age: "18 months",
    startAge: { value: 18, unit: "months" },
    name: "Helping an Adult (Warneken & Tomasello, 2006)",
    experiment: "An adult encountered difficulties achieving simple goals, such as retrieving an out-of-reach object; researchers observed whether the child helped.",
    findings: "Children readily helped in several situations tested, providing evidence of early helping behaviour.",
    concept: "Early helping and social understanding",
    source: "Warneken & Tomasello (2006), Altruistic helping in human infants and young chimpanzees",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/16513986/",
  },
]

