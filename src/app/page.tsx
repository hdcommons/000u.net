import { LogoColorsIcon } from "@/assets/icons";
import { AppConfig } from "@/utils/AppConfig";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-background text-foreground">
      <a
        href={AppConfig.appUrl}
        className="group flex flex-col items-center gap-8 sm:gap-10 max-w-4xl text-center rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary transition-opacity hover:opacity-90 active:opacity-85"
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <LogoColorsIcon
              size={80}
              className="shrink-0 sm:!w-[100px] sm:!h-[100px] md:!w-[120px] md:!h-[120px] transition-transform group-hover:scale-[1.02]"
            />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              {AppConfig.name}
            </h1>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground leading-snug">
            {AppConfig.description}
          </p>
        </div>
      </a>
    </div>
  );
}
