import { useEffect, useRef, useState } from "react";

interface StatsProps {
  lang: "id" | "en";
}

const statsData = {
  id: [
    { value: 10, suffix: "+", label: "Tahun Pengalaman" },
    { value: 150, suffix: "+", label: "Proyek Selesai" },
    { value: 120, suffix: "+", label: "Klien Puas" },
    { value: 50, suffix: "+", label: "Tim Profesional" },
  ],
  en: [
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 120, suffix: "+", label: "Happy Clients" },
    { value: 50, suffix: "+", label: "Professional Team" },
  ],
};

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-secondary">
      {count}
      {suffix}
    </div>
  );
}

export default function Stats({ lang }: StatsProps) {
  const stats = statsData[lang];

  return (
    <section className="bg-primary py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-slate-300 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
