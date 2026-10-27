'use client';

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export interface DriftWallItem {
  image: string;
  title?: string;
  href?: string;
  review?: string;
  author?: string;
  location?: string;
  rating?: number;
  systemSize?: string;
  savings?: string;
  date?: string;
}

export interface DriftWallProps {
  items?: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  roll?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: 'up' | 'down';
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  fade?: number;
  dim?: number;
  grayscale?: boolean;
  overlayColor?: string;
  className?: string;
  style?: CSSProperties;
}

interface ColumnMeta {
  copyHeight: number;
  copies: number;
}

const DEFAULT_ITEMS: DriftWallItem[] = [
  {
    image: '/assets/posters/poster-rooftop.jpg',
    title: 'Mark & Sarah T.',
    author: 'Mark & Sarah T.',
    location: 'Point Cook, VIC',
    rating: 5,
    systemSize: '10.4kW Solar + 10kWh Battery',
    savings: 'Saved $2,640/yr',
    review:
      'Our quarterly electricity bill went from $890 down to just $38 credit! The installation team was fast, respectful, and cleaned up thoroughly.',
  },
  {
    image: '/assets/posters/poster-battery.jpg',
    title: 'David M.',
    author: 'David M.',
    location: 'Geelong, VIC',
    rating: 5,
    systemSize: '13.2kW Solar Array',
    savings: 'Saved $3,100/yr',
    review:
      'Sky Electrical & Solar managed the distributor paperwork and rebate seamlessly. The system runs flawlessly and the mobile app is incredible.',
  },
  {
    image: '/assets/posters/poster-technician.jpg',
    title: 'Elena & Chris R.',
    author: 'Elena & Chris R.',
    location: 'Werribee, VIC',
    rating: 5,
    systemSize: '6.6kW Premium Solar',
    savings: 'Saved $1,850/yr',
    review:
      'Zero pushy sales talk. Straightforward pricing, Tier-1 inverters, and our roof looks immaculate. Recommended to all our neighbours!',
  },
  {
    image: '/assets/posters/poster-inverter.jpg',
    title: 'Robert P.',
    author: 'Robert P.',
    location: 'Ballarat, VIC',
    rating: 5,
    systemSize: '8.8kW Solar + Sungrow Battery',
    savings: 'Saved $2,200/yr',
    review:
      'During last winter’s blackout, our battery kicked in within milliseconds. Best investment we have made for our home.',
  },
  {
    image: '/assets/posters/poster-sunset.jpg',
    title: 'Priya & Raj K.',
    author: 'Priya & Raj K.',
    location: 'Tarneit, VIC',
    rating: 5,
    systemSize: '10kW Commercial & Home',
    savings: 'Saved $2,780/yr',
    review:
      'Honest advice on panel orientation and shade modeling. We are producing even more power than their initial conservative estimate.',
  },
  {
    image: '/assets/posters/poster-ev.jpg',
    title: 'James & Chloe W.',
    author: 'James & Chloe W.',
    location: 'Mornington, VIC',
    rating: 5,
    systemSize: '11.5kW Solar + EV Fast Charger',
    savings: 'Saved $3,450/yr',
    review:
      'Charging our EV completely free off rooftop sunshine. Outstanding workmanship by certified master electricians.',
  },
  {
    image: '/assets/solar-farm-bg.jpg',
    title: 'Anthony L.',
    author: 'Anthony L.',
    location: 'Berwick, VIC',
    rating: 5,
    systemSize: '6.6kW Tier-1 System',
    savings: 'Saved $1,720/yr',
    review:
      'The government STC rebate was deducted directly off the quote. Honest, punctual, and genuine customer service.',
  },
  {
    image: '/assets/posters/poster-rooftop.jpg',
    title: 'Karen B.',
    author: 'Karen B.',
    location: 'Sunbury, VIC',
    rating: 5,
    systemSize: '9.6kW Solar + Tesla Powerwall',
    savings: 'Saved $2,500/yr',
    review:
      'Extremely impressed with the neat conduit and switchboard upgrade. Real professionals who take pride in their craft.',
  },
  {
    image: '/assets/posters/poster-battery.jpg',
    title: 'Michael S.',
    author: 'Michael S.',
    location: 'Craigieburn, VIC',
    rating: 5,
    systemSize: '13.2kW Dual-Inverter System',
    savings: 'Saved $3,800/yr',
    review:
      'Our power bills are practically zero all summer. Excellent post-installation support when we had questions about our app.',
  },
  {
    image: '/assets/posters/poster-technician.jpg',
    title: 'Sophie & Liam H.',
    author: 'Sophie & Liam H.',
    location: 'Bundoora, VIC',
    rating: 5,
    systemSize: '7.7kW Solar System',
    savings: 'Saved $1,980/yr',
    review:
      'Transparent communication from day one. They took care of council approvals and meter replacement with zero delays.',
  },
  {
    image: '/assets/posters/poster-sunset.jpg',
    title: 'George N.',
    author: 'George N.',
    location: 'Frankston, VIC',
    rating: 5,
    systemSize: '10.4kW Battery Ready',
    savings: 'Saved $2,420/yr',
    review:
      'The 25-year panel performance guarantee and 10-year workmanship warranty gave us total peace of mind. Five stars!',
  },
  {
    image: '/assets/posters/poster-inverter.jpg',
    title: 'Anita C.',
    author: 'Anita C.',
    location: 'Altona, VIC',
    rating: 5,
    systemSize: '6.6kW High-Efficiency System',
    savings: 'Saved $1,650/yr',
    review:
      'Punctual, friendly, and tidy. They explained every detail of how our hybrid inverter operates before leaving.',
  },
];

