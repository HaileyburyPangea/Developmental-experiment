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
    "experiment": "To explore whether babies recognise a familiar voice before birth, researchers compare changes in fetal heart rate while playing recordings of the pregnant parent and an unfamiliar speaker.",
    "findings": "Babies near their due date responded differently to the familiar and unfamiliar voices. This suggests that experience before birth influences how they respond to voices.",
    "concept": "Recognising familiar voices before birth",
    "source": "Effects of experience on fetal voice recognition (2003)",
    "kind": "experiment",
    "materials": [
      "Clinical equipment that records fetal heart rate",
      "Matched recordings of a passage",
      "Research playback equipment set to the study’s sound specifications"
    ],
    "procedure": [
      "In a clinical research setting, enrol pregnancies near the due date.",
      "Record fetal heart rate during three two-minute periods: before playback, during voice playback and after playback.",
      "Use the same passage and matched playback conditions for familiar and unfamiliar voices, assigning the recording type across participants.",
      "Compare changes from the initial heart-rate measurement between the voice groups. Use the paper’s clinical monitoring and sound specifications."
    ],
    "measure": "Change in heart rate during and after playback compared with the initial measurement.",
    "limitations": "This study needs clinical monitoring and carefully controlled sound playback. It studied babies near their due date; the broader calendar range does not mean the same result has been demonstrated at 24 weeks.",
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
    "experiment": "To find out whether speech heard during pregnancy influences newborn listening preferences, researchers let babies control whether they hear English or Tagalog by changing how they suck on a special pacifier.",
    "findings": "Newborns exposed to English during pregnancy preferred English. Those exposed to both English and Tagalog showed a preference for both languages. A separate test showed that babies could tell the languages apart.",
    "concept": "Early familiarity with language sounds",
    "source": "The roots of bilingualism in newborns (2010)",
    "kind": "experiment",
    "materials": [
      "Special pacifier that measures sucking pressure",
      "Recorded speech in two languages",
      "Equipment that controls playback and records sucking"
    ],
    "procedure": [
      "Record the languages spoken during pregnancy and group the newborns by that exposure.",
      "With the study’s pacifier equipment, measure each alert baby’s sucking and set the link between sucking and playback.",
      "Let different sucking patterns produce each language, varying which response produces each language across babies.",
      "Compare how often babies produce the responses linked to each language. Analyse the separate test of telling the languages apart independently of preference."
    ],
    "measure": "How often each sucking pattern occurs, and whether sucking increases when the language changes in the separate language-discrimination test.",
    "limitations": "This requires specialist equipment for recording sucking and controlling playback. The 12-hour displayed age is approximate; the linked study does not establish an exact 12-hour cutoff. Listening preference does not demonstrate understanding or fluency.",
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
    "name": "Telling apart the sounds of content and function words",
    "experiment": "To find out whether newborns notice differences between kinds of words, researchers play lists of content words, such as nouns and verbs, and function words, such as articles and prepositions. A special pacifier records changes in sucking as babies get used to one list and hear a different one.",
    "findings": "Babies aged one to three days could tell the two groups apart by their sound patterns. This does not show that they understood the words or knew their grammatical roles.",
    "concept": "Noticing patterns in speech sounds",
    "source": "Newborn infants’ sensitivity to perceptual cues to lexical and grammatical words (1999)",
    "kind": "experiment",
    "materials": [
      "Pacifier equipment that measures sucking pressure",
      "Matched recordings of content and function words",
      "Software that controls playback and tracks responses to repeated sounds"
    ],
    "procedure": [
      "Test healthy, alert babies aged one to three days in a suitable research setting.",
      "Play repeated examples from one word group while the pacifier records strong sucking responses.",
      "When sucking has decreased to the level specified in the paper, switch to the other word group or to a new list from the same group.",
      "Compare renewed sucking after these changes, varying the word group and recording list across babies."
    ],
    "measure": "Whether strong sucking responses increase after a change in the word list.",
    "limitations": "The study tested babies aged one to three days. Repeating it requires the original recordings, pacifier equipment and rules for deciding when a baby has become used to a list. The task measures responses to sound, not understanding of word meanings.",
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
    "experiment": "To observe how a baby pays attention to a familiar voice, watch their responses during ordinary, comfortable conversation. This everyday observation draws on research about newborn voice preferences.",
    "findings": "Research shows that newborns can prefer a familiar maternal voice. It does not identify six weeks as the moment when this ability first appears.",
    "concept": "Paying attention to a familiar voice",
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
    "limitations": "This everyday observation differs from the linked laboratory study, which measured newborn sucking. It is not a hearing test. Six weeks is a suggested time to observe, not a deadline for a particular response.",
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
    "name": "How the mouth and throat grow for speech",
    "experiment": "To understand how the structures used for speech grow, researchers measure the mouth and throat in MRI images taken across early childhood. You can explore the published images and, separately, note changes in a baby’s ordinary cooing.",
    "findings": "The mouth and throat grow at different rates, with rapid change in early life. Vocal development cannot be explained by a single change in the voice box at three months.",
    "concept": "Growth of the structures used for speech",
    "source": "Development of vocal tract length during early childhood: a magnetic resonance imaging study (2005)",
    "kind": "observation",
    "materials": [
      "Published MRI images and definitions of the structures measured"
    ],
    "procedure": [
      "Read the linked imaging study’s age-group and measurement definitions.",
      "Compare age-related measurements of structures such as tongue, palate, throat and voice box in the published data.",
      "For an informal learning activity, simply record naturally occurring coos over time; do not attempt anatomical measurement at home."
    ],
    "measure": "Sizes of mouth and throat structures in the imaging study. Notes on cooing are a separate observation.",
    "limitations": "MRI measurements require a clinical research setting. Observing coos at home does not measure the underlying anatomy. The three-month displayed age is a time to learn about ongoing growth, not a date when a single anatomical change occurs.",
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
    "experiment": "To find out whether a baby notices where a partner is looking, researchers compare interaction with eye contact against equally responsive interaction while the adult looks away.",
    "findings": "Babies smiled less when the adult looked away. Looking time alone did not clearly distinguish the eye-contact conditions.",
    "concept": "Noticing a partner’s eye direction",
    "source": "Infant sensitivity to adult eye direction (1996)",
    "kind": "experiment",
    "materials": [
      "Live interaction or a two-way video link",
      "Video recording",
      "Behaviour scoring by someone unaware of the test condition"
    ],
    "procedure": [
      "Use four one-minute interaction periods, as in the study of three- to six-month-olds.",
      "Maintain eye contact in periods 1 and 3, then look away in periods 2 and 4 while continuing to respond to the baby.",
      "Use a comparison group receiving eye contact throughout; in the televised setup the adult can monitor the infant without direct eye contact.",
      "Record smiling and looking separately, then compare their duration across periods and groups."
    ],
    "measure": "Time smiling and time looking during each interaction period.",
    "limitations": "The study used carefully controlled adult behaviour, camera arrangements and rules for stopping. Consult the paper for these details. Babies often look away as part of ordinary interaction; this alone is not a sign of a problem.",
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
    "experiment": "To explore babies’ expectations of social responses, researchers compare ordinary interaction, a brief period when the adult becomes expressionless and unresponsive, and a return to responsive interaction.",
    "findings": "Babies often smile and engage less, and may become distressed, when the adult stops responding. Responses vary between babies and between versions of the task.",
    "concept": "Expecting a social partner to respond",
    "source": "The infant’s response to entrapment between contradictory messages in face-to-face interaction (1978)",
    "kind": "experiment",
    "materials": [
      "Trained research staff",
      "Video-recorded interaction",
      "Agreed rules for ending the episode and restoring normal interaction"
    ],
    "procedure": [
      "Begin with ordinary responsive caregiver–infant interaction and record the baby’s behaviour.",
      "In an approved research setting, introduce the brief unresponsive episode using the paper’s instructions.",
      "End the episode according to the study’s stopping rules and return to responsive interaction.",
      "Compare looking, smiling, attempts to engage the adult and signs of distress across the three episodes. Include a group receiving ordinary interaction throughout where possible."
    ],
    "measure": "Recorded attempts to engage the adult, looking, smiling and signs of distress during each episode.",
    "limitations": "The unresponsive episode can cause distress and belongs in a supervised research setting. A single response cannot establish attachment quality or judge parenting. Exact episode lengths and stopping rules must come from the study protocol.",
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
    "name": "How speech changes when adults talk to babies",
    "experiment": "To explore what makes baby-directed speech distinctive, record the same adult talking to a baby and to another adult, then compare features such as pitch and vowel length. This is an everyday adaptation of an acoustic research study.",
    "findings": "The linked study found more distinct vowel sounds in speech addressed to babies across the languages studied. It did not directly measure a learning benefit for five-month-olds.",
    "concept": "Features of speech addressed to babies",
    "source": "Cross-language analysis of phonetic units in language addressed to infants (1997)",
    "kind": "observation",
    "materials": [
      "Speech recordings made with the speaker’s permission",
      "Same target words in both contexts",
      "Optional software for measuring sound features"
    ],
    "procedure": [
      "Record the same speaker using comparable words when talking naturally to the baby and to another adult.",
      "Keep microphone placement similar and note the language and recording conditions.",
      "Compare pitch and vowel duration across several examples. A trained sound analyst can also compare the resonances that distinguish vowels."
    ],
    "measure": "Differences in speech features, such as pitch and vowel length, between the two settings.",
    "limitations": "The observation is adapted from research, and speech styles vary across languages and speakers. A particular speaking style does not guarantee a learning result. Five months is a suggested time to observe, not a threshold established by this study.",
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
    "experiment": "To find out whether babies connect an emotional voice with a matching facial expression, researchers show two faces expressing different emotions while playing a voice that matches one of them.",
    "findings": "Looking toward the matching face can suggest that a baby connects information from the face and voice. Results depend on age, familiarity with the person and the recordings used.",
    "concept": "Connecting emotion in faces and voices",
    "source": "The role of person familiarity in young infants’ perception of emotional expressions (2001)",
    "kind": "experiment",
    "materials": [
      "Matched videos showing two facial expressions",
      "Voice recordings expressing the same emotions as the faces",
      "Video or equipment for recording where the baby looks"
    ],
    "procedure": [
      "Use the same actor and comparable recording conditions for both facial expressions.",
      "Show both expressions with a voice matching one of them; vary which expression appears on each side and which voice is played.",
      "Record how long the baby looks at each face while the caregiver avoids giving clues about where to look.",
      "Compare attention toward matching versus mismatching expressions and report familiarity with the actor."
    ],
    "measure": "The share of looking time spent on the face whose expression matches the voice.",
    "limitations": "The linked study includes younger infants, so this outline is an adaptation for the displayed age range. Matching expressions does not show understanding of emotion words.",
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
    "name": "Recognising familiar faces upright and upside down",
    "experiment": "To explore how a baby processes familiar faces, researchers compare responses to upright and upside-down photographs of the mother and an unfamiliar person.",
    "findings": "Familiarity and picture orientation can affect how infants process faces. Turning a face upside down does not necessarily stop a baby smiling.",
    "concept": "Recognising faces in different orientations",
    "source": "Personal familiarity influences the processing of upright and inverted faces in infants (2009)",
    "kind": "experiment",
    "materials": [
      "Matched face photographs",
      "Controlled screen presentation",
      "Equipment for recording looking or small electrical brain responses to pictures"
    ],
    "procedure": [
      "Obtain matched photographs with neutral background, size and expression.",
      "Show upright and upside-down pictures in a balanced order, including familiar and unfamiliar faces.",
      "Record gaze and, in the linked specialist protocol, small electrical brain responses to each picture.",
      "Compare responses across picture orientation and familiarity; do not use one baby’s response as a diagnosis."
    ],
    "measure": "Where the baby looks and, with specialist equipment, electrical brain responses to each picture.",
    "limitations": "The linked study used still photographs and recordings of brain responses in six-month-olds. This differs from watching an upside-down live video. Exact picture timing and equipment settings require the full paper.",
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
    "name": "Telling apart unfamiliar speech sounds at an earlier age",
    "experiment": "To find out whether a baby can hear a difference between unfamiliar speech sounds, researchers teach them to turn toward a light-up toy when a repeated syllable changes.",
    "findings": "For some sound differences, sensitivity declines later in the first year when babies have little experience hearing them. The pattern depends on the sounds and the baby’s language experience.",
    "concept": "How language experience shapes listening",
    "source": "Cross-language speech perception: Evidence for perceptual reorganization during the first year of life (1984)",
    "kind": "experiment",
    "materials": [
      "Speech-sound recordings prepared to the study’s specifications",
      "Speaker and a light-up toy used as a reward",
      "Observer unaware of the trial type and equipment controlling the trials"
    ],
    "procedure": [
      "Seat an alert infant with a caregiver while an assistant keeps attention straight ahead.",
      "Repeat one syllable, then pair a change to another syllable with the light-up toy until the baby learns the link.",
      "Mix trials where the sound changes with trials where it stays the same, following the study’s schedule. Keep the observer unaware of the trial type.",
      "Compare correct turns and turns when the sound did not change across age and language-exposure groups."
    ],
    "measure": "Turning toward the reward when the speech sound changes, accounting for turns when the sound did not change.",
    "limitations": "This laboratory task requires carefully prepared sounds and independent scoring. The research compared age groups; it does not show that every baby gains or loses an ability at an exact age. The paper specifies the recordings and participation criteria.",
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
    "name": "Following which object a person points to",
    "experiment": "To find out whether babies track the object a person points to, researchers repeatedly point to one toy, swap the toys’ positions, then point either toward the same toy in a new place or a different toy in the old place.",
    "findings": "Twelve-month-olds looked longer when the pointed-to object changed than when only the direction changed. Nine-month-olds did not show that difference in this study.",
    "concept": "Connecting a pointing gesture with its target",
    "source": "Infants’ understanding of the point gesture as an object-directed action (2002)",
    "kind": "experiment",
    "materials": [
      "Two visually distinct toys",
      "Consistent adult pointing demonstration",
      "Video for measuring looking time"
    ],
    "procedure": [
      "Repeatedly show an adult pointing to one of two toys until looking decreases to the level specified in the paper.",
      "Swap the toys’ positions so that toy identity and pointing direction can be tested separately.",
      "Show the adult pointing to the same toy in its new position or to the different toy in the original position.",
      "Vary toy identity, side and test order across babies, and compare recorded looking times."
    ],
    "measure": "Looking time when the toy changes compared with looking time when only the pointing direction changes.",
    "limitations": "The study compared nine- and twelve-month-olds. Looking-time differences alone cannot establish that babies understand another person’s intentions in the same way adults do.",
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
    "experiment": "To explore how babbling changes with language experience, record a baby’s spontaneous sounds during comparable play sessions over several weeks. This is an everyday adaptation of a study that followed babies over time.",
    "findings": "Recordings across languages show both shared babbling patterns and patterns related to the language babies hear.",
    "concept": "Babbling and language experience",
    "source": "Patterns in babbling: a cross-linguistic study (1992)",
    "kind": "observation",
    "materials": [
      "Audio/video recording",
      "Consistent play setting",
      "Optional written notation of the speech sounds"
    ],
    "procedure": [
      "Record a comfortable parent–infant interaction without asking for specific sounds.",
      "Repeat comparable recordings over several weeks and note languages heard, age and recording duration.",
      "Separate meaningful words from babbled syllables and group examples by consonant and vowel pattern. Detailed sound analysis needs trained transcription."
    ],
    "measure": "How often the baby babbles and which speech-sound patterns occur.",
    "limitations": "This is observation rather than an experimental test. The linked study followed small English- and French-language groups starting around nine or eleven months. It does not mean every nine-month-old has a recognisable accent.",
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
    "experiment": "To find out how social interaction affects learning unfamiliar speech sounds, researchers give babies short Mandarin sessions with live speakers or recordings, then test whether they can distinguish a Mandarin sound difference.",
    "findings": "Babies who met live Mandarin speakers improved at telling apart the tested sounds. Babies given the corresponding recorded exposure did not show the same learning under these conditions.",
    "concept": "Social interaction and learning speech sounds",
    "source": "Foreign-language experience in infancy: Effects of short-term exposure and social interaction on phonetic learning (2003)",
    "kind": "experiment",
    "materials": [
      "Native-language speakers",
      "Books and toys",
      "Matched audiovisual/audio recordings",
      "Equipment that measures learned head turns when speech sounds change"
    ],
    "procedure": [
      "Recruit infants around nine months and document prior language exposure.",
      "Provide twelve approximately 25-minute sessions over about four weeks, using native speakers, books and toys.",
      "Use live English as a control and matched recorded Mandarin conditions to evaluate social presentation.",
      "Test whether babies distinguish the selected Mandarin sounds, using the published task in which they learn to turn when a sound changes. Compare the groups’ results."
    ],
    "measure": "Ability to tell speech sounds apart, measured through head turns after exposure, with change and control trials.",
    "limitations": "The result concerns the particular exposure sessions and speech sounds tested. Repeating the study requires its original recordings and scoring method. Ordinary bilingual interaction is not a standardised developmental test.",
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
    "name": "Telling apart unfamiliar speech sounds at a later age",
    "experiment": "To explore changes in listening during the first year, researchers test older babies with the same task used for younger babies: a turn toward a light-up toy is rewarded when a repeated syllable changes.",
    "findings": "For some sound differences, sensitivity declines later in the first year when babies have little experience hearing them. The pattern depends on the sounds and the baby’s language experience.",
    "concept": "How language experience shapes listening",
    "source": "Cross-language speech perception: Evidence for perceptual reorganization during the first year of life (1984)",
    "kind": "experiment",
    "materials": [
      "Speech-sound recordings prepared to the study’s specifications",
      "Speaker and a light-up toy used as a reward",
      "Observer unaware of the trial type and equipment controlling the trials"
    ],
    "procedure": [
      "Seat an alert infant with a caregiver while an assistant keeps attention straight ahead.",
      "Repeat one syllable, then pair a change to another syllable with the light-up toy until the baby learns the link.",
      "Mix trials where the sound changes with trials where it stays the same, following the study’s schedule. Keep the observer unaware of the trial type.",
      "Compare correct turns and turns when the sound did not change across age and language-exposure groups."
    ],
    "measure": "Turning toward the reward when the speech sound changes, accounting for turns when the sound did not change.",
    "limitations": "This laboratory task requires carefully prepared sounds and independent scoring. It compares age groups rather than identifying an exact age when an individual baby loses an ability. The paper specifies the recordings and participation criteria.",
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
    "name": "Repeated hand movements before first signs",
    "experiment": "To explore early language development in signing babies, record everyday interaction with a fluent signer and distinguish repeated hand patterns, communicative gestures and meaningful signs. This observation is adapted from research on manual babbling.",
    "findings": "Researchers have reported repeated, language-like hand patterns in deaf infants exposed to signing. This allows comparison with the babbling of babies learning spoken languages.",
    "concept": "Early language patterns in hand movements",
    "source": "Babbling in the manual mode: evidence for the ontogeny of language (1991)",
    "kind": "observation",
    "materials": [
      "Videos of ordinary play made with permission",
      "Fluent signer to identify and record the hand movements",
      "Notes on language exposure"
    ],
    "procedure": [
      "Record ordinary interaction with a familiar fluent signer, keeping samples comparable in duration.",
      "Label and record repetitive hand forms separately from communicative gestures and conventional signs.",
      "Ask a second fluent observer to independently classify examples; record ambiguous forms rather than forcing a category.",
      "Repeat over time and compare the same child’s range of signs and gestures in context."
    ],
    "measure": "Recorded hand patterns, conventional signs and communicative uses over repeated observations.",
    "limitations": "Not every hand movement is part of language. Reliable interpretation requires knowledge of the signed language and the interaction’s context. This observation does not reproduce a standardised imitation test.",
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
    "experiment": "To build a picture of a child’s early vocabulary, keep a diary of words they use spontaneously during everyday routines. Record words they appear to understand separately from words they say.",
    "findings": "Children of the same age can differ widely in vocabulary. Saying a word and understanding it are separate abilities and need separate records.",
    "concept": "Differences in early vocabulary development",
    "source": "Variability in early communicative development (1994)",
    "kind": "observation",
    "materials": [
      "Language diary",
      "Consistent observation intervals",
      "Optional language questionnaire tested for the child’s age and language"
    ],
    "procedure": [
      "Record unprompted words or combinations in ordinary routines over several days.",
      "Use consistent definitions: count a word form once, distinguish understanding from speaking, and record meaningful use rather than prompted repetition.",
      "For a formal comparison, use a language questionnaire validated for the child’s age and language, following its manual.",
      "Compare repeated observations with the child’s earlier samples rather than setting a single pass/fail word target."
    ],
    "measure": "Counts and examples of words or word combinations the child uses without prompting, with understanding recorded separately.",
    "limitations": "This diary is adapted for everyday observation. Formal comparisons require a validated questionnaire for the child’s language and age, used according to its manual. There is no single vocabulary count that every child should reach at this age.",
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
    "name": "Learning a new word while sharing attention",
    "experiment": "To explore how shared attention supports word learning, introduce unfamiliar objects with invented names while the child and adult attend to them together. Later, ask the child to choose an object by name without pointing or looking toward the answer.",
    "findings": "One-year-olds can learn some new word–object links when the interaction supports shared attention.",
    "concept": "Learning words through shared attention",
    "source": "Infants’ learning about words and sounds in relation to objects (1999)",
    "kind": "experiment",
    "materials": [
      "Two unfamiliar infant-safe objects",
      "Two invented labels",
      "Consistent script for naming objects and asking for them",
      "Video recording"
    ],
    "procedure": [
      "Give equal time to explore each object and note any initial preference.",
      "During naming, ensure the adult and child are attending to the same object. Use one invented name consistently for each object, varying the name–object pairings across children.",
      "At test, place both objects within reach and ask for one by name while looking straight ahead. Alternate sides and avoid praise that reveals the answer.",
      "Count which object is chosen first and compare results with chance and with a group that did not receive the naming practice."
    ],
    "measure": "Which object the child chooses first when asked for an invented name.",
    "limitations": "This is an adapted task. The linked study compared learning words and nonverbal sounds in thirteen-month-olds; it does not provide an exact match for this gaze-and-pointing demonstration. An exact replication needs a publication specifying the naming repetitions and attention conditions.",
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
    "name": "Following the attention of an unfamiliar puppet",
    "experiment": "To explore which cues make babies respond to an unfamiliar toy as a social partner, researchers vary whether it has a face and responds to interaction. They then observe whether babies look where it turns.",
    "findings": "In a study of twelve-month-olds, following the toy’s direction depended on the combination of facial features and responsive behaviour.",
    "concept": "Cues that invite a social response",
    "source": "Whose gaze will infants follow? The elicitation of gaze-following in 12-month-olds (1998)",
    "kind": "experiment",
    "materials": [
      "Unfamiliar movable toy",
      "Versions with and without a face",
      "Scripts for responsive and unresponsive interaction",
      "Two targets and video recording"
    ],
    "procedure": [
      "Present an unfamiliar toy with or without facial features and with responsive or unresponsive behaviour, following the study’s assigned conditions.",
      "Keep movement and exposure similar across groups so that the intended differences can be compared.",
      "After the baby has had time to get used to the toy, turn it toward one of two targets and record where the baby looks first.",
      "Compare following across groups, varying which side contains the target."
    ],
    "measure": "Whether the baby first looks toward the target the toy faces.",
    "limitations": "This outline draws on a study of twelve-month-olds; the displayed fourteen-month age is approximate. The linked study uses a different setup, so its full methods are needed for replication. Following the puppet does not establish that a baby thinks it is alive or understands conversation.",
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
    "name": "Learning to group named objects by shape",
    "experiment": "To find out whether naming practice helps toddlers use shape to learn new words, researchers repeatedly name unfamiliar objects with shared shapes. They then test whether toddlers extend a new name to another object with the same shape.",
    "findings": "In a nine-week study beginning at seventeen months, children receiving this training increasingly used shape to extend object names and showed vocabulary growth during training.",
    "concept": "Learning which object features matter for naming",
    "source": "Object name learning provides on-the-job training for attention (2002)",
    "kind": "experiment",
    "materials": [
      "Unfamiliar infant-safe objects varying shape, colour and material",
      "Consistent invented category labels",
      "Comparison group",
      "Vocabulary records"
    ],
    "procedure": [
      "Assign children to practice naming objects grouped by shape or to the study’s comparison groups.",
      "During repeated weekly visits, play with named examples that share a shape while colour or material varies.",
      "Introduce a new object name, then test whether the child gives that name to other objects matching its shape or other features.",
      "Use the same method to record vocabulary outside the laboratory before and during training, then compare changes between groups."
    ],
    "measure": "Choices of objects to give the same name, and growth in object names reported outside the laboratory.",
    "limitations": "An exact replication requires the complete objects, naming schedule and test procedure. The available methods summary does not establish an exact eight-session schedule or a particular numerical increase in vocabulary.",
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
    "experiment": "To explore memory for something a child has watched, show an unfamiliar action on a toy, put the toy away, then see whether the child performs the action after a delay. This is an adaptation of laboratory imitation tasks.",
    "findings": "Infant studies show that babies can remember and later reproduce observed actions.",
    "concept": "Remembering an action after watching it",
    "source": "Infant imitation and memory: nine-month-olds in immediate and deferred tests (1988)",
    "kind": "experiment",
    "materials": [
      "Infant-safe unfamiliar object with a reproducible action",
      "Demonstration script",
      "Timer and video recording",
      "Comparison group that has not watched the action"
    ],
    "procedure": [
      "Choose an action the object does not strongly suggest by itself. In a comparison group, measure how often children perform it without watching a demonstration.",
      "Demonstrate the action a fixed number of times while the infant watches without practising it.",
      "Remove the object for the predetermined delay and record what occurs during the interval.",
      "Return it without demonstrating again or giving an action instruction; record whether the target action occurs within the same test period across groups."
    ],
    "measure": "Whether the child performs the demonstrated action more often than children who did not watch it.",
    "limitations": "Choose the number of demonstrations, delay and scoring rules before beginning. The linked study tested nine-month-olds immediately or after twenty-four hours; it does not establish the exact eighteen-month, one-hour version. Attention, movement skills and toy design also affect performance.",
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
    "experiment": "To observe how a child begins combining words, keep examples of phrases they use spontaneously during everyday routines over several days. This is an informal adaptation of structured caregiver reports.",
    "findings": "Children of the same age vary widely in vocabulary and word combinations. Understanding speech and producing it are separate abilities.",
    "concept": "Beginning to combine words",
    "source": "Variability in early communicative development (1994)",
    "kind": "observation",
    "materials": [
      "Language diary",
      "Consistent observation intervals",
      "Optional language questionnaire tested for the child’s age and language"
    ],
    "procedure": [
      "Record unprompted words or combinations in ordinary routines over several days.",
      "Use consistent definitions: count a word form once, distinguish understanding from speaking, and record meaningful use rather than prompted repetition.",
      "For a formal comparison, use a language questionnaire validated for the child’s age and language, following its manual.",
      "Compare repeated observations with the child’s earlier samples rather than setting a single pass/fail word target."
    ],
    "measure": "Counts and examples of words or word combinations the child uses without prompting, with understanding recorded separately.",
    "limitations": "This diary is adapted for everyday observation. Formal comparisons require a validated questionnaire for the child’s language and age and its scoring manual. A single word or phrase count should not be treated as a universal deadline.",
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
    "experiment": "To explore how quickly vocabulary grows, record newly used words at regular intervals and chart the total over time. This diary activity is adapted from research that examines patterns in children’s word learning.",
    "findings": "A sudden vocabulary spurt is not an obligatory stage for every child; growth can follow different patterns.",
    "concept": "Different patterns of vocabulary growth",
    "source": "Reexamining the vocabulary spurt (2004)",
    "kind": "observation",
    "materials": [
      "Dated vocabulary diary",
      "Consistent word-counting rules",
      "Repeated observation periods"
    ],
    "procedure": [
      "Choose a regular reporting interval and use the same definition of a newly acquired word throughout.",
      "Record meaningful uses that occur without prompting. Decide in advance how to count forms of the same word, such as plurals, and apply that rule consistently.",
      "Plot the running total of different words and the number added during each interval. Record any gaps in observation.",
      "Interpret gradual or irregular growth alongside sampling and language exposure, rather than treating one fast week as a universal transition."
    ],
    "measure": "Change in vocabulary count across comparable intervals.",
    "limitations": "The pattern depends on how often words are recorded, how a new word is defined and how growth is analysed. An informal diary gives an incomplete sample of what a child knows.",
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
    "experiment": "To observe how a child uses meaningful signs, record everyday interaction with a familiar fluent signer. Distinguish conventional signs from repeated hand patterns and other gestures. This activity adapts research on early signing.",
    "findings": "Research on manual babbling shows early language-like hand patterns in deaf infants exposed to signing, offering a comparison with spoken-language babbling.",
    "concept": "Communicating with meaningful signs",
    "source": "Babbling in the manual mode: evidence for the ontogeny of language (1991)",
    "kind": "observation",
    "materials": [
      "Videos of ordinary play made with permission",
      "Fluent signer to identify and record the hand movements",
      "Notes on language exposure"
    ],
    "procedure": [
      "Record ordinary interaction with a familiar fluent signer, keeping samples comparable in duration.",
      "Label and record repetitive hand forms separately from communicative gestures and conventional signs.",
      "Ask a second fluent observer to independently classify examples; record ambiguous forms rather than forcing a category.",
      "Repeat over time and compare the same child’s range of signs and gestures in context."
    ],
    "measure": "Recorded hand patterns, conventional signs and communicative uses over repeated observations.",
    "limitations": "The linked paper focuses on manual babbling, rather than a specific vocabulary milestone at twenty months. Interpretation requires a fluent signer and attention to context; not every repeated hand movement is a sign.",
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
    "name": "Using shape to extend a new object name",
    "experiment": "To explore whether a toddler uses shape when learning a new name, name an unfamiliar object and offer new objects matching its shape, colour or material. This follow-up activity draws on research using repeated naming practice.",
    "findings": "A nine-week study beginning at seventeen months found greater use of shape to extend object names and vocabulary growth during training.",
    "concept": "Using shape to learn object names",
    "source": "Object name learning provides on-the-job training for attention (2002)",
    "kind": "experiment",
    "materials": [
      "Unfamiliar infant-safe objects varying shape, colour and material",
      "Consistent invented category labels",
      "Comparison group",
      "Vocabulary records"
    ],
    "procedure": [
      "Assign children to practice naming objects grouped by shape or to the study’s comparison groups.",
      "During repeated weekly visits, play with named examples that share a shape while colour or material varies.",
      "Introduce a new object name, then test whether the child gives that name to other objects matching its shape or other features.",
      "Use the same method to record vocabulary outside the laboratory before and during training, then compare changes between groups."
    ],
    "measure": "Choices of objects to give the same name, and growth in object names reported outside the laboratory.",
    "limitations": "The linked study is the same training research described in the earlier shape-learning entry. It does not establish a separate follow-up at twenty-four months or a verified threefold vocabulary increase. Exact replication requires the full training and testing protocol.",
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
    "experiment": "To describe a two-year-old’s vocabulary, keep examples of words they say in everyday situations and record understanding separately. A validated caregiver questionnaire can provide a more structured profile.",
    "findings": "Children of the same age can differ widely in vocabulary. Speaking and understanding are separate abilities.",
    "concept": "Building a vocabulary profile",
    "source": "Variability in early communicative development (1994)",
    "kind": "observation",
    "materials": [
      "Language diary",
      "Consistent observation intervals",
      "Optional language questionnaire tested for the child’s age and language"
    ],
    "procedure": [
      "Record unprompted words or combinations in ordinary routines over several days.",
      "Use consistent definitions: count a word form once, distinguish understanding from speaking, and record meaningful use rather than prompted repetition.",
      "For a formal comparison, use a language questionnaire validated for the child’s age and language, following its manual.",
      "Compare repeated observations with the child’s earlier samples rather than setting a single pass/fail word target."
    ],
    "measure": "Counts and examples of words or word combinations the child uses without prompting, with understanding recorded separately.",
    "limitations": "This everyday diary is an adaptation, not a clinical assessment. Formal interpretation requires a validated questionnaire for the child’s language and age and its manual. Fixed word totals should not be used as universal targets.",
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
    "name": "Brain and heart responses to emotional music",
    "experiment": "This study examines how babies’ brain activity and heart rate change while listening to music with different emotional qualities. Infants were tested at 3, 6, 9 and 12 months.",
    "findings": "Responses to music varied with age. These measurements do not show whether a baby shares a parent’s feelings or has a secure attachment.",
    "concept": "Developing responses to music",
    "source": "Development of frontal EEG and heart-rate responses to affective musical stimuli (2003)",
    "kind": "experiment",
    "materials": [
      "Equipment for recording brain electrical activity (EEG) and heart rate (ECG)",
      "Audio equipment set to the study’s sound levels",
      "Recorded music excerpts"
    ],
    "procedure": [
      "In a specialist laboratory, record brain activity and heart rate while the settled baby hears no music.",
      "Play the selected music excerpts. Follow the paper for sensor positions, excerpt lengths and ways to remove signals caused by movement or poor contact.",
      "Compare responses during music with the initial quiet period, and compare patterns across age groups."
    ],
    "measure": "Changes in brain electrical activity and heart rate.",
    "limitations": "This is a specialist recording procedure. Exact recording and playback details require the paper. It does not assess attachment or parent–infant emotional synchrony.",
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
    "name": "Waiting for a reward and working with an adult",
    "experiment": "These two activities explore a child’s ability to wait and to work with another person toward a shared result.",
    "findings": "Waiting depends on the task and the child’s experience. In the cooperation study, 18–24-month-olds worked with an adult and sometimes tried to get the adult to resume after stopping.",
    "concept": "Waiting and cooperation",
    "source": "Cooperative activities in young children and chimpanzees (2006)",
    "kind": "experiment",
    "materials": [
      "An appealing, safe toy",
      "Equipment that needs separate actions by a child and an adult to produce a result",
      "Video camera"
    ],
    "procedure": [
      "For an adapted waiting observation, put a safe toy in view, briefly ask the child to wait, then allow access. Record the waiting time and adult prompts.",
      "For the published cooperation task, demonstrate how the adult and child each contribute to making the equipment work.",
      "Compare normal joint activity with trials when the adult stops. Record whether the child waits, tries alone or asks the adult to continue."
    ],
    "measure": "Time spent waiting, successful joint actions and attempts to bring the adult back into the activity.",
    "limitations": "The waiting observation is an adaptation; the source supports the cooperation task. These tasks do not diagnose an individual child’s development or establish a fixed difference between boys and girls.",
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
    "name": "Pretend play and working with another child",
    "experiment": "These activities explore how children use objects in pretend play and coordinate their actions with another child.",
    "findings": "Pretend play and cooperation generally become more elaborate with experience. The peer study found increased coordination across the second and third years.",
    "concept": "Pretending and coordinating with a playmate",
    "source": "Becoming a social partner with peers (2006)",
    "kind": "observation",
    "materials": [
      "Safe pretend food and dolls",
      "A two-handle toy or research device that needs coordinated actions",
      "Camera"
    ],
    "procedure": [
      "For an adapted play observation, offer the same toys in a quiet space for the same length of time at each visit.",
      "Record exploration, ordinary object use, pretending to do something oneself, pretending with a doll or another person, and linked pretend actions.",
      "The peer experiment used two handles to operate a mechanical toy. Compare pulling together with actions that must happen in sequence; record whether children watch and respond to their partner."
    ],
    "measure": "Types of pretend actions, coordinated attempts, attention to the partner and successful toy activations.",
    "limitations": "These are separate play and cooperation activities. The cited peer study tested 19-, 23- and 27-month-olds; it does not set a universal age when children begin cooperating.",
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
    "name": "Recognizing the body as an obstacle and judging miniature toys",
    "experiment": "These tasks explore whether children account for their own bodies when moving objects or trying to use toys of different sizes.",
    "findings": "Success at moving a cart improves with age. Some 18–30-month-olds make serious attempts to use miniature objects that are too small for their bodies.",
    "concept": "Body awareness and judging possible actions",
    "source": "The development of body self-awareness (2007)",
    "kind": "experiment",
    "materials": [
      "A cart with a mat attached behind it",
      "A separate weight for the comparison condition",
      "Full-size and miniature play slides, chairs and cars",
      "Camera"
    ],
    "procedure": [
      "First let the child practise pushing the cart. Attach a mat behind it so the child stands on the mat when reaching the handle, then ask them to push toward a caregiver.",
      "Compare this with a condition where a separate heavy object blocks the mat. Record whether the child steps off or removes the object.",
      "In the separate miniature-toy task, let the child play with full-size objects, replace them with miniatures while the child is absent, then observe. Distinguish serious attempts to use the toys from pretending."
    ],
    "measure": "Successful removal of the obstacle and serious attempts to sit on, enter or slide on miniature toys.",
    "limitations": "These are two separate studies. Performance does not change at one fixed age, and miniature-toy errors do not show that emotion has overridden size perception.",
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
    "name": "Responses to separation, reunion and advice on slopes",
    "experiment": "These separate assessments explore how children respond when a caregiver returns and how they use caregiver advice when deciding whether to walk down a slope.",
    "findings": "Reunion behavior contributes to a trained assessment of attachment. In the slope study, experienced walkers relied most on advice when the slope was close to the limit of their ability.",
    "concept": "Caregiver relationships and using social advice",
    "source": "Attachment, exploration, and separation in one-year-olds (1970)",
    "kind": "assessment",
    "materials": [
      "An assessment room and trained observers",
      "An adjustable laboratory walkway with a trained person preventing falls",
      "Video recording"
    ],
    "procedure": [
      "A trained assessor conducts the Strange Situation: a fixed sequence of caregiver presence, an unfamiliar adult’s arrival, brief separations and reunions. Behavior is scored using the assessment’s established method.",
      "For the separate slope experiment, supervised trials establish which slopes each child can walk down reliably and which are uncertain or too difficult.",
      "Compare encouragement and discouragement at each difficulty level while a trained experimenter prevents falls."
    ],
    "measure": "Seeking and maintaining contact, exploration after reunion, and decisions to attempt or avoid slopes.",
    "limitations": "These require professional assessment or laboratory supervision. One separation episode cannot establish attachment security. The slope study tested 18-month-old walkers; the whole displayed age range was not tested in that study.",
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
    "name": "Understanding refusal, inability and accidental actions",
    "experiment": "These tasks explore whether babies respond differently when an adult refuses to give a toy, cannot give it, or performs an action accidentally.",
    "findings": "Babies aged 9, 12 and 18 months responded differently to refusal and inability. In another study, 14–18-month-olds copied more actions marked as intentional than accidental.",
    "concept": "Understanding the purpose of others’ actions",
    "source": "Unwilling versus unable: infants’ understanding of intentional action (2005)",
    "kind": "experiment",
    "materials": [
      "Appealing toys",
      "Objects that produce an interesting result through two actions",
      "Camera"
    ],
    "procedure": [
      "Establish a routine of passing toys to the child, then include unsuccessful offers where the adult refuses, teases or accidentally fails to pass the toy.",
      "Balance the different unsuccessful offers. Record reaching, waiting and looking away without assigning an emotion from one gesture alone.",
      "In the separate imitation task, demonstrate two actions, marking one as intended and the other as accidental. Give the child the object and record which actions they copy."
    ],
    "measure": "Reaching and looking away during toy offers, and the proportion of intended and accidental actions copied.",
    "limitations": "These are separate tasks. Different responses suggest sensitivity to purpose and context; they do not establish an adult-like understanding of another person’s mind.",
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
    "experiment": "This study asks how babies who move sideways while holding furniture judge gaps in the support for their hands and feet.",
    "findings": "Babies adjusted their attempts more accurately to gaps in the handrail than to gaps in the floor. Learning about support may be specific to a way of moving.",
    "concept": "Judging support while moving sideways with a handhold",
    "source": "Developmental continuity? Crawling, cruising, and walking (2011)",
    "kind": "experiment",
    "materials": [
      "An adjustable handrail and floor-gap apparatus",
      "Safety mats and a trained person to prevent falls",
      "Camera"
    ],
    "procedure": [
      "In a supervised laboratory, record the baby’s experience of moving with a handhold and position them at one end of the walkway.",
      "Change the gap in the handrail while keeping the floor continuous. Then change the floor gap while keeping the handrail continuous.",
      "Estimate the largest gap crossed successfully and record attempts, refusals and exploratory hand or foot movements. A trained adult prevents actual falls."
    ],
    "measure": "How often babies attempt gaps of different sizes compared with the sizes they can cross successfully.",
    "limitations": "This setup needs laboratory protection against falls and should not be recreated at home. Results concern this specific movement task, rather than a general understanding of danger.",
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
    "name": "Movement experience and caution around heights",
    "experiment": "This study explores whether experience controlling one’s own movement changes babies’ responses to apparent drop-offs.",
    "findings": "Babies given experience driving a powered mobility device became more cautious around heights and more responsive to visual signals of their own movement than the comparison group.",
    "concept": "Learning about movement and heights",
    "source": "The epigenesis of wariness of heights (2013)",
    "kind": "experiment",
    "materials": [
      "A safety-glass visual cliff or protected depth display",
      "A powered mobility device",
      "Equipment measuring responses to visual signals of movement",
      "Camera"
    ],
    "procedure": [
      "In a protected laboratory setup, record the baby’s age and movement experience and assess their response to apparent depth.",
      "Randomly assign babies who are not yet crawling to powered-mobility practice or a comparison condition.",
      "Follow the paper’s training schedule and separate tests of height responses and sensitivity to visual movement. Compare the groups."
    ],
    "measure": "Crossing or avoidance, and responses to visual signals that make a person feel they are moving.",
    "limitations": "The exact training schedule and equipment must come from the paper. A protected laboratory setup is essential. Avoiding a drop-off and being able to see depth are different abilities.",
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
    "name": "Learning to reach for a toy",
    "experiment": "Repeated observations explore how babies learn to direct their arms toward a toy and grasp it.",
    "findings": "Reaching develops through changes in movement control and experience. The timing and movement patterns differ between babies.",
    "concept": "Developing coordinated reaching",
    "source": "The transition to reaching: mapping intention and intrinsic dynamics (1993)",
    "kind": "observation",
    "materials": [
      "An age-appropriate graspable toy",
      "Comfortable supported seating",
      "Camera or movement-tracking equipment"
    ],
    "procedure": [
      "For an adapted repeated observation, seat the baby comfortably with support and present the same toy within reach.",
      "At each visit, offer several opportunities from a consistent position. Record reaches, contacts and grasps without guiding the baby’s limbs.",
      "The linked study followed four infants weekly, analyzing movement before and after each infant’s first extended-arm reach."
    ],
    "measure": "When directed reaching first appears, how often the baby touches or grasps the toy, and the path of the arm movement.",
    "limitations": "These steps describe an adapted observation. The study’s detailed movement analysis requires its equipment and methods. A small study does not set a fixed age when every baby should reach.",
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
    "name": "How body mechanics affect stepping and learning from kicks",
    "experiment": "These separate tasks explore how the body’s weight affects supported stepping and how babies learn that kicking can make a mobile move.",
    "findings": "Reducing the load on the legs can increase stepping. Mobile-linked kicking shows that babies can learn a link between an action and its effect.",
    "concept": "Body mechanics and learning cause and effect",
    "source": "The relationship between physical growth and a newborn reflex (1984)",
    "kind": "experiment",
    "materials": [
      "Supported-stepping equipment",
      "A temperature-controlled research water setup",
      "A research mobile and equipment for recording movement"
    ],
    "procedure": [
      "In a professional laboratory, compare supported stepping under consistent conditions, including a condition that reduces the weight the legs must lift.",
      "Count steps from video and record the baby’s level of alertness or agitation, which can also affect movement.",
      "For the separate mobile task, compare kicking before the link is introduced, while kicks move the mobile, and during a test when the link is removed. Use the study’s equipment and supervision."
    ],
    "measure": "Steps per observation period and changes in kicking rate compared with the initial rate and comparison condition.",
    "limitations": "Water immersion and limb attachments require specialist supervision. The linked source concerns stepping; the exact mobile protocol is not established here. Learning one action–effect link does not demonstrate a general understanding of personal control.",
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
    "name": "Adjusting walking when carrying added weight",
    "experiment": "This study examines how a change in body load affects the walking and balance of 14-month-olds.",
    "findings": "Added weight changed walking and balance. Responses depended on the child’s skills, body and the task.",
    "concept": "Adapting walking to changes in body load",
    "source": "Baby carriage: infants walking with loads (2007)",
    "kind": "experiment",
    "materials": [
      "A laboratory walkway",
      "Research shoulder packs",
      "Video or equipment for measuring walking",
      "A trained person to prevent falls"
    ],
    "procedure": [
      "In a supervised laboratory, measure the child’s walking without added weight.",
      "Compare this with walking while wearing research shoulder packs carrying 15% of the child’s body weight. Follow the paper for pack placement and trial details.",
      "Record changes in steps and balance, comparing each child with their own unloaded walking."
    ],
    "measure": "Changes in walking pattern and balance with and without the added load.",
    "limitations": "This is a supervised research procedure. Do not add weights to a child for a home demonstration. The study described here concerns load carriage rather than a combined slope-and-load task.",
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
    "name": "Observing social and emotional development",
    "experiment": "This framework helps adults describe changes in children’s interactions, emotions, relationships and ways of managing feelings.",
    "findings": "The framework gives examples of common patterns around reference ages, allowing for individual variation. It is descriptive guidance rather than a pass/fail test.",
    "concept": "Social and emotional development",
    "source": "California Infant/Toddler Learning & Development Foundations (2009)",
    "kind": "framework",
    "materials": [
      "The published framework",
      "Dated observation notes",
      "Familiar play materials"
    ],
    "procedure": [
      "Choose one area, such as interactions with other children or ways of expressing emotion.",
      "Observe ordinary routines on several occasions. Record what the child did, the situation and any adult support.",
      "Compare the observations with examples near the child’s age, noting variation and changes across visits."
    ],
    "measure": "Concrete examples of behavior across different situations and visits.",
    "limitations": "The approximate 8-, 18- and 36-month reference points come from the 2009 framework. Later editions have a different structure. A single observation cannot establish a developmental stage.",
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
    "name": "Relationships with familiar adults during everyday routines",
    "experiment": "This observation explores how children seek help, check back with caregivers and explore during familiar routines.",
    "findings": "The framework describes increasingly complex exchanges with adults and growing use of familiar caregivers for support. Behavior varies with the situation.",
    "concept": "Seeking support while exploring",
    "source": "California Infant/Toddler Learning & Development Foundations (2009)",
    "kind": "framework",
    "materials": [
      "The published relationships framework",
      "An observation log"
    ],
    "procedure": [
      "For an adapted observation, choose ordinary routines such as arrival, play or a naturally occurring request for help.",
      "Record what happened first, what the child did and how the adult responded. Use naturally occurring events rather than creating distress or separation.",
      "Repeat across days and adults to look for patterns in the child’s responses."
    ],
    "measure": "When and how often children seek help, check back, exchange responses with adults and explore independently.",
    "limitations": "These observations describe everyday relationships and do not classify attachment security. The framework’s ages are approximate reference points.",
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
    "name": "Checking newborn reflexes",
    "experiment": "A clinician checks automatic responses as part of examining a newborn’s movement and nervous system.",
    "findings": "The presence, strength and balance of reflex responses help a clinician interpret the wider examination. Different reflexes change at different ages.",
    "concept": "Newborn movement and nervous-system examination",
    "source": "Stanford Medicine: Newborn examination",
    "kind": "assessment",
    "materials": [
      "A clinical examination setting",
      "A qualified clinician"
    ],
    "procedure": [
      "The clinician begins by observing the baby’s natural movements, posture and alertness.",
      "During the newborn examination, assess sucking, hand and foot grasp, and the Moro startle response while supporting the baby appropriately. Compare responses on both sides.",
      "Record the conditions of the examination and any concerns requiring follow-up."
    ],
    "measure": "The clinician’s assessment of whether responses are present, similar on both sides and appropriate in quality.",
    "limitations": "This is a clinical assessment. Do not suspend a baby by their grasp, drop them or provoke a startle to test a reflex at home.",
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
    "name": "Exploring movable play furniture",
    "experiment": "This observation explores how toddlers experiment with movable objects, persist after difficulty and coordinate with a playmate.",
    "findings": "Observed play can illustrate persistence and problem solving. It cannot establish that a particular style of adult supervision caused those behaviors.",
    "concept": "Exploration, persistence and spontaneous cooperation",
    "source": "Original teaching video; matching publication unverified",
    "kind": "observation",
    "materials": [
      "Stable, safe, lightweight play furniture",
      "A clear play area with close supervision",
      "An observation log"
    ],
    "procedure": [
      "For an adapted observation, offer safe movable play objects in a clear area under close adult supervision.",
      "Allow the child to explore. Record repeated attempts, changes in approach and interactions with a playmate.",
      "Note adult prompts or help so actions completed independently can be distinguished from supported actions."
    ],
    "measure": "The types and duration of attempts, changes in approach and exchanges between children.",
    "limitations": "No matching published experiment has been verified. This is a repeatable observation format; its exact duration and materials are not a validated assessment.",
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
    "name": "Early language-like hand movements in sign-exposed babies",
    "experiment": "This study explores whether repetitive hand movements in babies learning a signed language have patterns resembling early vocal babbling.",
    "findings": "The study reported organized manual babbling in sign-exposed babies, supporting the idea that early language patterns can develop through the hands as well as the voice.",
    "concept": "Early language patterns in movement",
    "source": "Babbling in the manual mode (1991)",
    "kind": "observation",
    "materials": [
      "Video recordings of everyday interaction",
      "Observers with sign-language expertise",
      "Clearly defined categories for classifying movements"
    ],
    "procedure": [
      "Record ordinary caregiver–infant interactions over several visits and document each baby’s exposure to signed and spoken language.",
      "Identify repetitive hand movements, distinguishing established signs, ordinary gestures and possible manual babbling.",
      "Using the paper’s criteria, trained observers classify handshape, location and movement patterns and compare groups."
    ],
    "measure": "How often possible manual babbling occurs and how its patterns differ from other hand movements.",
    "limitations": "Repetitive hand movements alone do not establish manual babbling. The findings do not mean every child learning signed and spoken languages reaches all milestones simultaneously.",
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
    "name": "Persistence during hand-and-eye play",
    "experiment": "This observation explores how toddlers keep trying and change their approach during tasks such as fitting shapes into matching openings.",
    "findings": "The activity can reveal engagement and persistence, but observation alone cannot establish the effect of praise.",
    "concept": "Hand-and-eye coordination and persistence",
    "source": "Original teaching video; matching publication unverified",
    "kind": "observation",
    "materials": [
      "A large, age-appropriate shape sorter or stacking objects",
      "A camera or timer",
      "An observation sheet"
    ],
    "procedure": [
      "For an adapted observation, offer one familiar task and one safe task that is moderately challenging, allowing equal time for each.",
      "Record attempts, successful placements, changes in approach, help requests and adult comments.",
      "At later visits, keep the materials and level of adult prompting similar so the observations can be compared."
    ],
    "measure": "Time spent engaged, attempts before stopping, independent successes and requests for help.",
    "limitations": "No matching published protocol has been verified. Task difficulty, familiarity and adult help can all affect behavior, so this observation cannot isolate the effects of praise.",
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
    "name": "Following someone’s gaze behind a barrier",
    "experiment": "This study asks whether babies move to see what an adult is looking at when a barrier blocks their own view.",
    "findings": "In the study, 12- and 18-month-olds moved to look behind barriers, suggesting that they followed where the adult was looking rather than just copying a head turn.",
    "concept": "Sharing attention and following another person’s gaze",
    "source": "12- and 18-month-old infants follow gaze to spaces behind barriers (2004)",
    "kind": "experiment",
    "materials": [
      "A barrier that cannot be seen through",
      "An adult positioned to see behind the barrier",
      "Camera"
    ],
    "procedure": [
      "Position the child so the barrier hides a target location from them but not from the adult.",
      "Get the child’s attention, then have the adult look toward the hidden location. Use the comparison looks specified in the paper.",
      "Record whether the child moves to a position where the target location can be seen."
    ],
    "measure": "The proportion of trials in which the child moves to the correct viewing position.",
    "limitations": "The published sample was 12 and 18 months old, within a narrower range than the calendar entry. It does not establish a universal age when gaze following begins or a categorical difference between humans and chimpanzees.",
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
    "name": "Recognizing the ends of everyday actions",
    "experiment": "This study explores whether babies notice when a video pauses in the middle of an action rather than after the action is complete.",
    "findings": "Ten- to eleven-month-olds responded differently to pauses at action boundaries and pauses within unfinished actions.",
    "concept": "Breaking continuous activity into meaningful actions",
    "source": "Infants parse dynamic action (2001)",
    "kind": "experiment",
    "materials": [
      "Consistently recorded everyday-action videos",
      "A screen",
      "A way to record where and how long the baby looks"
    ],
    "procedure": [
      "Let babies watch the same continuous action sequence, keeping the scene and timing consistent.",
      "At test, pause either after an action has been completed or while it is still underway. Balance the different versions across infants.",
      "Compare looking times using trained observers who do not know the condition, where possible."
    ],
    "measure": "How long babies look at sequences interrupted at an action boundary compared with sequences interrupted midway.",
    "limitations": "The paper is needed for exact video content, pause timing and presentation rules. The findings concern action boundaries, rather than all aspects of understanding another person’s intentions.",
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
    "name": "Learning which actions usually happen together",
    "experiment": "This study explores whether babies learn repeating patterns in a continuous stream of actions and notice when those patterns are broken up.",
    "findings": "Seven- to nine-month-olds distinguished familiar action groups from groups that crossed a pattern boundary. This is consistent with learning how likely one action is to follow another.",
    "concept": "Learning patterns in sequences of events",
    "source": "Infants segment continuous events using transitional probabilities (2014)",
    "kind": "experiment",
    "materials": [
      "The study’s animation of an unfamiliar agent performing actions",
      "A screen",
      "Looking-time recording equipment"
    ],
    "procedure": [
      "Show a continuous action sequence in which some actions reliably follow each other. Avoid extra movements that reveal what comes next.",
      "At test, show action groups that preserve the learned pattern and groups formed across its boundaries. Keep their earlier frequency comparable.",
      "Balance which sequences are assigned to each condition and compare looking times."
    ],
    "measure": "Looking time to groups that preserve the learned pattern compared with groups that cross its boundaries.",
    "limitations": "The linked study tested 7–9-month-olds, a narrower range than the calendar entry. Exact animations and presentation rules require the paper.",
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
    "name": "Learning that an arm movement controls a display",
    "experiment": "This study explores how babies learn to make a sound-and-picture display respond to their movements and react when that control is removed.",
    "findings": "After learning the movement–display link, babies increased their responding and showed more negative expressions when the expected event stopped occurring.",
    "concept": "Learning cause and effect and responding to frustration",
    "source": "Violation of expectancy, loss of control, and anger expressions (1990)",
    "kind": "experiment",
    "materials": [
      "Equipment for detecting arm movements",
      "A controlled sound-and-picture display",
      "Video recording of facial expressions"
    ],
    "procedure": [
      "In a supervised laboratory, record arm movements before the display responds, then make the display activate after the selected movement.",
      "Compare this with a condition where the display is not controlled by the baby. Briefly remove the expected response using the study’s approved stopping rules.",
      "Record movement rates and facial expressions separately before learning, during learning and after the response is removed."
    ],
    "measure": "Changes in movement rate and facial expressions when the display stops responding.",
    "limitations": "The research includes several age groups; exact equipment and timings require the paper. Wrist attachments and deliberately induced frustration need research supervision. This task does not establish the age when social smiling begins.",
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
    "name": "Matching emotions in familiar faces and voices",
    "experiment": "This study explores whether familiarity helps babies connect the emotion in a voice with a matching facial expression.",
    "findings": "Familiarity can make it easier to match emotions across faces and voices. The results do not set fixed ages for recognizing emotions in mothers, fathers or unfamiliar adults.",
    "concept": "Connecting emotional information across sight and sound",
    "source": "The role of person familiarity in emotion perception (2001)",
    "kind": "experiment",
    "materials": [
      "Face and voice recordings of consenting parents and unfamiliar adults",
      "A screen and audio playback",
      "A camera for recording looking"
    ],
    "procedure": [
      "Record comparable happy and sad expressions. Present paired faces while playing a voice expressing one of those emotions.",
      "Balance screen side, emotion and familiar or unfamiliar identity. Measure attention to the face whose emotion matches the voice.",
      "Keep expression intensity and recording conditions similar; follow the paper for presentation timing."
    ],
    "measure": "Looking toward the face that matches the voice’s emotion, along with recorded smiling.",
    "limitations": "Matching can be affected by familiarity and the quality of the recordings. The starting age has been rounded to three calendar months for scheduling; the original research ages were measured in weeks.",
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
    "name": "Changes in temperament and brain activity over time",
    "experiment": "This repeated assessment explores how responses to unfamiliar situations relate to patterns of electrical activity at the front of the brain.",
    "findings": "Some patterns of caution or outgoing behavior persist, while others change. Brain-activity differences seen across groups do not determine an individual child’s personality.",
    "concept": "Continuity and change in temperament",
    "source": "Continuity and discontinuity of behavioral inhibition and exuberance (2001)",
    "kind": "assessment",
    "materials": [
      "Equipment for recording brain electrical activity (EEG)",
      "Consistent unfamiliar objects and situations",
      "Video recording and trained observers"
    ],
    "procedure": [
      "In a specialist setting, record brain activity during a quiet starting period, following the paper’s sensor placement and signal-quality methods.",
      "At repeated ages, observe responses to selected unfamiliar people, objects or situations, with caregiver support and clear rules for stopping distress.",
      "Have observers who do not know the child’s earlier results record approach, avoidance, movement and emotional expression. Compare patterns across visits."
    ],
    "measure": "Differences in left- and right-frontal brain activity, alongside repeated scores for caution and outgoing behavior.",
    "limitations": "This is a professional research assessment. The paper provides the exact activities and scoring rules. A single episode or brain recording cannot classify a child’s personality.",
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
    "name": "Using a caregiver’s expression when deciding whether to cross",
    "experiment": "This study explores whether babies use a caregiver’s emotional expression to guide their behavior when an apparent drop-off is difficult to judge.",
    "findings": "Caregiver expressions influenced crossing in the study’s uncertain-depth setup. Results vary with the equipment and the baby’s movement experience.",
    "concept": "Using another person’s emotion for guidance",
    "source": "Maternal emotional signaling and visual-cliff behavior (1985)",
    "kind": "experiment",
    "materials": [
      "A laboratory visual cliff covered by safety glass",
      "Clearly specified caregiver expressions",
      "A camera and timer"
    ],
    "procedure": [
      "In a protected laboratory, set the apparent drop-off at a depth that creates uncertainty. Safety glass prevents an actual fall.",
      "Position the caregiver across the display and have them show the assigned emotion when the baby looks toward them.",
      "Record looks toward the caregiver, crossing and time taken to cross, following the paper’s time limits and condition order."
    ],
    "measure": "How often babies cross and how long they take after seeing the caregiver’s expression.",
    "limitations": "The published study tested 12-month-olds; the calendar currently shows a younger 9–10-month range. This setup needs laboratory protection and should not be recreated at home.",
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
    "name": "How babies respond to and manage frustration",
    "experiment": "This assessment explores how babies react to a brief challenge and what they do to comfort themselves or seek help.",
    "findings": "Responses vary between babies and across ages. Looking away, self-comforting and communicating may serve different purposes in different situations.",
    "concept": "Developing ways to manage feelings",
    "source": "The regulation of negative reactivity in infancy (1995)",
    "kind": "assessment",
    "materials": [
      "Consistent research challenge materials",
      "Video recording",
      "Trained observers"
    ],
    "procedure": [
      "In a professional research setting, observe ordinary interaction before a brief approved challenge, using clear rules for stopping distress.",
      "The linked study used arm restraint at five months and toy removal at ten months, recording behavior in ten-second intervals.",
      "Record the timing and intensity of distress, looking away, redirecting attention, self-comforting and communication. Compare patterns across visits."
    ],
    "measure": "Time before crying begins, crying intensity, and the timing and frequency of behaviors used to manage distress.",
    "limitations": "The published study tested five- and ten-month-olds; the broad calendar range includes other observations. Deliberately restraining limbs or ignoring distress is unsuitable as a home activity.",
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
    "name": "Recognizing oneself in a mirror and responding to success",
    "experiment": "These separate tasks explore whether a child uses a mirror to notice a mark on their own face and how children express themselves after success or failure.",
    "findings": "Touching a mark on one’s own face becomes more common during the second year. Success and failure can prompt pride- or shame-like behavior, but visible behavior alone does not prove what a child feels.",
    "concept": "Self-recognition and feelings about one’s own performance",
    "source": "Mirror self-image reactions before age two (1972)",
    "kind": "experiment",
    "materials": [
      "A mirror",
      "A skin-safe removable mark, used with consent",
      "Age-appropriate puzzles",
      "Camera"
    ],
    "procedure": [
      "For an adapted mirror observation, first observe normal mirror behavior, then apply a small removable mark without drawing attention to it, if tolerated. Present the mirror again.",
      "Record whether the child touches their own marked face or the reflection. Include a no-mirror comparison to check whether they can feel the mark.",
      "The separate task-outcome study varies difficulty and success, with trained observers recording posture, gaze and expression. Do not create humiliating failure as a home activity."
    ],
    "measure": "Touching the mark on one’s own face and recorded expressions and posture after success or failure.",
    "limitations": "There is no universal age for passing the mirror task. Mirror recognition does not determine whether embarrassment is possible. The two activities use different procedures and should be interpreted separately.",
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
    "name": "Observing a preschool classroom",
    "experiment": "Explore how a classroom’s activity areas and adult support shape children’s opportunities to take part and learn.",
    "findings": "A federal evaluation compared preschools using different teaching programmes. Its 2013 evidence review found no clear effect of the fourth edition of this curriculum on the academic skills it assessed.",
    "concept": "Classroom environment and guided learning",
    "source": "Effects of Preschool Curriculum Programs on School Readiness (PCER, 2008)",
    "kind": "framework",
    "materials": [
      "Classroom observation sheet",
      "Information about the curriculum edition",
      "Permission to observe the classroom"
    ],
    "procedure": [
      "Choose a normal classroom period. Note how long you observe, which activity areas are open, and which activities adults or children choose.",
      "Write down examples of adults helping, children joining activities, and children using materials. Describe what happens without grading individual children.",
      "Observe similar periods on other days. To test whether a curriculum improves learning, use a comparison group and the assessment tools described in the published evaluation."
    ],
    "measure": "The activities and support available to children, and how children take part.",
    "limitations": "This is a simplified classroom observation, not a test of curriculum effectiveness. The linked evaluation concerns a particular edition and particular learning outcomes; an organised classroom alone does not show that children learned more.",
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
    "name": "Finding a toy after its hiding place changes",
    "experiment": "Explore whether a baby searches where a toy was last seen or returns to a place where it was found before.",
    "findings": "Babies sometimes return to a previously successful hiding place even after watching the toy move. The pause before searching, earlier attempts and the setup can all affect their choice.",
    "concept": "Remembering a hiding place and changing a search habit",
    "source": "The task dynamics of the A-not-B error (1999)",
    "kind": "experiment",
    "materials": [
      "Two identical covers that hide the toy",
      "One large toy",
      "A table within comfortable reach",
      "Video or a trial record sheet"
    ],
    "procedure": [
      "Seat a willing baby securely with both covers equally easy to reach. Show the toy, then hide it under cover A while the baby watches.",
      "Let the baby find the toy. Repeat at A, then hide it under cover B in full view without moving the covers.",
      "Use the same brief pause before each search. Record the first reach, the pause length, and how many times the toy was previously found at A.",
      "Compare choices before and after the hiding place changes. Stop when the baby loses interest."
    ],
    "measure": "Where the baby first searches, whether the toy is found, and how previous attempts and pauses affect the choice.",
    "limitations": "This is a simplified version of the published task. The displayed 0–24-month range is broad background coverage, not a validated testing window. A wrong search does not by itself show that a baby believes the toy has stopped existing.",
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
    "name": "Judging whether the amount stays the same",
    "experiment": "Explore whether a child thinks the amount of water changes when it is poured into a taller, narrower cup.",
    "findings": "Children’s answers to questions about unchanged amounts can vary with wording, context and the way the task is presented. Separate research on learning with adults also finds differences within and across communities.",
    "concept": "Understanding unchanged amounts and interpreting questions",
    "source": "Conservation accidents (1974; related number/length task)",
    "kind": "framework",
    "materials": [
      "Two identical transparent cups",
      "One taller narrower cup",
      "Water",
      "Tray"
    ],
    "procedure": [
      "Put visibly equal amounts of water in two identical cups. Ask the child whether the amounts are the same.",
      "While the child watches, pour one cup into a taller cup without adding or spilling any water.",
      "Ask once whether either cup has more water and invite the child to explain. Record the exact question and answer.",
      "Treat this as a separate activity from tasks about another person’s viewpoint or observations of how adults guide learning."
    ],
    "measure": "Whether the child judges the amounts as equal before and after pouring, and the explanation given.",
    "limitations": "This is an adapted demonstration. The linked conservation paper tested unchanged numbers and lengths, rather than this water activity. The separate paper on learning with adults studied 12–24-month-olds, outside the displayed preschool range.",
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
    "name": "How drawing changes over time",
    "experiment": "Explore how a child’s grip, marks and control change through repeated opportunities to draw.",
    "findings": "Drawing can change with practice, materials, interest and development. Drawing marks or reaching for an ear cannot directly show how the brain’s nerve coverings are developing.",
    "concept": "Hand control and individual differences",
    "source": "Original course/video observation; matching publication not established",
    "kind": "observation",
    "materials": [
      "Paper",
      "Age-appropriate crayons",
      "Dated observation notes"
    ],
    "procedure": [
      "Offer paper and suitable crayons for a short, voluntary drawing session. Use the same materials when observing again.",
      "Let the child draw freely. Record grip, marks, effort and anything the child says, without guiding the hand.",
      "Compare dated samples over weeks or months and describe changes. Keep movements comfortable; do not force an arm over the head or use an ear-touch movement as a pass-or-fail test."
    ],
    "measure": "Changes in grip, marks, control and willingness to keep drawing.",
    "limitations": "This is a general observation activity with no verified matching published experiment. It cannot measure myelination—the development of protective coverings around nerve fibres—or determine a child’s developmental stage.",
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
    "name": "How children join in with play",
    "experiment": "Explore how a child plays alone, alongside others or together with them during ordinary free play.",
    "findings": "A child may play alone, alongside peers and cooperatively within the same session. These describe different ways of taking part, rather than a fixed sequence that every child follows at set ages.",
    "concept": "Taking part in social play",
    "source": "Social play among preschool children (1933)",
    "kind": "observation",
    "materials": [
      "Free-play setting",
      "Timer",
      "Observation sheet"
    ],
    "procedure": [
      "Observe each child during normal free play in one-minute samples across several days, following the published observation approach.",
      "For each sample, note whether the child is unoccupied, watching others, playing alone, playing alongside peers, sharing an activity, or working towards a shared goal.",
      "Record the toys, group size and adult involvement. Use the same category definitions each time.",
      "Count how often each type of play appears across the samples. Avoid judging a child from a single episode."
    ],
    "measure": "The share of observation samples spent in each type of play.",
    "limitations": "Observation describes behaviour but cannot show that a parenting style caused it. The linked play study does not provide evidence for a separate parenting assessment or gender-role interview.",
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
    "name": "Following face-like patterns with the eyes",
    "experiment": "Explore whether a baby follows a face-like pattern differently from a scrambled pattern or a blank card.",
    "findings": "Published research found that newborns followed some face-like patterns more than comparison patterns, with responses changing over the following months. These movements alone cannot identify which brain areas control attention.",
    "concept": "Looking towards and following visual patterns",
    "source": "Newborns’ preferential tracking of face-like stimuli and its subsequent decline (1991)",
    "kind": "experiment",
    "materials": [
      "Matching high-contrast face-like and scrambled-pattern cards",
      "Blank comparison card",
      "Camera"
    ],
    "procedure": [
      "For this simplified activity, present a card centrally at a comfortable viewing distance while the baby is awake and calm.",
      "Move each card slowly along the same horizontal path. Do not touch or turn the baby’s head.",
      "Vary the order of the cards and match their size and contrast. Record how far or how long the eyes or head follow, and whether the baby is attentive.",
      "Repeat under similar conditions. Use the published article for the exact distances, speeds and number of presentations needed to repeat the study."
    ],
    "measure": "How far or how long the baby follows each kind of card.",
    "limitations": "The linked research does not establish a precise change between 10 days and six weeks, or a sharp switch between brain systems. Alertness, contrast and card position can affect responses. The activity above is adapted from the research.",
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
    "name": "Expecting a hidden object to reappear",
    "experiment": "Explore whether a baby expects a tall figure to be visible through a window as it moves behind a screen. Searching for a hidden toy is a separate activity.",
    "findings": "In the rabbit studies, babies around 3.5 months looked longer at certain unexpected events. Looking at an event and reaching for a hidden toy require different skills, so they do not establish one universal age for understanding hidden objects.",
    "concept": "Expectations about hidden objects and searching",
    "source": "Object permanence in young infants: further evidence (1991)",
    "kind": "experiment",
    "materials": [
      "Matching tall and short figures",
      "A screen with a high window",
      "Controlled stage and video recording"
    ],
    "procedure": [
      "In the published approach, let babies watch a tall and a short figure travelling behind a screen.",
      "Use a screen with a window high enough that the tall figure should be visible. Arrange the stage so that it unexpectedly fails to appear.",
      "Compare how long babies look at events involving the tall and short figures. Vary the presentation order and keep the timing the same.",
      "For a separate, simplified search activity, visibly cover a reachable toy with a cloth and record the baby’s first search action. Record search and looking responses separately."
    ],
    "measure": "Time spent looking at each event; separately, attempts to search and success finding a toy.",
    "limitations": "The displayed age range covers several types of demonstration, rather than one verified protocol. The rabbit paper does not support every age in that range. Repeating the experiment requires the paper’s rules for repeated viewing, ending trials and scoring looking.",
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
    "name": "Watching objects added or removed behind a screen",
    "experiment": "Explore whether babies look differently when the number of objects revealed behind a screen fits what they just watched.",
    "findings": "Babies in the study looked longer at some unexpected results involving small groups of objects. Tracking individual objects could help explain this response; the result alone does not establish adult-like arithmetic or inborn mathematical laws.",
    "concept": "Expectations about small groups of objects",
    "source": "Addition and subtraction by human infants (1992)",
    "kind": "experiment",
    "materials": [
      "Two identical figures",
      "A screen that hides the figures",
      "Controlled stage",
      "Video for measuring looking time"
    ],
    "procedure": [
      "Show one figure, raise the screen, and visibly add a second figure behind it.",
      "Lower the screen to reveal one or two figures. Keep the movements and timing the same across these outcomes.",
      "In a separate subtraction version, start with two figures, hide them behind the screen and visibly remove one.",
      "Alternate one- and two-figure outcomes across six test presentations. Vary which outcome comes first, and have someone unaware of the condition measure looking time."
    ],
    "measure": "Time spent looking at outcomes that match or differ from the visible addition or removal.",
    "limitations": "The landmark paper tested five-month-olds, while this calendar entry spans six to nine months. A looking-time difference is a research finding across participants, not an arithmetic test for an individual baby.",
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
    "name": "Noticing quantities, giving a number and using a cloth",
    "experiment": "Explore three different skills: noticing a change in a group of dots, giving a requested number of objects, and pulling a cloth to bring a toy closer.",
    "findings": "Under controlled conditions, six-month-olds distinguished 8 from 16 objects but not 8 from 12. Saying number words differs from knowing how many objects a word represents. Cloth pulling also depends on experience and the setup.",
    "concept": "Noticing quantity, understanding how many, and using a means to reach a goal",
    "source": "Large number discrimination in 6-month-old infants (2000)",
    "kind": "experiment",
    "materials": [
      "Controlled images of dot groups",
      "Video for measuring looking time",
      "Large safe counters",
      "Cloth and large toy"
    ],
    "procedure": [
      "For the published dot task, show repeated images containing the same number of dots while varying dot size and arrangement.",
      "Test a familiar and a new number of dots. Control total area, individual dot size, spacing and other visible differences, then compare looking time.",
      "For a separate adapted counting activity, ask a willing toddler to give a small number of counters. Record how many are given without coaching.",
      "For a separate adapted cloth activity, place a toy on a reachable cloth. Record whether the child pulls the cloth to get the toy, and whether an adult demonstrated first."
    ],
    "measure": "Looking at changed dot quantities; separately, the number of counters given and whether cloth pulling happens before or after a demonstration.",
    "limitations": "These are separate activities. The two-to-one difference in quantity was detectable under particular research controls, not a universal threshold. The exact counting and eight-/eleven-month cloth demonstrations have no verified matching sources here; those activities are labelled as adaptations.",
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
    "name": "Choosing a useful grip on a spoon",
    "experiment": "Explore whether a child chooses a grip that makes a spoon easy to use before picking it up.",
    "findings": "Older children in the study more often chose a useful spoon position in advance, while younger children more often adjusted it after grasping. Children do not all change strategy at the same age.",
    "concept": "Planning a hand movement before using a tool",
    "source": "Problem solving in infancy: the emergence of an action plan (1999)",
    "kind": "experiment",
    "materials": [
      "Child-safe spoon",
      "Familiar food if appropriate",
      "Table and video recording"
    ],
    "procedure": [
      "Seat the child comfortably and present a spoon containing food, with its handle pointing alternately left and right.",
      "Let the child choose a grip without positioning the hand.",
      "Record the hand used, the part of the spoon grasped, whether the bowl points towards the mouth, and any adjustments afterwards.",
      "Offer comparable left- and right-handle presentations. Use the paper for the exact number and order of trials."
    ],
    "measure": "The first grip, hand chosen, later adjustments, and whether the spoon is used successfully.",
    "limitations": "The published task compared 9-, 14- and 19-month-olds. The exact number and order of trials must come from the paper. Differences between groups do not set a deadline for an individual child.",
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
    "name": "Offering food that another person likes",
    "experiment": "Explore whether a child offers food according to an adult’s expressed preference, even when the child prefers something else.",
    "findings": "Eighteen-month-olds were more likely than fourteen-month-olds to offer the food the adult had enjoyed, including when the adult’s preference differed from their own. This supports early awareness that another person can want something different.",
    "concept": "Understanding different preferences",
    "source": "Early reasoning about desires: evidence from 14- and 18-month-olds (1997)",
    "kind": "experiment",
    "materials": [
      "Two familiar safe foods",
      "Two bowls",
      "Video or choice record"
    ],
    "procedure": [
      "First establish which of two foods the child prefers.",
      "Have the adult taste both foods and clearly show enjoyment for one and dislike for the other. Compare situations where the adult agrees or disagrees with the child’s preference.",
      "Place both foods within reach. Have the adult make the same general request for some food without naming either option.",
      "Record the first food offered, any refusal, and the adult’s exact words and expressions."
    ],
    "measure": "Which food the child first offers compared with the adult’s and child’s preferences.",
    "limitations": "The verified study compared fourteen- and eighteen-month-olds, rather than the full displayed five-to-eighteen-month range. Familiarity, food choice and social cues can affect performance; use suitable foods with usual feeding supervision.",
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
    "name": "Remembering a mobile after reminders",
    "experiment": "Explore how long babies remember that kicking can move a mobile when they receive reminders over several months.",
    "findings": "Some babies remembered the trained connection over several months when reminders were provided. This describes memory supported by repeated reminders, rather than how long an everyday event is remembered without reminders.",
    "concept": "Memory over time and the effect of reminders",
    "source": "Long-term maintenance of infant memory (1999)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10461123/",
    "kind": "experiment",
    "materials": [
      "Supervised research mobile equipment",
      "Equipment for recording kicks",
      "Schedule for reminders and test visits"
    ],
    "procedure": [
      "Measure how often babies kick before teaching them that kicks make an overhead mobile move.",
      "Teach the connection, then later test memory by recording kicks while kicking no longer controls the mobile.",
      "In the experiment beginning at two months, give reminders every three weeks through 6.5 months and test again at 7.25 months.",
      "Compare later kicking with the baby’s initial rate and with suitable groups that did not receive the same training or reminders. Use the paper for the exact training and reminder lengths."
    ],
    "measure": "Changes in kicking rate from before training, and how long the learned response lasts across visits.",
    "limitations": "The timing and type of reminders affect the result. This procedure uses supervised research equipment: do not attach a ribbon to a baby or cot at home. The paper provides the exact equipment and scoring details.",
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
    "name": "Exploring objects with sticky mittens",
    "experiment": "Explore whether helping babies pick up light toys before they can grasp them independently changes their later interest in objects.",
    "findings": "Babies who used sticky mittens in the study showed more interest in and exploration of objects than the comparison group. Later studies found varying effects on movement skills, so this is not an established developmental treatment.",
    "concept": "Learning through early reaching and exploration",
    "source": "A pick-me-up for infants’ exploratory skills (2002)",
    "sourceUrl": "https://doi.org/10.1016/S0163-6383(02)00097-8",
    "kind": "experiment",
    "materials": [
      "Research mittens and matching lightweight toys",
      "Supported seating",
      "Video and session record"
    ],
    "procedure": [
      "Give babies 10–14 supervised play sessions lasting ten minutes, using the research mittens and matching toys.",
      "Allow contact with a toy to bring it within reach. Do not force arm movements, and record completed sessions.",
      "After the sessions, offer the same exploration tasks to babies who used the mittens and babies of the same age who did not.",
      "From video, record looking, touching and ways of exploring. Use the same definitions, seating and toy access for both groups."
    ],
    "measure": "Looking at, touching and exploring objects after the play sessions.",
    "limitations": "Use the article for the mitten design and exact scoring method. Picking up a toy through a sticky contact differs from grasping it with the hand. The evidence does not support promising that mittens speed up normal development.",
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
    "name": "Seeing two visible parts as one hidden object",
    "experiment": "Explore whether a baby treats the visible ends of a moving rod as parts of one object when its middle is hidden.",
    "findings": "In some movement conditions, four-month-olds responded as if the rod’s visible ends belonged to one object. The study did not find the same evidence when the aligned parts stayed still.",
    "concept": "Using movement to recognise a whole object",
    "source": "Perception of partly occluded objects in infancy (1983)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/6641127/",
    "kind": "experiment",
    "materials": [
      "Rod or controlled animation of a rod",
      "Block hiding the rod’s middle",
      "Complete-rod and separated-piece displays",
      "Video for measuring looking time"
    ],
    "procedure": [
      "Show the top and bottom of a rod moving sideways together behind a stationary block.",
      "Keep recording looking time as the baby becomes familiar with the display. Use the paper’s rule for when looking has decreased enough to begin testing.",
      "Remove the block and show a complete rod and two separated pieces, using matching movement.",
      "Vary which test display comes first and compare the response to each. Include comparison displays in which the visible parts move differently."
    ],
    "measure": "The increase in looking when the baby sees a complete rod or separated pieces after familiarisation.",
    "limitations": "Repeating the research requires the article’s exact sizes, movement speed and rules for measuring decreasing attention. Differences across a group of babies do not provide an individual vision test.",
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
    "name": "Learning a rhythm from matching sights and sounds",
    "experiment": "Explore whether seeing and hearing taps together helps babies notice a change in rhythm.",
    "findings": "Five-month-olds noticed a rhythm change after seeing and hearing taps that matched in time. The experiments did not find the same evidence when taps were only seen, only heard, or seen and heard out of time.",
    "concept": "Learning from sight and sound together",
    "source": "Intersensory redundancy guides attentional selectivity and perceptual learning in infancy (2000)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/10749076/",
    "kind": "experiment",
    "materials": [
      "Controlled video and sound recordings of a toy hammer tapping",
      "Playback that can keep sound and picture in time",
      "Video for measuring looking time"
    ],
    "procedure": [
      "Show a baby a film of a toy hammer tapping one rhythm until looking has decreased enough to meet the paper’s familiarisation rule.",
      "Give different groups matching sights and sounds, sight alone, sound alone, or sights and sounds that do not match in time.",
      "After familiarisation and trials with no change, introduce a different rhythm while keeping the other event features the same.",
      "Compare looking at the changed rhythm with looking just before the change. Use the study’s recordings and rules for ending trials to repeat the experiment."
    ],
    "measure": "How much looking increases when the rhythm changes.",
    "limitations": "Everyday clapping is a simpler adaptation of this controlled experiment. Sound level, timing between sound and picture, and the rules for familiarisation need to be controlled for the published test.",
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
    "name": "Telling human and monkey faces apart",
    "experiment": "Explore whether babies recognise a face they have already seen when it appears beside a different face.",
    "findings": "Six-month-olds showed evidence of telling individuals apart in both human and monkey photographs. Nine-month-olds and adults showed evidence for human faces only in the conditions tested.",
    "concept": "How experience shapes recognition of faces",
    "source": "Is face processing species-specific during the first year of life? (2002)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/12016317/",
    "kind": "experiment",
    "materials": [
      "Matching sets of human and monkey face photographs",
      "Controlled side-by-side display",
      "Video for measuring looking time"
    ],
    "procedure": [
      "Use separate human-face and monkey-face conditions.",
      "Let the observer become familiar with one face, then show it beside a new face of the same species.",
      "Vary which side the new face appears on. Compare time spent looking at the familiar and new faces.",
      "Compare six-month-old, nine-month-old and adult groups. Use the paper’s photographs and exposure times to repeat the test exactly."
    ],
    "measure": "The share of total face-looking time spent looking at the new face.",
    "limitations": "The study compared different age groups, rather than following the same babies as they grew. Face exposure and photograph details matter; the ages do not set a deadline for an individual baby.",
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
    "name": "Finding repeated groups of speech sounds",
    "experiment": "Explore whether babies can pick out recurring syllable groups from a stream of made-up speech with no pauses between words.",
    "findings": "After two minutes, eight-month-olds listened differently to familiar word-like groups and to comparison groups. This suggests they learned which syllables tended to occur together.",
    "concept": "Learning sound patterns that may help identify words",
    "source": "Statistical learning by 8-month-old infants (1996)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/8943209/",
    "kind": "experiment",
    "materials": [
      "The study’s made-up-language recordings",
      "Quiet listening area",
      "Head-turn recording setup or suitable video"
    ],
    "procedure": [
      "Play two minutes of continuous made-up speech with no pauses marking word boundaries.",
      "At test, play recurring three-syllable groups and comparison groups that cross the boundaries between them. Keep other sound features comparable.",
      "Measure how long the baby stays turned towards the sound while each sequence plays, using the study’s head-turn preference method.",
      "Vary which made-up language each baby hears and the order of test items. Use the recordings and rules for ending trials from the study."
    ],
    "measure": "Listening time for recurring syllable groups compared with groups that cross word boundaries.",
    "limitations": "The recordings carefully control speech sounds and the chance of syllables occurring together. Ordinary listening does not repeat those controls. A group difference in listening does not show that babies understand the meaning of words.",
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
    "name": "Following shared attention and communication over time",
    "experiment": "Explore how sharing attention with a caregiver relates to emerging gestures and words across repeated visits with the same babies.",
    "findings": "The study followed 24 babies from nine to fifteen months. More shared engagement and caregiver talk about the baby’s current focus were linked with early communication skills. These links alone do not show cause and effect.",
    "concept": "Sharing attention, gestures and early communication",
    "source": "Social cognition, joint attention, and communicative competence from 9 to 15 months of age (1998)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/9835078/",
    "kind": "observation",
    "materials": [
      "Permission for caregiver–baby play observations",
      "Standard set of toys",
      "Video and observation sheet",
      "Schedule for repeated visits"
    ],
    "procedure": [
      "For this simplified observation, record similar caregiver–baby play periods at regular ages.",
      "Record times when both attend to the same object, when the baby looks between an object and the caregiver, and when the baby shows or points to something.",
      "Note whether caregiver speech concerns what the baby is already attending to. Record new gestures and words separately.",
      "Use the same definitions and observation length at later visits. To repeat the full study, use its complete set of tasks and scoring instructions."
    ],
    "measure": "Time spent sharing attention, looking and pointing behaviours, and later gestures and words.",
    "limitations": "This simplified play observation covers only part of the study’s assessment. A single missed point or change of gaze cannot diagnose a developmental difficulty.",
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
    "name": "Deciding whether to copy an unusual action",
    "experiment": "Explore whether babies copy an adult’s forehead press to switch on a light differently when the adult’s hands are free or occupied.",
    "findings": "More babies copied the forehead action after seeing the adult’s hands free. They may have noticed whether the adult could use their hands, but differences in attention and distraction could also explain the result.",
    "concept": "Choosing which actions to copy",
    "source": "Rational imitation in preverbal infants (2002)",
    "sourceUrl": "https://doi.org/10.1038/415755a",
    "kind": "experiment",
    "materials": [
      "Research light-box that switches on when touched",
      "Blanket",
      "Video recording"
    ],
    "procedure": [
      "Have fourteen-month-olds watch an adult switch on a light-box with the forehead. In one condition the adult’s hands are free; in the other they hold a blanket.",
      "Keep the head action and resulting light as similar as possible in both conditions.",
      "One week later, offer the light-box and record whether the baby presses with the forehead or uses a hand.",
      "Use the same scoring rules for both conditions. Follow the paper for the number of demonstrations and test length."
    ],
    "measure": "Whether babies use the demonstrated forehead action or a hand action.",
    "limitations": "The task needs the research light-box, rather than a household lamp. Researchers disagree about how best to explain the result. Copying a head action is not a required milestone.",
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
    "name": "Expecting someone to search where they think a toy is",
    "experiment": "Explore whether babies expect an adult to search according to what the adult has seen, even when the baby knows the toy has moved.",
    "findings": "Babies’ looking patterns matched expectations based on the adult’s information about the toy. The result alone does not show that babies reason about beliefs in the same way as adults.",
    "concept": "Expectations about another person’s knowledge",
    "source": "Do 15-month-old infants understand false beliefs? (2005)",
    "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3357322/",
    "kind": "experiment",
    "materials": [
      "Two different boxes",
      "Toy",
      "Controlled stage with an adult performer",
      "Video for measuring looking time"
    ],
    "procedure": [
      "Let the baby become familiar with an adult placing and retrieving a toy from one box.",
      "Move the toy, changing whether the adult can see the move. This gives the adult either current or outdated information about its location.",
      "Have the adult reach into one box and pause. Compare looking at searches that match or differ from the adult’s information.",
      "Keep event timing and earlier reaches consistent, and vary the search side. Use the paper’s script and extra methods information to repeat the study."
    ],
    "measure": "Time spent looking after the adult reaches into a box.",
    "limitations": "The published task tested fifteen-month-olds. Looking time can have several explanations; it does not replace a spoken question about a person’s mistaken belief or provide a diagnosis for an individual baby.",
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
    "experiment": "Explore whether a toddler returns a dropped object when an adult needs help, compared with a situation where the adult has deliberately put it aside.",
    "findings": "Eighteen-month-olds helped more often in several situations where the adult needed assistance. Helping varies across tasks, so a single response cannot establish how caring a child is.",
    "concept": "Noticing another person’s goal and helping",
    "source": "Altruistic helping in human infants and young chimpanzees (2006)",
    "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/16513986/",
    "kind": "experiment",
    "materials": [
      "Large safe object",
      "Reachable floor area",
      "Video or observation sheet"
    ],
    "procedure": [
      "Let the toddler watch an adult accidentally drop an object beyond the adult’s reach.",
      "Have the adult unsuccessfully try to reach it while keeping it accessible to the toddler. Do not ask for help or promise a reward.",
      "Compare with a situation where the adult deliberately discards the object and shows no wish to retrieve it.",
      "Record whether the toddler retrieves and returns it, how long this takes, and any adult prompting. Use the paper for the timing and complete set of tasks."
    ],
    "measure": "How often and how quickly toddlers help without being asked, compared with the situation where help is not needed.",
    "limitations": "This describes the out-of-reach activity, one of ten situations in the study. Attention, confidence and familiarity can affect participation; refusal alone does not show a lack of empathy.",
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
