import Image from "next/image";

const practiceAreas = [
  "DIVORCE & SEPARATION",
  "HIGH-ASSET DIVORCE",
  "CHILD CUSTODY",
  "CHILD SUPPORT",
  "PROPERTY DIVISION",
  "SPOUSAL SUPPORT",
  "PRENUPTIAL AGREEMENTS",
  "ESTATE PLANNING",
  "DOMESTIC VIOLENCE",
];

const partnerCards = [
  { name: "DEER DESIGNER", role: "Managing Partner", image: "/assets/partner-1.png" },
  { name: "AMANDA C. KNIGHT", role: "Partner", image: "/assets/partner-2.png" },
  { name: "AUTUMN D. OSBOURNE", role: "Partner", image: "/assets/partner-3.png" },
];

const offices = ["DURHAM OFFICE", "CARY OFFICE", "WAKE FOREST OFFICE", "PITTSBORO OFFICE"];

function SocialIcon({ network }: { network: "facebook" | "linkedin" | "youtube" }) {
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" aria-hidden>
        <path
          fill="currentColor"
          d="M13.62 22v-8.2h2.76l.42-3.2h-3.18V8.56c0-.92.26-1.54 1.58-1.54h1.68V4.15A22 22 0 0 0 14.42 4c-2.43 0-4.1 1.48-4.1 4.22v2.37H7.56v3.2h2.76V22h3.3z"
        />
      </svg>
    );
  }

  if (network === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" aria-hidden>
        <path
          fill="currentColor"
          d="M6.53 8.8a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8zM4.9 20h3.25V10.14H4.9V20zm5.05 0h3.24v-4.88c0-1.28.24-2.52 1.82-2.52 1.56 0 1.58 1.46 1.58 2.6V20h3.24v-5.45c0-2.68-.58-4.73-3.7-4.73-1.5 0-2.5.82-2.9 1.6h-.05v-1.28H9.95c.04.84 0 9.86 0 9.86z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" aria-hidden>
      <path
        fill="currentColor"
        d="M21.6 7.2a3 3 0 0 0-2.12-2.12C17.64 4.6 12 4.6 12 4.6s-5.64 0-7.48.48A3 3 0 0 0 2.4 7.2c-.48 1.84-.48 4.8-.48 4.8s0 2.96.48 4.8a3 3 0 0 0 2.12 2.12c1.84.48 7.48.48 7.48.48s5.64 0 7.48-.48a3 3 0 0 0 2.12-2.12c.48-1.84.48-4.8.48-4.8s0-2.96-.48-4.8zM9.9 15.08V8.92L15.28 12 9.9 15.08z"
      />
    </svg>
  );
}

