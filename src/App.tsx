import { useMemo, useState } from "react"
import { studies, type Study } from "./studies"
import { compareStudyWindows, getTargetDate } from "./timeline"

type IconName = "calendar" | "chevron" | "clock" | "search" | "spark" | "check"

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    calendar: (
      <>
        <path d="M6 2v3M18 2v3M3.5 9h17M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
        <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
      </>
    ),
    check: <path d="m7 12 3 3 7-7" />,
  }

  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function dateInputValue(date: Date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000)
  return local.toISOString().slice(0, 10)
}

function formatWindow(start: Date, end: Date) {
  if (start.toDateString() === end.toDateString()) return shortDate.format(start)
  const formatter = start.getFullYear() === end.getFullYear() ? shortDate : longDate
  return `${formatter.format(start)} – ${formatter.format(end)}`
}

const longDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})
const shortDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
})
const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
})

type ScheduledStudy = Study & {
  id: number
  targetDate: Date
  endDate: Date
  daysAway: number
}

function StudyCard({
  study,
  isOpen,
  onToggle,
}: {
  study: ScheduledStudy
  isOpen: boolean
  onToggle: () => void
}) {
  const isPast = study.daysAway < -30
  const isSoon = study.daysAway >= -30 && study.daysAway <= 30

  return (
    <article className={`study-card ${isOpen ? "study-card-open" : ""}`}>
      <button
        className="study-summary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div
          className={`status-mark ${
            isSoon ? "status-soon" : isPast ? "status-past" : ""
          }`}
        >
          {isPast ? <Icon name="check" className="h-4 w-4" /> : <span />}
        </div>
        <div className="min-w-0 flex-1 text-left">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="age-pill">{study.age}</span>
            {isSoon && <span className="due-pill">Around this age</span>}
          </div>
          <h3 className="study-title">{study.name}</h3>
          <p className="study-concept">{study.concept}</p>
        </div>
        <div className="date-block">
          <span>{formatWindow(study.targetDate, study.endDate)}</span>
          <Icon
            name="chevron"
            className={`chevron ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="study-details">
          <div className="detail-grid">
            <div>
              <p className="detail-label">Experiment</p>
              <p className="detail-copy">{study.experiment}</p>
            </div>
            <div>
              <p className="detail-label">Key findings</p>
              <p className="detail-copy">{study.findings}</p>
            </div>
          </div>
          <div className="detail-footer">
            <div>
              <p className="detail-label">Developmental concept</p>
              <p className="text-sm font-semibold text-[#263b36]">
                {study.concept}
              </p>
            </div>
            <div className="source">
              <span>Source</span>
              {study.sourceUrl ? (
                <a href={study.sourceUrl} target="_blank" rel="noopener noreferrer">
                  {study.source}
                </a>
              ) : study.source}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default function App() {
  const defaultBirthDate = new Date()
  defaultBirthDate.setMonth(defaultBirthDate.getMonth() - 6)

  const [birthDate, setBirthDate] = useState(dateInputValue(defaultBirthDate))
  const [query, setQuery] = useState("")
  const [view, setView] = useState<"upcoming" | "all">("upcoming")
  const [openId, setOpenId] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(false)

  const scheduled = useMemo<ScheduledStudy[]>(() => {
    if (!birthDate) return []
    const now = new Date()
    now.setHours(12, 0, 0, 0)
    return studies
      .map((study, id) => {
        const targetDate = getTargetDate(birthDate, study.startAge)
        const endDate = getTargetDate(birthDate, study.endAge ?? study.startAge)
        const daysAway = Math.round(
          (endDate.getTime() - now.getTime()) / 86_400_000,
        )
        return { ...study, id, targetDate, endDate, daysAway }
      })
      .sort(compareStudyWindows)
  }, [birthDate])

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return scheduled.filter((study) => {
      const matchesView = view === "all" || study.daysAway >= -30
      const matchesQuery =
        !needle ||
        `${study.name} ${study.concept} ${study.age}`
          .toLowerCase()
          .includes(needle)
      return matchesView && matchesQuery
    })
  }, [query, scheduled, view])

  const visible = showMore ? filtered : filtered.slice(0, 14)
  const groups = visible.reduce<Array<{
    label: string
    studies: ScheduledStudy[]
  }>>((all, study) => {
    const label = monthYear.format(study.endDate)
    const last = all.at(-1)
    if (last?.label === label) last.studies.push(study)
    else all.push({ label, studies: [study] })
    return all
  }, [])

  const upcomingCount = scheduled.filter(
    (study) => study.daysAway >= -30,
  ).length
  const nextStudy = scheduled.find((study) => study.daysAway >= -30)
  const ageInMonths = birthDate
    ? Math.max(
        0,
        Math.floor(
          (Date.now() - new Date(`${birthDate}T12:00:00`).getTime()) /
            (30.4375 * 86_400_000),
        ),
      )
    : 0

  return (
    <div className="min-h-screen bg-[#f5f4ef] text-[#182824]">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Study Timeline home">
          <span className="brand-mark">
            <Icon name="spark" className="h-5 w-5" />
          </span>
          <span>
            Study<span>Timeline</span>
          </span>
        </a>
        <div className="header-note">
          <span className="hidden sm:inline">
            Developmental research planner
          </span>
          <span className="header-dot" />
          <span>{studies.length} studies</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Personalized research calendar</p>
            <h1>
              Explore development,
              <br />
              <em>one study at a time.</em>
            </h1>
            <p>
              Enter a birth date to turn developmental research into a clear,
              practical timeline of the ages studied. These are research ages,
              not developmental deadlines or diagnostic tests. Studies are
              ordered by the end of their age window.
            </p>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-one" />
            <div className="orbit-ring orbit-two" />
            <div className="orbit-center">
              <Icon name="calendar" className="h-8 w-8" />
            </div>
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-dot dot-three" />
          </div>
        </section>

        <section className="workspace">
          <aside className="sidebar">
            <div className="date-card">
              <div className="card-heading">
                <span className="small-icon">
                  <Icon name="calendar" className="h-4 w-4" />
                </span>
                <div>
                  <p className="detail-label">Start here</p>
                  <h2>Enter birth date</h2>
                </div>
              </div>
              <label htmlFor="birthdate">Child's birth date</label>
              <input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={(event) => {
                  setBirthDate(event.target.value)
                  setShowMore(false)
                }}
              />
              <p className="privacy-note">
                Used only to calculate this timeline.
              </p>
            </div>

            <div className="snapshot">
              <p className="detail-label">Timeline snapshot</p>
              <div className="snapshot-row">
                <span>Current age</span>
                <strong>
                  {ageInMonths < 12
                    ? `${ageInMonths} months`
                    : `${Math.floor(ageInMonths / 12)}y ${ageInMonths % 12}m`}
                </strong>
              </div>
              <div className="snapshot-row">
                <span>Upcoming studies</span>
                <strong>{upcomingCount}</strong>
              </div>
              <div className="snapshot-row">
                <span>Next window ends</span>
                <strong>
                  {nextStudy ? shortDate.format(nextStudy.endDate) : "—"}
                </strong>
              </div>
            </div>

            <div className="tip-card">
              <Icon name="spark" className="h-5 w-5" />
              <div>
                <strong>Planning tip</strong>
                <p>
                  Review studies 2–4 weeks ahead to gather materials and align
                  observation time.
                </p>
              </div>
            </div>
          </aside>

          <div className="schedule">
            <div className="schedule-head">
              <div>
                <p className="eyebrow">Your timeline</p>
                <h2>Upcoming experiments</h2>
                {birthDate && (
                  <p>
                    Calculated from{" "}
                    {longDate.format(new Date(`${birthDate}T12:00:00`))}
                  </p>
                )}
              </div>
              <div className="view-toggle" aria-label="Timeline filter">
                <button
                  className={view === "upcoming" ? "active" : ""}
                  onClick={() => {
                    setView("upcoming")
                    setShowMore(false)
                  }}
                >
                  Upcoming
                </button>
                <button
                  className={view === "all" ? "active" : ""}
                  onClick={() => {
                    setView("all")
                    setShowMore(false)
                  }}
                >
                  All studies
                </button>
              </div>
            </div>

            <div className="search-wrap">
              <Icon name="search" className="h-5 w-5" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by study, age, or developmental concept…"
                aria-label="Search studies"
              />
              <span>{filtered.length} results</span>
            </div>

            {!birthDate ? (
              <div className="empty-state">
                <Icon name="calendar" className="h-8 w-8" />
                <h3>Add a birth date to build the timeline</h3>
                <p>Your personalized experiment dates will appear here.</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="empty-state">
                <Icon name="search" className="h-8 w-8" />
                <h3>No matching studies</h3>
                <p>Try a broader search term or switch to all studies.</p>
              </div>
            ) : (
              <div className="timeline">
                {groups.map((group) => (
                  <div className="month-group" key={group.label}>
                    <div className="month-marker">
                      <span />
                      <p>Ends {group.label}</p>
                    </div>
                    <div className="month-studies">
                      {group.studies.map((study) => (
                        <StudyCard
                          key={study.id}
                          study={study}
                          isOpen={openId === study.id}
                          onToggle={() =>
                            setOpenId(openId === study.id ? null : study.id)
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filtered.length > 14 && (
              <button
                className="show-more"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore
                  ? "Show fewer studies"
                  : `Show all ${filtered.length} studies`}
                <Icon
                  name="chevron"
                  className={`h-4 w-4 ${showMore ? "rotate-180" : ""}`}
                />
              </button>
            )}
          </div>
        </section>
      </main>
      <footer>
        <p>Study Timeline</p>
        <span>For research planning and educational use</span>
      </footer>
    </div>
  )
}

