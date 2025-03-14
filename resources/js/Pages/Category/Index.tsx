import Authenticated from "@/Layouts/AuthenticatedLayout";
import { LinksType, MetaType } from "@/types/option.type";
import { Head } from "@inertiajs/react";

type CategoryType = {
    id: number;
    name: string;
};

type CategoryProps = {
    data: CategoryType[];
    links: LinksType;
    meta: MetaType;
};

export default function Category({
    categories,
}: {
    categories: CategoryProps;
}) {
    const { data } = categories as { data: CategoryType[] };

    console.log(categories);

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Categories
                </h2>
            }
        >
            <Head title="Categories" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full" cellPadding={4}>
                                <thead>
                                    <tr>
                                        <th className="p-3">ID</th>
                                        <th className="p-3">NAME</th>
                                        <th className="p-3">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((category) => (
                                        <tr key={category.id}>
                                            <td className="p-3">
                                                {category.id}
                                            </td>
                                            <td className="p-3">
                                                {category.name}
                                            </td>
                                            <td className="p-3">Actions</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