const cx = (...parts: (string | false | undefined)[]) => parts.filter(Boolean).join(' ');

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const columnFactor = (index: number, variance: number): number => {
  const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
  return 1 + variance * pseudo;
};

export const DriftWall = ({
  items = DEFAULT_ITEMS,
  columns = 5,
  tileWidth = 280,
  tileHeight = 180,
  gap = 20,
  radius = 18,
  tilt = 16,
  turn = -14,
  roll = 0,
  perspective = 1200,
  depth = 120,
  speed = 36,
  direction = 'up',
  variance = 0.45,
  parallax = 0.6,
  pauseOnHover = true,
  lift = 64,
  fade = 0.55,
  dim = 0.68,
  grayscale = false,
  overlayColor = '#060010',
  className = '',
  style,
}: DriftWallProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const offsetsRef = useRef<number[]>([]);
  const velocitiesRef = useRef<number[]>([]);
  const hoveredColRef = useRef<number>(-1);
  const wallHoveredRef = useRef<boolean>(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerDampedRef = useRef({ x: 0, y: 0 });
  const lastTsRef = useRef<number | null>(null);

  const [containerHeight, setContainerHeight] = useState(620);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIdRef = useRef<string | null>(null);
  const [reduced, setReduced] = useState<boolean>(() => prefersReducedMotion());

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const columnItems = useMemo<DriftWallItem[][]>(() => {
    const cols: DriftWallItem[][] = Array.from({ length: columns }, () => []);
    items.forEach((item, i) => cols[i % columns].push(item));
    return cols.map((col) => (col.length ? col : items.slice(0, 1)));
  }, [items, columns]);

  const columnMeta = useMemo<ColumnMeta[]>(() => {
    const unit = tileHeight + gap;
    return columnItems.map((col) => {
      const copyHeight = Math.max(unit, col.length * unit);
      const copies = Math.max(2, Math.ceil((containerHeight * 1.6) / copyHeight) + 1);
      return { copyHeight, copies };
    });
  }, [columnItems, tileHeight, gap, containerHeight]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerHeight(entry.contentRect.height || 620);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const baseVelocities = useMemo<number[]>(() => {
    const dirSign = direction === 'up' ? 1 : -1;
    return columnItems.map((_, c) => {
      const altSign = c % 2 === 0 ? 1 : -1;
      return speed * columnFactor(c, variance) * dirSign * altSign;
    });
  }, [columnItems, speed, direction, variance]);

  useEffect(() => {
    offsetsRef.current = columnMeta.map((meta, c) => meta.copyHeight * ((c * 0.37) % 1));
    velocitiesRef.current = columnItems.map(() => 0);
  }, [columnMeta, columnItems]);

  const applyPlaneTransform = useCallback(
    (px: number, py: number) => {
      const plane = planeRef.current;
      if (!plane) return;
      plane.style.transform =
        `translate(-50%, -50%) scale(1.18) ` +
        `rotateX(${tilt + py}deg) rotateY(${turn + px}deg) rotateZ(${roll}deg) ` +
        `translateZ(${-depth}px)`;
    },
    [tilt, turn, roll, depth]
  );

  useEffect(() => {
    const animate = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.min(0.05, Math.max(0, ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;

      const maxTilt = parallax * 8;
      const targetX = pointerRef.current.x * maxTilt;
      const targetY = -pointerRef.current.y * maxTilt;
      const damp = 1 - Math.exp(-dt / 0.12);
      pointerDampedRef.current.x += (targetX - pointerDampedRef.current.x) * damp;
      pointerDampedRef.current.y += (targetY - pointerDampedRef.current.y) * damp;
      applyPlaneTransform(pointerDampedRef.current.x, pointerDampedRef.current.y);

      if (!reduced) {
        for (let c = 0; c < trackRefs.current.length; c++) {
          const meta = columnMeta[c];
          if (!meta) continue;
          const paused = wallHoveredRef.current && pauseOnHover;
          const factor = paused || hoveredColRef.current === c ? 0 : 1;
          const target = baseVelocities[c] * factor;

          const ease = 1 - Math.exp(-dt / (target === 0 ? 0.16 : 0.28));
          velocitiesRef.current[c] += (target - velocitiesRef.current[c]) * ease;
          let next = (offsetsRef.current[c] ?? 0) + velocitiesRef.current[c] * dt;
          next = ((next % meta.copyHeight) + meta.copyHeight) % meta.copyHeight;
          offsetsRef.current[c] = next;

          const el = trackRefs.current[c];
          if (el) el.style.transform = `translate3d(0, ${-next}px, 0)`;
        }
      } else {
        for (let c = 0; c < trackRefs.current.length; c++) {
          const el = trackRefs.current[c];
          const meta = columnMeta[c];
          if (el && meta) el.style.transform = `translate3d(0, ${-(offsetsRef.current[c] ?? 0)}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [baseVelocities, columnMeta, pauseOnHover, parallax, reduced, applyPlaneTransform]);

  const activate = useCallback((id: string, index: number): void => {
    activeIdRef.current = id;
    hoveredColRef.current = index;
    setActiveId(id);
  }, []);

  const release = useCallback((): void => {
    activeIdRef.current = null;
    hoveredColRef.current = -1;
    setActiveId(null);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (parallax > 0 && !reduced) {
        pointerRef.current = {
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        };
      }
      const hit = document.elementFromPoint(e.clientX, e.clientY);
      const tile = hit && hit.closest ? (hit.closest('[data-tile-id]') as HTMLElement | null) : null;
      if (!tile) return;
      const id = tile.dataset.tileId ?? null;
      if (id === activeIdRef.current) return;
      activeIdRef.current = id;
      hoveredColRef.current = Number(tile.dataset.col);
      setActiveId(id);
    },
    [parallax, reduced]
  );

  const handlePointerLeaveWall = useCallback((): void => {
    wallHoveredRef.current = false;
    pointerRef.current = { x: 0, y: 0 };
    release();
  }, [release]);

  const maskStyle =
    'radial-gradient(ellipse 78% 82% at 50% 46%, #000 var(--dw-edge), transparent 100%), ' +
    'linear-gradient(to top, #000 var(--dw-edge), transparent 100%)';

  const cssVars = useMemo<CSSProperties>(
    () =>
      ({
        '--dw-tile-w': `${tileWidth}px`,
        '--dw-tile-h': `${tileHeight}px`,
        '--dw-gap': `${gap}px`,
        '--dw-radius': `${radius}px`,
        '--dw-lift': `${lift}px`,
        '--dw-dim': dim,
        '--dw-gray': grayscale ? 1 : 0,
        '--dw-overlay': overlayColor,
        '--dw-edge': `${Math.max(0, (1 - fade) * 100)}%`,
        perspective: `${perspective}px`,
        perspectiveOrigin: '50% 50%',
        WebkitMaskImage: maskStyle,
        maskImage: maskStyle,
        WebkitMaskComposite: 'source-in',
        maskComposite: 'intersect',
        ...style,
      }) as CSSProperties,
    [tileWidth, tileHeight, gap, radius, lift, dim, grayscale, overlayColor, fade, perspective, maskStyle, style]
  );

  const tileClass = cx(
    'group/tile relative block flex-none cursor-pointer outline-none',
    'w-full h-[calc(var(--dw-tile-h)+var(--dw-gap))] [transform-style:preserve-3d]'
  );

  const innerClass = cx(
    'pointer-events-none absolute inset-[calc(var(--dw-gap)/2)] block overflow-hidden bg-slate-900',
    'rounded-[var(--dw-radius)] opacity-[var(--dw-dim)] [transform:translateZ(0)]',
    'transition-[transform,opacity,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
    'border border-white/10 group-[.is-active]/tile:border-amber-400/80',
    'group-[.is-active]/tile:opacity-100 group-[.is-active]/tile:[transform:translateZ(var(--dw-lift))]',
    'group-[.is-active]/tile:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.85),0_0_0_2px_rgba(245,158,11,0.5)]',
    'group-focus-visible/tile:opacity-100 group-focus-visible/tile:[transform:translateZ(var(--dw-lift))]',
    'group-focus-visible/tile:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.85),0_0_0_2px_rgba(245,158,11,0.8)]'
  );

  const imgClass = cx(
    'block h-full w-full select-none object-cover',
    '[filter:grayscale(var(--dw-gray))_saturate(0.92)]',
    'transition-[filter] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
    'group-[.is-active]/tile:[filter:grayscale(0)_saturate(1.05)] group-focus-visible/tile:[filter:grayscale(0)_saturate(1.05)]'
  );

  const renderTile = (item: DriftWallItem, id: string, colIndex: number) => {
    const isActive = activeId === id;

    const inner = (
      <span
        className={innerClass}
        style={
          isActive
            ? {
                opacity: 1,
                transform: `translateZ(${lift}px)`,
                boxShadow:
                  '0 24px 60px -18px rgba(0,0,0,0.9), 0 0 0 2px rgba(245, 158, 11, 0.75)',
              }
            : undefined
        }
      >
        <img
          src={item.image}
          alt={item.title ?? ''}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={imgClass}
        />

        {/* Contrast Scrim Overlay */}
        <span
          className={cx(
            'pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/35 transition-opacity duration-300',
            isActive ? 'opacity-95' : 'opacity-85'
          )}
          aria-hidden="true"
        />

        {/* Customer Review Content */}
        {item.review ? (
          <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-left text-white z-10 select-none">
            {/* Top row: 5 Gold Stars & Savings Pill */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {item.savings && (
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full shadow-2xs">
                  {item.savings}
                </span>
              )}
            </div>

            {/* Middle: Review text quote */}
            <p
              className={cx(
                'text-xs sm:text-[13px] text-slate-100 font-medium leading-relaxed drop-shadow-sm',
                isActive ? 'line-clamp-4' : 'line-clamp-3'
              )}
            >
              &ldquo;{item.review}&rdquo;
            </p>

            {/* Bottom row: Author & Location / System Size */}
            <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-300">
              <span className="font-bold text-white truncate max-w-[55%]">
                {item.author ?? item.title}
              </span>
              <span className="text-amber-300/90 text-[10px] font-medium truncate max-w-[45%]">
                {item.location}
              </span>
            </div>
          </div>
        ) : (
          <span
            className="pointer-events-none absolute inset-0 bg-[var(--dw-overlay)] opacity-[0.42] transition-opacity duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-[.is-active]/tile:opacity-0 group-focus-visible/tile:opacity-0"
            aria-hidden="true"
          />
        )}
      </span>
    );

    const commonProps = {
      className: cx(tileClass, isActive && 'is-active'),
      'data-tile-id': id,
      'data-col': colIndex,
      onFocus: () => activate(id, colIndex),
      onBlur: release,
    };

    if (item.href) {
      return (
        <a key={id} href={item.href} target="_blank" rel="noreferrer noopener" {...commonProps}>
          {inner}
        </a>
      );
    }
    return (
      <div key={id} tabIndex={0} role="button" aria-label={item.title ?? 'tile'} {...commonProps}>
        {inner}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cx('relative h-full w-full overflow-hidden select-none', className)}
      style={cssVars}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        wallHoveredRef.current = true;
      }}
      onPointerLeave={handlePointerLeaveWall}
      role="group"
      aria-label="Drifting wall of customer reviews"
    >
      <div
        ref={planeRef}
        className="absolute left-1/2 top-1/2 flex cursor-pointer flex-row [transform-style:preserve-3d] [transform-origin:50%_50%] will-change-transform"
      >
        {columnItems.map((col, c) => {
          const meta = columnMeta[c];
          const copies = Array.from({ length: meta.copies });
          return (
            <div
              className="relative w-[calc(var(--dw-tile-w)+var(--dw-gap))] [transform-style:preserve-3d]"
              key={`col-${c}`}
            >
              <div
                className="flex flex-col [transform-style:preserve-3d] will-change-transform"
                ref={(el) => {
                  trackRefs.current[c] = el;
                }}
              >
                {copies.map((_, copyIndex) =>
                  col.map((item, itemIndex) => renderTile(item, `${c}-${copyIndex}-${itemIndex}`, c))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriftWall;