function GoldIcon({ index }: { index: number }) {
  const shapes = ["M4 18h16M6 18V8h12v10M10 8V5h4v3", "M4 18h16M8 18V9m8 9V9M6 9h12M12 9V5", "M6 18V8m12 10V8M4 18h16M9 11c0 1.7 1.3 3 3 3s3-1.3 3-3", "M6 18V7h12v11M4 18h16M10 7V4h4v3", "M5 18V9l7-5 7 5v9M4 18h16", "M5 18h14M7 18V9h10v9M10 13h4", "M5 7h14v11H5zM8 5h8v2M8 11h8M8 14h8", "M6 18V8h12v10M9 8V5h6v3M4 18h16", "M4 18h16M6 18V9l6-4 6 4v9M12 9v9"];
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-[var(--color-brand-500)]" aria-hidden>
      <path d={shapes[index % shapes.length]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OfficePlaceholder() {
  return (
    <div className="flex h-22 w-full items-center justify-center border border-[#d3d9e0] bg-[#e9edf1]">
      <svg viewBox="0 0 48 36" className="h-10 w-12 text-[#7c8797]" fill="none" aria-hidden>
        <rect x="1" y="1" width="46" height="34" stroke="currentColor" strokeWidth="2" />
        <circle cx="15" cy="12" r="4" fill="currentColor" />
        <path d="M7 29l11-10 9 7 6-5 8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function LocationTagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 text-[var(--color-brand-500)]" fill="none" aria-hidden>
      <path
        d="M12 21c4.2-4.45 6.3-7.82 6.3-10.1A6.3 6.3 0 1 0 5.7 10.9C5.7 13.18 7.8 16.55 12 21z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="10.2" r="2.25" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--color-paper-100)] text-[var(--color-text-on-light)]">
      <section className="relative isolate min-h-[640px] overflow-hidden bg-[var(--color-ink-900)] text-[var(--color-text-on-dark)]">
        <Image src="/assets/hero-bg.png" alt="Two women walking and talking" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-[var(--color-hero-overlay)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,8,16,0.35)] via-transparent to-[rgba(7,12,22,0.7)]" />
        <div className="absolute -left-[190px] top-[76px] h-[540px] w-[440px] rounded-full border-[28px] border-[rgba(193,150,102,0.26)]" />
        <div className="absolute -right-[190px] top-[76px] h-[540px] w-[440px] rounded-full border-[28px] border-[rgba(193,150,102,0.26)]" />

        <header className="relative z-10 mb-16 border-y border-[rgba(255,255,255,0.12)]">
          <div className="bg-[#12161e]">
            <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-2 md:px-8">
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(198,174,141,0.7)] text-[var(--color-brand-500)] transition hover:bg-[rgba(193,150,102,0.15)]">
                  <SocialIcon network="facebook" />
                </a>
                <a href="#" aria-label="LinkedIn" className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(198,174,141,0.7)] text-[var(--color-brand-500)] transition hover:bg-[rgba(193,150,102,0.15)]">
                  <SocialIcon network="linkedin" />
                </a>
                <a href="#" aria-label="YouTube" className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(198,174,141,0.7)] text-[var(--color-brand-500)] transition hover:bg-[rgba(193,150,102,0.15)]">
                  <SocialIcon network="youtube" />
                </a>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-[#d4cabf] md:text-[11px]">CALL: 919 929 4383</span>
            </div>
          </div>
          <div className="bg-[#17191e]">
            <div className="mx-auto max-w-[1120px] px-6 pb-4 pt-3 md:px-8">
            <div className="flex flex-wrap items-center gap-3 md:gap-5">
              <Image src="/assets/site-logo.png" alt="Deer Designer" width={208} height={52} className="h-auto w-[150px] md:w-[190px]" />
              <nav className="ml-auto hidden items-center gap-3 text-[10px] tracking-[0.17em] text-[#ddd5cd] lg:flex">
                <a href="#" className="transition-colors hover:text-white">ABOUT</a>
                <a href="#" className="transition-colors hover:text-white">WHY US</a>
                <a href="#" className="transition-colors hover:text-white">STATE PLANNING</a>
                <a href="#" className="transition-colors hover:text-white">TESTIMONIALS</a>
                <a href="#" className="transition-colors hover:text-white">RESOURCES</a>
                <a href="#" className="transition-colors hover:text-white">CONTACT</a>
              </nav>
              <button className="border border-[var(--color-brand-500)] px-4 py-2 text-[10px] tracking-[0.16em] text-[#efe5d9] transition hover:bg-[rgba(193,150,102,0.15)]">
                SCHEDULE A CONSULTATION
              </button>
            </div>
            </div>
          </div>
        </header>

        <div className="relative mx-auto max-w-[1120px] px-6 pt-2 md:px-8">
          <div className="mx-auto max-w-[690px] rounded-[14px] border border-[rgba(255,255,255,0.45)] bg-[rgba(255,255,255,0.14)] px-6 py-9 text-center backdrop-blur-[1.5px] md:px-12 md:py-11">
            <h1 className="font-serif text-[42px] italic leading-[1.08] md:text-[58px]">
              <span className="text-[#f5eee6]">Your Future </span>
              <span className="text-[var(--color-brand-400)]">Starts Here</span>
            </h1>
            <p className="mx-auto mt-3 max-w-[560px] text-[12px] leading-relaxed tracking-[0.04em] text-[#e6ddcf] md:text-[13px]">
              Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle,
              and Beyond.
            </p>
            <p className="mt-3 text-[10px] tracking-[0.18em] text-[#e2d8ca]">LED BY BOARD CERTIFIED SPECIALISTS IN FAMILY LAW</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="min-w-[158px] bg-[var(--color-brand-500)] px-6 py-2.5 text-[10px] tracking-[0.2em] text-[var(--color-brand-ink)] transition hover:bg-[var(--color-brand-400)]">
                CALL NOW
              </button>
              <button className="min-w-[228px] border border-[rgba(255,255,255,0.35)] px-6 py-2.5 text-[10px] tracking-[0.19em] text-[#f4ede3] transition hover:bg-[rgba(255,255,255,0.1)]">
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper-100)] py-14">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-6 md:grid-cols-[1.2fr_1fr] md:px-8">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.24em] text-[var(--color-text-muted-light)]">NEWSLETTER SIGN UP</p>
            <h2 className="font-serif text-[39px] italic leading-[1.1] text-[var(--color-text-on-light)]">
              Ex Files featuring <span className="not-italic text-[var(--color-brand-500)]">Pour Decisions</span>
            </h2>
            <ul className="mt-4 space-y-1 text-[12px] leading-relaxed text-[var(--color-text-muted-light)]">
              <li>- Stay up to date on changes in North Carolina law</li>
              <li>- Get practical legal insights in your own inbox</li>
              <li>- Accessible updates and resources written for where you are</li>
            </ul>
            <p className="mt-4 text-[12px] italic text-[var(--color-text-muted-light)]">
              With this free newsletter from &ldquo;Pour Decisions&rdquo; series, keeping the legal process clear and manageable starts right here.
            </p>
          </div>
          <form className="space-y-3 self-center">
            <input className="h-10 w-full border border-[#d2c8bc] bg-[#f7f2ec] px-4 text-[12px] tracking-[0.06em] outline-none placeholder:text-[#9e9285] focus:border-[var(--color-brand-500)]" placeholder="Enter your Name" />
            <input className="h-10 w-full border border-[#d2c8bc] bg-[#f7f2ec] px-4 text-[12px] tracking-[0.06em] outline-none placeholder:text-[#9e9285] focus:border-[var(--color-brand-500)]" placeholder="Enter your Email" />
            <button className="h-10 w-full bg-[var(--color-brand-500)] text-[10px] tracking-[0.24em] text-[var(--color-brand-ink)] transition hover:bg-[var(--color-brand-400)]">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[var(--color-ink-900)] py-18 text-[var(--color-text-on-dark)]">
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <p className="text-center text-[10px] tracking-[0.22em] text-[#b9ad9f]">DEER DESIGNER FAMILY PRACTICE AREAS</p>
          <h2 className="mt-3 text-center font-serif text-[47px] italic leading-[1.1]">Legal Guidance For Every Step Forward</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((title, index) => (
              <article key={title} className="min-h-[198px] rounded-[14px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.12)] p-6 shadow-[var(--shadow-soft-dark)] backdrop-blur-[1.2px]">
                <GoldIcon index={index} />
                <h3 className="mt-4 text-[15px] leading-tight tracking-[0.05em] text-[#f4ede5]">{title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-[#f4ede5]">
                  Strategic legal representation designed to protect your rights and move your matter forward with clarity.
                </p>
                <a href="#" className="mt-4 inline-flex text-[10px] tracking-[0.2em] text-[var(--color-brand-600)] transition hover:text-[var(--color-brand-500)]">
                  LEARN MORE →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f0] py-18">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 md:grid-cols-[340px_1fr] md:px-8">
          <Image src="/assets/boad-certified.png" alt="Board certified badge" width={320} height={320} className="mx-auto h-auto w-[240px] md:w-[300px]" />
          <div>
            <h2 className="font-serif text-[40px] italic leading-[1.15] text-[var(--color-text-on-light)]">
              <span>Caring Representation Led By</span>
              <br />
              <span className="text-[var(--color-brand-600)]">Board-Certified Specialists</span>
            </h2>
            <p className="mt-5 max-w-[600px] text-[13px] leading-relaxed text-[var(--color-text-muted-light)]">
              When you are facing a divorce or another family law challenge in the Triangle area, it can seem like the best resolution is simply any resolution. We understand the turmoil you are going through, and we are committed to guiding you toward the best resolution possible.
            </p>
            <p className="mt-4 max-w-[600px] text-[13px] leading-relaxed text-[var(--color-text-muted-light)]">
              Our team of attorneys is led by Gray Deer Designer and Autumn Osbourne, both specialists with a board certification in family law from the North Carolina State Board of Legal Specialization, and includes other board-certified family law specialists as well. You can count on our depth of experience and dedication to excellence to help you through this difficult time.
            </p>
            <button className="mt-7 bg-[var(--color-brand-500)] px-6 py-3 text-[10px] tracking-[0.2em] text-[var(--color-brand-ink)] transition hover:bg-[var(--color-brand-400)]">
              WHAT DOES IT MEAN TO BE A CERTIFIED FAMILY LAW SPECIALIST? →
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f0] pb-20">
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <h2 className="text-center font-serif text-[48px] italic text-[var(--color-text-on-light)]">Meet Our Partners</h2>
          <p className="mx-auto mt-3 max-w-[600px] text-center text-[13px] leading-relaxed text-[var(--color-text-muted-light)]">
            Get to know the experienced leaders guiding our firm with strength, strategy, and a commitment to exceptional client service.
          </p>
          <div className="mx-auto mt-12 grid max-w-[800px] gap-6 md:grid-cols-3">
            {partnerCards.map((card) => (
              <article key={card.name} className="relative overflow-hidden rounded-[12px] shadow-[var(--shadow-soft-light)]">
                <Image src={card.image} alt={card.name} width={260} height={320} className="h-[300px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(11,17,32,0.95)] via-[rgba(11,17,32,0.7)] to-transparent px-4 pb-4 pt-16 text-[var(--color-text-on-dark)]">
                  <h3 className="text-[12px] font-semibold tracking-[0.1em] text-[#f4ede5]">{card.name}</h3>
                  <p className="mt-1 text-[10px] tracking-[0.08em] text-[#d4c8b8]">{card.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="bg-[var(--color-brand-500)] px-8 py-3 text-[10px] tracking-[0.22em] text-[var(--color-brand-ink)] transition hover:bg-[var(--color-brand-400)]">
              MEET ALL ATTORNEYS
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f0] py-20">
        <div className="mx-auto max-w-[1120px] px-6 text-center md:px-8">
          <h2 className="font-serif text-[48px] italic text-[var(--color-text-on-light)]">Close Attention To What You Need</h2>
          <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-3 items-center gap-6">
            {["CONSULT", "MATCH", "ADVOCATE"].map((step, idx) => (
              <div key={step} className="relative">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[var(--color-brand-500)] bg-[#1a1f2e] text-[28px] font-semibold text-[var(--color-brand-500)]">0{idx + 1}</div>
                <p className="mt-6 text-[13px] tracking-[0.12em] text-[var(--color-text-on-light)]">{step}</p>
                {idx < 2 && <span className="absolute -right-4 top-8 text-[28px] text-[#8b7355]">→</span>}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-[900px] text-[13px] leading-relaxed text-[var(--color-text-muted-light)]">
            When you have your first consultation with our firm, you will personally speak with Deer Designer or another senior level attorney to tell your story. From there, you will work with one lawyer for the duration of your case. You will not get passed to a junior associate or be lost in the shuffle.
          </p>
          <p className="mx-auto mt-4 max-w-[900px] text-[13px] leading-relaxed text-[var(--color-text-muted-light)]">
            We take care to match you with the attorney at our firm who can be of the most help in your unique situation. We respect that this is your life, and what happens now can have cascading effects in the future. We aim to ensure that you can face the future from a position of strength and hope.
          </p>
          <button className="mt-10 bg-[var(--color-brand-500)] px-8 py-3 text-[10px] tracking-[0.24em] text-[var(--color-brand-ink)] transition hover:bg-[var(--color-brand-400)]">
            LEARN MORE ABOUT US →
          </button>
        </div>
      </section>

      <section className="bg-[var(--color-ink-900)] py-20 text-[var(--color-text-on-dark)]" style={{ backgroundImage: "var(--gradient-deep-navy)" }}>
        <div className="mx-auto max-w-[1120px] px-6 md:px-8">
          <p className="text-center text-[10px] tracking-[0.22em] text-[#b8ab9b]">TESTIMONIALS</p>
          <h2 className="mt-3 text-center font-serif text-[48px] italic">Hear What Our Clients Have to Say</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[10px] tracking-[0.15em]">
            {['FAMILY', 'DIVORCE', 'CHILD CUSTODY', 'DOMESTIC VIOLENCE'].map((chip, idx) => (
              <span key={chip} className={`rounded-full px-5 py-2 ${idx === 0 ? 'bg-[var(--color-brand-500)] text-[var(--color-brand-ink)]' : 'border border-[rgba(202,181,148,0.6)] text-[#c9bcac]'}`}>{chip}</span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              {
                name: "MARY",
                role: "Placeholder",
                text: "Autumn Osbourne offered top-notch counsel and legal support during a difficult, high-conflict divorce. My family wouldn't be where we are today without her. The entire Deer Designer Family Law team — from Autumn to paralegals to office staff — consistently goes above and beyond for their clients. I can't recommend Autumn and Deer Designer Family Law enough. Thank you!"
              },
              {
                name: "DAVID AND PAM",
                role: "Placeholder",
                text: "We highly recommend the legal services of attorney Buckley. Attorney Buckley has represented us in a very difficult family issue and we have been more than satisfied. The firm is extremely knowledgeable about family law and has consistently conducted themselves with the utmost professionalism. We would not think of going into a courtroom without them."
              }
            ].map((testimonial) => (
              <article key={testimonial.name} className="rounded-[12px] border border-[rgba(199,174,141,0.3)] bg-[rgba(15,23,38,0.72)] p-8">
                <p className="text-center text-[64px] leading-none text-[var(--color-brand-500)]">&quot;</p>                <p className="-mt-4 text-[13px] italic leading-relaxed text-[#d9cec0]">
                  {testimonial.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b7d6f] text-[var(--color-brand-500)]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                      <path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] text-[#f2e9dd]">{testimonial.name}</p>
                    <p className="text-[10px] text-[#b4a998]">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-2 w-5 rounded-full bg-[var(--color-brand-500)]" />
            <span className="h-2 w-2 rounded-full bg-[#7f8693]" />
            <span className="h-2 w-2 rounded-full bg-[#7f8693]" />
          </div>
          <div className="mt-8 text-center">
            <button className="bg-[var(--color-brand-500)] px-8 py-3 text-[10px] tracking-[0.24em] text-[var(--color-brand-ink)] transition hover:bg-[var(--color-brand-400)]">
              READ MORE TESTIMONIALS →
            </button>
          </div>
        </div>
      </section>      <section className="border-y border-[rgba(214,196,168,0.2)] bg-[var(--color-ink-900)] py-9 text-[var(--color-text-on-dark)]">
        <div className="mx-auto grid max-w-[1120px] gap-5 px-6 md:grid-cols-2 lg:grid-cols-4 md:px-8">
          {offices.map((office) => (
            <article key={office} className="text-center">
              <div className="mb-2 flex justify-center">
                <LocationTagIcon />
              </div>
              <h3 className="text-[14px] tracking-[0.07em]">{office}</h3>
              <p className="mt-1 text-[11px] text-[#b8ad9f]">1234 Main Street, NC 27513</p>
              <div className="mt-3"><OfficePlaceholder /></div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#17191e] py-12 text-[var(--color-text-on-dark)]">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:grid-cols-[1.1fr_1fr_1fr_1fr] md:px-8">
          <div>
            <Image src="/assets/site-logo.png" alt="Deer Designer" width={190} height={48} className="h-auto w-[170px]" />
            <div className="mt-5 flex gap-3">
              {['f', 'in', 'ig'].map((i) => (
                <a key={i} href="#" className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(198,174,141,0.6)] text-[11px] text-[var(--color-brand-500)] transition hover:bg-[rgba(193,150,102,0.12)]">{i}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-[11px] tracking-[0.2em] text-[#c8bba9]">QUICK LINKS</h4>
            <ul className="space-y-2 text-[11px] text-[#b4a898]">
              <li><a href="#" className="hover:text-[#f1e6d8]">ABOUT US</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">BLOG</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">RESOURCES</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">CONTACT</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[11px] tracking-[0.2em] text-[#c8bba9]">PRACTICE AREAS</h4>
            <ul className="space-y-2 text-[11px] text-[#b4a898]">
              <li><a href="#" className="hover:text-[#f1e6d8]">DIVORCE</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">HIGH-ASSET DIVORCE</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">CHILD CUSTODY</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">SPOUSAL SUPPORT</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">DOMESTIC VIOLENCE</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[11px] tracking-[0.2em] text-[#c8bba9]">ESTATE PLANNING</h4>
            <ul className="space-y-2 text-[11px] text-[#b4a898]">
              <li><a href="#" className="hover:text-[#f1e6d8]">WILLS & TRUSTS</a></li>
              <li><a href="#" className="hover:text-[#f1e6d8]">POWER OF ATTORNEY</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1120px] flex-col justify-between gap-2 border-t border-[rgba(214,196,168,0.15)] px-6 pt-6 text-[10px] tracking-[0.08em] text-[#8f877b] md:flex-row md:px-8">
          <p>PRIVACY POLICY | DISCLAIMER</p>
          <p>© 2026 DEERDESIGNER FAMILY LAW FIRM</p>
          <p>DESIGNED BY DEERDESIGNER DIGITAL MEDIA</p>
        </div>
      </footer>
    </main>
  );
}
