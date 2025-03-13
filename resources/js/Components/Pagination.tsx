import { Link } from "@inertiajs/react";

type LinkType = {
    url: string;
    label: string;
    active: boolean;
};

export default function Pagination({ links }: { links: LinkType[] }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    className={
                        link.active
                            ? "inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-indigo-50 border border-indigo-500"
                            : "inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300"
                    }
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
