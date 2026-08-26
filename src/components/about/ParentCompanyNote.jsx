import { Reveal } from '../Reveal.jsx'

export default function ParentCompanyNote() {
  return (
    <section className="relative bg-forest-950 px-6 pb-8 pt-4 md:px-10">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <p className="font-display text-sm font-medium tracking-wide text-mist-50">
          An initiative of Mechlligent Engineering Pvt. Ltd.
        </p>
        <p className="text-sm leading-relaxed text-mist-400">
          ZOVIVE is Mechlligent Engineering's dedicated wildlife-tech initiative — bringing the
          parent company's engineering capabilities to bear on human–wildlife conflict.
        </p>
      </Reveal>
    </section>
  )
}
