import InputError from '@/Components/InputError';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/Components/ui/label';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Customer, Driver } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
 
type EditDriverForm = { 
    en_name?: string;
    ar_name?: string;
    dial_cod?: string;
    phone?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
};
 
export default function Edit({ driver }: { driver : Driver }) {
    const driverName = useRef<HTMLInputElement>(null);
 
    const { data, setData, errors, put, reset, processing } = useForm<Required<EditDriverForm>>({
        en_name: driver.en_name,
        ar_name:driver.ar_name,
        dial_cod:driver.dial_cod,
        phone:driver.phone,
        email:driver.email,
        password:driver.password,
        password_confirmation:driver.password_confirmation,
    });
 
    const EditDriver: FormEventHandler = (e) => {
        e.preventDefault();
 
        put(route('drivers.update', driver.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.name) {
                    reset('en_name');
                    driverName.current?.focus();
                }
            },
        });
    };
    return (
        <AuthenticatedLayout>
            <Head title="Edit Driver" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={EditDriver} className="space-y-6">

                        <div className="grid gap-2">
                            <Label htmlFor="name">Driver Name</Label>
    
                            <Input
                                id="en_name"
                                name="en_name"
                                ref={driverName}
                                value={data.en_name}
                                onChange={(e) => setData('en_name', e.target.value)}
                                className="mt-1 block w-full"
                            />
    
                            <InputError message={errors.en_name} />
                        </div>
 
                        <div className="grid gap-2">
                            <Label htmlFor="ar_name">Driver ar_Name *</Label>
        
                            <Input
                                id="ar_name"
                                name="ar_name"
                                ref={driverName}
                                value={data.ar_name}
                                onChange={(e) => setData('ar_name', e.target.value)}
                                className="mt-1 block w-full"
                                required
                            />
        
                            <InputError message={errors.ar_name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="dial_cod">Driver dial_cod *</Label>
        
                            <Input
                                id="dial_cod"
                                name="dial_cod"
                                ref={driverName}
                                value={data.dial_cod}
                                onChange={(e) => setData('dial_cod', e.target.value)}
                                className="mt-1 block w-full"
                                required
                            />
        
                            <InputError message={errors.dial_cod} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="phone">Driver phone *</Label>
        
                            <Input
                                id="phone"
                                name="phone"
                                ref={driverName}
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                className="mt-1 block w-full"
                                required
                            />
        
                            <InputError message={errors.phone} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Driver email *</Label>
        
                            <Input
                                id="email"
                                name="email"
                                ref={driverName}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 block w-full"
                                required
                            />
        
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Driver password *</Label>
        
                            <Input
                                id="password"
                                name="password"
                                ref={driverName}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="mt-1 block w-full"
                                required
                            />
        
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">Driver password_confirmation *</Label>
        
                            <Input
                                id="password_confirmation"
                                name="password_confirmation"
                                ref={driverName}
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="mt-1 block w-full"
                                required
                            />
        
                            <InputError message={errors.password_confirmation} />
                        </div>
                    

                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Update Customer</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}