import {
  ArrowPathIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Reparación',
    description:
      'Nuestro equipo de técnicos especializados se dedica a diagnosticar y reparar cualquier problema, asegurando que tus equipos funcionen como nuevos',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Mantenimiento',
    description:
      'Nos especializamos en el mantenimiento preventivo y correctivo de sus de equipos, evitando costosas averías y prolongando su vida útil.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Ensamble',
    description:
      'Ofrecemos un servicio de ensamble profesional para una amplia variedad de equipos, encargándonos de montar y configurar tus equipos con precisión y eficiencia',
    href: '#',
    icon: ArrowPathIcon,
  },
];

export default function Feature() {
  return (
    <div className="pt-4 pb-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-5xl font-bold tracking-tight">
            Nuestros servicios
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col ">
                <div className="items-center flex flex-col gap-3">
                  <feature.icon
                    className="h-24 w-24 flex-none text-[#56b3bd]"
                    aria-hidden="true"
                  />
                  <p className="text-2xl font-semibold text-[#2f4c50]">
                    {feature.name}
                  </p>
                </div>

                <dd className="mt-4 flex flex-auto text-center flex-col text-base leading-7 text-gray-800">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
