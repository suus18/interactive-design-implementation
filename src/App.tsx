import { useCallback, useEffect, useRef, useState } from 'react'

const A = `${import.meta.env.BASE_URL}assets`

const works = [
  { src: `${A}/043dc.webp`, title: '그래픽 및 편집 디자인' },
  { src: `${A}/9f3f4.webp`, title: '브랜드 애플리케이션 디자인' },
]

type IdentityCardProps = {
  index: number
  compact?: boolean
}

const cards = [
  {
    color: '#0e60dd',
    title: '브랜드 비주얼 실전가',
    summary: '브랜드의 핵심 가치를 시각 언어로 풀어내고, 일관된 브랜드 이미지를 구축하는 실무형 디자이너입니다.',
    points: [
      '브랜드의 방향과 콘셉트를 먼저 이해하고, 이를 로고와 타이포그래피 등 다양한 시각 요소로 발전시킵니다.',
      '브랜드의 특성에 맞는 시각적 방향을 제안하며, 전체 디자인의 통일성과 완성도를 중요하게 생각합니다.',
    ],
  },
  {
    color: '#a73d70',
    title: '과정 중심 실행가',
    summary: '아이디어를 구체적인 결과물로 발전시키며, 반복적인 시도와 수정을 통해 완성도를 높이는 실행가입니다.',
    points: [
      '다양한 영감과 아이디어를 바탕으로 여러 시각적 표현 방식을 탐색하고, 스케치와 초기 시안을 통해 디자인 방향을 구체화합니다.',
      '다양한 작업에서도 자신만의 미적 취향을 유지하며, 전체적인 분위기와 표현 방식이 자연스럽게 연결되도록 구성합니다.',
    ],
  },
  {
    color: '#9f58b3',
    title: '일관된 시각 미감',
    summary: '다양한 영감에서 출발해도 자신만의 시각 언어로 일관된 결과물을 완성하는 감각적인 디자이너입니다.',
    points: [
      '미니멀한 구도와 부드러운 색채 대비, 자연스러운 형태와 질감을 선호하며 시각 요소 간의 조화를 중요하게 생각합니다.',
      '다양한 작업에서도 자신만의 미적 취향을 유지하며, 전체적인 분위기와 표현 방식이 자연스럽게 연결되도록 구성합니다.',
    ],
  },
]

function IdentityCard({ index, compact = false }: IdentityCardProps) {
  const card = cards[index]
  const lineAssets = compact ? ['1903a.svg', 'e38fa.svg', 'c8ff5.svg'] : ['b86a5.svg', '6fa24.svg', 'adee5.svg']
  return (
    <article className={`identity-card identity-card-${index + 1} ${compact ? 'identity-card-compact' : ''}`}>
      <span className="card-index">IEUM IDENTITY CARD&nbsp;&nbsp; 0{index + 1}</span>
      <div className="card-copy" style={{ color: card.color }}>
        <strong>상세 소개</strong>
        <span className="card-divider"><img src={`${A}/${lineAssets[index]}`} alt="" /></span>
        {card.points.map((point, i) => (
          <div className="card-point" key={point}>
            <b>0{i + 1}</b>
            <p>{point}</p>
          </div>
        ))}
      </div>
      {index === 0 && <img className="card-art card-art-one" src={`${A}/${compact ? 'd93ef' : '191bd'}.svg`} alt="" />}
      {index === 1 && <img className="card-art card-art-two" src={`${A}/${compact ? '51462' : 'f1944'}.svg`} alt="" />}
      {index === 2 && (
        <div className="card-art-three">
          <img src={`${A}/${compact ? 'a3020' : '39a3b'}.svg`} alt="" />
          <img src={`${A}/${compact ? '9dc2c' : 'd0ad8'}.svg`} alt="" />
          <span />
          <img src={`${A}/${compact ? 'cab29' : 'c9455'}.svg`} alt="" />
        </div>
      )}
      <div className="card-title" style={{ color: card.color }}>
        <h2>{card.title}</h2>
        <p>{card.summary}</p>
      </div>
    </article>
  )
}

function Portrait({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? 'portrait portrait-small' : 'portrait'}>
      <img src={`${A}/e29ae.webp`} alt="강민지 프로필 사진" />
    </div>
  )
}

function WorkGallery({ detailed = false, onPreview }: { detailed?: boolean; onPreview: (index: number) => void }) {
  return (
    <div className={`work-grid ${detailed ? 'work-grid-detail' : ''}`}>
      {works.map((work, index) => (
        <button className="work" key={work.title} onClick={() => onPreview(index)} aria-label={`${work.title} 미리보기`}>
          <span className={`work-image work-image-${index + 1}`}>
            <img src={work.src} alt="" />
          </span>
          <span>{work.title}</span>
        </button>
      ))}
    </div>
  )
}

