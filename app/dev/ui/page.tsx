import type { Metadata } from "next";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { ClayShape } from "@/components/ui/ClayShape";
import { Field, TextArea } from "@/components/ui/Field";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { StatTile } from "@/components/StatTile";

export const metadata: Metadata = {
  title: "UI primitives",
  robots: { index: false, follow: false },
};

const types = [
  "t-hero",
  "t-h2",
  "t-h3",
  "t-stat",
  "t-quote",
  "t-lede",
  "t-body",
  "t-body-sm",
  "t-label",
  "t-tag",
  "t-eyebrow",
];

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-line flex flex-col gap-4 border-t pt-8">
      <h2 className="t-h3 text-ink">{title}</h2>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </section>
  );
}

export default function DevUi() {
  return (
    <div className="wrap flex flex-col gap-8 py-12">
      <h1 className="t-h2 text-ink">UI primitives</h1>
      <p className="t-body text-ink-muted">
        Toggle the OS theme or set <code>data-theme</code> on &lt;html&gt; to compare both
        themes.
      </p>

      <Row title="Buttons">
        <Button variant="primary">Primary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="primary" size="sm">
          Primary sm
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <ButtonLink href="#" variant="dark" size="sm">
          Link →
        </ButtonLink>
      </Row>

      <Row title="Chips, tags, badges">
        <Chip>MSc CS · TU Berlin</Chip>
        <Chip tone="surface">Surface chip</Chip>
        <Tag>ASP.NET Core</Tag>
        <Tag>Rust</Tag>
        <StatusBadge label="Live" dot />
        <StatusBadge label="Enterprise" />
        <StatusBadge label="Dark tone" tone="ink" />
      </Row>

      <Row title="Stat tiles">
        <div className="grid w-full grid-cols-4 gap-4 max-[980px]:grid-cols-2">
          <StatTile value="7+" label="years experience" tone="primary" />
          <StatTile value="300+" label="projects completed" tone="accent" />
          <StatTile value="150+" label="happy clients" tone="sun" />
          <StatTile value="20" label="technologies" tone="surface" />
        </div>
      </Row>

      <Row title="Clay shapes">
        <div className="bg-surface-2 relative h-[280px] w-full overflow-hidden rounded-lg">
          <ClayShape kind="ball" color="primary" size={120} x={40} y={40} float />
          <ClayShape kind="ball" color="accent" size={80} x={200} y={80} float delay={-2} />
          <ClayShape kind="ring" size={130} x={320} y={50} ringWidth={24} float delay={-4} />
          <ClayShape
            kind="pill"
            color="accent"
            size={150}
            height={54}
            x={490}
            y={90}
            rotate={-24}
          />
          <ClayShape kind="ball" color="soft" size={90} x={690} y={60} />
        </div>
      </Row>

      <Row title="Fields">
        <form className="flex w-full max-w-[420px] flex-col gap-[14px]">
          <Field label="Name" name="d-name" placeholder="Jane Doe" />
          <Field
            label="Email"
            name="d-email"
            placeholder="jane@company.com"
            error="Please enter a valid email address."
          />
          <TextArea label="Project" name="d-msg" placeholder="Tell me about your project…" />
        </form>
      </Row>

      <Row title="Type scale">
        <div className="flex w-full flex-col gap-3">
          {types.map((t) => (
            <div key={t} className={`${t} text-ink`}>
              {t} — Hi, I&apos;m Usama.
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
}
