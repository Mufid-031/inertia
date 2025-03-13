import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import ModalEdit from "@/Components/ModalEdit";

type WallpapersType = {
    id: number;
    title: string;
    image: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
    category: {
        id: number;
        name: string;
    };
};

type WallpaperProps = {
    data: WallpapersType[];
    links: {
        first: string;
        last: string;
        next: string;
        prev: string;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        links: {
            url: string;
            label: string;
            active: boolean;
        }[];
    };
};

export default function Wallpaper({
    wallpapers,
}: {
    wallpapers: WallpaperProps;
}) {
    const { data } = wallpapers as { data: WallpapersType[] };
    console.log(wallpapers);
    const [isActiveModalEdit, setIsActiveModalEdit] = useState<boolean>(false);

    const handleModalEditClick = () => {
        setIsActiveModalEdit(!isActiveModalEdit);
    };

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Wallpapers
                </h2>
            }
        >
            <Head title="Wallpapers" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full" cellPadding={4}>
                                <thead className="bg-neutral-700 text-white rounded-md">
                                    <tr>
                                        <th className="p-3">Id</th>
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Title</th>
                                        <th className="p-3">User</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((wallpapers: WallpapersType) => (
                                        <tr key={wallpapers.id}>
                                            <td className="p-3">
                                                {wallpapers.id}
                                            </td>
                                            <td className="p-3">
                                                <div className="w-20 h-10 bg-neutral-500"></div>
                                            </td>
                                            <td className="p-3">
                                                {wallpapers.title}
                                            </td>
                                            <td className="p-3">
                                                {wallpapers.user.name}
                                            </td>
                                            <td className="p-3">
                                                {wallpapers.category.name}
                                            </td>
                                            <td className="flex gap-3">
                                                <button
                                                    onClick={handleModalEditClick}
                                                    disabled={isActiveModalEdit}
                                                    className="px-2 py-1 bg-green-500 rounded-md text-white"
                                                >
                                                    Edit
                                                </button>
                                                <div className="text-neutral-400">
                                                    |
                                                </div>
                                                <Link
                                                    className="px-2 py-1 bg-red-500 rounded-md text-white"
                                                    href={route(
                                                        "wallpaper.destroy",
                                                        wallpapers.id
                                                    )}
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={wallpapers.meta.links} />
                            <ModalEdit isActive={isActiveModalEdit} handleClick={handleModalEditClick}>
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Edit Wallpaper
                                    </h1>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="image">Image</label>
                                    <input type="file" name="image" id="image" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" id="title" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="category">Category</label>
                                    <input type="text" name="category" id="category" />
                                </div>
                            </ModalEdit>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