function ProfileScreen({ onOpenDetail, onPreview }: { onOpenDetail: () => void; onPreview: (index: number) => void }) {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <main className="profile-page">
      <header className="profile-header">
        <h1>프로필</h1>
      </header>

      <section className="identity-carousel" ref={carouselRef} aria-label="강점 카드">
        {cards.map((_, index) => <IdentityCard index={index} key={index} />)}
      </section>

      <section className="profile-body">
        <Portrait />
        <div className="profile-intro">
          <h2>강민지</h2>
          <p>브랜드 비주얼 디자이너 · 서울</p>
        </div>

        <div className="stats">
          <div><strong>2</strong><span>작품</span></div>
          <div><strong>08</strong><span>프로젝트</span></div>
          <div><strong>03</strong><span>경력</span></div>
        </div>

        <div className="contacts">
          <a href="mailto:kammj@gmail.com"><img src={`${A}/6db51.svg`} alt="" />kammj@gmail.com</a>
          <a href="tel:+821012345678"><img src={`${A}/cf09d.svg`} alt="" />010 - 1234 - 5678</a>
        </div>

        <div className="tags">
          <span>홍익대학교(2023 -2027)학사 · 시각디자인학과</span>
          <span>프리랜서 3년 차</span>
          <span>브랜드 비주얼 디자이너</span>
        </div>

        <WorkGallery onPreview={onPreview} />

        <button className="primary-button" onClick={onOpenDetail}>프로필 전체보기</button>
      </section>
    </main>
  )
}

const skills = [
  ['브랜드 전략 및 포지셔닝', 4],
  ['브랜드 비주얼 시스템 디자인', 5],
  ['패키지 및 인쇄물 디자인', 4],
  ['디지털 미디어 및 UI 비주얼 디자인', 4],
  ['부서 간 협업 및 프로젝트 관리', 4],
] as const

function DetailScreen({ onBack, onPreview }: { onBack: () => void; onPreview: (index: number) => void }) {
  return (
    <main className="detail-page">
      <header className="detail-header">
        <button className="icon-button" onClick={onBack} aria-label="프로필로 돌아가기">
          <img src={`${A}/429b1.svg`} alt="" />
        </button>
        <h1>프로필 전체 보기</h1>
      </header>
      <div className="detail-content">
        <section className="resume-intro">
          <div className="resume-person">
            <Portrait small />
            <div><h2>강민지</h2><p>브랜드 비주얼 디자이너 · 서울</p><p>kammj@gmail.com&nbsp; · &nbsp;010 - 1234 - 5678</p></div>
          </div>
          <div className="about">
            <h3>개인 소개</h3>
            <p>최근 브랜드 아이덴티티와 시각 시스템을 중심으로 브랜드 비주얼 디자인 프로젝트를 진행하고 있습니다. 브랜드 포지셔닝을 바탕으로 콘셉트 탐색부터 실제 적용까지 발전시키는 데 강점이 있습니다.</p>
          </div>
        </section>

        <section className="detail-carousel" aria-label="강점 카드">
          {cards.map((_, index) => <IdentityCard index={index} compact key={index} />)}
        </section>

        <section className="detail-section">
          <h3>전문 역량 및 기술</h3>
          <div className="skill-list">
            {skills.map(([name, score]) => (
              <div className="skill" key={name}><span>{name}</span><span className="skill-dots">
                {[1, 2, 3, 4, 5].map(n => <i className={n <= score ? 'filled' : ''} key={n} />)}
              </span></div>
            ))}
          </div>
        </section>

        <section className="detail-section portfolio-section">
          <h3>작품집</h3>
          <WorkGallery detailed onPreview={onPreview} />
        </section>

        <section className="detail-section">
          <h3>네 가지 강점 및 특성</h3>
          <div className="strength-grid">
            <article><h4>02 영감의 원천 및 창작 방향</h4><dl><div><dt>로고 디자인</dt><dd>42개</dd></div><div><dt>타이포 디자인</dt><dd>35개</dd></div><div><dt>색채 조합</dt><dd>28개</dd></div><div><dt>브랜드 비주얼</dt><dd>24개</dd></div></dl><p>다양한 시각적 레퍼런스를 수집하고 창작에 활용함.</p></article>
            <article><h4>01 전문 역량 및 프로젝트 경험</h4><dl><div><dt>브랜드 비주얼 디자인 비중</dt><dd>37.5%</dd></div><div><dt>편집 및 레이아웃 디자인</dt><dd>25%</dd></div><div><dt>포스터 및 그래픽 디자인</dt><dd>25%</dd></div><div><dt>일러스트레이션 디자인</dt><dd>12.5%</dd></div></dl><p>브랜드 및 그래픽 디자인 전반에 걸친 기초 역량 보유.</p></article>
            <article><h4>03 창작 과정 및 표현 방식</h4><div className="process"><span>영감 수집</span><img src={`${A}/ce9fb.svg`} alt="" /><span>콘셉트 구상</span><span>디자인 완성</span><img src={`${A}/d7406.svg`} alt="" /><span>시각적 탐색</span><img className="process-down" src={`${A}/3c982.svg`} alt="" /></div><p>다양한 시도를 통해 아이디어를 발전시키고 결과물을 완성함.</p></article>
            <article><h4>04 개인 취향 및 라이프스타일</h4><div className="preferences"><span>자연스러운 형태</span><span>감성적인 타이포그래피</span><span>부드러운 색채 대비</span><span>미니멀한 구성</span></div></article>
          </div>
        </section>

        <section className="detail-section closing-notes">
          <div><h3><i />창작 방식</h3><p>영감 수집 → 콘셉트 기획 → 시각적 탐색 → 디자인 실행 → 수정 및 완성</p></div>
          <div><h3><i />디자인 스타일 및 특징</h3><p>자연스럽고 간결하면서도 시각적인 위계가 돋보이는 디자인 표현을 선호합니다. 색상, 타이포그래피, 전체적인 구도의 조화를 중요하게 생각하며, 세부적인 요소를 통해 일관된 시각적 분위기를 완성합니다.</p></div>
        </section>
      </div>
    </main>
  )
}

