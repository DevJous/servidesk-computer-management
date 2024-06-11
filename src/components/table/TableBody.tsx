type Props = {
  services: {
    no: number;
    tecnico: string;
    fechaInicio: string;
    fechaFin: string;
    presupuesto: number;
    descripcion: string;
    estado: string;
  }[];
};

export default function TableBody({ services }: Props) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {services.map((service) => (
        <tr key={service.no}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {service.no}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {service.tecnico}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {service.fechaInicio}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {service.fechaFin}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            ${service.presupuesto}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {service.descripcion}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {service.estado}
          </td>

          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Preview
              <span className="sr-only">, {service.tecnico}</span>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
