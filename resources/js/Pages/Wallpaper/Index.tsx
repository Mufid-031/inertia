import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ModalEdit from "@/Components/ModalEdit";
import { WallpapersType } from "@/types/wallpaper.type";
import { LinkType, MetaType } from "@/types/option.type";

type WallpaperProps = {
    data: WallpapersType[];
    links: LinkType;
    meta: MetaType;
};

export default function Wallpaper({
    wallpapers,
}: {
    wallpapers: WallpaperProps;
}) {
    const { data } = wallpapers as { data: WallpapersType[] };
    const [isActiveModalEdit, setIsActiveModalEdit] = useState<boolean>(false);
    const {
        data: formWallpaperEdit,
        setData,
        put,
        errors,
        reset,
    } = useForm({
        id: 0,
        image: null,
        title: "",
        category: "",
    });

    useEffect(() => {
        console.log(formWallpaperEdit);
    }, [formWallpaperEdit]);

    const handleModalEditClick = (id: number) => {
        setIsActiveModalEdit(!isActiveModalEdit);
        setData("id", id);
    };

    const handleAddFiles = (files: any) => {
        setData("image", files[0]);
    };

    const handleSubmit = () => {
        put(route("wallpaper.update"), {
            onSuccess: () => {
                setIsActiveModalEdit(false);
                reset();
            },
        });
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
                                                    onClick={() =>
                                                        handleModalEditClick(
                                                            wallpapers.id
                                                        )
                                                    }
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
                            <ModalEdit
                                isActive={isActiveModalEdit}
                                handleClick={() =>
                                    setIsActiveModalEdit(!isActiveModalEdit)
                                }
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        Edit Wallpaper
                                    </h1>
                                </div>
                                <input type="hidden" name="id" id="id" />
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="image">Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        onChange={(e) =>
                                            handleAddFiles(
                                                Array.from(e.target.files || [])
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={formWallpaperEdit.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        id="category"
                                        value={formWallpaperEdit.category}
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                    />
                                </div>
                                <button className="bg-green-500 mt-4 py-3" type="submit">Edit</button>
                            </ModalEdit>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
