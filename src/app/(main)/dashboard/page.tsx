import AddServiceDialog from '@/components/AddServiceDialog';
import TableBody from '@/components/table/TableBody';
import TableContainer from '@/components/table/TableContainer';
import TableHead from '@/components/table/TableHead';
import { getAnalitycsByUserId } from '@/lib/analytics';
import { getServicesByUserId } from '@/lib/services';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const colorList = [
  'bg-red-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-400',
];

export default async function DashboardPage() {
  const analytics = await getAnalitycsByUserId(4);
  const userServices = await getServicesByUserId(4);

  return (
    <>
      <div className="">
        <h2 className="text-sm font-medium text-gray-500">
          Estadistica de servicios realizados
        </h2>

        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {analytics.map((analytic: any, index: number) => (
            <li
              key={analytic.title}
              className="col-span-1 flex rounded-md shadow-sm"
            >
              <div
                className={classNames(
                  colorList[index % colorList.length],
                  'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                )}
              >
                {analytic.initials}
              </div>

              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <p className="font-medium text-gray-900">{analytic.title}</p>
                  <p className="text-gray-500">{analytic.value}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:flex sm:items-center mt-12">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Seguimiento de servicio
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Una lista de todos los servicios actuales y estado de los equipos en
            reparacion.
          </p>
        </div>

        <AddServiceDialog />
      </div>

      <TableContainer>
        <TableHead />

        <TableBody services={userServices} />
      </TableContainer>
    </>
  );
}