function ScrollIndicator() {
  const [metrics, setMetrics] = useState({ height: 0, offset: 0, visible: false })
  const hideTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    const update = (show: boolean) => {
      const viewportHeight = window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight
      const maxScroll = Math.max(scrollHeight - viewportHeight, 0)
      const trackHeight = viewportHeight - 16
      const thumbHeight = maxScroll > 0 ? Math.max(36, trackHeight * viewportHeight / scrollHeight) : 0
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0

      setMetrics({
        height: thumbHeight,
        offset: 8 + progress * (trackHeight - thumbHeight),
        visible: show && maxScroll > 0,
      })
    }

    const handleScroll = () => {
      update(true)
      window.clearTimeout(hideTimer.current)
      hideTimer.current = window.setTimeout(() => update(false), 550)
    }

    const handleResize = () => update(false)

    update(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.clearTimeout(hideTimer.current)
    }
  }, [])

  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span
        className={metrics.visible ? 'is-visible' : ''}
        style={{ height: metrics.height, transform: `translateY(${metrics.offset}px)` }}
      />
    </div>
  )
}

function Lightbox({ index, onClose, onStep }: { index: number; onClose: () => void; onStep: (step: number) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const work = works[index]

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowRight') onStep(1)
      else if (event.key === 'ArrowLeft') onStep(-1)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      previous?.focus?.()
    }
  }, [onClose, onStep])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${work.title} 미리보기`} onClick={onClose}>
      <div className="lightbox-bar" onClick={event => event.stopPropagation()}>
        <span className="lightbox-index">0{index + 1} / 0{works.length}</span>
        <p>{work.title}</p>
        <button ref={closeRef} aria-label="닫기" onClick={onClose}>×</button>
      </div>
      <div className="lightbox-stage" onClick={event => event.stopPropagation()}>
        <img src={work.src} alt={work.title} />
      </div>
      {works.length > 1 && (
        <nav className="lightbox-nav" onClick={event => event.stopPropagation()}>
          <button aria-label="이전 작품" onClick={() => onStep(-1)}>‹</button>
          <button aria-label="다음 작품" onClick={() => onStep(1)}>›</button>
        </nav>
      )}
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState<'profile' | 'detail'>('profile')
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)

  const go = (next: 'profile' | 'detail') => {
    setScreen(next)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const closePreview = useCallback(() => setPreviewIndex(null), [])
  const stepPreview = useCallback((step: number) => {
    setPreviewIndex(current => (current === null ? null : (current + step + works.length) % works.length))
  }, [])

  return (
    <>
      {screen === 'profile'
        ? <ProfileScreen onOpenDetail={() => go('detail')} onPreview={setPreviewIndex} />
        : <DetailScreen onBack={() => go('profile')} onPreview={setPreviewIndex} />}
      <ScrollIndicator />
      {previewIndex !== null && <Lightbox index={previewIndex} onClose={closePreview} onStep={stepPreview} />}
    </>
  )
}
