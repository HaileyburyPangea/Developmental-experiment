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
  kind: "experiment" | "observation" | "assessment" | "framework"
  materials: string[]
  procedure: string[]
  measure: string
  limitations: string
  references: { title: string; url: string }[]
}

export const studies: Study[] = [
  {
    "age": "24 weeks gestation–birth",
    "startAge": {
      "value": -16,
      "unit": "weeks"
    },
    "endAge": {
      "value": 0,
      "unit": "days"
    },
    "name": "Prenatal responses to familiar voices",
    "experiment": "Research description: compare fetal heart-rate responses to recordings of the pregnant parent and an unfamiliar speaker.",
    "findings": "Near-term fetuses showed different heart-rate responses to the two voices; this supports prenatal experience with voice characteristics.",
    "concept": "Prenatal auditory familiarity",
    "source": "Effects of experience on fetal voice recognition (2003)",
    "kind": "experiment",
    "materials": [
      "Clinical fetal-heart-rate monitor",
      "Matched recordings of a passage",
      "Calibrated research playback equipment"
    ],
    "procedure": [
      "Recruit near-term pregnancies through a clinical research setting; the linked study does not establish a 24-week milestone.",
      "In the published research protocol, monitor three consecutive two-minute periods: baseline without playback, voice playback, then recovery without playback.",
      "Use matched speech content and playback conditions, with voice condition assigned between participants.",
      "Compare baseline-adjusted heart-rate trajectories by condition; use the paper for approved sound calibration and monitoring details."
    ],
    "measure": "Heart-rate change relative to baseline, during and following playback.",
    "limitations": "Not a home protocol. Existing 24-weeks-to-birth calendar range is a broad planning range; the cited experiment studied near-term fetuses. Removed the unsupported claim that the inner ear is fully developed at exactly 24 weeks.",
    "references": [
      {
        "title": "Effects of experience on fetal voice recognition (2003)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12741744/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12741744/"
  },
  {
    "age": "Newborn (12-hour planning slot)",
    "startAge": {
      "value": 0.5,
      "unit": "days"
    },
    "name": "Newborn language-rhythm preference",
    "experiment": "Research description: newborns control playback of English or Tagalog speech through a non-nutritive sucking apparatus.",
    "findings": "Prenatal English-only exposure was associated with English preference; English–Tagalog exposure was associated with preference for both. Separate tests showed language discrimination.",
    "concept": "Prenatal language exposure and rhythm",
    "source": "The roots of bilingualism in newborns (2010)",
    "kind": "experiment",
    "materials": [
      "Pressure-sensitive non-nutritive nipple",
      "Recorded speech in two languages",
      "Playback controller and sucking-event recording"
    ],
    "procedure": [
      "Document languages spoken during pregnancy before assigning exposure groups.",
      "Measure each alert newborn’s sucking pattern and set the playback contingency using the published apparatus.",
      "Make different sucking patterns produce the alternative speech samples; counterbalance the response-to-language assignment.",
      "Compare the relative responses producing each language, and analyse discrimination separately from preference."
    ],
    "measure": "Sucking responses associated with each language; recovery after a language change in the separate discrimination task.",
    "limitations": "Related published study; the exact documentary source and 12-hour cutoff were not identified. Specialist newborn apparatus and full response-contingency methods are required. This measures auditory preference, not bilingual fluency or comprehension.",
    "references": [
      {
        "title": "The roots of bilingualism in newborns (2010)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20424066/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/20424066/"
  },
  {
    "age": "1 to 3 days",
    "startAge": {
      "value": 1,
      "unit": "days"
    },
    "endAge": {
      "value": 3,
      "unit": "days"
    },
    "name": "Newborn discrimination of lexical and grammatical word sounds",
    "experiment": "Research description: a high-amplitude sucking habituation task compares lists of lexical and grammatical words taken from natural maternal speech.",
    "findings": "Newborns discriminated the sound patterns of the two word classes. The result does not show that they understand the words’ meanings or grammatical functions.",
    "concept": "Acoustic and phonological word-class discrimination",
    "source": "Newborn infants’ sensitivity to perceptual cues to lexical and grammatical words (1999)",
    "kind": "experiment",
    "materials": [
      "High-amplitude sucking apparatus",
      "Matched word-list recordings",
      "Infant-controlled habituation software"
    ],
    "procedure": [
      "Test healthy, alert newborns aged 1–3 days in an appropriate research setting.",
      "Present repeated examples from one word class while recording high-amplitude sucking.",
      "After the published habituation criterion, switch either to the other class or to a control list from the same class.",
      "Compare recovery of sucking across switch and control conditions; balance word class and list assignment."
    ],
    "measure": "Recovery of high-amplitude sucking after the stimulus-category change.",
    "limitations": "Corrected the former under-24-hour age: the published study tested 1–3-day-olds. Exact stimulus lists and habituation criterion must be taken from the full paper. No semantic knowledge is inferred.",
    "references": [
      {
        "title": "Newborn infants’ sensitivity to perceptual cues to lexical and grammatical words (1999)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10553673/"
      },
      {
        "title": "Primary publisher methods excerpt: 1–3-day-old newborn participants",
        "url": "https://www.sciencedirect.com/science/article/abs/pii/S0010027799000475"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10553673/"
  },
  {
    "age": "6 weeks",
    "startAge": {
      "value": 6,
      "unit": "weeks"
    },
    "name": "Listening to a familiar voice",
    "experiment": "Adapted observation: note an awake infant’s responses to familiar speech, without startling or repeatedly testing them.",
    "findings": "Newborn research supports preference for a familiar maternal voice, but does not establish a new ability appearing precisely at six weeks.",
    "concept": "Familiar-voice attention",
    "source": "Of human bonding: newborns prefer their mothers’ voices (1980)",
    "kind": "observation",
    "materials": [
      "Quiet familiar space",
      "Ordinary spoken voice",
      "Observation notes"
    ],
    "procedure": [
      "Observe during a settled, awake period while the infant is comfortably supported.",
      "Speak naturally from a comfortable nearby position and note changes in looking, movement or vocal activity.",
      "Repeat on another day and record state and competing sounds; do not treat absence of a head turn as failure."
    ],
    "measure": "Descriptive notes on attention during naturally occurring speech.",
    "limitations": "This is an adapted observation, not a replication of the linked newborn sucking experiment or a hearing screen. Six weeks is the retained planning age, not an experimental threshold.",
    "references": [
      {
        "title": "Of human bonding: newborns prefer their mothers’ voices (1980)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/7375928/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/7375928/"
  },
  {
    "age": "3 months",
    "startAge": {
      "value": 3,
      "unit": "months"
    },
    "name": "Growth of the infant vocal tract",
    "experiment": "Anatomical research description: MRI measurements chart growth of oral and pharyngeal structures across early childhood.",
    "findings": "Growth is continuous and non-uniform, with rapid change in early life; there is no single three-month larynx-lowering event that explains vocal development.",
    "concept": "Vocal-tract growth",
    "source": "Development of vocal tract length during early childhood: a magnetic resonance imaging study (2005)",
    "kind": "observation",
    "materials": [
      "Published anatomical images and measurement definitions"
    ],
    "procedure": [
      "Read the linked imaging study’s age-group and measurement definitions.",
      "Compare age-related measurements of structures such as tongue, palate, pharynx and larynx in the published data.",
      "For an informal learning activity, simply record naturally occurring coos over time; do not attempt anatomical measurement at home."
    ],
    "measure": "Anatomical dimensions in imaging research; optional descriptive vocal observations are a separate activity.",
    "limitations": "Not an experiment to perform on a baby. MRI requires clinical research infrastructure. The three-month calendar slot is illustrative; it is not a deadline or a discrete anatomical transition.",
    "references": [
      {
        "title": "Development of vocal tract length during early childhood: a magnetic resonance imaging study (2005)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15704426/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/15704426/"
  },
  {
    "age": "3–6 months",
    "startAge": {
      "value": 3,
      "unit": "months"
    },
    "endAge": {
      "value": 6,
      "unit": "months"
    },
    "name": "Sensitivity to a partner’s eye direction",
    "experiment": "Research description: vary an adult’s eye contact while maintaining otherwise responsive interaction.",
    "findings": "In the published task, smiling declined when the adult looked away. Reduced attention alone did not uniquely identify the eye-contact manipulation.",
    "concept": "Eye direction during social interaction",
    "source": "Infant sensitivity to adult eye direction (1996)",
    "kind": "experiment",
    "materials": [
      "Live or closed-circuit interaction setup",
      "Video recording",
      "Blind behaviour coding"
    ],
    "procedure": [
      "The published study included 3–6-month-olds and four one-minute interaction periods.",
      "In the experimental condition maintain eye contact in periods 1 and 3 and avert eyes in periods 2 and 4 while keeping interaction responsive.",
      "Use a comparison group receiving eye contact throughout; in the televised setup the adult can monitor the infant without direct eye contact.",
      "Code infant smiling and gaze independently and compare changes across periods and groups."
    ],
    "measure": "Time smiling and time looking during each interaction period.",
    "limitations": "Research description rather than an activity to provoke distress. Exact adult behaviour, camera setup and stopping rules require the paper. Gaze aversion by an infant can be ordinary regulation.",
    "references": [
      {
        "title": "Infant sensitivity to adult eye direction (1996)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9022223/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/9022223/"
  },
  {
    "age": "5 months",
    "startAge": {
      "value": 5,
      "unit": "months"
    },
    "name": "Response to an unresponsive social partner",
    "experiment": "Research description: compare normal face-to-face interaction, a brief unresponsive still-face episode, and reunion.",
    "findings": "Infants typically reduce positive engagement and may show distress when expected social responses stop. Responses differ across infants and procedural variants.",
    "concept": "Social reciprocity",
    "source": "The infant’s response to entrapment between contradictory messages in face-to-face interaction (1978)",
    "kind": "experiment",
    "materials": [
      "Trained research staff",
      "Video-recorded interaction",
      "Predefined stopping and reunion procedure"
    ],
    "procedure": [
      "Begin with ordinary responsive caregiver–infant interaction and code baseline behaviour.",
      "Within an approved research protocol, introduce the brief nonresponsive episode using the paper’s instructions.",
      "End promptly under the protocol’s stopping criteria and restore responsive interaction.",
      "Compare gaze, smiling, bids and negative affect across baseline, still face and reunion, including a control condition where possible."
    ],
    "measure": "Coded social bids, looking, smiling and negative affect by episode.",
    "limitations": "This manipulation can cause distress and is described for understanding research, not as a home developmental test. No inference about attachment or parenting follows from one response. Duration varies across studies; the original full protocol is needed.",
    "references": [
      {
        "title": "The infant’s response to entrapment between contradictory messages in face-to-face interaction (1978)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/632477/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/632477/"
  },
  {
    "age": "5 months",
    "startAge": {
      "value": 5,
      "unit": "months"
    },
    "name": "Acoustic features of infant-directed speech",
    "experiment": "Adapted comparison: record how the same adult speaks to a baby and to another adult, then compare vocal features.",
    "findings": "The cited cross-language study found more expanded vowel articulations in infant-directed speech. It did not by itself test a five-month-old’s learning gain.",
    "concept": "Properties of infant-directed speech",
    "source": "Cross-language analysis of phonetic units in language addressed to infants (1997)",
    "kind": "observation",
    "materials": [
      "Consented speech recordings",
      "Same target words in both contexts",
      "Optional acoustic-analysis software"
    ],
    "procedure": [
      "Record the same speaker using comparable words in natural infant-directed and adult-directed contexts.",
      "Keep microphone placement similar and note the language and recording conditions.",
      "Compare pitch, vowel duration and, with appropriate training, vowel formant values; analyse multiple examples rather than a single token."
    ],
    "measure": "Acoustic measures of speech addressed to infants versus adults.",
    "limitations": "Adapted observation. A speech style does not guarantee a particular developmental result, and languages and speakers vary. Five months is a planning slot rather than a study-specific threshold.",
    "references": [
      {
        "title": "Cross-language analysis of phonetic units in language addressed to infants (1997)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9235890/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/9235890/"
  },
  {
    "age": "5–6 months",
    "startAge": {
      "value": 5,
      "unit": "months"
    },
    "endAge": {
      "value": 6,
      "unit": "months"
    },
    "name": "Matching facial and vocal emotion",
    "experiment": "Research description: show two different facial expressions while playing a voice that matches one expression, then compare visual attention.",
    "findings": "Matching depends on age, familiarity and stimulus design; looking toward the sound-matching face can indicate sensitivity to cross-modal emotional information.",
    "concept": "Audiovisual affect matching",
    "source": "The role of person familiarity in young infants’ perception of emotional expressions (2001)",
    "kind": "experiment",
    "materials": [
      "Controlled paired-expression videos",
      "Emotion-matched voice recordings",
      "Eye-gaze recording"
    ],
    "procedure": [
      "Use the same actor and comparable recording conditions for both facial expressions.",
      "Present paired expressions with a voice corresponding to one expression; balance left–right location and voice condition.",
      "Record looking to each face without a caregiver cueing the infant.",
      "Compare attention toward matching versus mismatching expressions and report familiarity with the actor."
    ],
    "measure": "Proportion of looking to the sound-matching expression.",
    "limitations": "The linked study concerns person familiarity and younger infants; the exact happy/sad documentary display at 5–6 months was not independently matched. This outline is an adaptation, not a verbatim replication or proof of understanding emotion words.",
    "references": [
      {
        "title": "The role of person familiarity in young infants’ perception of emotional expressions (2001)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11333071/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/11333071/"
  },
  {
    "age": "6 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "name": "Upright and inverted familiar faces",
    "experiment": "Related research description: compare responses to upright and inverted pictures of the mother and an unfamiliar person.",
    "findings": "Infant responses to orientation and familiarity can differ; the original assertion that inversion necessarily stops smiling is not established by the identified paper.",
    "concept": "Face orientation and familiarity",
    "source": "Personal familiarity influences the processing of upright and inverted faces in infants (2009)",
    "kind": "experiment",
    "materials": [
      "Matched face photographs",
      "Controlled screen presentation",
      "Research eye-gaze or ERP recording"
    ],
    "procedure": [
      "Obtain matched photographs with neutral background, size and expression.",
      "Present upright and inverted versions in balanced order; include both familiar and unfamiliar faces.",
      "Record gaze and, in the linked specialist protocol, event-related brain responses.",
      "Compare responses within orientation and familiarity conditions rather than diagnosing a single infant."
    ],
    "measure": "Looking responses and/or ERP components, depending on the protocol.",
    "limitations": "The linked study used six-month-old infants and static pictures with ERP measures. It is related evidence, not a verified match to the documentary’s inverted live television display. Exact trial and electrode specifications require the paper.",
    "references": [
      {
        "title": "Personal familiarity influences the processing of upright and inverted faces in infants (2009)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2831707/"
      }
    ],
    "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2831707/"
  },
  {
    "age": "6 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "name": "Earlier non-native speech-sound discrimination",
    "experiment": "Research description: train a head turn to a change in speech sound, reinforced by an illuminated toy.",
    "findings": "Sensitivity to some non-native contrasts declines during the latter part of the first year in infants without relevant language exposure; this is contrast- and experience-dependent.",
    "concept": "Experience-dependent speech perception",
    "source": "Cross-language speech perception: Evidence for perceptual reorganization during the first year of life (1984)",
    "kind": "experiment",
    "materials": [
      "Calibrated speech tokens",
      "Speaker and visual toy reinforcer",
      "Blind observer and trial controller"
    ],
    "procedure": [
      "Seat an alert infant with a caregiver while an assistant keeps attention near the midline.",
      "Repeat a background syllable; pair a change to the comparison syllable with a visual reward until the infant learns the association.",
      "Intermix change and no-change trials using the study’s schedule, keeping the scorer unaware of trial type.",
      "Compare correct turns and false alarms across age and language-exposure groups."
    ],
    "measure": "Conditioned head-turn discrimination, accounting for false alarms.",
    "limitations": "Specialist research requires calibrated contrasts and objective scoring. Original studies compared age groups rather than proving that every infant gains or loses an ability at exactly six or ten months. The full paper supplies tokens and inclusion criteria.",
    "references": [
      {
        "title": "Cross-language speech perception: Evidence for perceptual reorganization during the first year of life (1984)",
        "url": "https://doi.org/10.1016/S0163-6383(84)80022-3"
      }
    ],
    "sourceUrl": "https://doi.org/10.1016/S0163-6383(84)80022-3"
  },
  {
    "age": "9 to 12 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "name": "Understanding pointing as directed toward an object",
    "experiment": "Research description: habituate infants to an adult pointing at one toy, swap toy locations, then test changed target versus changed pointing path.",
    "findings": "In the identified study 12-month-olds, but not 9-month-olds, looked longer at a change of referent than a change of path.",
    "concept": "Pointing referents",
    "source": "Infants’ understanding of the point gesture as an object-directed action (2002)",
    "kind": "experiment",
    "materials": [
      "Two visually distinct toys",
      "Standardised adult pointing display",
      "Video looking-time measurement"
    ],
    "procedure": [
      "Present the adult pointing to one of two objects repeatedly until the study’s habituation criterion.",
      "Swap the objects’ positions so that target identity and pointing direction can be separated.",
      "Present test trials that preserve the object but change the path, or preserve the path but change the object.",
      "Counterbalance objects, side and test order; compare coded looking times."
    ],
    "measure": "Looking time to changed-referent versus changed-path events.",
    "limitations": "Corrected age range to 9–12 months based on the published study; the original eight-month success claim was unsupported. Looking-time differences do not independently establish adult-like intention attribution.",
    "references": [
      {
        "title": "Infants’ understanding of the point gesture as an object-directed action (2002)",
        "url": "https://doi.org/10.1016/S0885-2014(02)00074-6"
      }
    ],
    "sourceUrl": "https://doi.org/10.1016/S0885-2014(02)00074-6",
    "endAge": {
      "value": 12,
      "unit": "months"
    }
  },
  {
    "age": "9 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "name": "Patterns in babbling over time",
    "experiment": "Adapted observation: collect comparable recordings of spontaneous babbling and describe how sound patterns change.",
    "findings": "Cross-language longitudinal recordings suggest both shared and language-related patterns in babbling.",
    "concept": "Babbling and language experience",
    "source": "Patterns in babbling: a cross-linguistic study (1992)",
    "kind": "observation",
    "materials": [
      "Audio/video recording",
      "Consistent play setting",
      "Optional phonetic transcription"
    ],
    "procedure": [
      "Record a comfortable parent–infant interaction without asking for specific sounds.",
      "Repeat comparable recordings over several weeks and note languages heard, age and recording duration.",
      "Separate words from babbled syllables and count examples by consonant and vowel pattern; specialist analysis needs trained transcription."
    ],
    "measure": "Rates and phonetic patterns of spontaneous babbled utterances.",
    "limitations": "Adapted observation, not an experimental manipulation. The linked longitudinal study included small English/French groups beginning around 9 or 11 months; it does not imply every nine-month-old has a recognisable accent.",
    "references": [
      {
        "title": "Patterns in babbling: a cross-linguistic study (1992)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1551933/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/1551933/"
  },
  {
    "age": "9–10.5 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "endAge": {
      "value": 10.5,
      "unit": "months"
    },
    "name": "Live versus recorded unfamiliar-language exposure",
    "experiment": "Research description: compare short-term live Mandarin sessions with control language exposure and with recorded Mandarin presentations.",
    "findings": "Live exposure improved discrimination of the tested Mandarin contrast; the corresponding recorded exposure did not show the same learning in these conditions.",
    "concept": "Social interaction and phonetic learning",
    "source": "Foreign-language experience in infancy: Effects of short-term exposure and social interaction on phonetic learning (2003)",
    "kind": "experiment",
    "materials": [
      "Native-language speakers",
      "Books and toys",
      "Matched audiovisual/audio recordings",
      "Conditioned head-turn testing apparatus"
    ],
    "procedure": [
      "Recruit infants around nine months and document prior language exposure.",
      "Provide twelve approximately 25-minute sessions over about four weeks, using native speakers, books and toys.",
      "Use live English as a control and matched recorded Mandarin conditions to evaluate social presentation.",
      "Test the selected Mandarin contrast using the published conditioned head-turn procedure and compare discrimination between groups."
    ],
    "measure": "Behavioural phonetic discrimination after exposure, with change and control trials.",
    "limitations": "Corrected the prior claim that this outcome was EEG. Generalisation is limited to the exposure and contrasts tested; ordinary bilingual interaction is not a standardised diagnostic task.",
    "references": [
      {
        "title": "Foreign-language experience in infancy: Effects of short-term exposure and social interaction on phonetic learning (2003)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12861072/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12861072/"
  },
  {
    "age": "10 months",
    "startAge": {
      "value": 10,
      "unit": "months"
    },
    "name": "Later non-native speech-sound discrimination",
    "experiment": "Research description: train a head turn to a change in speech sound, reinforced by an illuminated toy.",
    "findings": "Sensitivity to some non-native contrasts declines during the latter part of the first year in infants without relevant language exposure; this is contrast- and experience-dependent.",
    "concept": "Experience-dependent speech perception",
    "source": "Cross-language speech perception: Evidence for perceptual reorganization during the first year of life (1984)",
    "kind": "experiment",
    "materials": [
      "Calibrated speech tokens",
      "Speaker and visual toy reinforcer",
      "Blind observer and trial controller"
    ],
    "procedure": [
      "Seat an alert infant with a caregiver while an assistant keeps attention near the midline.",
      "Repeat a background syllable; pair a change to the comparison syllable with a visual reward until the infant learns the association.",
      "Intermix change and no-change trials using the study’s schedule, keeping the scorer unaware of trial type.",
      "Compare correct turns and false alarms across age and language-exposure groups."
    ],
    "measure": "Conditioned head-turn discrimination, accounting for false alarms.",
    "limitations": "Specialist research requires calibrated contrasts and objective scoring. Original studies compared age groups rather than proving that every infant gains or loses an ability at exactly six or ten months. The full paper supplies tokens and inclusion criteria.",
    "references": [
      {
        "title": "Cross-language speech perception: Evidence for perceptual reorganization during the first year of life (1984)",
        "url": "https://doi.org/10.1016/S0163-6383(84)80022-3"
      }
    ],
    "sourceUrl": "https://doi.org/10.1016/S0163-6383(84)80022-3"
  },
  {
    "age": "10 months",
    "startAge": {
      "value": 10,
      "unit": "months"
    },
    "name": "Rhythmic manual activity before first signs",
    "experiment": "Adapted longitudinal observation of infants with natural exposure to a signed language; distinguish gestures, repetitive manual forms and meaningful signs.",
    "findings": "Manual babbling has been reported in deaf infants exposed to signing, supporting comparison of language development across modalities.",
    "concept": "Language across signed and spoken modalities",
    "source": "Babbling in the manual mode: evidence for the ontogeny of language (1991)",
    "kind": "observation",
    "materials": [
      "Consented natural-play videos",
      "Fluent signer for coding",
      "Notes on language exposure"
    ],
    "procedure": [
      "Record ordinary interaction with a familiar fluent signer, keeping samples comparable in duration.",
      "Annotate repetitive hand forms separately from communicative gestures and conventional signs.",
      "Ask a second fluent coder to independently classify examples; record ambiguous forms rather than forcing a category.",
      "Repeat over time and compare the same child’s repertoire in context."
    ],
    "measure": "Coded manual forms, conventional signs and communicative uses over repeated observations.",
    "limitations": "Adapted observation, not an imitation test or a claim that all movements are linguistic. The cited paper concerns manual babbling; it does not independently establish the documentary’s specific 20-month vocabulary examples.",
    "references": [
      {
        "title": "Babbling in the manual mode: evidence for the ontogeny of language (1991)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2006424/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/2006424/"
  },
  {
    "age": "12–18 months",
    "startAge": {
      "value": 12,
      "unit": "months"
    },
    "endAge": {
      "value": 18,
      "unit": "months"
    },
    "name": "Early vocabulary in everyday contexts",
    "experiment": "Adapted language diary or structured caregiver report, rather than a simple laboratory experiment.",
    "findings": "Vocabulary and word-combination skills vary widely at the same age; production and comprehension require separate measures.",
    "concept": "Individual differences in early language",
    "source": "Variability in early communicative development (1994)",
    "kind": "observation",
    "materials": [
      "Language diary",
      "Consistent observation intervals",
      "Optional validated language inventory"
    ],
    "procedure": [
      "Record spontaneous words or combinations in ordinary routines over several days.",
      "Use consistent definitions: count a word form once, distinguish comprehension from production, and record meaningful use rather than prompted repetition.",
      "If formal comparison is required, use a validated inventory appropriate for the child’s language and age, following its manual.",
      "Compare repeated observations with the child’s earlier samples rather than setting a single pass/fail word target."
    ],
    "measure": "Counts and examples of spontaneously produced words or word combinations; comprehension recorded separately.",
    "limitations": "The linked normative research supports variation, not the original fixed claims of 50–100 words, 70% nouns, or 300 spoken/1,000 understood words for every child. Diary instructions here are adapted; formal inventory scoring requires the appropriate manual.",
    "references": [
      {
        "title": "Variability in early communicative development (1994)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/7845413/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/7845413/"
  },
  {
    "age": "13 months",
    "startAge": {
      "value": 13,
      "unit": "months"
    },
    "name": "Learning an object label during shared attention",
    "experiment": "Adapted research outline: introduce novel objects and spoken labels during shared attention, then test label–object selection without giving gaze cues.",
    "findings": "One-year-olds can learn some novel word–object mappings in supportive joint-attention settings; the exact documentary gaze/pointing comparison was not verified.",
    "concept": "Shared attention in early word learning",
    "source": "Infants’ learning about words and sounds in relation to objects (1999)",
    "kind": "experiment",
    "materials": [
      "Two unfamiliar infant-safe objects",
      "Two invented labels",
      "Standardised naming and test script",
      "Video recording"
    ],
    "procedure": [
      "Allow equal familiarisation with two objects and note any initial preference.",
      "During a short naming phase, establish shared attention and use one novel label consistently for each object; balance label–object assignments across children.",
      "At test, place both objects within reach and request one label while looking centrally; alternate sides and avoid praise that reveals the correct object.",
      "Count first selections and compare with chance and an appropriate no-training or control condition."
    ],
    "measure": "First object selected on label-comprehension trials.",
    "limitations": "Adapted outline, not a verified replication of the Toma/Dax documentary demonstration. The linked study tested 13-month-olds learning words versus nonverbal sounds; exact naming counts and gaze manipulation require a matched publication.",
    "references": [
      {
        "title": "Infants’ learning about words and sounds in relation to objects (1999)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10191515/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10191515/"
  },
  {
    "age": "14 months",
    "startAge": {
      "value": 14,
      "unit": "months"
    },
    "name": "Social responsiveness to an unfamiliar puppet",
    "experiment": "Related research outline: vary a novel agent’s face and contingent interaction, then observe whether infants follow its orientation.",
    "findings": "In a published 12-month study, orientation following depended on combinations of facial appearance and responsive behaviour.",
    "concept": "Cues to social agency",
    "source": "Whose gaze will infants follow? The elicitation of gaze-following in 12-month-olds (1998)",
    "kind": "experiment",
    "materials": [
      "Novel movable agent",
      "Face/no-face versions",
      "Contingent/noncontingent scripts",
      "Targets and video recording"
    ],
    "procedure": [
      "Present an unfamiliar agent under a predetermined combination of facial features and contingent response.",
      "Keep movement and exposure similar across conditions and manipulate responsiveness using the published design.",
      "After familiarisation, orient the agent toward one of two targets and code the infant’s first look.",
      "Compare following across conditions, balancing target side."
    ],
    "measure": "First look or orientation following toward the agent’s target.",
    "limitations": "Exact green-puppet conversational demonstration at 14 months remains unmatched. This is a related paradigm at 12 months, not evidence that a particular child believes a puppet is alive or understands conversation. Retained 14-month slot is illustrative.",
    "references": [
      {
        "title": "Whose gaze will infants follow? The elicitation of gaze-following in 12-month-olds (1998)",
        "url": "https://doi.org/10.1111/1467-7687.00036"
      }
    ],
    "sourceUrl": "https://doi.org/10.1111/1467-7687.00036"
  },
  {
    "age": "17 months",
    "startAge": {
      "value": 17,
      "unit": "months"
    },
    "name": "Learning shape-based object categories",
    "experiment": "Research description: repeated naming of unfamiliar object categories organised by shape, followed by tests with new shape, colour and material matches.",
    "findings": "A nine-week study beginning at 17 months found increased shape-based label generalisation and vocabulary growth during training.",
    "concept": "Experience in learning object names",
    "source": "Object name learning provides on-the-job training for attention (2002)",
    "kind": "experiment",
    "materials": [
      "Unfamiliar infant-safe objects varying shape, colour and material",
      "Consistent invented category labels",
      "Comparison group",
      "Vocabulary records"
    ],
    "procedure": [
      "Assign children to labelled shape-organised training or the study’s comparison conditions.",
      "Across repeated weekly visits, play with named category examples that share shape while other properties vary.",
      "Test extension of a newly introduced label to new examples matching shape versus other features.",
      "Record outside-laboratory vocabulary consistently before and during training; compare change across conditions."
    ],
    "measure": "Shape-based label-extension choices and reported object-name vocabulary growth.",
    "limitations": "The publication describes a nine-week study, not a verified independent 24-month follow-up. The exact eight-session account, test schedule and claim of more than threefold growth were not established from the accessible methods summary. A complete replication requires the full stimuli and protocol.",
    "references": [
      {
        "title": "Object name learning provides on-the-job training for attention (2002)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11892773/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/11892773/"
  },
  {
    "age": "18 months",
    "startAge": {
      "value": 18,
      "unit": "months"
    },
    "name": "Remembering a demonstrated action after a delay",
    "experiment": "Adapted imitation task: show a novel action, remove the object, then test whether the child reproduces the action after a specified delay.",
    "findings": "Published research demonstrates deferred imitation in infancy; the exact 18-month, one-hour documentary protocol was not verified.",
    "concept": "Memory for observed actions",
    "source": "Infant imitation and memory: nine-month-olds in immediate and deferred tests (1988)",
    "kind": "experiment",
    "materials": [
      "Infant-safe novel object with a reproducible action",
      "Demonstration script",
      "Timer and video recording",
      "No-demonstration control"
    ],
    "procedure": [
      "Choose an action the object does not strongly invite by itself, and measure baseline spontaneous performance in a control group.",
      "Demonstrate the action a fixed number of times while the infant watches without practising it.",
      "Remove the object for the predetermined delay and record what occurs during the interval.",
      "Return it without demonstrating again or giving an action instruction; code whether the target action occurs within the same test period across groups."
    ],
    "measure": "Target-action reproduction compared with a no-demonstration baseline.",
    "limitations": "Adapted protocol; exact repetitions, delay and scoring must be prespecified. The linked primary paper tested nine-month-olds with immediate or 24-hour tests, not the documentary’s age/delay. Imitation is influenced by motor ability, attention and object design.",
    "references": [
      {
        "title": "Infant imitation and memory: nine-month-olds in immediate and deferred tests (1988)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3652622/"
      }
    ],
    "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3652622/"
  },
  {
    "age": "18–24 months",
    "startAge": {
      "value": 18,
      "unit": "months"
    },
    "endAge": {
      "value": 24,
      "unit": "months"
    },
    "name": "Emerging word combinations",
    "experiment": "Adapted language diary or structured caregiver report, rather than a simple laboratory experiment.",
    "findings": "Vocabulary and word-combination skills vary widely at the same age; production and comprehension require separate measures.",
    "concept": "Individual differences in early language",
    "source": "Variability in early communicative development (1994)",
    "kind": "observation",
    "materials": [
      "Language diary",
      "Consistent observation intervals",
      "Optional validated language inventory"
    ],
    "procedure": [
      "Record spontaneous words or combinations in ordinary routines over several days.",
      "Use consistent definitions: count a word form once, distinguish comprehension from production, and record meaningful use rather than prompted repetition.",
      "If formal comparison is required, use a validated inventory appropriate for the child’s language and age, following its manual.",
      "Compare repeated observations with the child’s earlier samples rather than setting a single pass/fail word target."
    ],
    "measure": "Counts and examples of spontaneously produced words or word combinations; comprehension recorded separately.",
    "limitations": "The linked normative research supports variation, not the original fixed claims of 50–100 words, 70% nouns, or 300 spoken/1,000 understood words for every child. Diary instructions here are adapted; formal inventory scoring requires the appropriate manual.",
    "references": [
      {
        "title": "Variability in early communicative development (1994)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/7845413/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/7845413/"
  },
  {
    "age": "18–24 months",
    "startAge": {
      "value": 18,
      "unit": "months"
    },
    "endAge": {
      "value": 24,
      "unit": "months"
    },
    "name": "Rate of vocabulary growth",
    "experiment": "Adapted repeated word diary: chart newly used words over equal observation intervals instead of assuming a universal vocabulary explosion.",
    "findings": "Analyses do not support treating a sudden vocabulary spurt as an obligatory stage for every child.",
    "concept": "Variation in vocabulary-growth trajectories",
    "source": "Reexamining the vocabulary spurt (2004)",
    "kind": "observation",
    "materials": [
      "Dated vocabulary diary",
      "Consistent word-counting rules",
      "Repeated observation periods"
    ],
    "procedure": [
      "Choose a regular reporting interval and use the same definition of a newly acquired word throughout.",
      "Record meaningful spontaneous uses, avoiding double-counting inflected forms under the chosen inventory rules.",
      "Plot cumulative distinct words and words added per interval; record gaps in observation.",
      "Interpret gradual or irregular growth alongside sampling and language exposure, rather than treating one fast week as a universal transition."
    ],
    "measure": "Change in vocabulary count across comparable intervals.",
    "limitations": "Adapted observation. Removed unsupported claims of one new word every 90 minutes and a required bedtime rehearsal phase. The existence and definition of spurts depend on measurement and modelling.",
    "references": [
      {
        "title": "Reexamining the vocabulary spurt (2004)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15238048/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/15238048/"
  },
  {
    "age": "20 months",
    "startAge": {
      "value": 20,
      "unit": "months"
    },
    "name": "Early signed-word communication",
    "experiment": "Adapted longitudinal observation of infants with natural exposure to a signed language; distinguish gestures, repetitive manual forms and meaningful signs.",
    "findings": "Manual babbling has been reported in deaf infants exposed to signing, supporting comparison of language development across modalities.",
    "concept": "Language across signed and spoken modalities",
    "source": "Babbling in the manual mode: evidence for the ontogeny of language (1991)",
    "kind": "observation",
    "materials": [
      "Consented natural-play videos",
      "Fluent signer for coding",
      "Notes on language exposure"
    ],
    "procedure": [
      "Record ordinary interaction with a familiar fluent signer, keeping samples comparable in duration.",
      "Annotate repetitive hand forms separately from communicative gestures and conventional signs.",
      "Ask a second fluent coder to independently classify examples; record ambiguous forms rather than forcing a category.",
      "Repeat over time and compare the same child’s repertoire in context."
    ],
    "measure": "Coded manual forms, conventional signs and communicative uses over repeated observations.",
    "limitations": "Adapted observation, not an imitation test or a claim that all movements are linguistic. The cited paper concerns manual babbling; it does not independently establish the documentary’s specific 20-month vocabulary examples.",
    "references": [
      {
        "title": "Babbling in the manual mode: evidence for the ontogeny of language (1991)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2006424/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/2006424/"
  },
  {
    "age": "24 months",
    "startAge": {
      "value": 24,
      "unit": "months"
    },
    "name": "Generalising object labels by shape: follow-up",
    "experiment": "Research description: repeated naming of unfamiliar object categories organised by shape, followed by tests with new shape, colour and material matches.",
    "findings": "A nine-week study beginning at 17 months found increased shape-based label generalisation and vocabulary growth during training.",
    "concept": "Experience in learning object names",
    "source": "Object name learning provides on-the-job training for attention (2002)",
    "kind": "experiment",
    "materials": [
      "Unfamiliar infant-safe objects varying shape, colour and material",
      "Consistent invented category labels",
      "Comparison group",
      "Vocabulary records"
    ],
    "procedure": [
      "Assign children to labelled shape-organised training or the study’s comparison conditions.",
      "Across repeated weekly visits, play with named category examples that share shape while other properties vary.",
      "Test extension of a newly introduced label to new examples matching shape versus other features.",
      "Record outside-laboratory vocabulary consistently before and during training; compare change across conditions."
    ],
    "measure": "Shape-based label-extension choices and reported object-name vocabulary growth.",
    "limitations": "The publication describes a nine-week study, not a verified independent 24-month follow-up. The exact eight-session account, test schedule and claim of more than threefold growth were not established from the accessible methods summary. A complete replication requires the full stimuli and protocol.",
    "references": [
      {
        "title": "Object name learning provides on-the-job training for attention (2002)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11892773/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/11892773/"
  },
  {
    "age": "24 months",
    "startAge": {
      "value": 24,
      "unit": "months"
    },
    "name": "Expressive vocabulary profile",
    "experiment": "Adapted language diary or structured caregiver report, rather than a simple laboratory experiment.",
    "findings": "Vocabulary and word-combination skills vary widely at the same age; production and comprehension require separate measures.",
    "concept": "Individual differences in early language",
    "source": "Variability in early communicative development (1994)",
    "kind": "observation",
    "materials": [
      "Language diary",
      "Consistent observation intervals",
      "Optional validated language inventory"
    ],
    "procedure": [
      "Record spontaneous words or combinations in ordinary routines over several days.",
      "Use consistent definitions: count a word form once, distinguish comprehension from production, and record meaningful use rather than prompted repetition.",
      "If formal comparison is required, use a validated inventory appropriate for the child’s language and age, following its manual.",
      "Compare repeated observations with the child’s earlier samples rather than setting a single pass/fail word target."
    ],
    "measure": "Counts and examples of spontaneously produced words or word combinations; comprehension recorded separately.",
    "limitations": "The linked normative research supports variation, not the original fixed claims of 50–100 words, 70% nouns, or 300 spoken/1,000 understood words for every child. Diary instructions here are adapted; formal inventory scoring requires the appropriate manual.",
    "references": [
      {
        "title": "Variability in early communicative development (1994)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/7845413/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/7845413/"
  },
  {
    "age": "3 months (originally 12 weeks)",
    "startAge": {
      "value": 3,
      "unit": "months"
    },
    "name": "Responses to emotional music during EEG recording",
    "experiment": "Laboratory recording of infant EEG and heart rate during affective music; the matching publication tested infants at 3, 6, 9 and 12 months.",
    "findings": "Physiological responses to music varied with age. This publication does not establish that infant responses mirror the mother or predict attachment security.",
    "concept": "Physiological responses to affective music",
    "source": "Development of frontal EEG and heart-rate responses to affective musical stimuli (2003)",
    "kind": "experiment",
    "materials": [
      "Infant EEG/ECG equipment",
      "Calibrated audio playback",
      "Recorded music excerpts"
    ],
    "procedure": [
      "Research-laboratory description: obtain baseline EEG/ECG while the infant is settled, then present the selected affective musical excerpts.",
      "Use the publication’s electrode montage, excerpt durations, preprocessing and artifact rejection; these technical details are needed for replication and are not specified here.",
      "Compare EEG power and heart-rate responses across music and baseline periods and across age groups."
    ],
    "measure": "Artifact-cleaned EEG spectral power and heart rate, not inferred attachment quality.",
    "limitations": "Related publication verified; the original video’s mother–infant synchrony interpretation and exact musical protocol are unverified. Requires specialist equipment.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12812802/",
    "references": [
      {
        "title": "Development of frontal EEG and heart-rate responses to affective musical stimuli (2003)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12812802/"
      }
    ]
  },
  {
    "age": "24 to 36 months",
    "startAge": {
      "value": 24,
      "unit": "months"
    },
    "endAge": {
      "value": 36,
      "unit": "months"
    },
    "name": "Waiting for a reward and cooperating with an adult",
    "experiment": "Two separate paradigms: waiting before touching a reward, and coordinating complementary actions with an adult partner.",
    "findings": "Waiting behavior varies with task demands and experience. In the cooperation study, 18–24-month-olds coordinated activities and sometimes tried to reengage a partner who stopped.",
    "concept": "Self-regulation and cooperative action",
    "source": "Cooperative activities in young children and chimpanzees (2006)",
    "kind": "experiment",
    "materials": [
      "Safe attractive toy",
      "Simple apparatus requiring two complementary actions",
      "Video camera"
    ],
    "procedure": [
      "Adapted waiting observation: place a safe toy in view, briefly ask the child to wait, then allow access; record the actual delay and adult prompts.",
      "For the published cooperation paradigm, use an apparatus requiring child and adult roles to achieve a shared effect; demonstrate the action before testing.",
      "Compare ordinary joint activity with trials in which the adult stops participating; record whether the child waits, attempts alone, or recruits the adult."
    ],
    "measure": "Waiting latency, successful joint actions and attempts to reengage the partner.",
    "limitations": "The reward and cooperation tasks are distinct. Exact video waiting protocol was not verified; do not infer a fixed sex difference or individual developmental diagnosis.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/16686793/",
    "references": [
      {
        "title": "Cooperative activities in young children and chimpanzees (2006)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16686793/"
      }
    ]
  },
  {
    "age": "6 to 36 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "endAge": {
      "value": 36,
      "unit": "months"
    },
    "name": "Pretend play and coordination with a peer",
    "experiment": "Observe functional and pretend play, then compare how two children coordinate a shared goal.",
    "findings": "Play and peer coordination become more elaborate with experience; a published peer task found age-related increases across the second and third years.",
    "concept": "Symbolic play and peer coordination",
    "source": "Becoming a social partner with peers (2006)",
    "kind": "observation",
    "materials": [
      "Child-safe pretend food and dolls",
      "Two-handle cooperative toy or equivalent research apparatus",
      "Camera"
    ],
    "procedure": [
      "Adapted play observation: offer the same toy set in a quiet space and record an equal observation period at each visit.",
      "Code actions as exploration, conventional object use, self-directed pretense, other-directed pretense or linked pretend sequences.",
      "The related peer experiment used paired handles to operate a mechanical toy; compare pulling together with a version requiring a sequence of actions. Record whether children monitor the partner."
    ],
    "measure": "Frequency and complexity of pretend actions; coordinated attempts, partner monitoring and successful activations.",
    "limitations": "The documentary examples are not one standardized protocol. The cited peer study involved 19-, 23- and 27-month-olds; it does not support categorical claims that all two-year-olds fail and all three-year-olds succeed.",
    "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3351034/",
    "references": [
      {
        "title": "Becoming a social partner with peers (2006)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3351034/"
      },
      {
        "title": "Infant Play & Exploration: primary-publication bibliography",
        "url": "https://wp.nyu.edu/catherinetamislemonda/articles_and_chapters/infant-play-and-exploration/"
      }
    ]
  },
  {
    "age": "14 to 30 months",
    "startAge": {
      "value": 14,
      "unit": "months"
    },
    "endAge": {
      "value": 30,
      "unit": "months"
    },
    "name": "Body-as-obstacle and miniature-object scale errors",
    "experiment": "A child tries to push a cart attached to the mat beneath their feet; in a separate task, miniature objects replace familiar full-size play objects.",
    "findings": "Performance on the body-as-obstacle task improves with age. Some 18–30-month-olds attempt actions on miniatures that cannot accommodate their bodies.",
    "concept": "Body self-awareness and perception–action coordination",
    "source": "The development of body self-awareness (2007)",
    "kind": "experiment",
    "materials": [
      "Cart with attached mat",
      "Separate weighted-mat control",
      "Full-size and miniature slide, chair and car",
      "Camera"
    ],
    "procedure": [
      "Cart task: after familiarizing the child with pushing, attach a mat behind the cart so pushing requires standing on it; ask the child to push toward a caregiver.",
      "Compare with a condition in which a separate heavy object, rather than the child, obstructs the mat; record stepping off or removing the obstacle.",
      "Scale-error task: permit play with full-size objects, replace them with miniature counterparts while the child is absent, then observe spontaneous attempts. Distinguish genuine attempted use from pretense."
    ],
    "measure": "Successful removal of the obstacle; serious attempts to sit, enter or slide on miniatures.",
    "limitations": "Two separate studies, not an all-or-none 18-month milestone. The scale-error finding does not show that emotion overrides size perception.",
    "sourceUrl": "https://doi.org/10.1111/j.1532-7078.2007.tb00220.x",
    "references": [
      {
        "title": "The development of body self-awareness (2007)",
        "url": "https://doi.org/10.1111/j.1532-7078.2007.tb00220.x"
      },
      {
        "title": "Scale errors offer evidence for a perception-action dissociation (2004)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15143286/"
      }
    ]
  },
  {
    "age": "8 to 18 months",
    "startAge": {
      "value": 8,
      "unit": "months"
    },
    "endAge": {
      "value": 18,
      "unit": "months"
    },
    "name": "Separation–reunion behavior and social advice on slopes",
    "experiment": "A standardized attachment assessment observes separation and reunion; a separate locomotion experiment varies slope difficulty and caregiver advice.",
    "findings": "Reunion behavior contributes to attachment classification under standardized conditions. Experienced walkers in the slope study used advice most at slopes near their individual action limits.",
    "concept": "Attachment behavior and social referencing",
    "source": "Attachment, exploration, and separation in one-year-olds (1970)",
    "kind": "assessment",
    "materials": [
      "Standardized assessment room and trained coders",
      "Laboratory adjustable walkway with spotter",
      "Video recording"
    ],
    "procedure": [
      "Professional assessment only: the Strange Situation uses a prescribed sequence of caregiver presence, stranger introduction, brief separations and reunions; score behavior using a trained coding system.",
      "Slope research: first establish each infant’s safe, borderline and risky slopes using repeated supervised trials.",
      "Compare encouragement and discouragement at each risk level, with a trained experimenter preventing falls."
    ],
    "measure": "Proximity seeking, contact maintenance and exploration during reunion; slope attempts, refusals and alternatives.",
    "limitations": "These procedures are not home tests. Attachment cannot be classified from one separation episode; the slope study tested 18-month-old walkers, not the entire listed age range.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/5490680/",
    "references": [
      {
        "title": "Attachment, exploration, and separation in one-year-olds (1970)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/5490680/"
      },
      {
        "title": "When infants take mothers’ advice (2008)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4450807/"
      }
    ]
  },
  {
    "age": "9 to 18 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "endAge": {
      "value": 18,
      "unit": "months"
    },
    "name": "Distinguishing unwilling, unable and accidental actions",
    "experiment": "Separate tasks examine toy offers that fail through refusal or inability, and imitation of actions marked intentional or accidental.",
    "findings": "Infants aged 9, 12 and 18 months responded differently to unwilling and unable toy offers. In a separate study, 14–18-month-olds copied more intentional than accidental actions.",
    "concept": "Goal-directed action understanding",
    "source": "Unwilling versus unable: infants’ understanding of intentional action (2005)",
    "kind": "experiment",
    "materials": [
      "Attractive toys",
      "Objects producing an interesting two-step effect",
      "Camera"
    ],
    "procedure": [
      "Toy-offer task: establish a routine of passing toys, then intersperse unsuccessful offers involving refusal, teasing or an accidental failure.",
      "Balance unsuccessful trial types and record reaching, disengagement and waiting instead of assuming an emotion from a single gesture.",
      "Imitation task: model two-step actions, marking one as intended and another as accidental; offer the object and record which actions the infant reproduces."
    ],
    "measure": "Reaching and looking away during unsuccessful offers; proportion of modeled actions copied.",
    "limitations": "These are separate published paradigms; this entry does not reconstruct the unidentified goal-tracking video or claim full adult-like theory of mind.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/15769189/",
    "references": [
      {
        "title": "Unwilling versus unable: infants’ understanding of intentional action (2005)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15769189/"
      },
      {
        "title": "Intentional and accidental action imitation (1998)",
        "url": "https://doi.org/10.1016/S0163-6383(98)90009-1"
      }
    ]
  },
  {
    "age": "11 months",
    "startAge": {
      "value": 11,
      "unit": "months"
    },
    "name": "Cruising across gaps in hand and foot support",
    "experiment": "Laboratory cruising task contrasts an adjustable gap in a handrail with an adjustable gap in the floor beneath a continuous handrail.",
    "findings": "Cruisers adjusted attempts to handrail gaps more accurately than to floor gaps, showing that learning about support can be posture- and task-specific.",
    "concept": "Affordances for cruising",
    "source": "Developmental continuity? Crawling, cruising, and walking (2011)",
    "kind": "experiment",
    "materials": [
      "Adjustable handrail and floor-gap apparatus",
      "Safety mats and trained spotter",
      "Camera"
    ],
    "procedure": [
      "Laboratory procedure only: document cruising experience and place the infant at one end of the supported walkway.",
      "Vary handrail gaps with the floor continuous, and floor gaps with the handrail continuous; use supervised trials to estimate the largest gap crossed successfully.",
      "Code attempts, refusals, success and exploratory hand/foot movements; the spotter prevents an actual fall."
    ],
    "measure": "Attempt probability relative to successful cruising threshold in each support condition.",
    "limitations": "The original summary incorrectly described simple handrail presence/absence and actual falls. Do not recreate gaps or precipices at home.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/21399716/",
    "references": [
      {
        "title": "Developmental continuity? Crawling, cruising, and walking (2011)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21399716/"
      }
    ]
  },
  {
    "age": "6 to 9 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "endAge": {
      "value": 9,
      "unit": "months"
    },
    "name": "Locomotor experience and wariness of heights",
    "experiment": "Compare locomotor experience with responses to apparent depth; a related randomized study gave precrawlers powered-mobility experience.",
    "findings": "Powered-mobility experience increased visual proprioception and wariness of heights compared with controls. Depth perception and avoidance are distinct measures.",
    "concept": "Self-produced movement and height avoidance",
    "source": "The epigenesis of wariness of heights (2013)",
    "kind": "experiment",
    "materials": [
      "Safety-glass visual cliff or research depth display",
      "Powered mobility device",
      "Visual-proprioception apparatus",
      "Camera"
    ],
    "procedure": [
      "Laboratory description: record age and locomotor experience; assess responses on a protected apparent-depth display.",
      "In the intervention study, randomly assign precrawlers to controlled powered-mobility experience or a comparison condition.",
      "Use the publication’s training schedule and standardized visual-proprioception/height measures; compare groups rather than diagnosing individual fear."
    ],
    "measure": "Crossing/avoidance and independently measured visual proprioception.",
    "limitations": "The exact eight-session documentary protocol is unverified. A visible drop-off requires laboratory protection; avoidance does not mark the first appearance of depth perception.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/23722981/",
    "references": [
      {
        "title": "The epigenesis of wariness of heights (2013)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23722981/"
      }
    ]
  },
  {
    "age": "2 to 5 months",
    "startAge": {
      "value": 2,
      "unit": "months"
    },
    "endAge": {
      "value": 5,
      "unit": "months"
    },
    "name": "The emergence of directed reaching",
    "experiment": "Repeatedly observe infants reaching toward a toy while quantifying movement paths around the onset of successful reaching.",
    "findings": "Directed reaching emerges through changes in movement control and experience; infants do not all pass through a fixed inability-at-four-months rule.",
    "concept": "Development of coordinated reaching",
    "source": "The transition to reaching: mapping intention and intrinsic dynamics (1993)",
    "kind": "observation",
    "materials": [
      "Age-appropriate toy",
      "Supported infant seating",
      "Camera or motion-capture system"
    ],
    "procedure": [
      "Adapted longitudinal observation: support the infant comfortably and present the same graspable toy within reach.",
      "Offer repeated opportunities from a consistent position at each visit; record attempted reaches, contacts and grasps without moving the infant’s limbs.",
      "The related original study followed four infants weekly and analyzed movements around each infant’s first extended-arm reach."
    ],
    "measure": "Reach onset, contact/grasp success and movement trajectories.",
    "limitations": "Exact foot-reaching and arm-restriction video protocols were not verified. Avoid the earlier claim that all four-month-olds cannot reach with their hands.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/8404257/",
    "references": [
      {
        "title": "The transition to reaching: mapping intention and intrinsic dynamics (1993)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8404257/"
      }
    ]
  },
  {
    "age": "0 to 6 months",
    "startAge": {
      "value": 0,
      "unit": "months"
    },
    "endAge": {
      "value": 6,
      "unit": "months"
    },
    "name": "Body mechanics in infant stepping and contingency learning",
    "experiment": "Two separate paradigms examine how supported stepping changes with mechanical conditions, and how leg kicks can control an overhead mobile.",
    "findings": "Reducing effective leg load can increase stepping; mobile-linked kicking demonstrates learning of an action–effect contingency rather than proving a general concept of agency.",
    "concept": "Dynamic motor control and contingency learning",
    "source": "The relationship between physical growth and a newborn reflex (1984)",
    "kind": "experiment",
    "materials": [
      "Laboratory supported-stepping equipment",
      "Temperature-controlled research water setup",
      "Research mobile apparatus and movement recording"
    ],
    "procedure": [
      "Professional laboratory description: compare supported stepping under standardized conditions, including the published manipulation reducing leg loading.",
      "Count steps from video and monitor behavioral state so arousal differences are not mistaken for mechanical effects.",
      "For the separate mobile paradigm, record baseline kicking, a period when kicks move the mobile and a nonreinforced test; use the original apparatus and supervision."
    ],
    "measure": "Steps per observation interval; kicking rate relative to baseline and noncontingent comparison.",
    "limitations": "Water immersion and limb attachments are research procedures, not home activities. The stepping and mobile studies have different protocols; the exact documentary mobile attribution is unverified.",
    "sourceUrl": "https://doi.org/10.1016/S0163-6383(84)80007-7",
    "references": [
      {
        "title": "The relationship between physical growth and a newborn reflex (1984)",
        "url": "https://doi.org/10.1016/S0163-6383(84)80007-7"
      }
    ]
  },
  {
    "age": "14 months",
    "startAge": {
      "value": 14,
      "unit": "months"
    },
    "name": "Walking under changed body loads",
    "experiment": "A laboratory load-carriage experiment assessed 14-month-olds walking with additional weight in shoulder packs.",
    "findings": "Additional loads changed walking and balance control. Responses reflect the fit between the child’s current skill, body and task.",
    "concept": "Adaptation to changing body mechanics",
    "source": "Baby carriage: infants walking with loads (2007)",
    "kind": "experiment",
    "materials": [
      "Laboratory walkway",
      "Research shoulder packs",
      "Video or gait measurement",
      "Trained spotter"
    ],
    "procedure": [
      "Laboratory description only: measure baseline walking without a load.",
      "The verified study compared walking with shoulder-pack loads equal to 15% of body weight; use its exact pack placement and trial protocol for research replication.",
      "Record changes in steps and balance, comparing each infant with their own baseline."
    ],
    "measure": "Gait and balance changes between unloaded and loaded conditions.",
    "limitations": "The original entry’s 25% figure was incorrect for the linked study. Combining slopes and load carriage into one protocol was not verified; do not add weights to a child for a home demonstration.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/17381796/",
    "references": [
      {
        "title": "Baby carriage: infants walking with loads (2007)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17381796/"
      }
    ]
  },
  {
    "age": "8, 18, and 36 months",
    "startAge": {
      "value": 8,
      "unit": "months"
    },
    "endAge": {
      "value": 36,
      "unit": "months"
    },
    "name": "Social and emotional development observation framework",
    "experiment": "Use the California infant/toddler foundations to organize observations of interactions, emotional expression, relationships and regulation.",
    "findings": "The framework describes typical patterns around reference ages; it is not a single experiment or a pass/fail developmental test.",
    "concept": "Social and emotional development",
    "source": "California Infant/Toddler Learning & Development Foundations (2009)",
    "kind": "framework",
    "materials": [
      "Published framework",
      "Dated observation notes",
      "Familiar play materials"
    ],
    "procedure": [
      "Choose one domain, such as interactions with peers or expression of emotion.",
      "Observe ordinary routines on several occasions and record concrete actions, context and adult support.",
      "Compare observations with the framework’s examples near the child’s age, noting variation rather than assigning a stage from one event."
    ],
    "measure": "Descriptive examples of behavior across contexts and visits.",
    "limitations": "The 8-, 18- and 36-month anchors belong to the 2009 framework and are approximate. The current second edition has a revised structure; the existing source video does not establish an experimental finding.",
    "sourceUrl": "https://www.cde.ca.gov/sp/cd/re/documents/itfoundations2009.pdf",
    "references": [
      {
        "title": "California Infant/Toddler Learning & Development Foundations (2009)",
        "url": "https://www.cde.ca.gov/sp/cd/re/documents/itfoundations2009.pdf"
      }
    ]
  },
  {
    "age": "8, 18, and 36 months",
    "startAge": {
      "value": 8,
      "unit": "months"
    },
    "endAge": {
      "value": 36,
      "unit": "months"
    },
    "name": "Relationships with familiar adults across routines",
    "experiment": "Observe how a child seeks help, maintains contact and explores with familiar caregivers during everyday routines.",
    "findings": "The foundation describes increasing complexity in reciprocal interaction and use of familiar adults as support, with substantial contextual variation.",
    "concept": "Caregiver relationships and secure-base behavior",
    "source": "California Infant/Toddler Learning & Development Foundations (2009)",
    "kind": "framework",
    "materials": [
      "Published relationships framework",
      "Observation log"
    ],
    "procedure": [
      "Adapted observation: select familiar routines such as arrival, play and a naturally occurring request for help.",
      "Record what happened before the behavior, the child’s actions and the adult response; do not create distress or separation to obtain a response.",
      "Repeat across days and adults, comparing patterns rather than isolated actions."
    ],
    "measure": "Frequency and context of help seeking, checking back, reciprocal interaction and independent exploration.",
    "limitations": "Framework guidance does not classify attachment security. The listed benchmark ages are descriptive, not compulsory deadlines.",
    "sourceUrl": "https://www.cde.ca.gov/sp/cd/re/documents/itfoundations2009.pdf",
    "references": [
      {
        "title": "California Infant/Toddler Learning & Development Foundations (2009)",
        "url": "https://www.cde.ca.gov/sp/cd/re/documents/itfoundations2009.pdf"
      }
    ]
  },
  {
    "age": "0 to 2 months",
    "startAge": {
      "value": 0,
      "unit": "months"
    },
    "endAge": {
      "value": 2,
      "unit": "months"
    },
    "name": "Clinical observation of newborn reflexes",
    "experiment": "A clinician examines reflex responses as part of a broader newborn neurological examination.",
    "findings": "Reflex presence, symmetry and quality contribute to clinical interpretation; individual reflexes have different developmental time courses.",
    "concept": "Newborn neurological assessment",
    "source": "Stanford Medicine: Newborn examination",
    "kind": "assessment",
    "materials": [
      "Clinical examination setting",
      "Qualified clinician"
    ],
    "procedure": [
      "Clinical description: the examiner first observes spontaneous movement, posture and alertness.",
      "Within the professional newborn examination, assess sucking, hand/foot grasp and Moro responses with appropriate support and interpret symmetry and quality in context.",
      "Record the examination conditions and any concern for clinical follow-up."
    ],
    "measure": "Clinician-rated presence, symmetry and quality of responses.",
    "limitations": "Not a home experiment. Never suspend an infant by the grasp, drop an infant or provoke a startle for testing; the earlier body-weight and sudden-drop statements were unsafe and misleading.",
    "sourceUrl": "https://med.stanford.edu/newborns/clinical-rotations/students/students-newborn-exam.html",
    "references": [
      {
        "title": "Stanford Medicine: Newborn examination",
        "url": "https://med.stanford.edu/newborns/clinical-rotations/students/students-newborn-exam.html"
      }
    ]
  },
  {
    "age": "Toddler (~12 to 18 months)",
    "startAge": {
      "value": 12,
      "unit": "months"
    },
    "endAge": {
      "value": 18,
      "unit": "months"
    },
    "name": "Open-ended exploration of movable furniture",
    "experiment": "A teaching-video observation describes toddlers experimenting with chairs; no matching controlled study was identified.",
    "findings": "The clip can illustrate persistence and problem solving, but does not establish that a particular caregiver style caused those behaviors.",
    "concept": "Exploration, persistence and spontaneous coordination",
    "source": "Original teaching video; matching publication unverified",
    "kind": "observation",
    "materials": [
      "Stable child-safe lightweight play furniture",
      "Clear supervised play area",
      "Observation log"
    ],
    "procedure": [
      "Adapted observation: offer safe movable play objects in a clear area under close supervision.",
      "Allow spontaneous exploration; record actions, repeated attempts, changes in strategy and interactions with a peer.",
      "Note adult prompts and intervention so supported and independent behavior are distinguishable."
    ],
    "measure": "Description and duration of attempts, strategy changes and peer exchanges.",
    "limitations": "The exact video sample, trial duration and publication are unverified. This is a repeatable observation format, not a reproduction of a validated experiment.",
    "references": []
  },
  {
    "age": "9 to 24 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "endAge": {
      "value": 24,
      "unit": "months"
    },
    "name": "Manual babbling in sign-exposed infants",
    "experiment": "Video analysis compares repetitive hand movements of infants exposed to a signed language with movements of comparison infants.",
    "findings": "The published study reported organized manual babbling in sign-exposed infants, supporting the view that early language patterning can occur in a manual modality.",
    "concept": "Early language patterning across modalities",
    "source": "Babbling in the manual mode (1991)",
    "kind": "observation",
    "materials": [
      "Video recordings of natural interaction",
      "Sign-language expert coders",
      "Defined coding categories"
    ],
    "procedure": [
      "Observe ordinary caregiver–infant interaction across multiple visits, documenting signed and spoken-language exposure.",
      "Identify repetitive hand movements and distinguish communicative signs, ordinary gestures and candidate manual babbling.",
      "Have trained coders assess handshape, location and movement organization and compare groups using the publication’s criteria."
    ],
    "measure": "Frequency and organization of candidate babbling forms relative to other hand movements.",
    "limitations": "Not all repetitive hand movements are manual babbling. The original entry overstated identical development and simultaneous milestones for all bilingual children; exact video child examples are unnecessary.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/2006424/",
    "references": [
      {
        "title": "Babbling in the manual mode (1991)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2006424/"
      }
    ]
  },
  {
    "age": "1 to 2 years",
    "startAge": {
      "value": 12,
      "unit": "months"
    },
    "endAge": {
      "value": 24,
      "unit": "months"
    },
    "name": "Persistence during fine-motor play",
    "experiment": "Observe repeated attempts at a manageable object task, such as placing large shapes in matching openings.",
    "findings": "The original clip illustrates engagement and persistence; it does not isolate the causal effect of praise or establish a universal response to praise.",
    "concept": "Fine-motor problem solving and task engagement",
    "source": "Original teaching video; matching publication unverified",
    "kind": "observation",
    "materials": [
      "Large age-appropriate shape sorter or stacking objects",
      "Camera or timer",
      "Observation sheet"
    ],
    "procedure": [
      "Adapted observation: present one familiar and one moderately challenging safe task, with equal observation time.",
      "Record attempts, successful placements, strategy changes, requests for help and adult language.",
      "For repeated observations, keep materials and adult prompting comparable; describe praise without claiming an experimental effect."
    ],
    "measure": "Time engaged, attempts before stopping, independent successes and help requests.",
    "limitations": "No matching published protocol was verified for the supplied teaching-video description. This is observational and cannot separate praise effects from task difficulty, familiarity or adult assistance.",
    "references": []
  },
  {
    "age": "7 to 20 months",
    "startAge": {
      "value": 7,
      "unit": "months"
    },
    "endAge": {
      "value": 20,
      "unit": "months"
    },
    "name": "Following gaze behind an occluding barrier",
    "experiment": "Infants observe an adult looking toward a location hidden from the infant’s initial viewpoint.",
    "findings": "In the verified study, 12- and 18-month-olds moved to gain a view of locations behind barriers, consistent with spatially informed gaze following.",
    "concept": "Joint attention and spatial gaze following",
    "source": "12- and 18-month-old infants follow gaze to spaces behind barriers (2004)",
    "kind": "experiment",
    "materials": [
      "Opaque barrier",
      "Adult seated with clear view of hidden location",
      "Camera"
    ],
    "procedure": [
      "Seat or position the child where an opaque barrier hides a target location but allows the adult to see it.",
      "After obtaining attention, the adult turns to look behind the barrier; compare with control looks specified in the publication.",
      "Record whether the infant moves around the barrier to inspect the target location, not merely whether their head turns."
    ],
    "measure": "Proportion of trials with movement to the correct viewing position.",
    "limitations": "The linked study does not establish a universal onset at 9 months, a categorical human–chimpanzee difference, or the separate activity-categorization task in the original video summary.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/15323111/",
    "references": [
      {
        "title": "12- and 18-month-old infants follow gaze to spaces behind barriers (2004)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15323111/"
      }
    ]
  },
  {
    "age": "6 to 11 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "endAge": {
      "value": 11,
      "unit": "months"
    },
    "name": "Detecting boundaries in continuous human action",
    "experiment": "Infants view everyday action videos with pauses at action boundaries or within an unfinished action.",
    "findings": "Ten- to eleven-month-olds differentiated disruptions aligned with action boundaries from disruptions within actions.",
    "concept": "Segmentation of ongoing action",
    "source": "Infants parse dynamic action (2001)",
    "kind": "experiment",
    "materials": [
      "Standardized action videos",
      "Display",
      "Looking-time recording"
    ],
    "procedure": [
      "Present the same continuous action stream during familiarization, controlling scene and timing.",
      "At test, insert pauses either at completed action units or during an ongoing unit, using counterbalanced versions.",
      "Compare looking to the disrupted sequences with trained observers unaware of the condition where possible."
    ],
    "measure": "Looking-time response to boundary versus within-action interruptions.",
    "limitations": "This publication supports action parsing; the floating-person/box demonstration and point-light description were not verified and should not be treated as parts of this protocol. Exact video timings require the paper.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/11405577/",
    "references": [
      {
        "title": "Infants parse dynamic action (2001)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11405577/"
      }
    ]
  },
  {
    "age": "5 to 10 months",
    "startAge": {
      "value": 5,
      "unit": "months"
    },
    "endAge": {
      "value": 10,
      "unit": "months"
    },
    "name": "Learning regularities in action sequences",
    "experiment": "Infants view continuous actions whose transitions form predictable units, then see intact versus less predictable test units.",
    "findings": "A verified study found that 7–9-month-olds distinguished intact units from part-units, consistent with learning transitional probabilities.",
    "concept": "Statistical learning of event structure",
    "source": "Infants segment continuous events using transitional probabilities (2014)",
    "kind": "experiment",
    "materials": [
      "Standardized novel-agent action animation",
      "Screen",
      "Looking-time measurement"
    ],
    "procedure": [
      "Published-paradigm description: familiarize infants with continuous actions arranged into statistically coherent units while avoiding transitional movements that reveal the next action.",
      "Present intact units and part-units made across unit boundaries, controlling how often test sequences occurred during familiarization.",
      "Counterbalance sequence assignments and compare looking time at test."
    ],
    "measure": "Looking time to intact units versus part-units.",
    "limitations": "The exact documentary blow/feel/rattle protocol is unverified; this is a linked infant analogue, not a claim to reproduce that clip. The listed 5–10-month calendar span is broader than the verified 7–9-month sample.",
    "sourceUrl": "https://doi.org/10.1111/cdev.12247",
    "references": [
      {
        "title": "Infants segment continuous events using transitional probabilities (2014)",
        "url": "https://doi.org/10.1111/cdev.12247"
      }
    ]
  },
  {
    "age": "1 to 3 months",
    "startAge": {
      "value": 1,
      "unit": "months"
    },
    "endAge": {
      "value": 3,
      "unit": "months"
    },
    "name": "Learning and losing control of an audiovisual effect",
    "experiment": "Infants learn that an arm movement triggers an audiovisual event; researchers then temporarily remove the contingency.",
    "findings": "Published work found increased responding and negative expressions during extinction after contingency learning. This does not independently date social-smile onset.",
    "concept": "Contingency learning and frustration",
    "source": "Violation of expectancy, loss of control, and anger expressions (1990)",
    "kind": "experiment",
    "materials": [
      "Research arm-movement detector",
      "Controlled audiovisual display",
      "Facial-expression video"
    ],
    "procedure": [
      "Laboratory description: record baseline arm movements, then provide an audiovisual response contingent on the movement.",
      "Compare contingent learning with an appropriate noncontingent condition, then briefly omit the expected event under an approved stopping protocol.",
      "Code movement rates and facial behavior separately during baseline, learning and extinction."
    ],
    "measure": "Movement rate relative to baseline; coded facial expressions during loss of contingency.",
    "limitations": "Exact three-month documentary settings are unverified; related published samples covered multiple ages. Wrist attachments and distress induction require research oversight, not a home exercise.",
    "sourceUrl": "https://doi.org/10.1037/0012-1649.26.5.745",
    "references": [
      {
        "title": "Violation of expectancy, loss of control, and anger expressions (1990)",
        "url": "https://doi.org/10.1037/0012-1649.26.5.745"
      }
    ]
  },
  {
    "age": "3 months to 18 weeks (originally 12–18 weeks)",
    "startAge": {
      "value": 3,
      "unit": "months"
    },
    "endAge": {
      "value": 18,
      "unit": "weeks"
    },
    "name": "Matching familiar facial and vocal emotions",
    "experiment": "Infants view happy and sad facial expressions paired with vocal expressions, comparing familiar and unfamiliar people.",
    "findings": "Familiarity can facilitate matching emotional information across face and voice. Responses do not support fixed mother/female-stranger/father deadlines for every infant.",
    "concept": "Multisensory emotion perception",
    "source": "The role of person familiarity in emotion perception (2001)",
    "kind": "experiment",
    "materials": [
      "Consented parent and unfamiliar-person face/voice recordings",
      "Display and audio",
      "Looking-time camera"
    ],
    "procedure": [
      "Record matched emotional expressions under comparable conditions and present paired expressions with a sound-specified emotion.",
      "Counterbalance side, emotion and familiar/unfamiliar identity; measure visual attention to the face corresponding with the voice.",
      "Keep expression intensity and recording conditions comparable; use the original study’s timing for replication."
    ],
    "measure": "Looking toward the affectively corresponding face and coded smiling.",
    "limitations": "The jack-in-the-box temperament demonstration is a separate protocol and is not reconstructed here. Original 12-week starting ages remain visible in the label; calendar normalization is not a scientific age equivalence.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/11333071/",
    "references": [
      {
        "title": "The role of person familiarity in emotion perception (2001)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11333071/"
      },
      {
        "title": "Mothers, fathers, and infants: familiarity and emotional expression (2002)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12361304/"
      }
    ]
  },
  {
    "age": "9 to 35 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "endAge": {
      "value": 35,
      "unit": "months"
    },
    "name": "Repeated assessment of temperament and frontal EEG",
    "experiment": "A longitudinal research program combines behavior in unfamiliar situations with recordings of frontal EEG asymmetry.",
    "findings": "Some temperament patterns show continuity, but trajectories also change; EEG asymmetry is a group-level correlate, not a deterministic label for an individual child.",
    "concept": "Temperament continuity and change",
    "source": "Continuity and discontinuity of behavioral inhibition and exuberance (2001)",
    "kind": "assessment",
    "materials": [
      "Research EEG system",
      "Standardized unfamiliar stimuli",
      "Behavior-coding videos"
    ],
    "procedure": [
      "Professional research description: record baseline EEG with a standardized montage and artifact procedure.",
      "At repeated ages, observe responses to predefined unfamiliar people, objects or situations with caregiver support and approved distress stopping rules.",
      "Use blinded coding of approach, avoidance, motor activity and affect; relate these measures across visits rather than classifying a child from one episode."
    ],
    "measure": "Frontal EEG asymmetry and repeated behavioral inhibition/exuberance scores.",
    "limitations": "The exact nine-month puppet/mask and toddler robot sequence was not verified. The linked longitudinal sample supports continuity and discontinuity, not fixed left/right personality types.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/11280472/",
    "references": [
      {
        "title": "Continuity and discontinuity of behavioral inhibition and exuberance (2001)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11280472/"
      }
    ]
  },
  {
    "age": "9 to 10 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "endAge": {
      "value": 10,
      "unit": "months"
    },
    "name": "Using caregiver emotion in an ambiguous situation",
    "experiment": "The visual-cliff social-referencing paradigm varies the caregiver’s displayed emotion while the infant considers an apparent drop-off protected by safety glass.",
    "findings": "In the original study, caregiver emotional displays influenced crossing at an ambiguous apparent depth. Findings vary with setup and locomotor experience.",
    "concept": "Social referencing under uncertainty",
    "source": "Maternal emotional signaling and visual-cliff behavior (1985)",
    "kind": "experiment",
    "materials": [
      "Research safety-glass visual cliff",
      "Standardized caregiver expressions",
      "Camera and timer"
    ],
    "procedure": [
      "Laboratory description only: set a protected apparent drop-off to an ambiguous depth rather than exposing the child to a real fall.",
      "Position the caregiver across the display and ask them to show an assigned emotion when the infant looks toward them.",
      "Record referencing, crossing and crossing latency under standardized trial limits; counterbalance conditions as specified in the paper."
    ],
    "measure": "Crossing probability and latency after the emotional signal.",
    "limitations": "The original sample was 12 months, not the listed documentary 9–10-month range. The dangerous-plant prohibition clip was not verified; do not recreate it or infer immediate compliance from temperament.",
    "sourceUrl": "https://doi.org/10.1037/0012-1649.21.1.195",
    "references": [
      {
        "title": "Maternal emotional signaling and visual-cliff behavior (1985)",
        "url": "https://doi.org/10.1037/0012-1649.21.1.195"
      }
    ]
  },
  {
    "age": "6 to 30 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "endAge": {
      "value": 30,
      "unit": "months"
    },
    "name": "Observing regulation during frustration",
    "experiment": "Research assessments code reactions and self-regulatory behavior during brief standardized challenges.",
    "findings": "Reactivity and regulation vary across infants and ages. Looking away, self-comforting and communication can serve different functions depending on context.",
    "concept": "Developing regulation and coping",
    "source": "The regulation of negative reactivity in infancy (1995)",
    "kind": "assessment",
    "materials": [
      "Standardized research challenge materials",
      "Video recording",
      "Trained behavioral coders"
    ],
    "procedure": [
      "Professional research description: observe baseline interaction, then use an approved brief challenge with predefined distress stopping criteria.",
      "The linked study used arm restraint at five months and toy removal at ten months, coding behavior in ten-second intervals.",
      "Code intensity and timing of distress alongside gaze avoidance, orienting, self-comforting and communication; compare patterns across visits."
    ],
    "measure": "Latency and intensity of crying plus frequency and timing of regulatory behaviors.",
    "limitations": "The exact six/nine-month, tarantula and sealed-bag documentary protocols were not verified; do not deliberately ignore distress or restrain limbs as a home activity. The listed age span covers several distinct observations.",
    "sourceUrl": "https://doi.org/10.1037/0012-1649.31.3.448",
    "references": [
      {
        "title": "The regulation of negative reactivity in infancy (1995)",
        "url": "https://doi.org/10.1037/0012-1649.31.3.448"
      }
    ]
  },
  {
    "age": "14 to 36 months",
    "startAge": {
      "value": 14,
      "unit": "months"
    },
    "endAge": {
      "value": 36,
      "unit": "months"
    },
    "name": "Mirror self-recognition and responses to task outcomes",
    "experiment": "A mirror-mark task examines self-directed responses to a discreet facial mark; a separate study observes behavior after success or failure on tasks.",
    "findings": "Self-directed mark touching becomes more common during the second year. Task outcomes can elicit pride- or shame-like displays, but facial/body behavior alone does not prove an internal emotion.",
    "concept": "Self-recognition and self-evaluative emotion",
    "source": "Mirror self-image reactions before age two (1972)",
    "kind": "experiment",
    "materials": [
      "Mirror",
      "Skin-safe removable mark with consent",
      "Age-appropriate puzzles",
      "Camera"
    ],
    "procedure": [
      "Adapted mark observation: establish ordinary mirror behavior, apply a small removable mark unobtrusively if tolerated, then present the mirror.",
      "Distinguish touching the own-face mark from touching the reflection; include a no-mirror comparison to check whether the mark itself is felt.",
      "The separate success/failure paradigm varies task difficulty and completion outcome, with trained coders assessing posture, gaze and expression; do not engineer humiliating failure at home."
    ],
    "measure": "Self-directed mark touches; coded behavior after task success and failure.",
    "limitations": "No universal 18-month pass date. Mirror recognition does not establish that embarrassment is impossible beforehand; the two paradigms are not one experiment.",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/4679817/",
    "references": [
      {
        "title": "Mirror self-image reactions before age two (1972)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/4679817/"
      },
      {
        "title": "Differences in shame and pride by task difficulty (1992)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1600827/"
      }
    ]
  },
  {
    "age": "3 to 5 years",
    "startAge": {
      "value": 36,
      "unit": "months"
    },
    "endAge": {
      "value": 60,
      "unit": "months"
    },
    "name": "Preschool curriculum and classroom observation",
    "experiment": "Observe classroom organisation and teaching within a preschool curriculum; this is a curriculum framework rather than a short developmental test.",
    "findings": "The original video description does not establish effectiveness. A federal evaluation randomly assigned preschool settings to curricula; the 2013 evidence review found no discernible effects for the fourth edition on the academic domains reviewed.",
    "concept": "Classroom environment and guided learning",
    "source": "Effects of Preschool Curriculum Programs on School Readiness (PCER, 2008)",
    "kind": "framework",
    "materials": [
      "Classroom observation sheet",
      "Description of the curriculum edition",
      "Consented classroom observation"
    ],
    "procedure": [
      "Adapted observation: select a normal classroom period and record its duration, available activity areas and teacher-led versus child-selected activities.",
      "Record concrete examples of adult support, child participation and use of materials without grading individual children.",
      "Repeat in comparable periods; evaluating curriculum effectiveness requires a comparison design and the published assessment instruments."
    ],
    "measure": "Descriptions of classroom practices; causal effectiveness requires outcomes from intervention and comparison groups.",
    "limitations": "No matching publication was established for the supplied video. Do not infer improved learning from a well-organised classroom alone; findings depend on curriculum edition and outcome.",
    "references": [
      {
        "title": "Effects of Preschool Curriculum Programs on School Readiness (PCER, 2008)",
        "url": "https://ies.ed.gov/use-work/resource-library/report/research-report/effects-preschool-curriculum-programs-school-readiness-report-preschool-curriculum-evaluation"
      },
      {
        "title": "Creative Curriculum for Preschool: evidence review (2013)",
        "url": "https://ies.ed.gov/ncee/wwc/InterventionReport/512"
      }
    ],
    "sourceUrl": "https://ies.ed.gov/use-work/resource-library/report/research-report/effects-preschool-curriculum-programs-school-readiness-report-preschool-curriculum-evaluation"
  },
  {
    "age": "0 to 24 months",
    "startAge": {
      "value": 0,
      "unit": "months"
    },
    "endAge": {
      "value": 24,
      "unit": "months"
    },
    "name": "Hidden-object search and posture-dependent learning",
    "experiment": "This course entry combines hidden-object search, locomotor learning and developmental theories; the reproducible component below is an adapted A-not-B search task.",
    "findings": "Infants may return to a previously rewarded hiding place despite seeing an object moved. Search depends on delay, prior reaches and task context; an error alone does not show absence of object knowledge.",
    "concept": "Search, memory and action history",
    "source": "The task dynamics of the A-not-B error (1999)",
    "kind": "experiment",
    "materials": [
      "Two identical opaque covers",
      "One large toy",
      "Table within comfortable reach",
      "Video or trial sheet"
    ],
    "procedure": [
      "Adapted demonstration: seat a willing infant securely with two covers equally reachable; show the toy and hide it under cover A in full view.",
      "Allow retrieval, repeat at A, then visibly hide it at B while keeping cover positions unchanged.",
      "Record the first reach after the same brief pause on every trial; log the number of A repetitions and delay rather than assuming one universal protocol.",
      "Compare first choices before and after the switch; stop when the infant disengages."
    ],
    "measure": "First search location, retrieval success, delay and prior trial history.",
    "limitations": "The 0–24-month label is a course coverage span, not a validated task window. Universal grammar and sensorimotor stage theory are not outcomes of this experiment. Precipice tasks need laboratory safeguards.",
    "references": [
      {
        "title": "The task dynamics of the A-not-B error (1999)",
        "url": "https://web.stanford.edu/class/psych205/papers/SmithThelen1999.pdf"
      },
      {
        "title": "The dynamics of embodiment (2001)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11515285/"
      }
    ],
    "sourceUrl": "https://web.stanford.edu/class/psych205/papers/SmithThelen1999.pdf"
  },
  {
    "age": "3 to 6 years",
    "startAge": {
      "value": 36,
      "unit": "months"
    },
    "endAge": {
      "value": 72,
      "unit": "months"
    },
    "name": "Conservation, perspective and guided participation",
    "experiment": "The original entry combines unrelated preschool tasks and cross-cultural observations; below is an adapted liquid-conservation demonstration.",
    "findings": "Responses to conservation questions depend on wording, context and task demands. Cross-cultural guided-participation research documents variation, rather than a simple contrast between all Mayan and all US children.",
    "concept": "Conservation and interpretation of social instructions",
    "source": "Conservation accidents (1974; related number/length task)",
    "kind": "framework",
    "materials": [
      "Two identical transparent cups",
      "One taller narrower cup",
      "Water",
      "Tray"
    ],
    "procedure": [
      "Adapted demonstration: put visibly equal amounts of water in the identical cups and ask whether the amounts are equal.",
      "In full view pour one amount into the tall cup without adding or spilling water.",
      "Ask once whether either cup has more and invite an explanation; record the exact wording and response.",
      "Keep this separate from perspective-taking tasks and from observations of caregiver guidance."
    ],
    "measure": "Judgement before and after transfer and the child’s explanation.",
    "limitations": "The source of the space-station task and exact liquid protocol was not verified. The linked conservation paper studied number and length, not this liquid adaptation. The guided-participation paper involved 12–24-month-olds, outside this row’s preschool span.",
    "references": [
      {
        "title": "Conservation accidents (1974; related number/length task)",
        "url": "https://doi.org/10.1016/0010-0277(74)90003-1"
      },
      {
        "title": "Guided participation in cultural activity by toddlers and caregivers (1993)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8284000/"
      }
    ],
    "sourceUrl": "https://doi.org/10.1016/0010-0277(74)90003-1"
  },
  {
    "age": "2 to 6 years",
    "startAge": {
      "value": 24,
      "unit": "months"
    },
    "endAge": {
      "value": 72,
      "unit": "months"
    },
    "name": "Preschool drawing and body-proportion observation",
    "experiment": "Observe drawing and comfortable self-directed movements over time; this is not a validated assessment of myelination.",
    "findings": "Drawing and motor control vary with practice, opportunities, task demands and development. The supplied claims that an opposite-ear reach is achieved at age three and that squiggles directly measure incomplete myelination were not verified.",
    "concept": "Fine-motor development and individual variation",
    "source": "Original course/video observation; matching publication not established",
    "kind": "observation",
    "materials": [
      "Paper",
      "Age-appropriate crayons",
      "Dated observation notes"
    ],
    "procedure": [
      "Adapted observation: offer paper and crayons during a brief voluntary drawing period with the same materials at later visits.",
      "Ask the child to draw freely; record grip, marks, effort and any explanation without directing the hand.",
      "Compare dated samples over weeks or months and describe observable changes. Do not force an arm over the head or score an ear-touch manoeuvre as a developmental pass/fail."
    ],
    "measure": "Observable mark-making, grip changes and task engagement.",
    "limitations": "No matching published experimental protocol was identified from the supplied course title. This activity cannot measure brain myelination or diagnose developmental stage.",
    "references": []
  },
  {
    "age": "2 to 6 years",
    "startAge": {
      "value": 24,
      "unit": "months"
    },
    "endAge": {
      "value": 72,
      "unit": "months"
    },
    "name": "Social participation during preschool play",
    "experiment": "Use time-sampled observation to describe how a child participates in free play. Parenting-style and gender-role claims from the original composite entry require separate evidence.",
    "findings": "Children can show solitary, parallel and collaborative play within the same period. These categories describe participation and should not be treated as a fixed ladder every child passes through on schedule.",
    "concept": "Social play and context",
    "source": "Social play among preschool children (1933)",
    "kind": "observation",
    "materials": [
      "Free-play setting",
      "Timer",
      "Observation sheet"
    ],
    "procedure": [
      "Published-method summary: observe each child during normal free play in one-minute samples across multiple days.",
      "Code whether the child is unoccupied, watching others, playing alone, alongside peers, associating with peers, or coordinating shared activity.",
      "Record materials, group size and adult involvement; use the same definitions for every observation.",
      "Summarise the frequency of each category across samples rather than classifying the child from one episode."
    ],
    "measure": "Proportion of observation samples in each play category.",
    "limitations": "This is observational, not evidence that parenting style caused play behaviour. The supplied gender-role interview and parenting claims lacked a matching protocol and have been removed from the findings.",
    "references": [
      {
        "title": "Social play among preschool children (1933)",
        "url": "https://hcitang.org/uploads/Teaching/1933-parten-social-play.pdf"
      }
    ],
    "sourceUrl": "https://hcitang.org/uploads/Teaching/1933-parten-social-play.pdf"
  },
  {
    "age": "10 days to 3 months",
    "startAge": {
      "value": 10,
      "unit": "days"
    },
    "endAge": {
      "value": 3,
      "unit": "months"
    },
    "name": "Tracking face-like visual patterns",
    "experiment": "Compare visual tracking of face-like, scrambled and blank patterns; the precise demonstration in the supplied video is not verified.",
    "findings": "Published work found newborn preferential tracking of some face-like patterns, with changes over subsequent months. Behaviour alone does not establish a sharp transition from subcortical to cortical control.",
    "concept": "Visual orientation and pattern preference",
    "source": "Newborns’ preferential tracking of face-like stimuli and its subsequent decline (1991)",
    "kind": "experiment",
    "materials": [
      "Matched face-like and scrambled high-contrast cards",
      "Blank control card",
      "Camera"
    ],
    "procedure": [
      "Adapted demonstration: when the infant is awake and calm, present a card centrally at a comfortable viewing distance.",
      "Move each card slowly through the same horizontal path without touching or turning the infant’s head.",
      "Vary presentation order and match card size and contrast; record how far the eyes or head follow and whether the infant is attentive.",
      "Repeat under comparable conditions; exact distances, speeds and trial counts require the original article."
    ],
    "measure": "Tracking distance or duration by stimulus type.",
    "limitations": "The linked experiments are related original research, not confirmation of the named video infants or its 10-day/6-week contrast. Sensory state, contrast and positioning affect responses.",
    "references": [
      {
        "title": "Newborns’ preferential tracking of face-like stimuli and its subsequent decline (1991)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1786670/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/1786670/"
  },
  {
    "age": "2.5 to 8 months",
    "startAge": {
      "value": 2.5,
      "unit": "months"
    },
    "endAge": {
      "value": 8,
      "unit": "months"
    },
    "name": "Hidden objects: looking and search",
    "experiment": "Compare looking at possible and apparently impossible occlusion events; separate this from the motor task of retrieving a toy.",
    "findings": "The original rabbit studies reported longer looking at certain unexpected events around 3.5 months. Looking and manual search place different demands on infants and do not establish one universal object-permanence age.",
    "concept": "Occlusion expectations and manual search",
    "source": "Object permanence in young infants: further evidence (1991)",
    "kind": "experiment",
    "materials": [
      "Matched tall and short figures",
      "Opaque screen with a high window",
      "Controlled stage and video coding"
    ],
    "procedure": [
      "Published-paradigm summary: familiarise infants with a tall and short figure travelling behind a screen.",
      "Present a windowed screen through which the tall figure would normally be visible; use controlled staging so it fails to appear.",
      "Compare looking at tall-figure and short-figure events, balancing order and matching timing.",
      "For a separate adapted search observation, visibly cover a reachable toy with a cloth and record the first search action; never combine this response with looking time into one pass/fail score."
    ],
    "measure": "Looking duration to occlusion outcomes; separately, search attempts and retrieval success.",
    "limitations": "The 2.5–8-month label combines several demonstrations; the verified rabbit paper does not support every age or the 18-month shell-game claim. Exact habituation and trial criteria require the paper.",
    "references": [
      {
        "title": "Object permanence in young infants: further evidence (1991)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/1786712/"
      },
      {
        "title": "Why do young infants fail to search for hidden objects? (1990)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/2265529/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/1786712/"
  },
  {
    "age": "6 to 9 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "endAge": {
      "value": 9,
      "unit": "months"
    },
    "name": "Small-number outcomes behind a screen",
    "experiment": "Infants watch objects added to or removed from a hidden set, then view an expected or unexpected final display.",
    "findings": "The original study reported longer looking at some unexpected small-set outcomes. This is compatible with object tracking and does not by itself establish adult-like arithmetic or innate mathematical laws.",
    "concept": "Small-set expectations and object tracking",
    "source": "Addition and subtraction by human infants (1992)",
    "kind": "experiment",
    "materials": [
      "Two identical figures",
      "Occluding screen",
      "Controlled stage",
      "Video looking-time coding"
    ],
    "procedure": [
      "Published-paradigm summary: display one figure, raise a screen and visibly add a second figure behind it.",
      "Lower the screen to reveal one or two figures while holding movement and timing constant.",
      "In a separate subtraction condition begin with two figures, screen them and visibly remove one.",
      "Alternate one- and two-object outcomes across six test presentations; counterbalance initial outcome and score looking without knowledge of condition."
    ],
    "measure": "Looking duration for expected versus unexpected outcomes.",
    "limitations": "The landmark paper tested five-month-olds, whereas the supplied row says six to nine months. The separate ramp/barrier demonstration remains unmatched; it is not reproduced by this number task.",
    "references": [
      {
        "title": "Addition and subtraction by human infants (1992)",
        "url": "https://www.nature.com/articles/358749a0"
      },
      {
        "title": "Young infants’ visual fixation patterns support an object-tracking account (2017)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28618393/"
      }
    ],
    "sourceUrl": "https://www.nature.com/articles/358749a0"
  },
  {
    "age": "6 months to 2.5 years",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "endAge": {
      "value": 30,
      "unit": "months"
    },
    "name": "Quantity discrimination, counting and cloth-tool exploration",
    "experiment": "This composite entry contains three different tasks; the strongest verified link is large-set visual discrimination in six-month-olds.",
    "findings": "Six-month-olds distinguished arrays of 8 versus 16 objects under controlled conditions but not 8 versus 12. Reciting a number list is different from understanding cardinal quantity; successful cloth pulling also depends on experience and setup.",
    "concept": "Quantity, cardinality and means–end action",
    "source": "Large number discrimination in 6-month-old infants (2000)",
    "kind": "experiment",
    "materials": [
      "Controlled dot-array images",
      "Video looking-time setup",
      "Large safe counters",
      "Cloth and large toy"
    ],
    "procedure": [
      "Published-paradigm summary: familiarise infants with repeated arrays of one numerosity, varying object size and arrangement.",
      "Test familiar and novel numerosities while controlling total area, element size, density and other continuous cues; compare looking.",
      "Separate adapted counting observation: ask a willing toddler for a small number of counters and record the number given without coaching.",
      "Separate adapted cloth observation: place a toy on a reachable cloth and record whether the child pulls the cloth to retrieve it; record any demonstration given."
    ],
    "measure": "Looking to novel arrays; separately, number given and spontaneous versus demonstrated tool retrieval.",
    "limitations": "This is not one unified protocol. A two-to-one visual ratio is a finding under particular controls, not a universal infant threshold. Sources for the exact cracker and 8-/11-month cloth demonstrations were not established.",
    "references": [
      {
        "title": "Large number discrimination in 6-month-old infants (2000)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10594312/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10594312/"
  },
  {
    "age": "9 to 19 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "endAge": {
      "value": 19,
      "unit": "months"
    },
    "name": "Planning a spoon grasp",
    "experiment": "Present a handled spoon with alternating orientations and observe whether the child plans an efficient grasp.",
    "findings": "Age groups differed in how they grasped and corrected the spoon; older children more often selected an efficient orientation in advance. This does not imply that every child changes strategy at the same age.",
    "concept": "Motor planning and tool orientation",
    "source": "Problem solving in infancy: the emergence of an action plan (1999)",
    "kind": "experiment",
    "materials": [
      "Child-safe spoon",
      "Familiar food if appropriate",
      "Table and video recording"
    ],
    "procedure": [
      "Published-paradigm summary: seat the child comfortably and present the spoon containing food with its handle oriented alternately left and right.",
      "Allow a spontaneous grasp without positioning the child’s hand.",
      "Record hand chosen, where the spoon is grasped, whether the bowl is oriented towards the mouth and any later correction.",
      "Use comparable left- and right-handle presentations; consult the paper for exact trial sequence."
    ],
    "measure": "Initial grip orientation, hand selection, later reorientation and successful use.",
    "limitations": "The published spoon task involved 9-, 14- and 19-month-olds. The original row’s flexible-handrail task is a distinct laboratory study not verified here; do not attempt elevated bridge tests at home.",
    "references": [
      {
        "title": "Problem solving in infancy: the emergence of an action plan (1999)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10442877/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10442877/"
  },
  {
    "age": "5 to 18 months",
    "startAge": {
      "value": 5,
      "unit": "months"
    },
    "endAge": {
      "value": 18,
      "unit": "months"
    },
    "name": "Responding to another person’s food preference",
    "experiment": "An adult expresses enjoyment for one food and dislike for another, then asks the child to offer some food.",
    "findings": "In the original study, 18-month-olds were more likely than 14-month-olds to offer the food the adult had enjoyed even when it differed from their own preference. This supports early sensitivity to another person’s desire under those conditions.",
    "concept": "Desire attribution and preference differences",
    "source": "Early reasoning about desires: evidence from 14- and 18-month-olds (1997)",
    "kind": "experiment",
    "materials": [
      "Two familiar safe foods",
      "Two bowls",
      "Video or choice record"
    ],
    "procedure": [
      "Published-paradigm summary: establish which of the two foods the child prefers.",
      "Have the adult taste both and express clear enjoyment for one and dislike for the other; compare conditions where this agrees or conflicts with the child’s preference.",
      "Place both foods within reach and have the adult make the same general request for some food without naming either food.",
      "Record the first food offered, any refusal and the adult’s exact expressions and request."
    ],
    "measure": "First offered food relative to adult and child preferences.",
    "limitations": "The verified study compared 14 and 18 months; the original row’s 5–18-month span and cloth-gesture component combine unrelated tasks. Food choice, familiarity and social cues affect performance; use suitable foods and usual feeding supervision.",
    "references": [
      {
        "title": "Early reasoning about desires: evidence from 14- and 18-month-olds (1997)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9050386/"
      }
    ],
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/9050386/"
  },
  {
    "age": "2 to 7.25 months",
    "startAge": {
      "value": 2,
      "unit": "months"
    },
    "endAge": {
      "value": 7.25,
      "unit": "months"
    },
    "name": "Remembering a mobile with periodic reminders",
    "experiment": "In a longitudinal laboratory paradigm, infants learned that kicking moved a mobile and received reminders before later retention tests.",
    "findings": "With reminders, some infants retained the trained association over several months. This shows retention under a supported learning history, not how long an unprompted everyday memory lasts.",
    "concept": "Longitudinal memory and reminders",
    "source": "Long-term maintenance of infant memory (1999)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10461123/",
    "kind": "experiment",
    "materials": [
      "Research mobile apparatus",
      "Response recording",
      "Scheduled reminder and test visits"
    ],
    "procedure": [
      "Published-method summary: measure baseline kicking before contingent training with an overhead mobile.",
      "Train the association between kicking and mobile movement; at retention tests record responding when the contingency is absent.",
      "In the longitudinal experiment beginning at two months, provide reminders every three weeks through 6.5 months and test finally at 7.25 months.",
      "Compare responding with original baseline and appropriate untrained or reminder controls; use the paper for exact training and reminder durations."
    ],
    "measure": "Kicking rate relative to baseline and retention across scheduled visits.",
    "limitations": "The reminder and control schedule matters. This is a supervised research apparatus, not instructions for attaching a ribbon to a baby or cot at home. Exact apparatus and scoring details require the paper.",
    "references": [
      {
        "title": "Long-term maintenance of infant memory (1999)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10461123/"
      }
    ]
  },
  {
    "age": "3 to 4 months",
    "startAge": {
      "value": 3,
      "unit": "months"
    },
    "endAge": {
      "value": 4,
      "unit": "months"
    },
    "name": "Supported reaching with sticky mittens",
    "experiment": "Pre-reaching infants explored light objects using mittens that temporarily attached to prepared toys, then completed an object-exploration assessment.",
    "findings": "The original experienced group showed more object engagement and exploration than the comparison group. Later work has found variable motor effects; this is not an established developmental treatment.",
    "concept": "Experience, reaching and exploration",
    "source": "A pick-me-up for infants’ exploratory skills (2002)",
    "sourceUrl": "https://doi.org/10.1016/S0163-6383(02)00097-8",
    "kind": "experiment",
    "materials": [
      "Research mittens and prepared lightweight toys",
      "Supported seated setup",
      "Video and session log"
    ],
    "procedure": [
      "Published-method summary: give the infant 10–14 supervised play sessions of ten minutes with mittens and matching toys.",
      "Allow contact to bring toys within reach rather than forcing arm movements; record completed sessions.",
      "After training, present comparable exploration tasks to trained and age-matched untrained infants.",
      "Code looking, contacting and exploration from video using consistent definitions; match posture and toy availability."
    ],
    "measure": "Object-directed looking, contact and exploration strategies after the training period.",
    "limitations": "Exact mitten design and outcome coding require the article. Contact-aided grasping differs from ordinary grasping; follow-up findings do not support promising that this accelerates normal development.",
    "references": [
      {
        "title": "A pick-me-up for infants’ exploratory skills (2002)",
        "url": "https://doi.org/10.1016/S0163-6383(02)00097-8"
      }
    ]
  },
  {
    "age": "4 months",
    "startAge": {
      "value": 4,
      "unit": "months"
    },
    "name": "Perceiving a partly hidden object as a whole",
    "experiment": "Infants see a rod whose middle is obscured, then view complete and separated versions after familiarisation.",
    "findings": "Four-month-olds in some motion conditions responded as though the visible ends belonged to one object. Stationary aligned parts did not produce the same evidence in the original experiments.",
    "concept": "Object unity and motion cues",
    "source": "Perception of partly occluded objects in infancy (1983)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/6641127/",
    "kind": "experiment",
    "materials": [
      "Rod or controlled rod animation",
      "Central occluder",
      "Whole-rod and broken-rod test displays",
      "Video coding"
    ],
    "procedure": [
      "Published-paradigm summary: show the top and bottom of a rod moving together laterally behind a stationary central block.",
      "Continue to the paper’s habituation criterion, recording looking throughout.",
      "Remove the occluder and present complete-rod and separated-piece test displays with matched motion.",
      "Counterbalance test order and compare novelty responses; include comparison conditions with different motion relationships."
    ],
    "measure": "Looking-time recovery to a complete rod versus separated pieces.",
    "limitations": "Exact sizes, movement speed and habituation rules are necessary for replication and must be taken from the article. Looking-time differences are group evidence, not an individual vision test.",
    "references": [
      {
        "title": "Perception of partly occluded objects in infancy (1983)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/6641127/"
      }
    ]
  },
  {
    "age": "5 months",
    "startAge": {
      "value": 5,
      "unit": "months"
    },
    "name": "Learning rhythm through matching sights and sounds",
    "experiment": "Compare responses to a rhythm change after synchronous audiovisual, unimodal or asynchronous presentation of a tapping event.",
    "findings": "Five-month-olds detected a rhythm change after synchronous audiovisual familiarisation; unimodal and asynchronous conditions did not show the same evidence in these experiments.",
    "concept": "Multisensory rhythm learning",
    "source": "Intersensory redundancy guides attentional selectivity and perceptual learning in infancy (2000)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10749076/",
    "kind": "experiment",
    "materials": [
      "Controlled hammer-tapping film and soundtracks",
      "Synchronized playback",
      "Video looking-time coding"
    ],
    "procedure": [
      "Published-paradigm summary: habituate an infant to a film of a toy hammer tapping one rhythm.",
      "Assign separate groups to matching sight-and-sound, sight-only, sound-only or asynchronous conditions.",
      "After habituation and no-change trials, introduce a new rhythm while retaining other event features.",
      "Compare visual recovery at test with posthabituation looking; use the original stimuli and trial-ending rules for replication."
    ],
    "measure": "Increase in looking at the changed rhythm relative to no-change baseline.",
    "limitations": "A spontaneous response to everyday clapping is an adaptation, not this controlled test. Sound level, synchrony and habituation criteria must be controlled.",
    "references": [
      {
        "title": "Intersensory redundancy guides attentional selectivity and perceptual learning in infancy (2000)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10749076/"
      }
    ]
  },
  {
    "age": "6 and 9 months",
    "startAge": {
      "value": 6,
      "unit": "months"
    },
    "endAge": {
      "value": 9,
      "unit": "months"
    },
    "name": "Discriminating human and monkey faces",
    "experiment": "Different age groups are familiarised with a face and then view that face paired with a new face of the same species.",
    "findings": "Six-month-olds showed discrimination of individuals from both species; nine-month-olds and adults showed evidence for human faces only under the tested conditions.",
    "concept": "Experience and perceptual narrowing",
    "source": "Is face processing species-specific during the first year of life? (2002)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12016317/",
    "kind": "experiment",
    "materials": [
      "Matched human and monkey face photographs",
      "Controlled paired display",
      "Looking-time recording"
    ],
    "procedure": [
      "Published-paradigm summary: test human and monkey identities in separate controlled conditions.",
      "Familiarise the observer with one face, then present it beside a novel face of the same species.",
      "Counterbalance the novel face’s side and compare looking at novel and familiar faces.",
      "Compare results across six-month, nine-month and adult groups; use the paper’s exposure durations and photo sets for exact replication."
    ],
    "measure": "Novel-face looking as a proportion of total face looking.",
    "limitations": "This is a cross-sectional comparison, not evidence that each tested infant lost an ability. Exposure history and stimulus details matter; the age list is not a continuous developmental deadline.",
    "references": [
      {
        "title": "Is face processing species-specific during the first year of life? (2002)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/12016317/"
      }
    ]
  },
  {
    "age": "8 months",
    "startAge": {
      "value": 8,
      "unit": "months"
    },
    "name": "Finding repeated syllable groups in speech",
    "experiment": "Infants listen to an artificial speech stream and then hear syllable sequences with different statistical histories.",
    "findings": "After two minutes, eight-month-olds responded differently to familiar word-like units and comparison sequences, consistent with learning distributional regularities.",
    "concept": "Speech segmentation and statistical learning",
    "source": "Statistical learning by 8-month-old infants (1996)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/8943209/",
    "kind": "experiment",
    "materials": [
      "Original artificial-language recordings",
      "Quiet listening setup",
      "Head-turn preference apparatus or coded looking video"
    ],
    "procedure": [
      "Published-method summary: play a continuous artificial speech stream for two minutes with no pauses marking word boundaries.",
      "At test, present repeated three-syllable units from the stream and comparison units spanning boundaries, keeping acoustic presentation comparable.",
      "Use the head-turn preference procedure to measure how long the infant maintains orientation while each sequence plays.",
      "Counterbalance artificial-language assignment and test order; use original recordings and stopping rules for replication."
    ],
    "measure": "Listening duration for trained units versus boundary-spanning comparison units.",
    "limitations": "Casual listening does not reproduce the controlled phonetic and probability structure. Group preference is evidence of learning, not proof of vocabulary comprehension.",
    "references": [
      {
        "title": "Statistical learning by 8-month-old infants (1996)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/8943209/"
      }
    ]
  },
  {
    "age": "9 to 15 months",
    "startAge": {
      "value": 9,
      "unit": "months"
    },
    "endAge": {
      "value": 15,
      "unit": "months"
    },
    "name": "Following joint attention and communication over time",
    "experiment": "Follow the same infants across repeated visits, observing shared engagement, gestures and emerging communication.",
    "findings": "The study tracked a group of 24 infants from nine to fifteen months. Shared engagement and language following the infant’s attention were associated with early communication; association does not establish causation.",
    "concept": "Longitudinal social communication",
    "source": "Social cognition, joint attention, and communicative competence from 9 to 15 months of age (1998)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/9835078/",
    "kind": "observation",
    "materials": [
      "Consented caregiver–infant play sessions",
      "Standard toys",
      "Video and coding sheet",
      "Repeated-visit schedule"
    ],
    "procedure": [
      "Adapted observation informed by the published longitudinal study: record a comparable caregiver–infant play period at regular ages.",
      "Code episodes where caregiver and infant attend to the same object, shifts between object and partner, and gestures such as showing or pointing.",
      "Record whether caregiver speech concerns the infant’s current focus and document emerging gestures and words separately.",
      "Use the same definitions and observation duration at later visits; the original task battery and coding manual are required for exact replication."
    ],
    "measure": "Joint-engagement duration, gaze/gesture behaviours and later communication measures.",
    "limitations": "The simplified play observation is not the complete original battery. A single missed point or gaze shift is not a developmental diagnosis.",
    "references": [
      {
        "title": "Social cognition, joint attention, and communicative competence from 9 to 15 months of age (1998)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/9835078/"
      }
    ]
  },
  {
    "age": "14 months",
    "startAge": {
      "value": 14,
      "unit": "months"
    },
    "name": "Choosing whether to copy a head action",
    "experiment": "An adult switches on a light using the forehead, either with hands free or while holding a blanket; infants later encounter the light.",
    "findings": "More infants reproduced the head action after the hands-free demonstration. This has been interpreted as sensitivity to constraints, but attention and distraction offer alternative explanations.",
    "concept": "Selective imitation and action context",
    "source": "Rational imitation in preverbal infants (2002)",
    "sourceUrl": "https://doi.org/10.1038/415755a",
    "kind": "experiment",
    "materials": [
      "Research light-box activated by contact",
      "Blanket",
      "Video coding"
    ],
    "procedure": [
      "Published-method summary: assign fourteen-month-olds to see a forehead press when the demonstrator’s hands are free or occupied holding a blanket.",
      "Keep the light outcome and head action comparable across conditions.",
      "One week later offer the light-box and record whether the infant performs a forehead press or manual action.",
      "Score actions consistently across conditions; use the paper for demonstration counts and test duration."
    ],
    "measure": "Occurrence of the demonstrated head action and alternative manual actions.",
    "limitations": "A household lamp is not equivalent to the research apparatus. Interpretation is debated and head imitation is not a necessary milestone.",
    "references": [
      {
        "title": "Rational imitation in preverbal infants (2002)",
        "url": "https://doi.org/10.1038/415755a"
      },
      {
        "title": "Rethinking rational imitation: a perceptual distraction approach (2012)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3303798/"
      }
    ]
  },
  {
    "age": "15 months",
    "startAge": {
      "value": 15,
      "unit": "months"
    },
    "name": "Watching an actor search with outdated information",
    "experiment": "Infants watch an actor hide a toy and later search after events that leave the actor with accurate or outdated information.",
    "findings": "Looking patterns in the original study were consistent with expectations based on the actor’s information. They do not independently demonstrate adult-like belief reasoning.",
    "concept": "Social expectations and belief attribution",
    "source": "Do 15-month-old infants understand false beliefs? (2005)",
    "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3357322/",
    "kind": "experiment",
    "materials": [
      "Two distinct boxes",
      "Toy",
      "Controlled actor stage",
      "Video looking-time coding"
    ],
    "procedure": [
      "Published-method summary: familiarise the infant with an actor placing and retrieving a toy from one box.",
      "Move the toy while varying what the actor can see, creating true-information and false-information conditions.",
      "At test have the actor reach into one box and pause; compare looking at searches consistent or inconsistent with the actor’s information.",
      "Control event timing, prior reaches and test side; the original script and supplementary methods are needed for replication."
    ],
    "measure": "Looking duration after the actor’s test reach.",
    "limitations": "The published task tested fifteen-month-olds. Looking time has multiple explanations, and this is not equivalent to a verbal false-belief test or an individual diagnostic assessment.",
    "references": [
      {
        "title": "Do 15-month-old infants understand false beliefs? (2005)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3357322/"
      }
    ]
  },
  {
    "age": "18 months",
    "startAge": {
      "value": 18,
      "unit": "months"
    },
    "name": "Helping an adult retrieve an object",
    "experiment": "Observe whether a toddler helps an adult who unsuccessfully reaches for a dropped object, compared with a control where retrieval is not needed.",
    "findings": "Eighteen-month-olds helped in several of the original situations more often when the adult needed assistance. Helping varies across tasks and is not an all-or-none measure of altruism.",
    "concept": "Early helping and goal understanding",
    "source": "Altruistic helping in human infants and young chimpanzees (2006)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/16513986/",
    "kind": "experiment",
    "materials": [
      "Large safe object",
      "Reachable floor area",
      "Video or observation sheet"
    ],
    "procedure": [
      "Published-paradigm summary: let a toddler see an adult accidentally drop an object out of the adult’s reach.",
      "Have the adult try unsuccessfully to reach it while leaving it accessible to the child; avoid requesting help or promising a reward.",
      "Compare with a control in which the adult deliberately discards the object and shows no retrieval goal.",
      "Record spontaneous retrieval and return, latency and any adult prompting; use the paper’s timings and full task set for replication."
    ],
    "measure": "Unprompted helping frequency and latency in need versus control conditions.",
    "limitations": "This summary covers the out-of-reach task, not all ten original situations. Do not interpret refusal as a lack of empathy; attention, confidence and familiarity can affect participation.",
    "references": [
      {
        "title": "Altruistic helping in human infants and young chimpanzees (2006)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16513986/"
      },
      {
        "title": "Original study videos: helping with an out-of-reach object",
        "url": "https://sites.lsa.umich.edu/warneken/study-videos/"
      }
    ]
  }
]
