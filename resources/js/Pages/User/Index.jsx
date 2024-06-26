import Pagination from '@/Components/Pagination';
import {Link}  from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function UserIndex({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between mb-2">
                                <label className="font-bold">Total Data User : {users.total}</label>

                                <Link href={route('users.create')} 
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    create user
                                </Link>
                            </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lgfont-medium text-black">id</th>
                                        <th className="px-6 py-3 text-left text-lgfont-medium text-black">name</th>
                                        <th className="px-6 py-3 text-left text-lgfont-medium text-black">email</th>
                                        <th className="px-6 py-3 text-left text-lgfont-medium text-black">role</th>
                                        <th className="px-6 py-3 text-left text-lgfont-medium text-black">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map(({id, name, email, role}) => (
                                        <tr key={id} className="border-b-2">
                                            <td className="px-6 py-3 whitespace-nowrap">{id}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{name}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{email}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">{role}</td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                <Link  href={route('users.edit', id)}>
                                                        
                                                        edit</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
