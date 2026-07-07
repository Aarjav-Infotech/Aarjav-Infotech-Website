import Image from "next/image";

interface Partner {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HomePartnersProps {
  eyebrow?: string;
  partners: Partner[];
}

export function HomePartners({ eyebrow, partners }: HomePartnersProps) {
  return (
    <section className="w-full pt-[80px] pb-20">
      <div className="flex flex-col items-center gap-[40px]">
        {eyebrow && (
          <p className="text-foreground text-sm font-bold tracking-wider uppercase">
            {eyebrow}
          </p>
        )}
        <div className="border-border flex w-full overflow-hidden border-y [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-6">
          <div className="animate-marquee flex w-max shrink-0 space-x-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {partners.map((partner, pIdx) => (
                  <div
                    key={`${i}-${pIdx}`}
                    className="relative h-[60px] w-[1020px] shrink-0 overflow-hidden"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className="absolute top-1/2 left-[-180px] w-[1280px] max-w-none -translate-y-1/2 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
