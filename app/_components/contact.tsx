import { GitBranch, Mail } from "lucide-react";
import MagneticButton from "./magnetic-button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative section-spacing border-t border-border overflow-hidden"
    >

      <div className="section-container text-center relative z-10">
        <span className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
          06
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6">
          Let&apos;s Build Something
          <br />
          Meaningful
        </h2>

        <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10">
          Open to opportunities where engineering depth meets product ambition.
          If you&apos;re building something that matters, I&apos;d like to hear about it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href="mailto:diaaelsadek@icloud.com"
            variant="default"
            showArrow={true}
          >
            <span className="flex items-center gap-2">
              <Mail size={16} />
              <span>diaaelsadek@icloud.com</span>
            </span>
          </MagneticButton>

          <MagneticButton
            href="https://github.com/diaaelsadek"
            variant="outline"
            showArrow={true}
          >
            <span className="flex items-center gap-2">
              <GitBranch size={16} />
              <span>GitHub</span>
            </span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
